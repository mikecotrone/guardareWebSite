/* Guardare i18n — lightweight, static-host friendly.
   Applies translations by [data-i18n] key, persists choice, sets <html lang>.
   Brand/technical terms (Guardare, VistaTech, Schema-on-Config, PagerDuty,
   Jitbit, TeamDynamix, SNMP, API, MSP, ITSM, AWS, Azure, etc.) are intentionally
   left untranslated. */
(function () {
  var LANGS = ['en', 'it', 'pt', 'fr', 'es'];
  var LABELS = { en: 'EN', it: 'IT', pt: 'PT', fr: 'FR', es: 'ES' };
  var NAMES = { en: 'English', it: 'Italiano', pt: 'Português', fr: 'Français', es: 'Español' };

  var T = {
    en: {
      'meta.title': 'Guardare — Modern Systems Observability & Alerting',
      'nav.home': 'Home', 'nav.platform': 'Platform', 'nav.story': 'Story',
      'nav.releases': 'Releases', 'nav.community': 'Community', 'nav.contact': 'Contact',
      'hero.eyebrow': 'guardare [gwar-da-re] · un verbo italiano — to monitor · to watch · to observe',
      'hero.h1': 'Observability you can trust.',
      'hero.sub': 'A modern systems observability & alerting platform: lightweight, agentless, and API-first. None of the weight of a 2000s NMS. Going open source in 2027.',
      'hero.cta1': 'Explore the platform', 'hero.cta2': 'Help shape 2027 releases',
      'f.purpose.h': 'Purpose-built, not retrofitted',
      'f.purpose.p': 'An observability engine designed this decade. In active development since January 2024, with multiple sprints every quarter.',
      'f.schema.p': 'The data model adapts to your environment. The model fits your data — not the other way around.',
      'f.oss.h': 'Open source. All of it.',
      'f.oss.p': 'Every microservice in the Guardare platform goes open source in 2027, alongside the new Admin Web UI.',
      'f.zero.h': 'Zero license fees. Zero per-device tax.',
      'f.zero.p': 'Competing platforms charge $20–24 per device, per month — a huge meter that runs as you grow. The entire platform goes open source in 2027: free to run, at any scale.',
      'mon.eyebrow': 'osservare — to observe', 'mon.h2': 'Monitor anything.',
      'mon.lead': 'Deep observability from connectivity backhaul to cloud resources, collected via API, SNMP, Remote PowerShell, and bash.',
      'mon.c1.p': 'Performance observed across all links.',
      'mon.c2.h': 'Network fabric',
      'mon.c2.p': 'Full-stack observability for switches, routers, NextGen firewalls, controllers, and access points.',
      'mon.c3.p': 'Every sensor, controller, and edge device — watched without an agent.',
      'mon.c4.p': 'Unified health metrics for AWS, Azure, Microsoft 365 tenants, Google Workspace, and hybrid resources.',
      'mon.c5.h': 'Smart buildings',
      'mon.c5.p': 'Access control, video surveillance, and digital displays under one watch.',
      'who.eyebrow': "per chi — who it's for",
      'who.h2': 'Built MSP-first. Ready for everyone.',
      'who.lead': 'Guardare was born inside a working MSP; VistaTech runs its own managed-services practice on it every day. The same engine serves a fleet of customers or just one: yours.',
      'who.msp.h': 'For MSPs',
      'who.msp.1': 'Built for multi-tenancy — onboard new customer environments quickly and run them all from one platform',
      'who.msp.2': 'Intelligent alerting that surfaces real incidents and suppresses noise across every site you manage',
      'who.msp.3': 'Bi-directional ITSM integration that opens, updates, and resolves tickets automatically',
      'who.msp.4': 'Incident notifications and automatic clears delivered through PagerDuty',
      'who.msp.5': 'Customer documentation that stays current without manual upkeep',
      'who.biz.h': 'For your business',
      'who.biz.1': 'Continuous, around-the-clock visibility across your entire infrastructure',
      'who.biz.2': 'Deploys anywhere — from a lightweight appliance to a full enterprise environment',
      'who.biz.3': 'No vendor lock-in and no per-device licensing, with an open-source release planned for 2027',
      'who.biz.4': "Proven daily in VistaTech's own operations before any release reaches you",
      'who.biz.5': "Reporting that's clear for leadership and detailed enough for your engineers",
      'quote.text': 'Trust is built on observability. Guardare provides the lens through which complex infrastructure becomes clear, actionable, and resilient.',
      'quote.cite': '— VISTATECH ENGINEERING STANDARDS',
      'int.eyebrow': 'le integrazioni — the integrations',
      'int.h2': 'Plays well with your stack.',
      'int.c1.p': 'Event and auto-clear notifications for continuous incident response. VistaTech runs PagerDuty for Guardare Managed Services.',
      'int.c2.p': 'Direct, bi-directional ticket integration. Events Director opens, updates, and resolves tickets automatically, with admin-selectable options controlling exactly how ticket flow behaves.',
      'int.c3.p': 'External health monitoring of the Guardare microservices themselves: observing the software that is observing the infrastructure.',
      'int.c4.p': 'YAML configuration versioning and upgrade management through the Guardare Helper. GitOps-driven provisioning and incident management.',
      'lic.eyebrow': 'la licenza — open by design',
      'lic.h2': 'Open by design. Yours to keep.',
      'lic.lead': 'Guardare is built to be inspected, trusted, and run on your own terms. The full platform is planned to go open source in 2027, alongside the new Admin Web UI.',
      'lic.c1.h': 'Open architecture',
      'lic.c1.p': 'Standards-based and built on open foundations, so it fits the stack you already run — no black box, no proprietary dead ends.',
      'lic.c2.h': 'Predictable by design',
      'lic.c2.p': 'No license fees and no per-device tax. Your costs stay predictable as you grow, with no surprise bills at scale.',
      'lic.c3.h': 'Open source in 2027',
      'lic.c3.p': 'The full platform is planned to release as open source in 2027, alongside the new Admin Web UI — yours to run, study, and adapt.',
      'contact.eyebrow': "parliamo — let's talk", 'contact.h2': 'Have questions?',
      'contact.lead': 'Guardare is built and maintained by VistaTech, Inc. in downtown Greensboro, North Carolina, USA.',
      'contact.addr.h': 'Address', 'contact.phone.h': 'Phone', 'contact.email.h': 'Email', 'contact.connect.h': 'Connect',
      'contact.cta': 'Get in touch'
    },

    it: {
      'meta.title': 'Guardare — Osservabilità e alerting moderni dei sistemi',
      'nav.home': 'Home', 'nav.platform': 'Piattaforma', 'nav.story': 'Storia',
      'nav.releases': 'Release', 'nav.community': 'Community', 'nav.contact': 'Contatti',
      'hero.eyebrow': 'guardare [gwar-da-re] · un verbo italiano — monitorare · sorvegliare · osservare',
      'hero.h1': 'Un’osservabilità di cui fidarsi.',
      'hero.sub': 'Una moderna piattaforma di osservabilità e alerting dei sistemi: leggera, agentless e API-first. Senza il peso di un NMS degli anni 2000. Open source dal 2027.',
      'hero.cta1': 'Esplora la piattaforma', 'hero.cta2': 'Contribuisci alle release 2027',
      'f.purpose.h': 'Progettata su misura, non adattata',
      'f.purpose.p': 'Un motore di osservabilità progettato in questo decennio. In sviluppo attivo da gennaio 2024, con più sprint ogni trimestre.',
      'f.schema.p': 'Il modello dati si adatta al tuo ambiente. È il modello a seguire i tuoi dati, non il contrario.',
      'f.oss.h': 'Open source. Tutto.',
      'f.oss.p': 'Ogni microservizio della piattaforma Guardare diventa open source nel 2027, insieme alla nuova Admin Web UI.',
      'f.zero.h': 'Zero costi di licenza. Zero tassa per dispositivo.',
      'f.zero.p': 'Le piattaforme concorrenti chiedono 20–24 $ per dispositivo al mese: un contatore enorme che cresce con te. L’intera piattaforma diventa open source nel 2027: gratuita da eseguire, a qualsiasi scala.',
      'mon.eyebrow': 'osservare — to observe', 'mon.h2': 'Monitora qualsiasi cosa.',
      'mon.lead': 'Osservabilità completa, dal backhaul di connettività alle risorse cloud, raccolta tramite API, SNMP, Remote PowerShell e bash.',
      'mon.c1.p': 'Prestazioni osservate su tutti i collegamenti.',
      'mon.c2.h': 'Infrastruttura di rete',
      'mon.c2.p': 'Osservabilità full-stack per switch, router, firewall NextGen, controller e access point.',
      'mon.c3.p': 'Ogni sensore, controller e dispositivo edge — monitorato senza alcun agente.',
      'mon.c4.p': 'Metriche di salute unificate per tenant AWS, Azure, Microsoft 365, Google Workspace e risorse ibride.',
      'mon.c5.h': 'Edifici intelligenti',
      'mon.c5.p': 'Controllo accessi, videosorveglianza e display digitali sotto un’unica supervisione.',
      'who.eyebrow': 'per chi — who it’s for',
      'who.h2': 'Nata MSP-first. Pronta per tutti.',
      'who.lead': 'Guardare è nata all’interno di un MSP operativo; VistaTech la usa ogni giorno per la propria attività di managed services. Lo stesso motore serve una flotta di clienti o uno solo: il tuo.',
      'who.msp.h': 'Per gli MSP',
      'who.msp.1': 'Progettata per il multi-tenancy — attiva rapidamente nuovi ambienti cliente e gestiscili tutti da un’unica piattaforma',
      'who.msp.2': 'Alerting intelligente che evidenzia gli incidenti reali e riduce il rumore su ogni sito che gestisci',
      'who.msp.3': 'Integrazione ITSM bidirezionale che apre, aggiorna e risolve i ticket automaticamente',
      'who.msp.4': 'Notifiche di incidente e chiusure automatiche recapitate tramite PagerDuty',
      'who.msp.5': 'Documentazione cliente sempre aggiornata, senza interventi manuali',
      'who.biz.h': 'Per la tua azienda',
      'who.biz.1': 'Visibilità continua, 24 ore su 24, su tutta la tua infrastruttura',
      'who.biz.2': 'Si installa ovunque — da un appliance leggero a un ambiente enterprise completo',
      'who.biz.3': 'Nessun vincolo di fornitore e nessuna licenza per dispositivo, con una release open source prevista per il 2027',
      'who.biz.4': 'Collaudata ogni giorno nelle operazioni di VistaTech prima che qualsiasi release arrivi a te',
      'who.biz.5': 'Reportistica chiara per il management e dettagliata per i tuoi tecnici',
      'quote.text': 'La fiducia si costruisce sull’osservabilità. Guardare offre la lente attraverso cui un’infrastruttura complessa diventa chiara, azionabile e resiliente.',
      'quote.cite': '— STANDARD DI INGEGNERIA VISTATECH',
      'int.eyebrow': 'le integrazioni — the integrations',
      'int.h2': 'Si integra con il tuo stack.',
      'int.c1.p': 'Notifiche di evento e di auto-clear per una risposta continua agli incidenti. VistaTech usa PagerDuty per i Guardare Managed Services.',
      'int.c2.p': 'Integrazione diretta e bidirezionale dei ticket. Events Director apre, aggiorna e risolve i ticket automaticamente, con opzioni selezionabili dall’amministratore che controllano esattamente il flusso dei ticket.',
      'int.c3.p': 'Monitoraggio esterno dello stato di salute degli stessi microservizi Guardare: osservare il software che osserva l’infrastruttura.',
      'int.c4.p': 'Versionamento della configurazione YAML e gestione degli aggiornamenti tramite il Guardare Helper. Provisioning e gestione degli incidenti guidati da GitOps.',
      'lic.eyebrow': 'la licenza — open by design',
      'lic.h2': 'Aperta per scelta. Tua, da tenere.',
      'lic.lead': 'Guardare è costruita per essere ispezionata, affidabile e gestita alle tue condizioni. L’intera piattaforma diventerà open source nel 2027, insieme alla nuova Admin Web UI.',
      'lic.c1.h': 'Architettura aperta',
      'lic.c1.p': 'Basata su standard e fondamenta aperte, si integra nello stack che già utilizzi — nessuna scatola nera, nessun vicolo cieco proprietario.',
      'lic.c2.h': 'Prevedibile per progettazione',
      'lic.c2.p': 'Nessun costo di licenza e nessuna tassa per dispositivo. I tuoi costi restano prevedibili man mano che cresci, senza sorprese in bolletta su larga scala.',
      'lic.c3.h': 'Open source nel 2027',
      'lic.c3.p': 'L’intera piattaforma è prevista come open source nel 2027, insieme alla nuova Admin Web UI — tua da eseguire, studiare e adattare.',
      'contact.eyebrow': 'parliamo — let’s talk', 'contact.h2': 'Hai domande?',
      'contact.lead': 'Guardare è sviluppata e gestita da VistaTech, Inc. nel centro di Greensboro, North Carolina, USA.',
      'contact.addr.h': 'Indirizzo', 'contact.phone.h': 'Telefono', 'contact.email.h': 'Email', 'contact.connect.h': 'Connettiti',
      'contact.cta': 'Contattaci'
    },

    pt: {
      'meta.title': 'Guardare — Observabilidade e alertas modernos de sistemas',
      'nav.home': 'Início', 'nav.platform': 'Plataforma', 'nav.story': 'História',
      'nav.releases': 'Versões', 'nav.community': 'Comunidade', 'nav.contact': 'Contato',
      'hero.eyebrow': 'guardare [gwar-da-re] · um verbo italiano — monitorar · vigiar · observar',
      'hero.h1': 'Observabilidade em que você pode confiar.',
      'hero.sub': 'Uma plataforma moderna de observabilidade e alertas de sistemas: leve, sem agente e API-first. Sem o peso de um NMS dos anos 2000. Open source em 2027.',
      'hero.cta1': 'Explore a plataforma', 'hero.cta2': 'Ajude a moldar as versões de 2027',
      'f.purpose.h': 'Feita sob medida, não readaptada',
      'f.purpose.p': 'Um motor de observabilidade projetado nesta década. Em desenvolvimento ativo desde janeiro de 2024, com vários sprints a cada trimestre.',
      'f.schema.p': 'O modelo de dados se adapta ao seu ambiente. O modelo acompanha os seus dados — e não o contrário.',
      'f.oss.h': 'Open source. Tudo.',
      'f.oss.p': 'Cada microsserviço da plataforma Guardare se torna open source em 2027, junto com a nova Admin Web UI.',
      'f.zero.h': 'Zero taxas de licença. Zero imposto por dispositivo.',
      'f.zero.p': 'Plataformas concorrentes cobram US$ 20–24 por dispositivo, por mês — um medidor enorme que cresce com você. Toda a plataforma se torna open source em 2027: livre para usar, em qualquer escala.',
      'mon.eyebrow': 'osservare — to observe', 'mon.h2': 'Monitore qualquer coisa.',
      'mon.lead': 'Observabilidade profunda, do backhaul de conectividade aos recursos em nuvem, coletada via API, SNMP, Remote PowerShell e bash.',
      'mon.c1.p': 'Desempenho observado em todos os enlaces.',
      'mon.c2.h': 'Malha de rede',
      'mon.c2.p': 'Observabilidade full-stack para switches, roteadores, firewalls NextGen, controladores e pontos de acesso.',
      'mon.c3.p': 'Cada sensor, controlador e dispositivo de borda — monitorado sem agente.',
      'mon.c4.p': 'Métricas de saúde unificadas para tenants AWS, Azure, Microsoft 365, Google Workspace e recursos híbridos.',
      'mon.c5.h': 'Edifícios inteligentes',
      'mon.c5.p': 'Controle de acesso, videovigilância e painéis digitais sob uma única supervisão.',
      'who.eyebrow': 'per chi — who it’s for',
      'who.h2': 'Nascida MSP-first. Pronta para todos.',
      'who.lead': 'A Guardare nasceu dentro de um MSP em operação; a VistaTech executa sua própria prática de managed services nela todos os dias. O mesmo motor atende a uma frota de clientes ou a apenas um: o seu.',
      'who.msp.h': 'Para MSPs',
      'who.msp.1': 'Feita para multi-tenancy — integre novos ambientes de clientes rapidamente e gerencie todos em uma única plataforma',
      'who.msp.2': 'Alertas inteligentes que destacam incidentes reais e suprimem o ruído em cada site que você gerencia',
      'who.msp.3': 'Integração ITSM bidirecional que abre, atualiza e resolve chamados automaticamente',
      'who.msp.4': 'Notificações de incidentes e encerramentos automáticos entregues via PagerDuty',
      'who.msp.5': 'Documentação do cliente sempre atualizada, sem manutenção manual',
      'who.biz.h': 'Para o seu negócio',
      'who.biz.1': 'Visibilidade contínua, 24 horas por dia, em toda a sua infraestrutura',
      'who.biz.2': 'Implanta em qualquer lugar — de um appliance leve a um ambiente corporativo completo',
      'who.biz.3': 'Sem dependência de fornecedor e sem licenciamento por dispositivo, com versão open source prevista para 2027',
      'who.biz.4': 'Comprovada diariamente nas operações da própria VistaTech antes de qualquer versão chegar até você',
      'who.biz.5': 'Relatórios claros para a liderança e detalhados o suficiente para os seus engenheiros',
      'quote.text': 'A confiança se constrói sobre a observabilidade. A Guardare oferece a lente pela qual uma infraestrutura complexa se torna clara, acionável e resiliente.',
      'quote.cite': '— PADRÕES DE ENGENHARIA DA VISTATECH',
      'int.eyebrow': 'le integrazioni — the integrations',
      'int.h2': 'Integra-se bem ao seu stack.',
      'int.c1.p': 'Notificações de evento e de auto-clear para resposta contínua a incidentes. A VistaTech usa o PagerDuty para os Guardare Managed Services.',
      'int.c2.p': 'Integração de chamados direta e bidirecional. O Events Director abre, atualiza e resolve chamados automaticamente, com opções selecionáveis pelo administrador que controlam exatamente o fluxo dos chamados.',
      'int.c3.p': 'Monitoramento externo da saúde dos próprios microsserviços da Guardare: observar o software que observa a infraestrutura.',
      'int.c4.p': 'Versionamento da configuração YAML e gestão de atualizações pelo Guardare Helper. Provisionamento e gestão de incidentes orientados por GitOps.',
      'lic.eyebrow': 'la licenza — open by design',
      'lic.h2': 'Aberta por concepção. Sua, para manter.',
      'lic.lead': 'A Guardare é feita para ser inspecionada, confiável e executada nos seus próprios termos. Toda a plataforma deve se tornar open source em 2027, junto com a nova Admin Web UI.',
      'lic.c1.h': 'Arquitetura aberta',
      'lic.c1.p': 'Baseada em padrões e em fundações abertas, encaixa-se no stack que você já usa — sem caixa-preta, sem becos proprietários sem saída.',
      'lic.c2.h': 'Previsível por concepção',
      'lic.c2.p': 'Sem taxas de licença e sem imposto por dispositivo. Seus custos permanecem previsíveis à medida que você cresce, sem surpresas na fatura em larga escala.',
      'lic.c3.h': 'Open source em 2027',
      'lic.c3.p': 'Toda a plataforma está prevista para ser lançada como open source em 2027, junto com a nova Admin Web UI — sua para executar, estudar e adaptar.',
      'contact.eyebrow': 'parliamo — let’s talk', 'contact.h2': 'Tem perguntas?',
      'contact.lead': 'A Guardare é desenvolvida e mantida pela VistaTech, Inc. no centro de Greensboro, Carolina do Norte, EUA.',
      'contact.addr.h': 'Endereço', 'contact.phone.h': 'Telefone', 'contact.email.h': 'E-mail', 'contact.connect.h': 'Conecte-se',
      'contact.cta': 'Fale conosco'
    },

    fr: {
      'meta.title': 'Guardare — Observabilité et alerting modernes des systèmes',
      'nav.home': 'Accueil', 'nav.platform': 'Plateforme', 'nav.story': 'Histoire',
      'nav.releases': 'Versions', 'nav.community': 'Communauté', 'nav.contact': 'Contact',
      'hero.eyebrow': 'guardare [gwar-da-re] · un verbe italien — surveiller · observer · veiller',
      'hero.h1': 'Une observabilité digne de confiance.',
      'hero.sub': 'Une plateforme moderne d’observabilité et d’alerting des systèmes : légère, sans agent et API-first. Sans la lourdeur d’un NMS des années 2000. Open source en 2027.',
      'hero.cta1': 'Découvrir la plateforme', 'hero.cta2': 'Façonner les versions 2027',
      'f.purpose.h': 'Conçue sur mesure, pas adaptée',
      'f.purpose.p': 'Un moteur d’observabilité conçu cette décennie. En développement actif depuis janvier 2024, avec plusieurs sprints chaque trimestre.',
      'f.schema.p': 'Le modèle de données s’adapte à votre environnement. C’est le modèle qui suit vos données, et non l’inverse.',
      'f.oss.h': 'Open source. La totalité.',
      'f.oss.p': 'Chaque microservice de la plateforme Guardare devient open source en 2027, en même temps que la nouvelle Admin Web UI.',
      'f.zero.h': 'Zéro frais de licence. Zéro taxe par équipement.',
      'f.zero.p': 'Les plateformes concurrentes facturent 20 à 24 $ par équipement et par mois — un compteur énorme qui grimpe à mesure que vous grandissez. Toute la plateforme devient open source en 2027 : libre d’utilisation, à n’importe quelle échelle.',
      'mon.eyebrow': 'osservare — to observe', 'mon.h2': 'Surveillez tout.',
      'mon.lead': 'Une observabilité approfondie, du backhaul de connectivité aux ressources cloud, collectée via API, SNMP, Remote PowerShell et bash.',
      'mon.c1.p': 'Des performances observées sur l’ensemble des liens.',
      'mon.c2.h': 'Fabric réseau',
      'mon.c2.p': 'Observabilité full-stack pour switches, routeurs, pare-feux NextGen, contrôleurs et points d’accès.',
      'mon.c3.p': 'Chaque capteur, contrôleur et équipement edge — surveillé sans aucun agent.',
      'mon.c4.p': 'Des métriques de santé unifiées pour les tenants AWS, Azure, Microsoft 365, Google Workspace et les ressources hybrides.',
      'mon.c5.h': 'Bâtiments intelligents',
      'mon.c5.p': 'Contrôle d’accès, vidéosurveillance et affichage numérique sous une seule supervision.',
      'who.eyebrow': 'per chi — who it’s for',
      'who.h2': 'Pensée MSP-first. Prête pour tous.',
      'who.lead': 'Guardare est née au sein d’un MSP en activité ; VistaTech l’utilise chaque jour pour sa propre pratique de services managés. Le même moteur sert une flotte de clients ou un seul : le vôtre.',
      'who.msp.h': 'Pour les MSP',
      'who.msp.1': 'Conçue pour le multi-tenant — intégrez rapidement de nouveaux environnements clients et pilotez-les tous depuis une seule plateforme',
      'who.msp.2': 'Un alerting intelligent qui fait remonter les vrais incidents et supprime le bruit sur chaque site que vous gérez',
      'who.msp.3': 'Une intégration ITSM bidirectionnelle qui ouvre, met à jour et résout les tickets automatiquement',
      'who.msp.4': 'Notifications d’incident et clôtures automatiques transmises via PagerDuty',
      'who.msp.5': 'Une documentation client toujours à jour, sans maintenance manuelle',
      'who.biz.h': 'Pour votre entreprise',
      'who.biz.1': 'Une visibilité continue, 24 h/24, sur l’ensemble de votre infrastructure',
      'who.biz.2': 'Se déploie partout — d’un appliance léger à un environnement d’entreprise complet',
      'who.biz.3': 'Aucun verrouillage fournisseur ni licence par équipement, avec une version open source prévue pour 2027',
      'who.biz.4': 'Éprouvée chaque jour dans les propres opérations de VistaTech avant qu’une version ne vous parvienne',
      'who.biz.5': 'Un reporting clair pour la direction et assez détaillé pour vos ingénieurs',
      'quote.text': 'La confiance se construit sur l’observabilité. Guardare offre la lentille à travers laquelle une infrastructure complexe devient claire, actionnable et résiliente.',
      'quote.cite': '— STANDARDS D’INGÉNIERIE VISTATECH',
      'int.eyebrow': 'le integrazioni — the integrations',
      'int.h2': 'S’intègre à votre stack.',
      'int.c1.p': 'Notifications d’événement et d’auto-clear pour une réponse continue aux incidents. VistaTech utilise PagerDuty pour les Guardare Managed Services.',
      'int.c2.p': 'Intégration directe et bidirectionnelle des tickets. Events Director ouvre, met à jour et résout les tickets automatiquement, avec des options sélectionnables par l’administrateur qui contrôlent précisément le flux des tickets.',
      'int.c3.p': 'Surveillance externe de l’état des microservices Guardare eux-mêmes : observer le logiciel qui observe l’infrastructure.',
      'int.c4.p': 'Versionnement de la configuration YAML et gestion des mises à niveau via le Guardare Helper. Provisionnement et gestion des incidents pilotés par GitOps.',
      'lic.eyebrow': 'la licenza — open by design',
      'lic.h2': 'Ouverte par conception. À vous de la garder.',
      'lic.lead': 'Guardare est conçue pour être inspectée, fiable et exécutée selon vos propres règles. La plateforme complète doit devenir open source en 2027, en même temps que la nouvelle Admin Web UI.',
      'lic.c1.h': 'Architecture ouverte',
      'lic.c1.p': 'Fondée sur des standards et des bases ouvertes, elle s’intègre au stack que vous utilisez déjà — pas de boîte noire, pas d’impasse propriétaire.',
      'lic.c2.h': 'Prévisible par conception',
      'lic.c2.p': 'Aucun frais de licence ni taxe par équipement. Vos coûts restent prévisibles à mesure que vous grandissez, sans facture surprise à grande échelle.',
      'lic.c3.h': 'Open source en 2027',
      'lic.c3.p': 'La plateforme complète est prévue en open source pour 2027, en même temps que la nouvelle Admin Web UI — à vous de l’exécuter, de l’étudier et de l’adapter.',
      'contact.eyebrow': 'parliamo — let’s talk', 'contact.h2': 'Des questions ?',
      'contact.lead': 'Guardare est développée et maintenue par VistaTech, Inc. dans le centre de Greensboro, Caroline du Nord, États-Unis.',
      'contact.addr.h': 'Adresse', 'contact.phone.h': 'Téléphone', 'contact.email.h': 'E-mail', 'contact.connect.h': 'Se connecter',
      'contact.cta': 'Nous contacter'
    },

    es: {
      'meta.title': 'Guardare — Observabilidad y alertas modernas de sistemas',
      'nav.home': 'Inicio', 'nav.platform': 'Plataforma', 'nav.story': 'Historia',
      'nav.releases': 'Versiones', 'nav.community': 'Comunidad', 'nav.contact': 'Contacto',
      'hero.eyebrow': 'guardare [gwar-da-re] · un verbo italiano — monitorizar · vigilar · observar',
      'hero.h1': 'Una observabilidad en la que puedes confiar.',
      'hero.sub': 'Una plataforma moderna de observabilidad y alertas de sistemas: ligera, sin agentes y API-first. Sin el peso de un NMS de los años 2000. Open source en 2027.',
      'hero.cta1': 'Explora la plataforma', 'hero.cta2': 'Ayuda a definir las versiones de 2027',
      'f.purpose.h': 'Diseñada a medida, no readaptada',
      'f.purpose.p': 'Un motor de observabilidad diseñado en esta década. En desarrollo activo desde enero de 2024, con varios sprints cada trimestre.',
      'f.schema.p': 'El modelo de datos se adapta a tu entorno. El modelo se ajusta a tus datos, no al revés.',
      'f.oss.h': 'Open source. Todo.',
      'f.oss.p': 'Cada microservicio de la plataforma Guardare pasa a ser open source en 2027, junto con la nueva Admin Web UI.',
      'f.zero.h': 'Cero tarifas de licencia. Cero impuesto por dispositivo.',
      'f.zero.p': 'Las plataformas de la competencia cobran 20–24 $ por dispositivo al mes: un contador enorme que crece contigo. Toda la plataforma pasa a ser open source en 2027: libre de ejecutar, a cualquier escala.',
      'mon.eyebrow': 'osservare — to observe', 'mon.h2': 'Monitoriza cualquier cosa.',
      'mon.lead': 'Observabilidad profunda, desde el backhaul de conectividad hasta los recursos en la nube, recopilada mediante API, SNMP, Remote PowerShell y bash.',
      'mon.c1.p': 'Rendimiento observado en todos los enlaces.',
      'mon.c2.h': 'Fabric de red',
      'mon.c2.p': 'Observabilidad full-stack para switches, routers, firewalls NextGen, controladores y puntos de acceso.',
      'mon.c3.p': 'Cada sensor, controlador y dispositivo edge — vigilado sin ningún agente.',
      'mon.c4.p': 'Métricas de salud unificadas para tenants de AWS, Azure, Microsoft 365, Google Workspace y recursos híbridos.',
      'mon.c5.h': 'Edificios inteligentes',
      'mon.c5.p': 'Control de acceso, videovigilancia y pantallas digitales bajo una sola supervisión.',
      'who.eyebrow': 'per chi — who it’s for',
      'who.h2': 'Creada MSP-first. Lista para todos.',
      'who.lead': 'Guardare nació dentro de un MSP en funcionamiento; VistaTech opera su propia práctica de servicios gestionados con ella cada día. El mismo motor sirve a una flota de clientes o a uno solo: el tuyo.',
      'who.msp.h': 'Para MSPs',
      'who.msp.1': 'Diseñada para multi-tenancy — incorpora nuevos entornos de cliente con rapidez y gestiónalos todos desde una sola plataforma',
      'who.msp.2': 'Alertas inteligentes que resaltan los incidentes reales y reducen el ruido en cada sitio que gestionas',
      'who.msp.3': 'Integración ITSM bidireccional que abre, actualiza y resuelve tickets automáticamente',
      'who.msp.4': 'Notificaciones de incidentes y cierres automáticos entregados a través de PagerDuty',
      'who.msp.5': 'Documentación del cliente siempre actualizada, sin mantenimiento manual',
      'who.biz.h': 'Para tu empresa',
      'who.biz.1': 'Visibilidad continua, las 24 horas, en toda tu infraestructura',
      'who.biz.2': 'Se despliega en cualquier lugar — desde un appliance ligero hasta un entorno empresarial completo',
      'who.biz.3': 'Sin dependencia de proveedor y sin licencias por dispositivo, con una versión open source prevista para 2027',
      'who.biz.4': 'Probada a diario en las propias operaciones de VistaTech antes de que cualquier versión llegue a ti',
      'who.biz.5': 'Informes claros para la dirección y lo bastante detallados para tus ingenieros',
      'quote.text': 'La confianza se construye sobre la observabilidad. Guardare ofrece la lente a través de la cual una infraestructura compleja se vuelve clara, accionable y resiliente.',
      'quote.cite': '— ESTÁNDARES DE INGENIERÍA DE VISTATECH',
      'int.eyebrow': 'le integrazioni — the integrations',
      'int.h2': 'Encaja con tu stack.',
      'int.c1.p': 'Notificaciones de evento y de auto-clear para una respuesta continua a incidentes. VistaTech utiliza PagerDuty para los Guardare Managed Services.',
      'int.c2.p': 'Integración de tickets directa y bidireccional. Events Director abre, actualiza y resuelve tickets automáticamente, con opciones seleccionables por el administrador que controlan exactamente el flujo de los tickets.',
      'int.c3.p': 'Monitorización externa del estado de los propios microservicios de Guardare: observar el software que observa la infraestructura.',
      'int.c4.p': 'Versionado de la configuración YAML y gestión de actualizaciones mediante el Guardare Helper. Aprovisionamiento y gestión de incidentes impulsados por GitOps.',
      'lic.eyebrow': 'la licenza — open by design',
      'lic.h2': 'Abierta por diseño. Tuya para conservar.',
      'lic.lead': 'Guardare está creada para ser inspeccionada, confiable y ejecutada en tus propios términos. Está previsto que toda la plataforma pase a ser open source en 2027, junto con la nueva Admin Web UI.',
      'lic.c1.h': 'Arquitectura abierta',
      'lic.c1.p': 'Basada en estándares y cimientos abiertos, encaja en el stack que ya utilizas — sin caja negra, sin callejones propietarios sin salida.',
      'lic.c2.h': 'Predecible por diseño',
      'lic.c2.p': 'Sin tarifas de licencia ni impuesto por dispositivo. Tus costes se mantienen predecibles a medida que creces, sin facturas sorpresa a gran escala.',
      'lic.c3.h': 'Open source en 2027',
      'lic.c3.p': 'Está previsto que toda la plataforma se publique como open source en 2027, junto con la nueva Admin Web UI — tuya para ejecutar, estudiar y adaptar.',
      'contact.eyebrow': 'parliamo — let’s talk', 'contact.h2': '¿Tienes preguntas?',
      'contact.lead': 'Guardare está desarrollada y mantenida por VistaTech, Inc. en el centro de Greensboro, Carolina del Norte, EE. UU.',
      'contact.addr.h': 'Dirección', 'contact.phone.h': 'Teléfono', 'contact.email.h': 'Correo', 'contact.connect.h': 'Conecta',
      'contact.cta': 'Contáctanos'
    }
  };

  function getLang() {
    try {
      var saved = localStorage.getItem('guardare_lang');
      if (saved && LANGS.indexOf(saved) > -1) return saved;
    } catch (e) {}
    var url = new URLSearchParams(location.search).get('lang');
    if (url && LANGS.indexOf(url) > -1) return url;
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : 'en';
  }

  function apply(lang) {
    var dict = T[lang] || T.en;
    document.documentElement.setAttribute('lang', lang);
    if (dict['meta.title']) document.title = dict['meta.title'];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
      else if (T.en[key] != null) el.textContent = T.en[key];
    });
    var btn = document.querySelector('.lang-current');
    if (btn) btn.textContent = LABELS[lang];
    document.querySelectorAll('.lang-menu [data-lang]').forEach(function (a) {
      a.setAttribute('aria-current', a.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('guardare_lang', lang); } catch (e) {}
  }

  function buildSwitcher() {
    var host = document.querySelector('[data-lang-switcher]');
    if (!host) return;
    var cur = getLang();
    var items = LANGS.map(function (l) {
      return '<li><a href="#" role="menuitem" data-lang="' + l + '">' +
        LABELS[l] + ' · ' + NAMES[l] + '</a></li>';
    }).join('');
    host.innerHTML =
      '<button class="lang-btn" aria-haspopup="true" aria-expanded="false" aria-label="Change language">' +
      '<span class="lang-current">' + LABELS[cur] + '</span><span class="lang-caret" aria-hidden="true">▾</span></button>' +
      '<ul class="lang-menu" role="menu">' + items + '</ul>';

    var btn = host.querySelector('.lang-btn');
    var menu = host.querySelector('.lang-menu');
    function close() { host.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = host.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      var a = e.target.closest('[data-lang]'); if (!a) return;
      e.preventDefault(); apply(a.getAttribute('data-lang')); close();
    });
    document.addEventListener('click', function (e) { if (!host.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  function init() { buildSwitcher(); apply(getLang()); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
