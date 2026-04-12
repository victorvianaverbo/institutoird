# Layout — LP Aulão Gratuito IRD

## Linguagem Visual (extraída do design aprovado)

### Paleta
| Token | Hex | Uso |
|---|---|---|
| --bg-cream | #F6F3ED | Fundo principal claro |
| --bg-beige | #EFEBE3 | Fundo secundário / ghost elements |
| --bg-white | #FFFFFF | Cards, inputs |
| --bg-navy | #0B0B3B | Seções escuras (hero, cta final) |
| --bg-navy-deep | #07072A | Variação mais profunda |
| --navy | #0B0B3B | Texto principal em seções claras |
| --navy-soft | #2E2E5E | Texto corpo |
| --navy-muted | #6B6B8D | Texto secundário, labels |
| --gold | #B8922D | Acentos primários, CTAs |
| --gold-brand | #D4A842 | Acentos brilhantes, destaques |
| --gold-dark | #9A7A24 | Hover em CTAs |
| --gold-light | rgba(212,168,66,.12) | Focus rings |
| --gold-glow | rgba(184,146,45,.25) | Sombras gold |
| --border-warm | #DDD8CE | Bordas em seções claras |
| --border-navy | rgba(255,255,255,.08) | Bordas em seções escuras |
| --white | #FFFFFF | Texto em seções escuras |
| --white-soft | rgba(255,255,255,.85) | Texto corpo em seções escuras |
| --white-muted | rgba(255,255,255,.5) | Texto secundário em escuras |

### Tipografia
- **Display:** DM Serif Display, serif — headlines, títulos, números decorativos
- **Body:** DM Sans, sans-serif — corpo, labels, botões, UI

### Spacing scale (clamp)
| Token | Valor |
|---|---|
| --space-xs | clamp(.5rem, 1vw, .75rem) |
| --space-sm | clamp(.75rem, 1.5vw, 1.25rem) |
| --space-md | clamp(1.5rem, 3vw, 2.5rem) |
| --space-lg | clamp(3rem, 6vw, 5rem) |
| --space-xl | clamp(5rem, 10vw, 8rem) |
| --space-2xl | clamp(7rem, 14vw, 12rem) |

### Max-widths
- Container padrão: 1360px
- Container narrow (texto): 680px
- Container mid (conteúdo): 1100px

### Animações globais
- Easing padrão: cubic-bezier(.16, 1, .3, 1)
- Duração entrada: 700ms
- Scroll reveal: opacity 0 → 1, translateY(28px → 0)
- Threshold do observer: 0.15

---

## Seção 1: Header

### Layout
- `position: absolute` sobre o hero (não ocupa espaço)
- `z-index: 10`
- Padding: 24px horizontal clamp(1.5rem, 5vw, 6rem)
- Logo IRD à esquerda, filtro branco (brightness(0) invert(1)), opacity .65, hover → 1
- Logo height: 36px
- Max-width do inner: 1360px, margin auto

---

## Seção 2: Hero (JÁ CONSTRUÍDA)

### Arquétipo e Constraints
- Arquétipo: **Split Assimétrico** — conteúdo à esquerda (~60%), formulário à direita (390px fixo)
- Constraints: **Dark Mode** (Cor), **Diagonal Divider** (Layout), **Hover Lift** (Interação)
- Justificativa: O split cria tensão entre a promessa (lado esquerdo emocional) e a ação (lado direito funcional). Dark mode comunica seriedade/autoridade. A diagonal quebra a rigidez e conduz o olhar para a seção seguinte.

### Conteúdo
- Badge: "7 de Maio · 20h · Ao vivo e gratuito" com dot pulsante
- Headline: "Os 3 erros que travam a sua aprovação"
- Careers: "como **Juiz**, **Promotor** ou **Defensor**" — DM Serif Display itálico, cargos em gold
- Author: "Aula ao vivo e gratuita com a **Juíza Larissa Ribeiro**" — barra gold à esquerda
- Sub: "Descubra o método de estudo que te coloca no caminho da aprovação na Magistratura, MP e Defensoria."
- Alerta: ícone SVG circle-info + "Sem gravação — só quem assistir ao vivo terá acesso."
- Formulário: Nome, E-mail, WhatsApp + CTA "Quero garantir minha vaga"

### Layout
- Background: var(--bg-navy)
- min-height: 100vh / 100dvh
- display: flex, align-items: center
- Padding: calc(80px + var(--space-lg)) clamp(1.5rem, 5vw, 6rem) calc(var(--space-lg) + 50px)
- Grid inner: `grid-template-columns: 1fr 390px`, gap var(--space-xl)
- overflow: hidden

### Tipografia
| Elemento | Fonte | Tamanho | Peso | Line-height | Letter-spacing | Cor |
|---|---|---|---|---|---|---|
| Badge | DM Sans | .75rem | 500 | — | .14em | --gold-brand |
| Headline | DM Serif Display | clamp(2.5rem, 5.5vw, 4.5rem) | 400 | 1.08 | -.02em | --white |
| Careers | DM Serif Display | clamp(1.25rem, 2.5vw, 1.85rem) | 400 italic | 1.3 | normal | --white-soft, strong: --gold-brand |
| Author | DM Sans | clamp(.95rem, 1.3vw, 1.15rem) | 400 | 1.6 | normal | --white-muted, strong: --white 700 |
| Sub | DM Sans | clamp(.95rem, 1.15vw, 1.05rem) | 400 | 1.75 | normal | --white-muted |
| Alert | DM Sans | .85rem | 500 | — | normal | --gold-brand, opacity .8 |
| Form heading | DM Serif Display | clamp(1.3rem, 1.8vw, 1.55rem) | 400 | — | normal | --navy |
| Labels | DM Sans | .72rem | 500 | — | .06em uppercase | --navy-muted |
| Inputs | DM Sans | .95rem | 400 | — | normal | --navy |
| CTA | DM Sans | .95rem | 700 | — | .03em | --bg-cream |
| Form note | DM Sans | .75rem | 400 | — | normal | --navy-muted |

### Elementos Visuais
- **Glow A:** radial-gradient rgba(184,146,45,.07) → transparent 60%. position absolute, top -20%, right -5%, 700×700px. animation: glowDrift 10s ease-in-out infinite (translate 0→-15px,15px, opacity 1→.6)
- **Glow B:** mesma estrutura, bottom -25%, left -8%, 500×500px, delay -5s, duration 13s
- **Diagonal bottom (hero__angle):** div absolute bottom -1px, left/right 0, height 50px, background var(--bg-cream), clip-path: polygon(0 100%, 100% 0, 100% 100%)
- **Form card:** background cream, border-radius 6px, padding clamp(1.75rem, 2.5vw, 2.25rem), shadow 0 24px 60px rgba(0,0,0,.3) + 0 4px 16px rgba(0,0,0,.15). ::before gold gradient bar top (left 24px, right 24px, height 3px, linear-gradient gold→gold-brand→gold, border-radius 0 0 3px 3px)
- **Author bar:** ::before absolute left 0, width 3px, top .35em bottom .35em, background --gold, border-radius 2px
- **Badge dot (hero__badge-live):** 7×7px circle gold-brand, animation livePulse 2s (box-shadow 0 0 0 0 → 0 0 0 6px transparent)

### Animações
- Hero NÃO tem animação de entrada — tudo visível imediatamente
- Pós-carregamento: glows flutuam (glowDrift), dot pulsa (livePulse)

### Interatividade
- Inputs focus: border-color --gold, box-shadow 0 0 0 3px var(--gold-light)
- CTA hover: background --gold-dark, translateY(-2px), box-shadow 0 8px 24px var(--gold-glow). 300ms ease
- CTA active: translateY(0), box-shadow 0 4px 12px

### Responsividade
- **≤1024px:** grid → 1fr, tudo centralizado. Form max-width 440px. gap var(--space-lg)
- **≤600px:** headline clamp(2rem, 8.5vw, 2.75rem). Padding top calc(70px + space-md). Form max-width 100%. Diagonal height 35px

---

## Seção 3: O que você vai descobrir (JÁ CONSTRUÍDA)

### Arquétipo e Constraints
- Arquétipo: **Bento Box** — células de tamanhos variados em zigzag (60/40, depois 40/60)
- Constraints: **Hover Lift** (Interação), **Stagger** (Movimento)
- Justificativa: O bento box cria ritmo visual sem monotonia. O zigzag guia o olhar em S. O stagger dá elegância à entrada dos cards.

### Conteúdo
- Título: "O que você vai aprender neste aulão"
- Card 01 (wide left): "Os 3 erros que travam concurseiros há anos" + descrição
- Card 02 (narrow right): "O método de estudo ativo baseado em neurociência" + descrição
- Card 03 (narrow left): "Como montar um cronograma realista com pouco tempo" + descrição
- Card 04 (wide right): "O passo a passo para a aprovação" + descrição

### Layout
- Background: var(--bg-cream)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Inner max-width: 1100px
- Grid: `repeat(5, 1fr)`, gap clamp(1rem, 1.5vw, 1.25rem)
- Card 1: grid-column 1/4 (60%), Card 2: 4/6 (40%), Card 3: 1/3 (40%), Card 4: 3/6 (60%)

### Tipografia
| Elemento | Fonte | Tamanho | Peso | Line-height | Cor |
|---|---|---|---|---|---|
| Título seção | DM Serif Display | clamp(1.75rem, 3.5vw, 2.75rem) | 400 | 1.2 | --navy |
| Número ghost | DM Serif Display | clamp(4rem, 6vw, 5.5rem) | 400 | 1 | --bg-beige |
| Card título | DM Serif Display | clamp(1.12rem, 1.5vw, 1.3rem) | 400 | 1.3 | --navy |
| Card texto | DM Sans | clamp(.88rem, 1.1vw, 1rem) | 400 | 1.7 | --navy-muted |

### Elementos Visuais
- Título: padding-bottom var(--space-md), ::after gold line 48×2px centered, opacity .6
- Cards: bg white, border 1px solid --border-warm, border-radius 4px, padding clamp(1.5rem, 2.5vw, 2.25rem)
- Números ghost: position absolute top -6px right 14px, pointer-events none
- Cards 1 e 4: ::after gold left accent bar (3px wide, top/bottom 20px, opacity .35, border-radius 0 3px 3px 0)

### Animações
- Scroll reveal com stagger: --delay 0s, .1s, .15s, .25s
- transition: opacity .7s cubic-bezier(.16,1,.3,1) var(--delay), transform .7s mesma curva

### Interatividade
- Card hover: translateY(-4px), box-shadow 0 16px 48px rgba(11,11,59,.06). 400ms cubic-bezier(.16,1,.3,1)

### Responsividade
- **≤1024px:** grid 1fr 1fr, todos grid-column auto
- **≤600px:** grid 1fr, todos grid-column auto

---

## Seção 4: Quem vai conduzir este aulão

### Arquétipo e Constraints
- Arquétipo: **Split Vertical com Overlap** — foto à esquerda com moldura/acento, texto à direita com elementos que cruzam a divisão
- Constraints: **Imagem Recortada** (Mídia) — foto com clip-path suave ou border-radius assimétrico, **Sticky Element** (Layout) — foto gruda enquanto texto rola (desktop), **Fade Up** (Movimento)
- Justificativa: A autoridade da Dra. Larissa precisa de presença visual forte. O split com overlap cria conexão entre imagem e texto. O sticky mantém o rosto visível enquanto a história é contada. Imagem recortada dá personalidade sem parecer stock.

### Conteúdo
- Título: "Dra. Larissa Ribeiro"
- Subtítulo: "Juíza de Direito"
- Parágrafo 1: "Estudou da maneira errada por 1 ano e meio — mãe solteira, advogando de segunda a sexta, estudando à noite com o tempo que sobrava. Não sabia da nota de corte."
- Parágrafo 2: "Até que parou, analisou cada erro e descobriu o método que realmente funciona. Foi aprovada. Hoje ensina concurseiros a estudar com eficiência real e método comprovado."

### Layout
- Background: var(--bg-white)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Inner max-width: 1100px, margin auto
- Grid: `grid-template-columns: 1fr 1.3fr`, gap clamp(3rem, 6vw, 5rem)
- Lado esquerdo (imagem): position sticky, top calc(50vh - 200px), align-self start (só desktop)
- Lado direito (texto): padding-top var(--space-lg) para que o texto comece mais abaixo que a imagem, criando assimetria vertical

### Tipografia
| Elemento | Fonte | Tamanho | Peso | Line-height | Letter-spacing | Cor |
|---|---|---|---|---|---|---|
| Título "Dra. Larissa Ribeiro" | DM Serif Display | clamp(2rem, 4vw, 3.25rem) | 400 | 1.15 | -.01em | --navy |
| Subtítulo "Juíza de Direito" | DM Sans | clamp(.75rem, .9vw, .85rem) | 500 | — | .18em uppercase | --gold |
| Parágrafos | DM Sans | clamp(1.05rem, 1.3vw, 1.2rem) | 400 | 1.85 | normal | --navy-soft |

### Elementos Visuais
- **Imagem (larissa.webp):** usar `../pagina-vendas-ebook/larissa.webp`. Aspect-ratio: 4/5. border-radius: 6px 6px 80px 6px (assimétrico — canto inferior direito arredondado). width 100%, max-width 420px. Overflow hidden
- **Moldura decorativa:** ::before no container da imagem — retângulo 100% width × 100% height, position absolute, top 12px, left 12px, border 2px solid var(--gold), border-radius mesmo da imagem, opacity .2, z-index -1. Cria efeito de sombra/moldura deslocada
- **Gold accent dot:** antes do subtítulo — pseudo-element circulo 6px gold, margin-right 8px, inline-flex
- **Linha vertical decorativa:** entre imagem e texto (desktop): ::after no inner, position absolute, left 50% do gap, top 10%, bottom 10%, width 1px, background linear-gradient(to bottom, transparent, var(--border-warm) 20%, var(--border-warm) 80%, transparent)
- **Quote mark:** parágrafo 2 começa com aspas decorativas — ::before content "❝" em DM Serif Display, font-size 3rem, color var(--gold), opacity .2, position absolute, top -.5em, left -1.5rem

### Animações
- Imagem: js-reveal fade-up 700ms, threshold 0.15
- Subtítulo: js-reveal delay .1s
- Título: js-reveal delay .15s
- Parágrafo 1: js-reveal delay .2s
- Parágrafo 2: js-reveal delay .3s
- Moldura decorativa: animação pós-reveal — opacity 0 → .2 com 500ms delay extra após a imagem aparecer

### Interatividade
- Imagem hover (desktop): scale(1.03), transition 600ms cubic-bezier(.16,1,.3,1). Overflow hidden no container garante que não vaza
- Sticky behavior (desktop ≥1025px): imagem gruda no viewport enquanto texto ao lado rola. Cria efeito cinematográfico

### Responsividade
- **≤1024px:** Grid → 1fr. Imagem centralizada max-width 360px margin auto. Sticky desativado (position static). Moldura decorativa escondida. Texto alinhado centro
- **≤600px:** Imagem max-width 280px. Border-radius 6px 6px 60px 6px. Título clamp(1.75rem, 5vw, 2.25rem)

---

## Seção 5: Para quem é este aulão

### Arquétipo e Constraints
- Arquétipo: **Progressive Reveal** — items aparecem um a um conforme scroll, com stagger acentuado
- Constraints: **Dark Mode** (Cor) — seção navy para contraste dramático com a seção anterior clara, **Diagonal Divider** (Layout) — clip-path no topo como o hero faz, criando continuidade visual, **Stagger** (Movimento) — items revelam em cascata, **Selective Color** (Cor) — texto branco muted, com palavras-chave em gold
- Justificativa: A seção "pra quem é" precisa que cada item ressoe individualmente. O progressive reveal força a leitura item a item. O dark mode cria ruptura visual. O clip-path diagonal conecta com o hero, formando um arco visual (navy → cream → white → cream → navy).

### Conteúdo
- Título: "Este aulão é pra você se..."
- Items:
  1. "Quer ser Juiz, Promotor ou Defensor e não sabe por onde começar"
  2. "Já estuda há meses ou anos mas não sente que avança"
  3. "Trabalha e precisa encaixar o estudo no pouco tempo que tem"
  4. "Já tentou cursos caros e abandonou no meio"
  5. "Está retomando os estudos depois de uma pausa e quer recomeçar do jeito certo"
  6. "Quer entender o que os aprovados fazem de diferente — e por que você ainda não chegou lá"

### Layout
- Background: var(--bg-navy)
- clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%) — ângulo suave no topo
- margin-top: -50px (para sobrepor ângulo na seção anterior)
- Padding: calc(var(--space-2xl) + 50px) clamp(1.5rem, 5vw, 6rem) var(--space-2xl)
- Inner max-width: 760px, margin auto (narrow — centrado para leitura)
- Items: display flex, flex-direction column, gap 0. Cada item separado por border-bottom 1px solid rgba(255,255,255,.06)
- Cada item: padding 28px 0, display grid, grid-template-columns: 40px 1fr, gap 16px, align-items baseline

### Tipografia
| Elemento | Fonte | Tamanho | Peso | Line-height | Letter-spacing | Cor |
|---|---|---|---|---|---|---|
| Título | DM Serif Display | clamp(1.75rem, 3.5vw, 2.75rem) | 400 | 1.2 | normal | --white |
| "se..." (itálico) | DM Serif Display | herdado | 400 italic | herdado | normal | --gold-brand |
| Número do item (01-06) | DM Sans | .75rem | 500 | 1 | .08em | --gold, opacity .4 |
| Texto do item | DM Sans | clamp(1.05rem, 1.3vw, 1.18rem) | 400 | 1.7 | normal | --white-soft |
| Palavras-destaque | DM Sans | herdado | 700 | herdado | .01em | --white |

### Palavras a destacar em cada item (bold + --white)
1. "**Juiz, Promotor ou Defensor**"
2. "**meses ou anos**"
3. "**pouco tempo**"
4. "**cursos caros**"
5. "**recomeçar do jeito certo**"
6. "**o que os aprovados fazem de diferente**"

### Elementos Visuais
- **Glow decorativo:** radial-gradient rgba(184,146,45,.05), position absolute, top 20%, left -15%, 600×600px, pointer-events none, animação glowDrift reutilizada
- **Título "se...":** tag `<em>` envolvendo "se...", estilizada com font-style italic e color --gold-brand
- **Numeração:** cada item tem número (01–06) à esquerda, DM Sans .75rem, font-weight 500, color gold opacity .4. Alinhado ao topo do texto
- **Linha divisória entre items:** border-bottom 1px solid rgba(255,255,255,.06). Último item sem border

### Animações
- Título: js-reveal fade-up 700ms
- Items: js-reveal com stagger agressivo — delays: 0s, .08s, .16s, .24s, .32s, .4s
- Cada item anima independente (cada um é um .js-reveal)
- Transição dos números: counter-like effect opcional — número tem opacity .4 no estado final, partindo de opacity 0

### Interatividade
- Item hover (desktop): background rgba(255,255,255,.02), transition 300ms ease. Padding horizontal 20px com margin horizontal -20px (para o hover estender sem afetar layout)
- Número no hover: opacity .4 → .7, transition 300ms

### Responsividade
- **≤1024px:** Inner max-width 620px
- **≤600px:** Grid items → 1fr (sem número à esquerda, número fica acima do texto). Padding items 20px 0. Título clamp(1.5rem, 6vw, 2rem). Clip-path height reduzido para 35px

---

## Seção 6: CTA Final

### Arquétipo e Constraints
- Arquétipo: **Hero Dominante** — seção de impacto com foco absoluto na conversão, mínimo de elementos
- Constraints: **Dark Mode** (Cor) — continuidade do navy da seção anterior (sem transição brusca), **Gradiente Animado** (Cor) — glow sutil que se move lentamente, **Hover Glow** (Interação) — CTA com glow radiante no hover
- Justificativa: O CTA final precisa de máximo impacto com mínima distração. O Hero Dominante garante foco. A continuidade navy cria bloco visual coeso com a seção anterior. O gradiente animado mantém a seção viva sem competir com o conteúdo.

### Conteúdo
- Headline: "7 de Maio, 20h. Só ao vivo. Sem gravação."
- Texto de apoio: "Esta é a sua chance de aprender, de graça, o método que a Juíza Larissa usou para sair do zero e conquistar a aprovação. Não vai ter replay. Quem não estiver ao vivo, não terá acesso a este conteúdo."
- CTA: "Quero garantir minha vaga"
- Formulário: Nome, E-mail, WhatsApp (mesma estrutura do hero)

### Layout
- Background: var(--bg-navy-deep) (#07072A) — tom mais profundo que a seção anterior para criar progressão
- SEM clip-path no topo (transição suave navy → navy-deep via gradiente)
- Transição topo: ::before pseudo-element com linear-gradient(var(--bg-navy), var(--bg-navy-deep)), height 120px, position absolute top 0
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Inner max-width: 760px, margin auto, text-align center
- Layout vertical: headline → texto → form card (centralizado, max-width 420px, margin 0 auto)
- Gap entre headline e texto: var(--space-md)
- Gap entre texto e form: var(--space-lg)

### Tipografia
| Elemento | Fonte | Tamanho | Peso | Line-height | Letter-spacing | Cor |
|---|---|---|---|---|---|---|
| Headline | DM Serif Display | clamp(2rem, 4vw, 3.25rem) | 400 | 1.15 | -.01em | --white |
| "Sem gravação." | herdado | herdado | herdado | herdado | herdado | --gold-brand (via span) |
| Texto apoio | DM Sans | clamp(1.05rem, 1.3vw, 1.2rem) | 400 | 1.8 | normal | --white-muted |
| "de graça" | herdado | herdado | 700 | herdado | normal | --white |
| "Não vai ter replay." | herdado | herdado | 700 | herdado | normal | --gold-brand |

### Elementos Visuais
- **Glow animado central:** radial-gradient rgba(184,146,45,.06) → transparent, 800×800px, position absolute, top 50% left 50% translate(-50%,-50%). animation: ctaGlow 15s ease-in-out infinite (scale 1→1.15→1, opacity 1→.5→1)
- **Linha decorativa acima da headline:** width 40px, height 1px, background var(--gold), opacity .35, margin 0 auto var(--space-md), display block
- **Form card:** MESMA estrutura do hero form card — background cream, gold bar top, shadow. Mas com adição: border 1px solid rgba(212,168,66,.1) para um toque mais refinado contra o navy-deep

### Animações
- Headline: js-reveal fade-up 700ms
- Texto: js-reveal delay .1s
- Form card: js-reveal delay .2s com scale(0.97) → scale(1) adicional (cresce sutilmente ao entrar)
- Glow: ctaGlow loop infinito 15s

### Interatividade
- CTA hover: background --gold-dark, translateY(-2px), box-shadow 0 8px 24px var(--gold-glow) + 0 0 60px rgba(184,146,45,.15). 300ms ease. O glow extra de 60px cria efeito radiante
- CTA active: translateY(0), box-shadow reduzido

### Responsividade
- **≤1024px:** Inner max-width 600px. Form max-width 400px
- **≤600px:** Headline clamp(1.6rem, 6vw, 2rem). Form max-width 100%. Gradiente topo height 80px

---

## Seção 7: FAQ

### Arquétipo e Constraints
- Arquétipo: **Reveal on Demand** — accordion custom onde cada resposta é revelada com interação
- Constraints: **Clip Reveal** (Movimento) — resposta expande com max-height + clip suave em vez de display toggle brusco, **Hover Underline** (Interação) — pergunta tem underline animado no hover, **Selective Color** (Cor) — fundo cream, perguntas navy, respostas navy-muted
- Justificativa: FAQ precisa ser funcional mas elegante. O clip reveal é mais sofisticado que show/hide. O hover underline convida ao clique. O selective color mantém hierarquia clara.

### Conteúdo
- Título: "Dúvidas frequentes"
- Pergunta 1: "É gratuito mesmo?" → "Sim. 100% gratuito. Você só precisa se inscrever para receber o link de acesso no dia do aulão."
- Pergunta 2: "Serve pra quem está começando agora?" → "Sim. O aulão foi pensado tanto para quem está começando do zero quanto para quem já estuda mas não vê progresso."
- Pergunta 3: "Vai ter gravação?" → "Não. O aulão será transmitido ao vivo pelo YouTube e não ficará disponível depois. Se você não assistir ao vivo, não terá acesso ao conteúdo."

### Layout
- Background: var(--bg-cream)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Inner max-width: 720px, margin auto
- Título centralizado com gold underline (mesma linguagem do "descobrir")
- Lista de items: display flex, flex-direction column, gap 0
- Cada item: border-bottom 1px solid var(--border-warm). Primeiro item tem border-top também
- Padding do item: 0 (o summary e content têm padding próprio)

### Estrutura HTML
```html
<details class="faq__item">
  <summary class="faq__question">
    <span>Texto da pergunta</span>
    <span class="faq__icon" aria-hidden="true"></span>
  </summary>
  <div class="faq__answer">
    <p>Texto da resposta</p>
  </div>
</details>
```

### Tipografia
| Elemento | Fonte | Tamanho | Peso | Line-height | Letter-spacing | Cor |
|---|---|---|---|---|---|---|
| Título "Dúvidas frequentes" | DM Serif Display | clamp(1.75rem, 3.5vw, 2.75rem) | 400 | 1.2 | normal | --navy |
| Pergunta | DM Sans | clamp(1rem, 1.2vw, 1.12rem) | 500 | 1.5 | normal | --navy |
| Resposta | DM Sans | clamp(.95rem, 1.1vw, 1.05rem) | 400 | 1.75 | normal | --navy-muted |

### Elementos Visuais
- **Ícone do accordion:** Não usar seta/chevron genérico. Usar duas linhas que formam + quando fechado e − quando aberto. Cada linha: 14px × 2px, background --navy, border-radius 1px. Linha horizontal sempre visível. Linha vertical rotaciona 90° → 0° ao abrir. Transition rotate 400ms cubic-bezier(.16,1,.3,1)
- **Título:** padding-bottom var(--space-md), ::after gold line 48×2px centered, opacity .6 (mesma linguagem)
- **Primeiro item:** `open` por padrão (atributo no HTML)

### Animações
- Título: js-reveal
- Items: js-reveal com stagger .05s cada
- Resposta abrir/fechar: max-height 0 → 300px (CSS transition), overflow hidden, transition max-height 500ms cubic-bezier(.16,1,.3,1). Padding-bottom 0 → 24px com transição
- Ícone: linha vertical rotation 90deg → 0deg, 400ms cubic-bezier(.16,1,.3,1)

### Interatividade
- **Summary hover:** color --navy (mantém), cursor pointer. Underline animado — ::after no span da pergunta, width 0 → 100% no hover, height 1px, background --gold, bottom -2px, transition width 400ms cubic-bezier(.16,1,.3,1)
- **Summary focus-visible:** outline 2px solid --gold, offset 3px
- **Summary padding:** 24px 0
- **Answer padding:** 0 0 24px 0

### Responsividade
- **≤600px:** Título clamp(1.5rem, 5vw, 2rem). Summary padding 20px 0. Answer padding 0 0 20px 0. Pergunta font-size clamp(.95rem, 1vw, 1rem)

---

## Seção 8: Rodapé

### Arquétipo e Constraints
- Arquétipo: **Minimal** — pouquíssimos elementos, máximo respiro
- Constraints: **Low Contrast** (Cor) — texto muted sobre cream
- Justificativa: O rodapé não compete com o conteúdo. Presença mínima, apenas legal/institucional.

### Conteúdo
- Texto: "InstitutoIRD — Todos os direitos reservados."

### Layout
- Background: var(--bg-cream)
- Padding: var(--space-lg) clamp(1.5rem, 5vw, 6rem)
- Border-top: 1px solid var(--border-warm)
- Inner max-width: 1360px, margin auto
- text-align: center

### Tipografia
| Elemento | Fonte | Tamanho | Peso | Line-height | Cor |
|---|---|---|---|---|---|
| Texto | DM Sans | .8rem | 400 | 1.5 | --navy-muted |

### Elementos Visuais
- Nenhum elemento decorativo. Limpeza total.

---

## Elementos Encantadores (distribuídos na página)

### Micro-interação: Scroll progress indicator
- Barra fixa no topo da página, height 2px, background linear-gradient(90deg, var(--gold), var(--gold-brand))
- Width animada via CSS scroll-timeline ou JS (animation-timeline: scroll() se suportado, fallback JS)
- z-index 100, position fixed top 0
- Só aparece após scroll > 100px (opacity 0 → 1 com transition)

### Detalhe: Noise texture
- Body ::after com background-image noise SVG em data URI, opacity .015, position fixed, inset 0, pointer-events none, z-index 9999
- Adiciona textura sutil a toda a página, semelhante a papel/grão fotográfico
- mix-blend-mode: overlay

### Micro-interação: Form inputs
- Ao focar um input, o label acima faz translate sutil translateY(-2px) e cor muda de --navy-muted para --gold, transition 200ms ease
- Inputs preenchidos mantêm o label em --gold (usar :not(:placeholder-shown))

### Detalhe: CTA pulse
- Em ambos os CTAs (hero e final), uma sombra gold faz um pulse sutil a cada 4s para chamar atenção:
- @keyframes ctaPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(184,146,45,.3); } 50% { box-shadow: 0 0 0 8px rgba(184,146,45,0); } }
- animation: ctaPulse 4s ease-in-out infinite 3s (delay 3s para não competir com o carregamento)

### Detalhe: Seção transitions
- Todas as transições entre seções são intencionais:
  - Hero (navy) → Descobrir (cream): diagonal clip-path ✓
  - Descobrir (cream) → Autora (white): sem transição (neutro)
  - Autora (white) → Para quem (navy): diagonal clip-path
  - Para quem (navy) → CTA Final (navy-deep): gradiente suave
  - CTA Final (navy-deep) → FAQ (cream): sem clip-path, contraste direto
  - FAQ (cream) → Rodapé (cream): border-top sutil

---

## Resumo de Arquétipos e Constraints

| Seção | Arquétipo | Constraints |
|---|---|---|
| Hero | Split Assimétrico | Dark Mode, Diagonal Divider, Hover Lift |
| Descobrir | Bento Box | Hover Lift, Stagger |
| Autora | Split Vertical com Overlap | Imagem Recortada, Sticky Element, Fade Up |
| Para quem | Progressive Reveal | Dark Mode, Diagonal Divider, Stagger, Selective Color |
| CTA Final | Hero Dominante | Dark Mode, Gradiente Animado, Hover Glow |
| FAQ | Reveal on Demand | Clip Reveal, Hover Underline, Selective Color |
| Rodapé | Minimal | Low Contrast |

7 seções, 7 arquétipos diferentes. Nenhuma repetição consecutiva. 6 categorias de constraints representadas.
