import {
  createElement,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type LinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

function Link({ children, className, href }: LinkProps) {
  return createElement("a", { className, href }, children);
}

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

function Button({ children, className, onClick, ariaLabel }: ButtonProps) {
  return createElement(
    "button",
    { className, onClick, type: "button", "aria-label": ariaLabel },
    children,
  );
}

const tools = [
  { name: "Gemini Veo 3", url: "https://cdn.arsenalhub.com/logos/gemini-veo-3.png" },
  { name: "ChatGPT", url: "https://cdn.arsenalhub.com/logos/chatgpt.png" },
  { name: "SuperGrok", url: "https://cdn.arsenalhub.com/logos/supergrok.png" },
  { name: "Suno", url: "https://cdn.arsenalhub.com/logos/suno.png" },
  { name: "CapCut", url: "https://cdn.arsenalhub.com/logos/capcut.png" },
  { name: "Higgsfield", url: "https://cdn.arsenalhub.com/logos/higgsfield.png" },
  { name: "Leonardo.Ai", url: "https://cdn.arsenalhub.com/logos/leonardo-ai.png" },
  { name: "Magnific", url: "https://cdn.arsenalhub.com/logos/magnific.png" },
  { name: "Vyral", url: "https://cdn.arsenalhub.com/logos/vyral.png" },
  { name: "Perplexity", url: "https://cdn.arsenalhub.com/logos/perplexity.png" },
  { name: "Kalodata", url: "https://cdn.arsenalhub.com/logos/kalodata.png" },
  { name: "Gamma", url: "https://cdn.arsenalhub.com/logos/gamma.png" },
];

const standalonePrices = [
  ["Magnific", "R$ 249"],
  ["Leonardo", "R$ 60"],
  ["Higgsfield", "R$ 145"],
  ["Canva", "R$ 45"],
  ["CapCut", "R$ 55"],
  ["Flow", "R$ 1.209,90"],
  ["ChatGPT", "R$ 125"],
  ["Gemini", "R$ 97"],
  ["Vyral", "R$ 90"],
  ["Suno", "R$ 55"],
  ["Perplexity", "R$ 110"],
  ["Gamma", "R$ 980"],
  ["Pollo AI", "R$ 135"],
  ["Super Grok", "R$ 1.650"],
  ["Kalodata", "R$ 545"],
];

const plans = [
  {
    name: "BASIC",
    price: "55",
    description: "O essencial para começar.",
    features: ["Flow Ultra", "Gemini Ultra", "ChatGPT Business"],
  },
  {
    name: "PLUS",
    price: "60",
    description: "Mais criação, todos os dias.",
    features: [
      "Flow Ultra",
      "Gemini Ultra",
      "ChatGPT Business",
      "CapCut",
      "Canva",
      "Vyral",
      "Suno",
    ],
  },
  {
    name: "PRO",
    price: "65",
    description: "Para quem produz em escala.",
    features: ["Tudo do Plano Plus", "Pollo AI", "Leonardo"],
  },
  {
    name: "ULTRA",
    price: "70",
    description: "O Arsenal completo. Sem limites.",
    popular: true,
    features: [
      "Tudo do Plano PRO",
      "Super Grok",
      "Freepik · Magnific",
      "Higgsfield",
      "Kalodata",
      "Gamma",
      "Perplexity",
    ],
  },
];

const testimonials = [
  {
    name: "Marina A.",
    role: "Social Media",
    quote:
      "Consegui centralizar todo o meu processo. O que antes levava horas, agora resolvo em poucos minutos.",
    time: "09:41",
  },
  {
    name: "Lucas R.",
    role: "Criador de conteúdo",
    quote:
      "O acesso pelo celular mudou meu fluxo. Consigo criar e aprovar tudo sem precisar abrir o notebook.",
    time: "11:18",
  },
  {
    name: "Rafael M.",
    role: "Performance",
    quote:
      "Só de não pagar cada ferramenta separada, o Arsenal já se pagou muitas vezes no primeiro mês.",
    time: "16:32",
  },
  {
    name: "Camila S.",
    role: "E-commerce",
    quote:
      "Interface rápida, ferramentas organizadas e suporte presente. Virou parte da operação da equipe.",
    time: "18:05",
  },
];

const faqs = [
  [
    "Como funciona o acesso?",
    "Após a confirmação do pagamento, você recebe seu acesso ao painel Arsenal. Todas as ferramentas ficam organizadas em um único ambiente, com um só login.",
  ],
  [
    "O acesso é realmente ilimitado?",
    "Os planos foram desenhados para uso recorrente e intenso, sem cobrança por ferramenta. Aplicam-se apenas as políticas de uso justo e segurança da plataforma.",
  ],
  [
    "Como vocês garantem a estabilidade?",
    "A Arquitetura 2.0 usa servidores dedicados, monitoramento contínuo e distribuição inteligente de carga para manter o painel rápido e disponível.",
  ],
  [
    "Posso cancelar quando quiser?",
    "Sim. Não existe fidelidade. Você pode solicitar o cancelamento da renovação a qualquer momento pelos canais oficiais de suporte.",
  ],
  [
    "Como escolho o melhor plano?",
    "Compare as ferramentas incluídas em cada opção. Se ainda estiver em dúvida, fale com nosso suporte para uma recomendação baseada no seu fluxo.",
  ],
  [
    "Funciona no celular e no tablet?",
    "Sim. O Arsenal foi redesenhado com abordagem mobile first e funciona diretamente no navegador de celulares, tablets e computadores.",
  ],
  [
    "Preciso instalar algum aplicativo?",
    "Não. Você acessa pelo navegador, sem extensões frágeis ou instalações complexas. O painel pode ser salvo na tela inicial como um app.",
  ],
  [
    "Posso usar em múltiplos dispositivos?",
    "Sim. O mesmo login acompanha você em diferentes aparelhos, com sincronização instantânea e proteção de sessão.",
  ],
];

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg className="arrow" viewBox="0 0 18 18" aria-hidden="true">
      {diagonal ? (
        <path d="M5 13 13 5M6 5h7v7" />
      ) : (
        <path d="M3 9h11M10 5l4 4-4 4" />
      )}
    </svg>
  );
}

function Check() {
  return (
    <svg className="check" viewBox="0 0 18 18" aria-hidden="true">
      <path d="m4 9 3 3 7-7" />
    </svg>
  );
}

function Wordmark({ logoUrl }: { logoUrl?: string }) {
  return (
    <div className="wordmark" aria-label="Arsenal">
      <span className="brand-mark">
        {logoUrl ? (
          <img src={logoUrl} alt="Logo Arsenal" className="brand-logo" />
        ) : null}
      </span>
      <strong>ARSENAL</strong>
    </div>
  );
}

function ImageSlot({
  className = "",
  label,
  url,
}: {
  className?: string;
  label: string;
  url: string;
}) {
  return (
    <div
      className={`image-slot ${className}`}
      role="img"
      aria-label={`${label}`}
    >
      <span className="slot-corners" />
      
      {/* Aqui a imagem é renderizada de fato */}
      {url ? (
        <img src={url} alt={label} className="slot-image" />
      ) : (
        <div className="slot-placeholder">
          <span className="slot-type">PNG IMAGE SLOT</span>
          <strong>{label}</strong>
          <small>TRANSPARENT PNG · REPLACE URL</small>
        </div>
      )}
    </div>
  );
}

function SectionIntro({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  copy?: string;
}) {
  return (
    <div className="section-intro" data-reveal>
      <span className="section-index">{index}</span>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <div className="section-title">{title}</div>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`video-shell ${playing ? "is-playing" : ""}`} data-reveal>
      <div className="video-topbar">
        <span>ARSENAL / APRESENTAÇÃO OFICIAL</span>
        <div>
          <i />
          <span>08:42</span>
        </div>
      </div>
      <div className="video-stage">
        <div className="video-grid" />
        <div className="video-copy">
          <span>CONHEÇA O NOVO</span>
          <strong>ARSENAL 2.0</strong>
          <small>Um acesso. Todas as possibilidades.</small>
        </div>
        <Button
          className="play-button"
          onClick={() => setPlaying((value) => !value)}
          ariaLabel={playing ? "Pausar apresentação" : "Reproduzir apresentação"}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 6v12M16 6v12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path className="play-fill" d="m9 6 9 6-9 6V6Z" />
            </svg>
          )}
        </Button>
        <div className="video-wave">
          {Array.from({ length: 36 }).map((_, index) => (
            <i
              key={index}
              style={{ "--wave": `${18 + ((index * 19) % 52)}%` } as CSSProperties}
            />
          ))}
        </div>
      </div>
      <div className="video-controls">
        <div className="video-progress">
          <span />
        </div>
        <span>00:00</span>
        <span>HD</span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 8V4h4M12 4h4v4M16 12v4h-4M8 16H4v-4" />
        </svg>
      </div>
    </div>
  );
}

function DashboardPreview({ type }: { type: "create" | "library" | "analytics" }) {
  const slots = {
    create: ["Estúdio de criação", "https://cdn.arsenalhub.com/screens/painel-estudio.png"],
    library: ["Hub de ferramentas", "https://cdn.arsenalhub.com/screens/painel-ferramentas.png"],
    analytics: ["Dashboard de uso", "https://cdn.arsenalhub.com/screens/painel-analytics.png"],
  };
  return (
    <ImageSlot className="dashboard-slot" label={slots[type][0]} url={slots[type][1]} />
  );
}

function DeviceShowcase() {
  return (
    <div className="device-scene" aria-label="Mockup responsivo em celular, tablet e computador">
      <div className="device-glow" />
      <ImageSlot
        className="device-slot desktop-slot"
        label="Mockup Desktop Arsenal"
        url="https://cdn.arsenalhub.com/mockups/arsenal-desktop.png"
      />
      <ImageSlot
        className="device-slot tablet-slot"
        label="Mockup Tablet Arsenal"
        url="https://cdn.arsenalhub.com/mockups/arsenal-tablet.png"
      />
      <ImageSlot
        className="device-slot phone-slot"
        label="Mockup Mobile Arsenal"
        url="https://cdn.arsenalhub.com/mockups/arsenal-mobile.png"
      />
      <div className="sync-chip"><i /> SINCRONIZADO</div>
    </div>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  useScrollReveal();

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="#" className="logo-link"><Wordmark logoUrl="https://i.imgur.com/810GX3s.png" /></Link>
          <nav aria-label="Navegação principal">
            <Link href="#planos">Planos</Link>
            <Link href="#comparativo">Comparativo</Link>
            <Link href="#faq">F.A.Q.</Link>
          </nav>
          <div className="header-status">
            
            <Link href="#planos">COMEÇAR <Arrow /></Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="global-grid" />
        <div className="hero-orb" />
        <div className="shell hero-top">
          <div className="hero-copy">
            <div className="hero-kicker intro-one">
              <span>ARSENAL HUB / AI ECOSYSTEM</span><i /><span>V2.0</span>
            </div>
            <div className="hero-title intro-two">
              Acesso Ilimitado,
              <span>sem Pagar Preços Absurdos.</span>
            </div>
            <p className="intro-three">
              Acesse e use todas as ferramentas diretamente pelo celular ou
              qualquer outro aparelho, com o mesmo login único. Sem limites,
              sem burocracia.
            </p>
            <div className="hero-actions intro-three">
              <Link className="primary-cta" href="#planos">
                COMEÇAR AGORA <Arrow />
              </Link>
              
            </div>
          </div>
          <div className="mascot-card intro-three">
            <div className="scan-line" />
            <div className="mascot-grid" />
            <div className="mascot-meta">
              <span>SYSTEM GUARDIAN / 01</span>
              <i>ONLINE</i>
            </div>
            <ImageSlot
              className="lumen-slot"
              label="LÚMEN · Cyber Panther"
              url="https://i.imgur.com/IVRurrs.png"
            />
            <div className="mascot-name">
              
              <span>CYBER PANTHER</span>
            </div>
          </div>
        </div>
        <div className="shell vsl-wrap"><VideoPlayer /></div>
      </section>

      <section className="tool-showcase">
        <div className="gradient-frame">
          <div className="marquee-label">
            <span>FERRAMENTAS INCLUÍDAS</span><i /><span>PNG LOGO LIBRARY</span>
          </div>
          <div className="tools-marquee" aria-label={`Ferramentas incluídas: ${tools.map((tool) => tool.name).join(", ")}`}>
            <div className="marquee-track">
              {[0, 1].map((group) => (
                <div key={group} aria-hidden={group === 1}>
                  {tools.map((tool) => (
                    <div className="tool-png-card" key={`${group}-${tool.name}`}>
                      <ImageSlot
                        className="tool-logo-slot"
                        label={tool.name}
                        url={tool.url}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="previews">
        <div className="shell">
          <SectionIntro
            index="01"
            eyebrow="POR DENTRO DO ARSENAL"
            title={<>Prévias do que está<br />dentro do painel</>}
            copy="Uma central desenhada para você encontrar, criar e produzir sem perder tempo entre dezenas de abas."
          />
          <div className="preview-grid">
            {(["create", "library", "analytics"] as const).map((type, index) => (
              <article
                className={`preview-card preview-${index + 1}`}
                data-reveal
                style={{ "--delay": `${index * 100}ms` } as CSSProperties}
                key={type}
              >
                <div className="preview-meta">
                  <span>0{index + 1}</span>
                  <strong>{["ESTÚDIO DE CRIAÇÃO", "HUB DE FERRAMENTAS", "CONTROLE DE USO"][index]}</strong>
                  <i>LIVE</i>
                </div>
                <DashboardPreview type={type} />
              </article>
            ))}
            <article className="lumen-solution-card" data-reveal>
              <div className="lumen-solution-copy">
                <span>SYSTEM GUARDIAN / 02</span>
                <div>Protegido pela energia do LÚMEN.</div>
                <p>
                  Um frame dedicado ao mascote oficial dentro da apresentação
                  das soluções Arsenal 2.0.
                </p>
              </div>
              <ImageSlot
                className="lumen-solution-slot"
                label="LÚMEN · Solution Visual"
                url="https://i.imgur.com/HrrC1MC.png"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="comparison" id="comparativo">
        <div className="shell">
          <SectionIntro
            index="02"
            eyebrow="A CONTA NÃO FECHA"
            title={<>Quanto custa assinar<br />tudo separadamente?</>}
            copy="Fizemos a conta real do mercado brasileiro. O resultado assusta."
          />
          <div className="comparison-layout">
            <div className="price-list" data-reveal>
              {standalonePrices.map(([name, price], index) => (
                <div key={name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{name}</strong>
                  <i />
                  <b>{price}</b>
                  <small>/ mês</small>
                </div>
              ))}
            </div>
            <div className="total-card" data-reveal>
              <span className="total-label">CUSTO MENSAL SEPARADO</span>
              <div className="old-total">R$ 5.550,90 <small>/ mês</small></div>
              <div className="saving-line"><span>ECONOMIA DE ATÉ</span><strong>99%</strong></div>
              <div className="arsenal-total">
                <span>COM O ARSENAL</span>
                <strong><small>a partir de</small>R$ 55 <i>/ mês</i></strong>
              </div>
              <Link className="primary-cta full" href="#planos">
                VER OS PLANOS <Arrow />
              </Link>
              <div className="safe-note"><Check /> PAGAMENTO SEGURO E ACESSO IMEDIATO</div>
            </div>
          </div>
        </div>
      </section>

      <section className="devices">
        <div className="shell devices-layout">
          <div className="devices-copy" data-reveal>
            <span className="section-index">03</span>
            <span className="eyebrow">LIBERDADE DE VERDADE</span>
            <div className="section-title">Sua central de IAs na palma da mão, a qualquer hora</div>
            <p>
              No celular ou no computador, o mesmo acesso e todas as ferramentas
              rodando na velocidade que você precisa. Sem quedas, sem travamentos
              e com sincronização instantânea.
            </p>
            <div className="device-benefits">
              <span><Check /> LOGIN ÚNICO</span>
              <span><Check /> SINCRONIZAÇÃO INSTANTÂNEA</span>
              <span><Check /> MOBILE FIRST</span>
            </div>
          </div>
          <div data-reveal><DeviceShowcase /></div>
        </div>
      </section>

      <section className="testimonials">
        <div className="shell">
          <SectionIntro
            index="04"
            eyebrow="PROVA SOCIAL"
            title={<>O que dizem<br />nossos clientes</>}
            copy="Prints reais de quem já usa o Arsenal todos os dias."
          />
        </div>
        <div className="testimonial-marquee">
          <div>
            {[...testimonials, ...testimonials].map((item, index) => (
              <article className="message-card" key={`${item.name}-${index}`}>
                <ImageSlot
                  className="testimonial-slot"
                  label={`Print real · ${item.name}`}
                  url={`https://cdn.arsenalhub.com/testimonials/review-${(index % testimonials.length) + 1}.png`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing" id="planos">
        <div className="shell">
          <SectionIntro
            index="05"
            eyebrow="ESCOLHA SUA POTÊNCIA"
            title={<>Escolha seu acesso</>}
            copy="Comece com o que você precisa hoje. Evolua quando quiser, sem fidelidade."
          />
          <div className="plan-grid">
            {plans.map((plan, index) => (
              <article
                className={`plan-card ${plan.popular ? "popular" : ""}`}
                data-reveal
                style={{ "--delay": `${index * 80}ms` } as CSSProperties}
                key={plan.name}
              >
                {plan.popular && <span className="popular-badge">MAIS POPULAR</span>}
                <div className="plan-top">
                  <span>PLANO / {String(index + 1).padStart(2, "0")}</span>
                  <div className="plan-name">{plan.name}</div>
                  <p>{plan.description}</p>
                </div>
                <div className="plan-price">
                  <span>R$</span><strong>{plan.price}</strong><i>/ mês</i>
                </div>
                <Link className="plan-cta" href="#planos">
                  ESCOLHER {plan.name} <Arrow />
                </Link>
                <div className="plan-features">
                  {plan.features.map((feature) => (
                    <span key={feature}><Check />{feature}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="security-strip" data-reveal>
            <span><svg viewBox="0 0 24 24"><path d="M12 3 20 6v6c0 5-3 8-8 10-5-2-8-5-8-10V6l8-3Z" /><path d="m8 12 3 3 5-6" /></svg><strong>Pagamento seguro</strong><small>Ambiente criptografado</small></span>
            <i />
            <span><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2-5.3M4 4v5h5" /><path d="M12 8v4l3 2" /></svg><strong>Acesso ilimitado</strong><small>Use quando e onde quiser</small></span>
          </div>
        </div>
      </section>

      <section className="guarantee">
        <div className="guarantee-grid" />
        <div className="shell guarantee-inner" data-reveal>
          <div className="seal">
            <svg viewBox="0 0 160 160" aria-hidden="true">
              <circle cx="80" cy="80" r="72" />
              <circle cx="80" cy="80" r="55" />
              <path d="m80 36 11 22 25 4-18 17 4 25-22-12-22 12 4-25-18-17 25-4 11-22Z" />
            </svg>
            <strong>7</strong><span>DIAS</span>
          </div>
          <div>
            <span className="eyebrow">RISCO ZERO</span>
            <div className="section-title">Garantia de 7 Dias</div>
            <p>
              Teste o Arsenal sem risco. Se dentro de 7 dias você sentir que não
              é para você, devolvemos 100% do seu investimento. Sem burocracia e
              sem perguntas.
            </p>
          </div>
          <Link className="secondary-cta" href="#planos">TESTAR SEM RISCO <Arrow /></Link>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="shell">
          <SectionIntro
            index="06"
            eyebrow="DÚVIDAS FREQUENTES"
            title={<>Tudo que você<br />precisa saber</>}
            copy="Ainda ficou com alguma dúvida? Nosso time está disponível nos canais oficiais."
          />
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <Button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  ariaLabel={`${openFaq === index ? "Fechar" : "Abrir"} resposta: ${question}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{question}</strong>
                  <i><b /><b /></i>
                </Button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="global-grid" />
        <div className="shell final-inner" data-reveal>
          <Wordmark />
          <div className="final-title">Seu próximo nível<br /><span>começa agora.</span></div>
          <p>Todas as ferramentas. Um único acesso. Sem pagar preços absurdos.</p>
          <Link className="primary-cta" href="#planos">QUERO ACESSAR O ARSENAL <Arrow /></Link>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <Wordmark />
          <div className="footer-nav">
            <Link href="#planos">Planos</Link>
            <Link href="#comparativo">Comparativo</Link>
            <Link href="#faq">F.A.Q.</Link>
            <Link href="#">Suporte</Link>
          </div>
          <div className="footer-status"><i /> TODOS OS SISTEMAS OPERACIONAIS</div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 ARSENAL. ALL RIGHTS RESERVED.</span>
          <span>PRIVACIDADE / TERMOS DE USO</span>
        </div>
      </footer>
    </main>
  );
}
