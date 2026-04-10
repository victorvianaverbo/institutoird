# Layout Specification — Pagina de Vendas Ebook

## Design System

### Paleta de Cores
- `--bg-cream`: #F6F3ED (fundo principal quente)
- `--bg-beige`: #EFEBE3 (fundo secundario)
- `--bg-white`: #FFFFFF (fundo limpo)
- `--bg-navy`: #0B0B3B (fundo escuro premium)
- `--bg-navy-deep`: #07072A (variacao mais profunda)
- `--navy`: #0B0B3B (texto principal)
- `--navy-soft`: #2E2E5E (texto secundario)
- `--navy-muted`: #6B6B8D (texto terciario/captions)
- `--gold`: #B8922D (acento principal)
- `--gold-brand`: #D4A842 (acento marca)
- `--gold-dark`: #9A7A24 (hover/active)
- `--gold-light`: rgba(212, 168, 66, .12) (highlight sutil)
- `--gold-glow`: rgba(184, 146, 45, .25) (shadow CTA)
- `--border-warm`: #DDD8CE (divisores em fundo claro)
- `--border-navy`: rgba(255, 255, 255, .08) (divisores em fundo escuro)
- `--white`: #FFFFFF
- `--white-soft`: rgba(255, 255, 255, .85) (texto body em navy bg)
- `--white-muted`: rgba(255, 255, 255, .5) (captions em navy bg)

### Font Pairing
- Heading: `DM Serif Display`, serif (Google Fonts)
- Body: `DM Sans`, sans-serif (Google Fonts, weights: 300, 400, 500, 700)
- MANTER em toda a pagina sem excecao

### Spacing Scale
- `--space-xs`: clamp(.5rem, 1vw, .75rem)
- `--space-sm`: clamp(.75rem, 1.5vw, 1.25rem)
- `--space-md`: clamp(1.5rem, 3vw, 2.5rem)
- `--space-lg`: clamp(3rem, 6vw, 5rem)
- `--space-xl`: clamp(5rem, 10vw, 8rem)
- `--space-2xl`: clamp(7rem, 14vw, 12rem)

### Container
- Max-width padrao: 1360px
- Padding lateral: clamp(1.5rem, 5vw, 6rem)
- Container estreito (texto): 680px
- Container medio: 960px

### Breakpoints
- Mobile: max-width 480px
- Tablet: max-width 768px
- Desktop: min-width 769px

### Efeito Global: Noise Texture
- Aplicar um pseudo-element `::after` no body com background-image de SVG noise sutil
- Opacity: 0.015 em fundos claros, 0.03 em fundos navy
- Pointer-events: none
- Isso adiciona textura premium imperceptivel mas que "aquece" o design

---

## Secao 1: Hero

### Arquetipo e Constraints
- Arquetipo: Type Hero — tipografia como protagonista
- Constraints: Mixed Weights (Tipografia), Selective Color (Cor), Fade Up (Movimento)
- Justificativa: Para ebook de R$27, o impacto vem da palavra, nao da imagem. A headline massiva cria autoridade instantanea. O layout assimetrico evita o cliche do hero centralizado.

### Conteudo
- Eyebrow: "198 paginas. 42 capitulos. Um roteiro."
- Headline: "Voce estuda ha anos / e ainda se sente / sem direcao?" (quebras intencionais)
- Subheadline: "O problema nunca foi falta de conteudo. Foi falta de metodo."
- Detalhe: "Este guia e o roteiro que ninguem te deu — do primeiro dia de estudo ate o dia da sua posse."
- CTA: "Quero o metodo agora — R$27"
- Garantia: "Garantia incondicional de 7 dias. Nao gostou, devolvemos cada centavo."

### Layout
- Background: var(--bg-cream)
- Min-height: 100vh (100dvh)
- Display: flex, align-items: flex-end
- Padding: var(--space-lg) clamp(1.5rem, 5vw, 6rem), padding-bottom: var(--space-lg)
- Inner max-width: 1360px, margin: 0 auto

**Estrutura vertical:**
1. Linha decorativa dourada (60px x 2px) — topo absoluto
2. Eyebrow text
3. Headline (ocupa toda a largura)
4. Bottom area: grid 2 colunas (1fr 1fr), gap var(--space-lg), align-items: end
   - Coluna esquerda: subheadline + detalhe
   - Coluna direita: CTA + garantia (text-align: right)

### Tipografia
- Eyebrow: DM Sans, 500, clamp(.75rem, 1vw, .875rem), letter-spacing: .18em, uppercase, color: var(--gold)
- Headline: DM Serif Display, 400, clamp(2.5rem, 7vw, 6.5rem), line-height: 1.05, letter-spacing: -.02em, color: var(--navy)
- Headline accent ("sem direcao?"): color: var(--gold), font-style: italic
- Subheadline: DM Sans, 400, clamp(1rem, 1.4vw, 1.25rem), line-height: 1.6, color: var(--navy-soft)
- Subheadline strong: color: var(--navy), font-weight: 700
- Detalhe: DM Sans, 400, clamp(.875rem, 1.1vw, 1rem), color: var(--navy-muted)
- CTA: DM Sans, 700, clamp(.875rem, 1.1vw, 1rem), letter-spacing: .04em
- Garantia: DM Sans, 400, .8rem, line-height: 1.5, color: var(--navy-muted)

### Cores
- Background: var(--bg-cream)
- CTA normal: background var(--gold), color var(--bg-cream), border-radius: 2px, padding: 1.15em 2.5em
- CTA hover: background var(--gold-dark), translateY(-2px), box-shadow: 0 8px 30px var(--gold-glow)
- CTA active: translateY(0), box-shadow: 0 4px 15px var(--gold-glow)

### Elementos Visuais
- Linha decorativa: 60px x 2px, background var(--gold), position absolute top area
- Underline animado no accent: pseudo-element ::after, height 3px, background var(--gold), animacao lineGrow 1s 1.4s ease-out

### Animacoes
- Linha decorativa: fadeIn .6s .2s ease-out forwards
- Eyebrow: fadeUp .8s .3s ease-out forwards (translateY: 24px → 0, opacity: 0 → 1)
- Headline: fadeUp .9s .5s ease-out forwards
- Bottom area: fadeUp .8s .9s ease-out forwards
- Underline accent: lineGrow 1s 1.4s ease-out forwards (width: 0 → 100%)
- NENHUMA animacao de entrada (pre-load). Tudo dispara apos page load.

### Responsividade
**Tablet (max-width 768px):**
- align-items: center (hero centralizado verticalmente)
- Headline: clamp(2.2rem, 10vw, 3.5rem)
- Bottom grid: 1 coluna
- CTA area: text-align left, CTA width 100%

**Mobile (max-width 480px):**
- Headline: clamp(1.8rem, 9vw, 2.5rem)
- Eyebrow: .7rem

---

## Secao 2: Espelho

### Arquetipo e Constraints
- Arquetipo: Contained Center — container estreito, maximo respiro
- Constraints: Selective Color (Cor), View Timeline (Movimento)
- Justificativa: Texto emocional precisa de container estreito para forcar leitura linear. O espaco branco ao redor cria intimidade — como ler uma carta.

### Conteudo
- Titulo: "Se voce se reconhece aqui, este guia foi escrito pra voce."
- P1: "Voce abre o material as 22h com o olho fechando. Estuda 40 minutos. Sente culpa. Dorme prometendo que amanha sera diferente."
- Destaque: "Amanha nunca e diferente."
- P2: "Voce ja pesquisou 'como estudar para concurso' mais vezes do que gostaria de admitir. Ja baixou cronograma bonito que abandonou em 3 dias. Ja assinou curso caro que virou uma lista de PDFs intocados."
- P3: "Voce nao e preguicoso(a). Voce nao e incapaz. Voce esta sem direcao."
- Fechamento: "E sem direcao, ate a pessoa mais dedicada do mundo fica girando em circulos."

### Layout
- Background: var(--bg-white)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Divisor topo: pseudo-element ::before, 1px x 80px, background var(--border-warm), centered

**Inner:**
- Max-width: 680px, margin: 0 auto
- Titulo centralizado, conteudo left-aligned

### Tipografia
- Titulo: DM Serif Display, 400, clamp(1.75rem, 3.5vw, 2.75rem), line-height: 1.2, text-align: center, color: var(--navy)
- Body: DM Sans, 400, clamp(1rem, 1.3vw, 1.125rem), line-height: 1.8, color: var(--navy-soft)
- Lead (P1): clamp(1.05rem, 1.4vw, 1.2rem), color: var(--navy)
- Destaque: DM Serif Display, 400, clamp(1.5rem, 2.8vw, 2.25rem), color: var(--gold), text-align: center
- Strong: color var(--navy), font-weight: 700
- Fechamento: font-style: italic, color var(--navy-muted)

### Cores
- Background: var(--bg-white)
- Destaque: var(--gold)
- Separadores do destaque: 40px x 1px, var(--border-warm), margin auto

### Elementos Visuais
- Linha vertical topo: 1px x 80px centered, transicao da secao anterior
- Destaque "Amanha nunca e diferente": separadores horizontais 40px acima e abaixo, padding vertical var(--space-md)
- Fechamento: border-left 3px solid var(--gold), padding-left var(--space-md)

### Animacoes
- Se browser suporta `animation-timeline: view()`: cada paragrafo faz fadeUp .6s ease-out, animation-range: entry 0% entry 40%
- Fallback: titulo fadeUp .8s .2s, paragrafos fadeUp .6s com stagger de .2s entre cada (delays: .3s, .5s, .7s, .9s, 1.1s)

### Responsividade
**Mobile (max-width 768px):**
- Destaque: clamp(1.25rem, 5vw, 1.75rem)

---

## Secao 3: O Problema Real (FUNDO NAVY)

### Arquetipo e Constraints
- Arquetipo: Split Assimetrico (65/35) — texto dominante a esquerda, bloco de impacto a direita
- Constraints: Color Blocking (Cor), Text Reveal (Movimento), Overlap Elements (Layout)
- Justificativa: A transicao para fundo escuro marca uma mudanca de tom — estamos confrontando. O split assimetrico cria tensao. A coluna direita com as "mentiras" em destaque funciona como um punch visual.

### Conteudo
**Coluna esquerda (65%):**
- Titulo: "Mais conteudo nao vai resolver. Voce ja sabe disso."
- P1: "Voce nao precisa de mais 500 horas de videoaula. Nao precisa de mais um curso com 47 modulos que voce nunca vai terminar."
- P2: "O mercado de concursos te vendeu uma mentira: que o problema era falta de CONTEUDO. Entao voce comprou Gran, Estrategia, MEGE, CP Iuris. Investiu dinheiro que nao sobrava. E nada mudou."
- P3: "Porque o problema real sempre foi outro."
- P4: "Voce nao sabe O QUE estudar primeiro. Nao sabe em que ORDEM. Nao sabe por quanto TEMPO. Nao sabe COMO revisar. Nao sabe se esta no caminho certo ou desperdicando meses da sua vida."
- P5: "Falta de metodo nao se resolve com mais material. Se resolve com um roteiro claro que te diga: faz isso, agora, nessa ordem."

**Coluna direita (35%):**
- Bloco visual de impacto: lista vertical com as palavras que representam o que falta
  - "O QUE estudar"
  - "Em que ORDEM"
  - "Por quanto TEMPO"
  - "COMO revisar"
  - "Se esta no caminho CERTO"
- Cada item aparece como um bloco translucido empilhado verticalmente, criando um efeito de "pilha de duvidas"

### Layout
- Background: var(--bg-navy)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Display: grid, grid-template-columns: 1.8fr 1fr, gap: var(--space-xl), align-items: center
- Max-width container: 1360px, margin: 0 auto

**Transicao de entrada:** clip-path diagonal sutil — a secao comeca com um angulo de 2deg no topo, criando uma transicao nao-retangular com a secao anterior
- CSS: clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%)
- Compensar com margin-top: -40px

**Coluna direita — blocos empilhados:**
- Cada bloco: background rgba(255, 255, 255, .04), border: 1px solid rgba(255, 255, 255, .06), border-radius: 4px
- Padding: 20px 28px
- Margin-bottom: 12px
- A cada bloco, o opacity aumenta: .5, .6, .7, .85, 1
- A palavra em CAPS fica em var(--gold-brand)
- Font: DM Sans, 500, clamp(.9rem, 1.1vw, 1rem)
- Ultimo bloco: border-color var(--gold), background rgba(184, 146, 45, .08) — destaque

### Tipografia
- Titulo: DM Serif Display, 400, clamp(2rem, 4vw, 3.25rem), line-height: 1.15, color: var(--white)
- Body: DM Sans, 400, clamp(1rem, 1.2vw, 1.1rem), line-height: 1.8, color: var(--white-soft)
- P3 "problema real sempre foi outro": DM Sans, 700, color var(--gold-brand), font-size mesmo do body
- Palavra "CONTEUDO" no P2: DM Sans, 700, color var(--white), letter-spacing .05em
- Blocos direita: DM Sans, 500, clamp(.9rem, 1.1vw, 1rem), color var(--white-soft)
- Blocos direita CAPS: color var(--gold-brand), font-weight 700

### Cores
- Background: var(--bg-navy)
- Noise texture overlay: opacity .03
- Titulo: var(--white)
- Body: var(--white-soft)
- Destaques: var(--gold-brand)
- Blocos: bg rgba(255,255,255,.04), border rgba(255,255,255,.06)
- Ultimo bloco: border var(--gold), bg rgba(184,146,45,.08)

### Elementos Visuais
- Clip-path diagonal no topo da secao
- Glow sutil: radial-gradient circular posicionado no canto superior direito, de rgba(184,146,45,.06) para transparent, size 600px — cria um "brilho" dourado sutil no navy
- Noise texture como pseudo-element

### Animacoes
- Titulo: fadeUp .8s ease-out, triggered via IntersectionObserver ou scroll-driven at 20% viewport
- Paragrafos: fadeUp .6s ease-out, stagger .15s
- Blocos direita: stagger animation — cada bloco faz fadeUp + fadeIn com delay progressivo (.1s, .25s, .4s, .55s, .7s), triggered quando a secao entra no viewport
- Ultimo bloco: apos todos aparecerem, pulsa uma vez com scale(1.02) + border-glow por .4s

### Interatividade
- Nenhuma interacao hover nos blocos (nao sao clicaveis)

### Responsividade
**Tablet (max-width 768px):**
- Grid: 1 coluna
- Blocos direita ficam abaixo do texto, em grid 2 colunas
- Clip-path topo: polygon(0 20px, 100% 0, 100% 100%, 0 100%)

**Mobile (max-width 480px):**
- Blocos: 1 coluna
- Titulo: clamp(1.6rem, 7vw, 2.2rem)

---

## Secao 4: A Solucao

### Arquetipo e Constraints
- Arquetipo: Single Focus — um unico elemento de atencao por vez
- Constraints: Overlap Elements (Layout), Scale In (Movimento), Noise Texture (Efeitos)
- Justificativa: Apos o confronto pesado da secao navy, voltamos ao claro com uma secao calma e focada. O ebook e apresentado como a solucao unica. O layout limpo e o foco singular transmitem: "e simples, e isso aqui."

### Conteudo
- Titulo: "O roteiro que faltava entre o edital e a sua posse."
- P1: "'O Guia Definitivo de Estudos para Carreiras Juridicas: Do Edital a Posse' e um manual de 198 paginas escrito por quem percorreu esse caminho e sabe exatamente onde voce trava."
- P2: "Nao e mais um compilado de teoria juridica. Nao tem 500 paginas de doutrina."
- P3: "E um roteiro estruturado de COMO estudar. Capitulo por capitulo, voce aprende a montar um processo de estudo que funciona com o tempo que voce TEM — mesmo que sejam 2 horas por dia."
- P4: "42 capitulos. Cada um resolve um problema real que trava a sua evolucao. Desde a prova diagnostica que revela seu ponto de partida ate a estrategia para o dia da prova."
- P5: "Tudo fundamentado em neurociencia, metodos ativos de aprendizagem e na experiencia real de quem saiu do zero e chegou ate a posse."

### Layout
- Background: var(--bg-cream)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Container: max-width 960px, margin 0 auto
- Layout: centralizado, texto alinhado a esquerda

**Estrutura:**
1. Titulo centralizado
2. Linha dourada decorativa: 80px x 2px, centered, margin var(--space-md) auto
3. Bloco de texto com max-width 720px, margin 0 auto
4. Badge de numeros: "198 pag. | 42 cap. | Neurociencia" — inline-flex, 3 itens separados por divisor vertical
   - Posicao: centered, abaixo do bloco de texto
   - Cada item: DM Sans 500, .8rem, letter-spacing .1em, uppercase, color var(--navy-muted)
   - Divisor: 1px height 16px, background var(--border-warm), margin 0 16px

### Tipografia
- Titulo: DM Serif Display, 400, clamp(2rem, 4vw, 3.25rem), line-height: 1.15, text-align: center, color: var(--navy)
- Body: DM Sans, 400, clamp(1rem, 1.3vw, 1.125rem), line-height: 1.8, color: var(--navy-soft)
- "COMO" no P3: DM Sans, 700, color var(--navy), letter-spacing .03em
- "TEM" no P3: DM Sans, 700, color var(--navy)
- Badge items: DM Sans, 500, .8rem, letter-spacing: .1em, uppercase

### Cores
- Background: var(--bg-cream)
- Titulo: var(--navy)
- Body: var(--navy-soft)
- Linha decorativa: var(--gold)
- Badge: var(--navy-muted), divisores var(--border-warm)

### Elementos Visuais
- Linha dourada decorativa centralizada abaixo do titulo
- Badge de 3 numeros como elemento de prova rapida
- Sem imagens (o poder esta no texto)

### Animacoes
- Titulo: fadeUp .8s ease-out, scroll-triggered
- Linha dourada: lineGrow .8s ease-out, .2s delay apos titulo
- Paragrafos: fadeUp .6s stagger .12s
- Badge: fadeIn .6s, .3s apos ultimo paragrafo

### Responsividade
**Mobile (max-width 768px):**
- Badge: flex-wrap wrap, 1 linha por item (remove divisores verticais)
- Titulo: clamp(1.6rem, 6vw, 2.2rem)

---

## Secao 5: O que voce vai aprender

### Arquetipo e Constraints
- Arquetipo: Bento Box — celulas de tamanhos variados, organico e moderno
- Constraints: Hover Lift (Interacao), Stagger (Movimento), Glassmorphism sutil (Efeitos)
- Justificativa: 6 blocos tematicos organizados em grid bento cria ritmo visual. Cada bloco tem identidade propria mas pertence ao conjunto. Hover lift indica interatividade premium.

### Conteudo
6 blocos tematicos:

**Bloco 1 — "Saber por onde comecar"** (grande, span 2 colunas)
- Como fazer a prova diagnostica que revela seu nivel real
- Como identificar suas materias fortes e fracas antes de perder tempo

**Bloco 2 — "Parar de desperdicar tempo"**
- Gestao de tempo com a Matriz de Eisenhower adaptada para concurseiros
- Como eliminar distracoes com a regra dos 20 segundos
- Como gerenciar tempo de tela que rouba suas horas de estudo

**Bloco 3 — "Criar uma rotina que voce CONSEGUE manter"**
- Como criar o habito de estudar (sem depender de motivacao)
- Como montar seu quadro de estudo personalizado
- Microplanejamento: o metodo para nunca mais se perder no cronograma

**Bloco 4 — "Estudar menos horas e aprender mais"** (grande, span 2 colunas)
- Estudo ativo: por que ler PDF nao e estudar
- Memoria e intercalacao: como seu cerebro realmente fixa conteudo
- Memoria e espacamento: o tempo certo entre revisoes
- Por que voce precisa dormir para aprender

**Bloco 5 — "Dominar a estrategia de prova"**
- Tecnica para fazer a prova objetiva com mais acertos
- Como hackear a banca e identificar padroes
- O que fazer no dia anterior e no dia da prova

**Bloco 6 — "Fortalecer a mentalidade"**
- Como sair da paralisia e entrar em acao
- Protocolo de neuroplasticidade de Andrew Huberman
- NSDR e meditacao para foco e recuperacao

### Layout
- Background: var(--bg-white)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Container: max-width 1360px

**Titulo da secao:**
- "O que muda quando voce tem um metodo."
- Posicao: centered, margin-bottom var(--space-xl)

**Grid Bento:**
- display: grid
- grid-template-columns: repeat(3, 1fr)
- grid-template-rows: auto auto
- gap: 20px

**Posicionamento dos blocos:**
- Bloco 1: grid-column 1 / span 2, grid-row 1
- Bloco 2: grid-column 3, grid-row 1
- Bloco 3: grid-column 1, grid-row 2
- Bloco 4: grid-column 2 / span 2, grid-row 2
- Bloco 5: grid-column 1, grid-row 3
- Bloco 6: grid-column 2 / span 2, grid-row 3

**Cada bloco:**
- Background: var(--bg-cream)
- Border: 1px solid var(--border-warm)
- Border-radius: 8px
- Padding: clamp(28px, 3vw, 40px)
- Titulo do bloco no topo, lista abaixo

**Numero do bloco:**
- Numero sequencial (01, 02, 03...) no canto superior direito
- DM Serif Display, clamp(2.5rem, 4vw, 4rem), color rgba(11, 11, 59, .06), font-style italic
- Position absolute, top 16px, right 24px

### Tipografia
- Titulo secao: DM Serif Display, 400, clamp(2rem, 4vw, 3.25rem), line-height: 1.15, text-align: center, color var(--navy)
- Titulo bloco: DM Sans, 700, clamp(.95rem, 1.1vw, 1.05rem), line-height: 1.3, color var(--navy), margin-bottom 16px
- Items lista: DM Sans, 400, clamp(.875rem, 1vw, .95rem), line-height: 1.6, color var(--navy-soft)
- Cada item precedido por um dash "—" em var(--gold), margin-right 8px

### Cores
- Background secao: var(--bg-white)
- Background blocos: var(--bg-cream)
- Blocos grandes (1 e 4): border-left 3px solid var(--gold) (substituir border padrao no lado esquerdo)
- Border normal: var(--border-warm)
- Hover border: var(--gold) com opacity .3
- Numero: rgba(11, 11, 59, .06)

### Animacoes
- Titulo secao: fadeUp .8s ease-out, scroll-triggered
- Blocos: stagger animation, cada bloco faz fadeUp .6s ease-out
  - Delays: bloco1 0s, bloco2 .1s, bloco3 .2s, bloco4 .3s, bloco5 .4s, bloco6 .5s
  - Triggered: IntersectionObserver threshold 0.1

### Interatividade
**Hover nos blocos:**
- Transform: translateY(-6px)
- Box-shadow: 0 16px 40px rgba(11, 11, 59, .06)
- Border-color: rgba(184, 146, 45, .3)
- Transition: all .4s cubic-bezier(0.16, 1, 0.3, 1)

**Hover off:**
- Mesma transition, volta suavemente

### Responsividade
**Tablet (max-width 768px):**
- Grid: 2 colunas
- Bloco 1: span 2
- Bloco 4: span 2
- Blocos 2,3,5,6: span 1

**Mobile (max-width 480px):**
- Grid: 1 coluna, todos span 1
- Gap: 16px

---

## Secao 6: Sobre a Dra. Larissa

### Arquetipo e Constraints
- Arquetipo: Editorial — layout de revista com texto em colunas
- Constraints: Bleed Right (Layout), Fade Up (Movimento), Selective Color (Cor)
- Justificativa: A secao de autoridade precisa parecer uma materia de revista sobre a Dra. Larissa. O layout editorial transmite credibilidade. O bleed right da "respiro" assimetrico.

### Conteudo
- Titulo: "Escrito por quem ja esteve exatamente onde voce esta."
- P1: "A Dra. Larissa Luiz Ribeiro nao e uma teorica falando de um lugar confortavel. Ela percorreu o caminho. Enfrentou as mesmas duvidas, os mesmos erros, o mesmo cansaco."
- P2: "Depois que alcancou o cargo dos sonhos, sentou e analisou com cuidado: o que realmente funcionou, o que acelerou a evolucao, o que evitou o desgaste e o que manteve ela firme quando tantos desistiam."
- P3: "Transformou tudo isso neste guia. Cada capitulo carrega um pouco das dificuldades reais, dos erros que fizeram repensar tudo e dos acertos que construiram o caminho ate a aprovacao."
- P4: "Este livro foi feito para estar ao seu lado todos os dias. Nos dias de duvida, abra-o. Nos dias de cansaco, releia-o."

### Layout
- Background: var(--bg-beige)
- Padding: var(--space-2xl) 0 var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Container: max-width 1360px

**Estrutura:**
- Grid: 2 colunas, grid-template-columns: 1fr 1.2fr, gap 0
- Coluna esquerda: area de imagem placeholder — bleed right (a imagem sangra ate a borda da coluna de texto)
  - Background: var(--bg-cream), min-height: 500px
  - Contem placeholder: "[FOTO DRA. LARISSA]" — DM Sans 400, .875rem, color var(--navy-muted), centered
  - Border-radius: 0 (bleed left, nao tem radius na esquerda)
- Coluna direita: texto com padding-left var(--space-xl)

**Detalhe editorial:**
- Uma aspas grande decorativa antes do P4
- Caractere: open quote unicode "\201C"
- DM Serif Display, 6rem, color var(--gold), opacity .3, line-height: 1, margin-bottom: -2rem

### Tipografia
- Titulo: DM Serif Display, 400, clamp(1.75rem, 3vw, 2.5rem), line-height: 1.2, color: var(--navy), margin-bottom var(--space-lg)
- Body: DM Sans, 400, clamp(1rem, 1.2vw, 1.1rem), line-height: 1.8, color: var(--navy-soft)
- P4 (ultimo): font-style italic, color var(--navy)

### Cores
- Background: var(--bg-beige)
- Placeholder imagem: var(--bg-cream)
- Aspas decorativa: var(--gold), opacity .3

### Animacoes
- Coluna de texto: fadeUp .8s stagger .15s entre paragrafos, scroll-triggered
- Placeholder imagem: fadeIn .8s .2s ease-out
- Aspas decorativa: scale(.8) → scale(1) com fadeIn, .6s, .3s delay

### Responsividade
**Tablet (max-width 768px):**
- Grid: 1 coluna
- Imagem placeholder: max-height 300px, width 100%, border-radius 8px
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)

**Mobile (max-width 480px):**
- Imagem placeholder: max-height 240px
- Titulo: clamp(1.5rem, 6vw, 2rem)

---

## Secao 7: Para quem e este guia (FUNDO NAVY)

### Arquetipo e Constraints
- Arquetipo: Progressive Reveal — itens aparecem progressivamente conforme scroll
- Constraints: Selective Color (Cor), View Timeline (Movimento), Stagger (Movimento)
- Justificativa: Segunda dobra navy. Lista de identificacao precisa ser progressiva — cada item que aparece e mais um "sim, sou eu". O reveal progressivo cria ritmo de auto-reconhecimento.

### Conteudo
- Titulo: "Este guia e pra voce se..."
- Item 1: "Voce estuda ha meses (ou anos) mas sente que nao sai do lugar"
- Item 2: "Voce ja pagou cursos caros e abandonou todos no meio"
- Item 3: "Voce tem 2 a 4 horas por dia e precisa que cada minuto conte"
- Item 4: "Voce trabalha, cuida da familia e ainda quer mudar de vida"
- Item 5: "Voce nao sabe por onde comecar e trava toda vez que abre o material"
- Item 6: "Voce pesquisa mais SOBRE como estudar do que estuda de fato"
- Item 7: "Voce tem medo de estar desperdicando tempo com o metodo errado"
- Item 8: "Voce quer Magistratura, MP, Defensoria ou qualquer carreira juridica"
- Fechamento: "Nao importa se voce tem 25 ou 50 anos. Nao importa se esta comecando agora ou recomecando pela decima vez. O que importa e ter um roteiro claro e segui-lo."

### Layout
- Background: var(--bg-navy)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Container: max-width 960px, margin 0 auto (centrado, container medio)

**Estrutura:**
- Titulo centralizado no topo
- Lista vertical, cada item e uma "row" independente
- Fechamento centralizado ao final

**Cada item:**
- Display: flex, align-items: flex-start, gap: 20px
- Icone esquerda: um traco horizontal 24px x 2px, var(--gold), margin-top .7em (alinha com texto)
- Texto: DM Sans body
- Padding: 16px 0
- Border-bottom: 1px solid var(--border-navy) (rgba 255,255,255,.08)
- Ultimo item: sem border-bottom

### Tipografia
- Titulo: DM Serif Display, 400, clamp(2rem, 4vw, 3.25rem), line-height: 1.15, text-align: center, color: var(--white), margin-bottom var(--space-xl)
- "se..." no titulo: color var(--gold), font-style italic
- Items: DM Sans, 400, clamp(.95rem, 1.1vw, 1.05rem), line-height: 1.6, color: var(--white-soft)
- Palavras em CAPS nos items ("SOBRE"): color var(--gold-brand), font-weight 700
- Fechamento: DM Sans, 400, clamp(.95rem, 1.1vw, 1rem), line-height: 1.7, color: var(--white-muted), text-align: center, font-style: italic, max-width: 600px, margin: var(--space-lg) auto 0

### Cores
- Background: var(--bg-navy)
- Noise overlay: opacity .03
- Glow: radial-gradient no centro-base, rgba(184,146,45,.04), size 800px
- Titulo: var(--white), accent var(--gold)
- Items texto: var(--white-soft)
- Tracos: var(--gold)
- Borders: var(--border-navy)
- Fechamento: var(--white-muted)

### Animacoes
- Titulo: fadeUp .8s ease-out, scroll-triggered
- Cada item: fadeUp .5s ease-out, stagger .08s entre cada
  - Delays: item1 .1s, item2 .18s, item3 .26s, ... item8 .66s
  - Triggered: IntersectionObserver threshold 0.15
- Traco de cada item: lineGrow (width 0 → 24px) .4s ease-out, sincronizado com o fadeUp do item
- Fechamento: fadeIn .6s, .3s apos ultimo item

### Responsividade
**Mobile (max-width 480px):**
- Titulo: clamp(1.6rem, 7vw, 2.2rem)
- Items padding: 12px 0

---

## Secao 8: Oferta + Preco

### Arquetipo e Constraints
- Arquetipo: Spotlight — elemento central com tudo ao redor secundario
- Constraints: Hover Glow (Interacao), Scale In (Movimento), Selective Color (Cor)
- Justificativa: O preco e o CTA sao o spotlight. Tudo aponta para eles. A secao deve criar a sensacao de "e so isso? Tao acessivel?" — o contraste entre o valor percebido e o preco real.

### Conteudo
- Titulo: "198 paginas de metodo por menos que um almoco."
- P1: "Voce ja investiu centenas (talvez milhares) em cursos que viraram PDFs esquecidos na pasta de downloads."
- Preco: "R$27"
- P2: "Vinte e sete reais por um roteiro completo, do edital a posse, que te diz exatamente o que fazer, quando fazer e como fazer."
- P3: "Sem enrolacao. Sem 500 horas de aula. Sem cronograma impossivel."
- P4: "Um manual direto, pratico, pra abrir todo dia e saber qual e o proximo passo."
- CTA: "Quero comecar agora por R$27"
- Detalhe entrega: "Acesso imediato apos a compra. Voce recebe o ebook direto no seu e-mail via Hotmart."
- Garantia titulo: "Garantia de 7 dias"
- Garantia texto: "Se por qualquer motivo voce sentir que o guia nao faz sentido pra sua jornada, basta pedir o reembolso em ate 7 dias. Sem perguntas, sem burocracia. O risco e zero."

### Layout
- Background: var(--bg-cream)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Container: max-width 800px, margin 0 auto (container estreito — foco)

**Estrutura:**
1. Titulo centralizado
2. P1 (contextualiza investimento passado)
3. **Bloco de preco** — o spotlight:
   - Background: var(--bg-white)
   - Border: 1px solid var(--border-warm)
   - Border-radius: 12px
   - Padding: clamp(40px, 5vw, 64px)
   - Box-shadow: 0 4px 20px rgba(11, 11, 59, .04)
   - Text-align: center
   - Contem: preco + P2 + P3 + P4 + CTA + detalhe entrega
4. **Bloco de garantia** — abaixo do spotlight:
   - Display: flex, gap 20px, align-items flex-start
   - Icone esquerda: escudo estilizado via CSS (border 2px solid var(--gold), width 40px, height 48px, border-radius 50% 50% 50% 50% / 40% 40% 60% 60%, display flex, align-items center, justify-content center)
   - Dentro do escudo: checkmark em var(--gold)
   - Direita: titulo garantia + texto
   - Margin-top: var(--space-lg)

**Preco dentro do spotlight:**
- "R$" em DM Sans, 500, clamp(1.25rem, 2vw, 1.5rem), color var(--navy-muted), vertical-align: super
- "27" em DM Serif Display, clamp(4rem, 8vw, 6rem), color var(--navy), line-height: 1
- Margin-bottom: var(--space-md)

**CTA no spotlight:**
- Mesmo estilo do hero CTA mas MAIOR
- Padding: 1.25em 3em
- Font-size: clamp(1rem, 1.2vw, 1.1rem)
- Width: 100%, max-width: 400px
- Margin: var(--space-md) auto 0

### Tipografia
- Titulo: DM Serif Display, 400, clamp(2rem, 4vw, 3.25rem), line-height: 1.15, text-align: center, color: var(--navy)
- P1: DM Sans, 400, clamp(.95rem, 1.1vw, 1.05rem), line-height: 1.7, color var(--navy-soft), text-align: center, margin-bottom var(--space-lg)
- Preco "R$": DM Sans, 500, clamp(1.25rem, 2vw, 1.5rem), color var(--navy-muted)
- Preco "27": DM Serif Display, 400, clamp(4rem, 8vw, 6rem), color var(--navy)
- P2, P3, P4: DM Sans, 400, clamp(.95rem, 1.1vw, 1.05rem), line-height: 1.7, color var(--navy-soft)
- P3 "Sem" repetido: font-weight 500
- CTA: DM Sans, 700, clamp(1rem, 1.2vw, 1.1rem), letter-spacing .04em
- Detalhe entrega: DM Sans, 400, .8rem, color var(--navy-muted), margin-top var(--space-sm)
- Garantia titulo: DM Sans, 700, clamp(.95rem, 1.1vw, 1rem), color var(--navy)
- Garantia texto: DM Sans, 400, clamp(.875rem, 1vw, .95rem), line-height: 1.7, color var(--navy-soft)

### Cores
- CTA: mesmo do hero (gold bg, cream text, gold-dark hover)
- CTA hover: adicionar box-shadow: 0 12px 35px var(--gold-glow), translateY(-3px)
- Spotlight box: bg white, border warm, shadow rgba(11,11,59,.04)
- Spotlight hover: shadow cresce — 0 8px 30px rgba(11,11,59,.06)

### Animacoes
- Titulo: fadeUp .8s, scroll-triggered
- P1: fadeUp .6s, .2s delay
- Spotlight box: scale(.96) → scale(1) + fadeIn, .8s ease-out, .3s delay — o bloco "cresce" sutilmente ao aparecer
- Preco "27": counter animation opcional — de "0" para "27" em .8s, ou simplesmente fadeUp
- CTA: fadeUp .6s, .5s delay
- Garantia: fadeUp .6s, .6s delay

### Interatividade
- Spotlight box hover: box-shadow cresce, transition .4s ease
- CTA hover: translateY(-3px), shadow, bg-color change

### Responsividade
**Mobile (max-width 480px):**
- Spotlight padding: 28px 20px
- Preco "27": clamp(3rem, 12vw, 4.5rem)
- CTA: width 100%

---

## Secao 9: FAQ

### Arquetipo e Constraints
- Arquetipo: Contained Center — container estreito, limpo
- Constraints: Accordion custom (Estruturas), Hover Fill (Interacao), Stagger (Movimento)
- Justificativa: FAQ precisa ser funcional e facil de escanear. Accordion customizado (nao generico) com animacao fluida. Container estreito mantem foco.

### Conteudo
6 perguntas:
- Q1: "Ja tentei outros cursos e nao funcionou. Por que esse guia seria diferente?"
  A1: "Porque este guia nao e um curso. Nao tem 500 horas de aula que voce nunca vai assistir. E um manual de METODO — te ensina COMO estudar, nao mais conteudo juridico. Foi escrito por quem passou pelo mesmo caminho e sabe onde voce trava."
- Q2: "Tenho muito pouco tempo pra estudar. Funciona pra mim?"
  A2: "Foi feito exatamente pra quem tem pouco tempo. O guia ensina como extrair o maximo de 2 a 4 horas por dia com tecnicas de estudo ativo, espacamento e priorizacao. Voce nao precisa de mais horas. Precisa das horas certas."
- Q3: "Serve pra quem esta comecando do zero?"
  A3: "Sim. O guia comeca pela prova diagnostica, que mapeia seu ponto de partida real. A partir dali, voce segue o roteiro independente do seu nivel atual."
- Q4: "E so pra quem quer Magistratura?"
  A4: "Nao. O metodo se aplica a qualquer carreira juridica: Magistratura, Ministerio Publico, Defensoria, Procuradoria, Cartorio e demais concursos da area do Direito."
- Q5: "Recebo o ebook na hora?"
  A5: "Sim. Apos a confirmacao do pagamento na Hotmart, voce recebe o acesso imediato no seu e-mail."
- Q6: "E se eu nao gostar?"
  A6: "Voce tem 7 dias de garantia incondicional. Pediu reembolso, devolvemos. Sem perguntas."

### Layout
- Background: var(--bg-white)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem)
- Container: max-width 760px, margin 0 auto

**Titulo:**
- "Duvidas frequentes"
- Centralizado, margin-bottom var(--space-xl)

**Cada item FAQ:**
- Border-bottom: 1px solid var(--border-warm)
- Padding: 24px 0

**Pergunta (trigger):**
- Display: flex, justify-content: space-between, align-items: center
- Cursor: pointer
- Texto: DM Sans, 500, clamp(.95rem, 1.1vw, 1.05rem), color var(--navy)
- Indicador direita: linha horizontal 20px x 2px, var(--gold), position relative
  - Linha vertical (forma o +): 2px x 20px, position absolute, centered
  - Quando aberto: linha vertical rotaciona 90deg (vira —, formando apenas a horizontal)
  - Transition: transform .3s ease

**Resposta (conteudo):**
- Max-height: 0, overflow: hidden, opacity: 0
- Quando aberto: max-height: 300px (ou auto via JS), opacity: 1
- Transition: max-height .4s cubic-bezier(0.16, 1, 0.3, 1), opacity .3s ease .1s
- Padding-top: 16px (quando aberto)
- Texto: DM Sans, 400, clamp(.875rem, 1vw, .95rem), line-height: 1.7, color var(--navy-soft)

**Primeiro item:** comeca aberto por padrao

### Tipografia
- Titulo secao: DM Serif Display, 400, clamp(1.75rem, 3vw, 2.5rem), line-height: 1.2, text-align: center, color var(--navy)
- Pergunta: DM Sans, 500, clamp(.95rem, 1.1vw, 1.05rem), color var(--navy)
- Resposta: DM Sans, 400, clamp(.875rem, 1vw, .95rem), line-height: 1.7, color var(--navy-soft)
- "METODO" e "COMO" nas respostas: font-weight 700, color var(--navy)

### Cores
- Background: var(--bg-white)
- Borders: var(--border-warm)
- Indicador +/-: var(--gold)
- Pergunta hover: color var(--gold), transition .2s

### Animacoes
- Titulo: fadeUp .8s, scroll-triggered
- Items FAQ: stagger fadeUp .5s, delay .08s entre cada
- Abertura/fechamento: max-height transition .4s cubic-bezier(0.16, 1, 0.3, 1)
- Indicador rotacao: .3s ease

### Interatividade
- Pergunta hover: color muda para var(--gold), transition .2s
- Pergunta click: toggle resposta aberta/fechada
- Comportamento: accordion — apenas 1 aberta por vez (ao abrir uma, fecha a anterior)
- Primeiro item: aberto por padrao ao carregar

### Responsividade
**Mobile (max-width 480px):**
- Padding items: 20px 0
- Titulo: clamp(1.5rem, 6vw, 2rem)

---

## Secao 10: CTA Final (FUNDO NAVY)

### Arquetipo e Constraints
- Arquetipo: Isolated Element — elemento solo com muito espaco negativo
- Constraints: Headline >150px (Tipografia), Selective Color (Cor), Fade Up (Movimento)
- Justificativa: Fechamento forte. Navy escuro com headline enorme cria peso emocional. O CTA dourado brilha contra o fundo escuro. A simplicidade da secao (so headline + texto + botao) cria urgencia pela ausencia de distracao.

### Conteudo
- Headline: "A diferenca entre quem passa e quem desiste nao e genialidade. E metodo."
- Texto: "Voce ja sabe o que acontece quando voce nao muda nada. Mais um ano passa. Mais um concurso abre. E voce continua no mesmo lugar, prometendo que 'agora vai'. Este guia e o primeiro passo concreto. 198 paginas. 42 capitulos. Um roteiro claro do edital ate a posse. Por R$27 e com 7 dias de garantia."
- CTA: "Quero o meu roteiro agora"

### Layout
- Background: var(--bg-navy-deep) (#07072A — mais escuro que as outras secoes navy, para fechar com peso)
- Padding: var(--space-2xl) clamp(1.5rem, 5vw, 6rem) clamp(6rem, 12vw, 10rem)
- Container: max-width 960px, margin 0 auto, text-align center

**Estrutura vertical centralizada:**
1. Headline (massiva)
2. Linha dourada decorativa: 60px x 2px, centered, margin var(--space-md) auto
3. Texto de apoio
4. CTA
5. Sub-CTA: "R$27 | Acesso imediato | 7 dias de garantia" — inline, separado por pipes

**Transicao topo:** borda curva sutil
- CSS: border-radius: 40px 40px 0 0 na secao, OU clip-path: ellipse(75% 40px at 50% 40px)
- Isso cria uma transicao suave e elegante da secao branca do FAQ para o navy

### Tipografia
- Headline: DM Serif Display, 400, clamp(2.25rem, 5vw, 4rem), line-height: 1.1, color var(--white)
- "E metodo." na headline: color var(--gold-brand), display block (forca quebra de linha)
- Texto apoio: DM Sans, 400, clamp(.95rem, 1.1vw, 1.05rem), line-height: 1.8, color var(--white-soft), max-width 640px, margin 0 auto
- "'agora vai'" no texto: font-style italic
- CTA: DM Sans, 700, clamp(1rem, 1.3vw, 1.15rem), letter-spacing .04em
- Sub-CTA: DM Sans, 400, .8rem, color var(--white-muted), letter-spacing .05em, margin-top var(--space-sm)

### Cores
- Background: var(--bg-navy-deep)
- Noise overlay: opacity .03
- Glow principal: radial-gradient centered, rgba(184,146,45,.06) → transparent, size 1000px — cria halo dourado no centro
- Headline: var(--white)
- "E metodo.": var(--gold-brand)
- Texto: var(--white-soft)
- Linha decorativa: var(--gold)
- CTA: background var(--gold), color var(--bg-navy-deep), padding 1.25em 3.5em, border-radius 2px
- CTA hover: background var(--gold-brand), translateY(-3px), box-shadow 0 12px 40px rgba(184,146,45,.35)
- Sub-CTA: var(--white-muted)

### Elementos Visuais
- Glow dourado radial centered — sutil, cria profundidade
- Linha decorativa dourada entre headline e texto
- Noise texture

### Animacoes
- Headline: fadeUp 1s ease-out, scroll-triggered — mais lenta que as outras para dar peso
- Linha dourada: lineGrow .8s, .3s delay
- Texto: fadeUp .7s, .4s delay
- CTA: fadeUp .6s, .6s delay, seguido de pulse sutil (scale 1 → 1.02 → 1, 2s, infinite, ease-in-out) — o botao "respira" para chamar atencao
- Glow: animacao sutil de opacity .04 → .08 → .04, 4s, infinite, ease-in-out — o halo "pulsa"

### Interatividade
- CTA hover: translateY(-3px), shadow expande, bg muda para gold-brand
- CTA active: translateY(0), shadow reduz

### Responsividade
**Mobile (max-width 480px):**
- Headline: clamp(1.8rem, 8vw, 2.5rem)
- CTA: width 100%, padding 1.15em 2em
- Border-radius topo: 24px 24px 0 0

---

## Secao 11: Rodape

### Arquetipo e Constraints
- Arquetipo: Minimal — pouquissimos elementos
- Constraints: Low Contrast (Cor)
- Justificativa: Rodape discreto, nao rouba atencao do CTA final. Apenas o necessario legal.

### Conteudo
- Texto: "Este produto e vendido e entregue pela Hotmart. Todos os direitos reservados."
- Links: "Termos de Uso | Politica de Privacidade"

### Layout
- Background: var(--bg-navy-deep) (continuacao do CTA final, sem separacao)
- Padding: var(--space-lg) clamp(1.5rem, 5vw, 6rem) var(--space-md)
- Border-top: 1px solid var(--border-navy)
- Text-align: center

### Tipografia
- Texto: DM Sans, 400, .75rem, color var(--white-muted)
- Links: DM Sans, 400, .75rem, color var(--white-muted)
- Links hover: color var(--gold), transition .2s

### Responsividade
- Nenhuma mudanca necessaria, ja e minimalista

---

## Resumo de Arquetipos e Constraints por Secao

| # | Secao | Arquetipo | Constraints | Fundo |
|---|-------|-----------|-------------|-------|
| 1 | Hero | Type Hero | Mixed Weights, Selective Color, Fade Up | Cream |
| 2 | Espelho | Contained Center | Selective Color, View Timeline | Branco |
| 3 | O Problema Real | Split Assimetrico | Color Blocking, Text Reveal, Overlap | **Navy** |
| 4 | A Solucao | Single Focus | Overlap, Scale In, Noise Texture | Cream |
| 5 | O que vai aprender | Bento Box | Hover Lift, Stagger, Glassmorphism | Branco |
| 6 | Sobre a Dra. Larissa | Editorial | Bleed Right, Fade Up, Selective Color | Beige |
| 7 | Para quem e | Progressive Reveal | Selective Color, View Timeline, Stagger | **Navy** |
| 8 | Oferta + Preco | Spotlight | Hover Glow, Scale In, Selective Color | Cream |
| 9 | FAQ | Contained Center | Accordion custom, Hover Fill, Stagger | Branco |
| 10 | CTA Final | Isolated Element | Headline >150px, Selective Color, Fade Up | **Navy Deep** |
| 11 | Rodape | Minimal | Low Contrast | Navy Deep |
