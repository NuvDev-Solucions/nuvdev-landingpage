import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export const TelemetryMockup: React.FC = () => {
  const [region, setRegion] = useState<'sa-east' | 'us-east' | 'eu-central'>('sa-east');
  const [latency, setLatency] = useState(12);
  const [throughput, setThroughput] = useState(1.48);
  const [isPinging, setIsPinging] = useState(false);
  const [activeNodeDetail, setActiveNodeDetail] = useState<string | null>(null);

  const regionData = {
    'sa-east': { name: 'Active AWS sa-east-1 (SP)', baseLatency: 11, throughputMultiplier: 1.48 },
    'us-east': { name: 'Active AWS us-east-1 (VA)', baseLatency: 84, throughputMultiplier: 2.15 },
    'eu-central': { name: 'Active GCP europe-west3', baseLatency: 132, throughputMultiplier: 1.10 }
  };

  const handleSimulatePing = () => {
    setIsPinging(true);
    setTimeout(() => {
      const delta = Math.floor(Math.random() * 4) - 2;
      setLatency(Math.max(8, regionData[region].baseLatency + delta));
      const tpDelta = (Math.random() * 0.15 - 0.07).toFixed(2);
      setThroughput(Number((regionData[region].throughputMultiplier + Number(tpDelta)).toFixed(2)));
      setIsPinging(false);
    }, 450);
  };

  const handleRegionChange = (newReg: 'sa-east' | 'us-east' | 'eu-central') => {
    setRegion(newReg);
    setLatency(regionData[newReg].baseLatency);
    setThroughput(regionData[newReg].throughputMultiplier);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#0F172A]/90 border border-[#14BDFE]/20 shadow-2xl backdrop-blur-xl overflow-hidden p-4 sm:p-5 md:p-6 flex flex-col gap-4 group">
      {/* Top Terminal Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-3 h-3 rounded-full bg-[#ffb4ab] inline-block shrink-0"></span>
          <span className="w-3 h-3 rounded-full bg-[#03befb] inline-block shrink-0"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shrink-0"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#c2c6d8] ml-1 truncate max-w-[120px] sm:max-w-none">
            nuvdev-cloud-cluster.core
          </span>
        </div>

        {/* Region Switcher Dropdown / Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1a1f2e] border border-[#0CBFFD]/30 text-[#0CBFFD] font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#0CBFFD] animate-ping"></span>
            <select
              value={region}
              onChange={(e) => handleRegionChange(e.target.value as any)}
              className="bg-transparent text-[#0CBFFD] font-mono text-[11px] focus:outline-none cursor-pointer pr-1"
              aria-label="Selecionar Região do Cluster"
            >
              <option value="sa-east" className="bg-[#0F172A] text-white">AWS sa-east-1 (SP)</option>
              <option value="us-east" className="bg-[#0F172A] text-white">AWS us-east-1 (US)</option>
              <option value="eu-central" className="bg-[#0F172A] text-white">GCP eu-west3 (Frankfurt)</option>
            </select>
          </div>

          <button
            onClick={handleSimulatePing}
            title="Recalcular Latência de Rede"
            disabled={isPinging}
            className="p-1 rounded-md bg-[#1a1f2e] text-[#0CBFFD] hover:bg-[#252a39] transition-colors shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin text-emerald-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Visual Dashboard Preview Image */}
      <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-[#14BDFE]/20 shadow-md group/img">
        <img
          src={ASSETS.heroDashboard}
          alt="Futuristic cloud telemetry dashboard with microservices metrics in cyan"
          className="w-full h-full object-cover opacity-85 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent pointer-events-none"></div>

        {/* Live Metrics Overlay */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between bg-[#0F172A]/85 backdrop-blur-md p-2 sm:p-2.5 rounded-lg border border-white/5">
          <div className="min-w-0">
            <span className="font-mono text-[10px] sm:text-[11px] text-[#94A3B8] block truncate">Throughput Global</span>
            <p className="font-sans font-bold text-base sm:text-lg text-[#FEFEFE]">{throughput}M req/min</p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="px-2 py-0.5 sm:py-1 rounded bg-[#0775FF]/30 border border-[#0775FF]/50 text-[#FEFEFE] font-mono text-[11px] sm:text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
              {latency}ms
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Architecture Nodes */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {/* Node 1: Microservices */}
        <div
          onClick={() => setActiveNodeDetail(activeNodeDetail === 'microservices' ? null : 'microservices')}
          className={`p-2 sm:p-2.5 rounded-lg bg-[#1a1f2e] border transition-all cursor-pointer flex flex-col gap-1 min-w-0 overflow-hidden ${
            activeNodeDetail === 'microservices' ? 'border-[#0CBFFD] bg-[#252a39]' : 'border-transparent hover:border-[#14BDFE]/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#0CBFFD]">deployed_code</span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#89d5ff]">v4.8</span>
          </div>
          <span className="text-[11px] sm:text-xs text-[#94A3B8] truncate">Microservices</span>
          <span className="text-[11px] sm:text-xs font-bold text-[#FEFEFE] flex items-center gap-1 truncate">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            100% OK
          </span>
        </div>

        {/* Node 2: AI Dispatcher */}
        <div
          onClick={() => setActiveNodeDetail(activeNodeDetail === 'ai' ? null : 'ai')}
          className={`p-2 sm:p-2.5 rounded-lg bg-[#1a1f2e] border transition-all cursor-pointer flex flex-col gap-1 min-w-0 overflow-hidden ${
            activeNodeDetail === 'ai' ? 'border-[#14BDFE] bg-[#252a39]' : 'border-transparent hover:border-[#14BDFE]/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#14BDFE]">psychology</span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#89d5ff]">LLM</span>
          </div>
          <span className="text-[11px] sm:text-xs text-[#94A3B8] truncate">AI Dispatcher</span>
          <span className="text-[11px] sm:text-xs font-bold text-[#FEFEFE] truncate">4.2k ops/s</span>
        </div>

        {/* Node 3: Database RDS */}
        <div
          onClick={() => setActiveNodeDetail(activeNodeDetail === 'db' ? null : 'db')}
          className={`p-2 sm:p-2.5 rounded-lg bg-[#1a1f2e] border transition-all cursor-pointer flex flex-col gap-1 min-w-0 overflow-hidden ${
            activeNodeDetail === 'db' ? 'border-[#ccbeff] bg-[#252a39]' : 'border-transparent hover:border-[#14BDFE]/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#ccbeff]">database</span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#89d5ff]">RDS</span>
          </div>
          <span className="text-[11px] sm:text-xs text-[#94A3B8] truncate">Postgres/Redis</span>
          <span className="text-[11px] sm:text-xs font-bold text-[#FEFEFE] truncate">Sync OK</span>
        </div>
      </div>

      {/* Node Detail Explainer Drawer (if clicked) */}
      {activeNodeDetail && (
        <div className="p-3 rounded-lg bg-[#0e1321] border border-[#0CBFFD]/30 text-xs text-[#dee2f6] animate-in fade-in duration-200">
          {activeNodeDetail === 'microservices' && (
            <p className="font-mono">
              <span className="text-[#0CBFFD] font-bold">Microsserviços:</span> 18 pods ativos em autoscaling HPA. Tempo de resposta p99 de 18ms. Tráfego distribuído via Envoy Service Mesh.
            </p>
          )}
          {activeNodeDetail === 'ai' && (
            <p className="font-mono">
              <span className="text-[#14BDFE] font-bold">Orquestrador de IA:</span> Filas assíncronas com BullMQ + Redis para prompts de alta concorrência com failover automático entre provedores.
            </p>
          )}
          {activeNodeDetail === 'db' && (
            <p className="font-mono">
              <span className="text-[#ccbeff] font-bold">Camada de Dados:</span> Réplica de leitura com latência de replicação sub-milissegundo (&lt;2ms) e cache inteligente distribuído em Redis Cluster.
            </p>
          )}
        </div>
      )}

      {/* Modern Stack Tech Badges */}
      <div className="flex flex-col gap-2 pt-1 border-t border-white/5">
        <span className="font-mono text-xs text-[#c2c6d8]">Core Stack &amp; Enterprise Tooling:</span>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-md bg-[#252a39] text-[#0CBFFD] font-mono text-xs border border-[#0CBFFD]/20 hover:border-[#0CBFFD] transition-colors cursor-default">
            React.js
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#252a39] text-[#14BDFE] font-mono text-xs border border-[#14BDFE]/20 hover:border-[#14BDFE] transition-colors cursor-default">
            Flutter Mobile
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#252a39] text-[#FEFEFE] font-mono text-xs border border-white/10 hover:border-white/30 transition-colors cursor-default">
            Node / NestJS
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#252a39] text-[#0775FF] font-mono text-xs border border-[#0775FF]/20 hover:border-[#0775FF] transition-colors cursor-default">
            Python / AI
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#252a39] text-[#ccbeff] font-mono text-xs border border-[#ccbeff]/20 hover:border-[#ccbeff] transition-colors cursor-default">
            AWS / GCP Cloud
          </span>
        </div>
      </div>
    </div>
  );
};
