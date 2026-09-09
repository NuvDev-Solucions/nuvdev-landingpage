import { SolutionItem, CaseStudy, MethodologyStep } from '../types';

export const ASSETS = {
  logo: '/assets/nuvdev-logo.png',
  heroDashboard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp1It8Y4a7WRn-Q6dOCUOIG9F92n3MX9s3R0b3lyoSU9XKhTq1ApqLhRwz09ZDpKTeHbLUaeKmHpbX7E7e2IAgPmHpNWj1vip8nMVDmW_nbMx0kVgGkPVbUyVg5nYthGFRGgqKYuS423BbsxoF8XdAOqVWiM_ox4Gs7VhWXCBZJhVO2DkhxxZL37OjYdvwdT6aFIo3-4k5n63OysQQ7r5HNWlpXBWp9daYbgiOmVMHaRXBpARJ2YqG',
  caseHospital: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCOaDSFnn61xFD8qjOgiLkPls2w-modGpn96Z_HTJBaDNyp5vjthNReiRkubUAKo1whAGcQed-P2tbJNGFN59lIxhJ80f9IJztS_MZOAxZZKPlZE4_1PhOLzdFpwJzP34FfEzg7GEF5UyeO0jZDfGoaTvdsYgRVjx4jbiItc90IoEKS1Czb8ztUjGOcW9RsJl_vo-EZhXWg45B4Xj2gUdi5hsZtDRRcbpNzC5_6uJb4lkeFhp_OheV',
  caseEdtech: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtNaeIGB7N3tZ40YMTUk9fJz-wfT-jgAKBUnS6wbxbSFURuZSXvbZj36hSPg1JgeaPceBZEXvdSJR-i0Z9MkpVK98q8acK2gIcu9JX2iV0__vBHGLWuHuVtN9_oZl-aNlvsOqwaD1LphlZ1yANO9eN16C9GNMj7a4UVy-NHsd1SmT5k9_BjVupVAbMfhghSsQ3UC5XLrBAyKddgkJRjUr0g3GxjJ2AMFgXkv_TGhzTPCFqh60IFGrO',
  caseLogistics: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZvCm6qFJLrWmdbiDGEYJBruQw8EMg3vMghh0DQfMJ6PPM7GGSTwiRRL3pe316lmulHrrL9lPekP6h32jAub2jayj3La0Uiq0Uuo7J-PGsbCrq49_Zyk7EEXnPzDDmVtWlNuWIi5F0Ma-qEbpkrjTya1do3vlBCtcYfk88v16i6AMS31-cdCWGrdGZhEUPqQT0hS0sg1mewKLr4k7m0D3CeWK7ONcfET6ixZNeB3DzkF3V0_j0Ags6',
};

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'sistemas-personalizados',
    title: 'Sistemas Personalizados para Empresas',
    category: 'Corporativo',
    description: 'ERPs e CRMs sob medida, automação integral de fluxos de trabalho operacionais, dashboards analíticos executivos e integração profunda com bancos legados e webhooks seguros.',
    badge: 'Módulos modulares e microsserviços auditados',
    badgeType: 'check',
    icon: 'domain_verification',
    deliverables: [
      'Arquitetura orientada a microsserviços desacoplados',
      'Painéis executivos em tempo real com streaming de dados',
      'Controle granular de permissões e auditoria RBAC',
      'Conectores e webhooks para bancos legados (Oracle, SQL Server, SAP)'
    ],
    techStack: ['Node / NestJS', 'React.js', 'PostgreSQL', 'Docker', 'Redis'],
    colSpanLg: 7
  },
  {
    id: 'autoatendimento-ia',
    title: 'Autoatendimento & Chatbots IA',
    category: 'IA & Totens',
    description: 'Totens físicos interativos, portais de autoatendimento do cliente com IA generativa, redução drástica de filas e atendimento omnichannel sincronizado em tempo real.',
    badge: 'Disponível para hardware dedicado & web',
    badgeType: 'touch',
    icon: 'smart_toy',
    deliverables: [
      'Software embarcado para totens touchscreen e tablets industriais',
      'Agentes inteligentes com RAG e integração com base de conhecimento interna',
      'Orquestração omnichannel (WhatsApp, Web, Totem e Mobile)',
      'Fallback humano inteligente com fila de espera dinâmica'
    ],
    techStack: ['Python / FastApi', 'LangChain', 'Electron', 'WebSocket', 'AWS Bedrock'],
    colSpanLg: 5
  },
  {
    id: 'sites-portais',
    title: 'Sites Institucionais & Portais Web',
    category: 'Presença Digital',
    description: 'Páginas ultra-rápidas desenvolvidas em Next.js, SEO técnico de altíssima conversão, UX imersiva e fidelidade visual impecável para autoridade de marca.',
    badge: 'Score 99+ Core Web Vitals',
    badgeType: 'speed',
    icon: 'web',
    deliverables: [
      'Renderização híbrida SSR/SSG com CDN global edge',
      'Estrutura semântica avançada para dominância no Google Search',
      'Microinterações fluidas a 60 FPS com WebGL / Canvas / CSS avançado',
      'CMS headless intuitivo para gestão autônoma de conteúdo'
    ],
    techStack: ['Next.js 15', 'Tailwind CSS', 'TypeScript', 'Vercel Edge', 'Sanity/Strapi'],
    colSpanLg: 4
  },
  {
    id: 'apps-mobile',
    title: 'Apps Mobile (iOS & Android)',
    category: 'Mobile First',
    description: 'Desenvolvimento em Flutter e Swift/Kotlin com recursos offline-first, push notifications contextualizadas, biometria e transições fluidas a 120 FPS.',
    badge: 'Publicação e homologação completa nas lojas',
    badgeType: 'phone',
    icon: 'phone_iphone',
    deliverables: [
      'Sincronização bidirecional offline com banco local seguro',
      'Autenticação nativa FaceID, TouchID e biometria Android',
      'Geolocalização contínua de baixo consumo energético',
      'Esteira completa de publicação na Apple App Store e Google Play'
    ],
    techStack: ['Flutter', 'Kotlin', 'Swift', 'Firebase', 'SQLite/Isar'],
    colSpanLg: 4
  },
  {
    id: 'plataformas-ead',
    title: 'Plataformas Educacionais & EAD',
    category: 'EdTech',
    description: 'Ambientes virtuais interativos de aprendizagem (LMS), controle dinâmico de trilhas de conhecimento, gamificação, emissão de certificados e gestão de turmas.',
    badge: 'Pronto para dezenas de milhares de alunos',
    badgeType: 'school',
    icon: 'school',
    deliverables: [
      'Player de vídeo adaptativo com DRM e proteção anticópia',
      'Sistema gamificado com badges, ranking e conquistas dinâmicas',
      'Emissão automática de certificados autenticáveis via QR Code',
      'Painel pedagógico com relatórios de engajamento e evasão'
    ],
    techStack: ['React', 'NestJS', 'HLS Streaming', 'Redis Pub/Sub', 'AWS CloudFront'],
    colSpanLg: 4
  },
  {
    id: 'cloud-infra',
    title: 'Cloud & Integração de Infraestrutura de Missão Crítica',
    category: 'DevOps & Cloud Architecture',
    description: 'Estruturas elásticas em AWS e Google Cloud com Kubernetes, CI/CD automatizado, proteção DDoS, criptografia ponta a ponta e monitoramento de observabilidade 24 horas por dia.',
    badge: 'LGPD & SOC2 Compliant | Zero Downtime Deploy',
    badgeType: 'cloud',
    icon: 'cloud_sync',
    deliverables: [
      'Clusters Kubernetes (EKS/GKE) com auto-scaling por demanda',
      'Pipelines CI/CD com testes automatizados e deploy canário',
      'Observabilidade full-stack com Prometheus, Grafana e OpenTelemetry',
      'Políticas rígidas de segurança, backup distribuído e DR (Disaster Recovery)'
    ],
    techStack: ['AWS', 'Google Cloud', 'Kubernetes', 'Terraform', 'Datadog'],
    colSpanLg: 12
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'Diagnóstico & Arquitetura',
    description: 'Mapeamento aprofundado dos requisitos de negócio, definição da stack tecnológica, modelagem de dados e análise de viabilidade técnica.',
    detail: 'Realizamos workshops técnicos com seus stakeholders para levantar casos de uso, requisitos não-funcionais (tempo de resposta, concorrência, segurança) e definir a topologia de infraestrutura ideal.',
    sla: 'SLA de Entrega: Sprint 0',
    colorClass: 'text-[#0CBFFD]',
    icon: 'architecture',
    deliverables: ['Documento de Arquitetura (RFC)', 'Diagrama de Entidade-Relacionamento', 'Backlog priorizado']
  },
  {
    number: '02',
    title: 'Prototipação UI/UX',
    description: 'Construção de fluxos de navegação imersivos no Figma, wireframes funcionais, testes de usabilidade e aprovação prévia de cada tela.',
    detail: 'Criamos um Design System customizado para a sua marca com tokens reutilizáveis, garantindo que o protótipo navegável represente com 100% de fidelidade a aplicação final antes de qualquer linha de código.',
    sla: 'Design System Vivo',
    colorClass: 'text-[#14BDFE]',
    icon: 'palette',
    deliverables: ['Design System no Figma', 'Protótipo de alta fidelidade', 'Matriz de usabilidade']
  },
  {
    number: '03',
    title: 'Sprints Semanais',
    description: 'Codificação limpa orientada a testes unitários, entregas incrementais a cada 7 dias e checkpoints regulares com demonstração de progresso.',
    detail: 'Trabalhamos com metodologia Scrum/Kanban com ritos semanais. Cada sprint gera um incremento de software testável em ambiente de homologação, eliminando surpresas ao final do projeto.',
    sla: 'Releases Funcionais',
    colorClass: 'text-[#0775FF]',
    icon: 'cycle',
    deliverables: ['Demo semanal funcional', 'Relatório de burndown', 'Cobertura de testes automatizados']
  },
  {
    number: '04',
    title: 'QA & Deploy Cloud',
    description: 'Bateria completa de testes de carga, segurança, compatibilidade multiplataforma e publicação estruturada em pipelines de staging e produção.',
    detail: 'Executamos testes de estresse simulando picos de tráfego, pentests de vulnerabilidades comuns (OWASP Top 10) e automação de rollout sem tempo de inatividade (zero-downtime deploy).',
    sla: 'CI/CD Automatizado',
    colorClass: 'text-[#454BFF]',
    icon: 'rocket_launch',
    deliverables: ['Relatório de Pentest & QA', 'Pipeline de deploy automatizado', 'Configuração de staging e prod']
  },
  {
    number: '05',
    title: 'Sustentação & SLA',
    description: 'Monitoramento preventivo 24/7, evolução contínua do produto, atualizações de segurança e atendimento técnico sob contrato SLA garantido.',
    detail: 'Nosso time de operações acompanha alarmes de telemetria, consumo de recursos e erros em tempo real. Dispomos de canais de acionamento imediato com tempo de resposta em menos de 15 minutos para incidentes críticos.',
    sla: 'Suporte Contínuo',
    colorClass: 'text-[#6629FF]',
    icon: 'support_agent',
    deliverables: ['Painel de monitoramento 24/7', 'Canal dedicado no Slack/WhatsApp', 'SLA contratual garantido']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rede-hospitalar',
    title: 'Rede Hospitalar: Triagem Rápida & Totens',
    tag: 'Saúde & Triagem',
    tagColor: '#0CBFFD',
    description: 'Implementação de totens de autoatendimento integrados ao sistema de prontuário eletrônico com classificação Manchester automatizada.',
    fullDescription: 'Uma grande rede hospitalar com 12 unidades enfrentava gargalos severos na recepção dos prontos-socorros, com tempo de espera superior a 45 minutos apenas para a triagem inicial. Desenvolvemos uma solução integrada com totens industriais touchscreen, leitor de documentos e carteirinhas com IA para validação de dados cadastrais e algoritmos de pré-triagem baseados no Protocolo de Manchester.',
    imageUrl: ASSETS.caseHospital,
    metric1: {
      value: '-68%',
      label: 'Tempo de espera em fila',
      highlight: true,
      color: '#0CBFFD'
    },
    metric2: {
      value: '14k+',
      label: 'Atendimentos/dia',
      highlight: false,
      color: '#FEFEFE'
    },
    clientIndustry: 'Saúde Hospitalar & Diagnóstico',
    duration: '14 semanas do diagnóstico ao rollout',
    architectureHighlights: [
      'Totens físicos com tela touch industrial e sistema operacional imutável',
      'Integração bidirecional com prontuário MV e Tasy via HL7/FHIR',
      'Classificação assistida por IA com validação médica em tempo real',
      'Disponibilidade de 99.99% em hardware redundante com failover local'
    ],
    testimonial: {
      quote: 'A NuvDev reduziu nossas filas pela metade em menos de um mês de implantação. A estabilidade do software em totens físicos é impecável.',
      author: 'Dr. Fernando Albuquerque',
      role: 'Diretor de Tecnologia e Operações Hospitalares'
    }
  },
  {
    id: 'ecossistema-ead',
    title: 'Ecossistema EAD com 50k+ Alunos Ativos',
    tag: 'EdTech & LMS',
    tagColor: '#14BDFE',
    description: 'Migração de ambiente monolítico para arquitetura cloud sem servidor com streaming adaptativo, avaliações em tempo real e emissão instantânea de certificados.',
    fullDescription: 'Plataforma líder em capacitação profissional necessitava migrar de um LMS legado que caía em dias de lançamento de cursos. A NuvDev desenhou uma arquitetura serverless orientada a eventos, com player de vídeo inteligente que se adapta à conexão do aluno e emissão instantânea de certificados com autenticidade verificável.',
    imageUrl: ASSETS.caseEdtech,
    metric1: {
      value: '50k+',
      label: 'Estudantes simultâneos',
      highlight: true,
      color: '#14BDFE'
    },
    metric2: {
      value: '99.98%',
      label: 'Disponibilidade em picos',
      highlight: false,
      color: '#FEFEFE'
    },
    clientIndustry: 'Educação a Distância (EdTech)',
    duration: '16 semanas com migração zero-downtime',
    architectureHighlights: [
      'Arquitetura Serverless em AWS Lambda + DynamoDB com auto-scale elástico',
      'Distribuição de vídeo via CloudFront Edge com criptografia HLS',
      'Emissão automática de certificados em PDF com assinatura criptográfica',
      'Painéis interativos de analytics para professores e gestores'
    ],
    testimonial: {
      quote: 'Nosso maior lançamento teve 42 mil acessos no mesmo minuto e a plataforma nem oscilou. Foi um salto de maturidade brutal para nosso negócio.',
      author: 'Juliana Mendes',
      role: 'Chief Product Officer (CPO)'
    }
  },
  {
    id: 'rastreamento-frotas',
    title: 'App de Rastreamento de Frotas em Tempo Real',
    tag: 'Supply Chain & Mobile',
    tagColor: '#454BFF',
    description: 'Aplicativo para motoristas com geolocalização por telemetria GPS offline-first, cálculo inteligente de rotas e confirmação de entrega via assinatura digital.',
    fullDescription: 'Operadora logística com frota superior a 1.200 veículos sofria com perda de sinal em rodovias remotas e atrasos na conferência de comprovantes de entrega. A NuvDev desenvolveu um app mobile nativo offline-first com sincronização por lotes em background, roteirização adaptativa e leitor OCR de notas fiscais.',
    imageUrl: ASSETS.caseLogistics,
    metric1: {
      value: '+35%',
      label: 'Eficiência de entregas',
      highlight: true,
      color: '#454BFF'
    },
    metric2: {
      value: '< 300ms',
      label: 'Sincronização de GPS',
      highlight: false,
      color: '#FEFEFE'
    },
    clientIndustry: 'Logística & Cadeia de Suprimentos',
    duration: '12 semanas com piloto em 200 caminhões',
    architectureHighlights: [
      'App Flutter com sincronização offline-first e persistência em SQLite',
      'Protocolo de telemetria leve sobre MQTT com transmissão em tempo real',
      'Assinatura digital com carimbo temporal e coordenadas georreferenciadas',
      'Dashboard web para a torre de controle com mapa interativo em alta frequência'
    ],
    testimonial: {
      quote: 'O rastreamento em tempo real nos permitiu antecipar problemas na rota e garantir entregas no mesmo dia com comprovação digital imediata.',
      author: 'Carlos Eduardo Vieira',
      role: 'Head de Logística e Transportes'
    }
  }
];
