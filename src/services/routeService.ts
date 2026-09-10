import { useEffect, useState, useSyncExternalStore } from 'react';

export type AppRoute = 'home' | 'privacy' | 'terms' | 'notfound';

export interface RouteInfo {
  pathname: string;
  route: AppRoute;
  hash: string;
  search: string;
}

// Known valid application routes
const KNOWN_ROUTES: Record<string, AppRoute> = {
  '/': 'home',
  '': 'home',
  '/index.html': 'home',
  '/privacidade': 'privacy',
  '/privacidade/': 'privacy',
  '/privacidade.html': 'privacy',
  '/termos': 'terms',
  '/termos/': 'terms',
  '/termos-de-servico': 'terms',
  '/termos-de-servico/': 'terms',
  '/termos.html': 'terms',
};

class RouteService {
  private listeners: Set<() => void> = new Set();
  private currentRouteInfo: RouteInfo;

  constructor() {
    this.currentRouteInfo = this.computeRouteInfo();

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', () => {
        this.updateCurrentRoute();
      });

      window.addEventListener('hashchange', () => {
        this.updateCurrentRoute();
      });
    }
  }

  private computeRouteInfo(): RouteInfo {
    if (typeof window === 'undefined') {
      return {
        pathname: '/',
        route: 'home',
        hash: '',
        search: '',
      };
    }

    const rawPath = window.location.pathname.toLowerCase().trim();
    // Normalize trailing slash (unless it's just '/')
    const normalizedPath = rawPath.length > 1 && rawPath.endsWith('/') 
      ? rawPath.slice(0, -1) 
      : rawPath;

    const route = KNOWN_ROUTES[normalizedPath] || 'notfound';

    return {
      pathname: normalizedPath,
      route,
      hash: window.location.hash,
      search: window.location.search,
    };
  }

  private updateCurrentRoute() {
    this.currentRouteInfo = this.computeRouteInfo();
    this.listeners.forEach((listener) => listener());
  }

  public getSnapshot = (): RouteInfo => {
    return this.currentRouteInfo;
  };

  public subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  /**
   * Programmatic navigation method
   */
  public navigate(
    to: string, 
    options?: { replace?: boolean; scrollToTop?: boolean }
  ): void {
    if (typeof window === 'undefined') return;

    const { replace = false, scrollToTop = true } = options || {};

    if (replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    this.updateCurrentRoute();

    if (scrollToTop) {
      if (to.includes('#')) {
        const hashId = to.split('#')[1];
        const el = document.getElementById(hashId);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Helper to check if currently on a specific route
   */
  public isRoute(route: AppRoute): boolean {
    return this.currentRouteInfo.route === route;
  }
}

export const routeService = new RouteService();

/**
 * Custom React hook that reacts to route changes
 */
export function useRoute(): RouteInfo {
  return useSyncExternalStore(
    routeService.subscribe,
    routeService.getSnapshot,
    routeService.getSnapshot
  );
}

