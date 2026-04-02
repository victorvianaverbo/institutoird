# Layout — InstitutoIRD Home

## Linguagem Visual Aprovada (extraida do design)

- **Font heading:** DM Serif Display, weight 400
- **Font body:** DM Sans, weights 400/500/600/700
- **Paleta:**
  - Navy: #0C2340 (headlines, blocos escuros)
  - Primary: #1E40AF (botoes, acentos, links)
  - Primary hover: #1E3A8A
  - Primary light: #DBEAFE (backgrounds sutis)
  - Text: #1E293B
  - Text muted: #64748B
  - Surface: #F8FAFC (secoes alternadas)
  - Border: #E2E8F0
  - White: #FFFFFF
- **Container max:** 1200px
- **Section padding:** clamp(5rem, 12vw, 9rem) vertical
- **Border radius padrao:** 10px (cards/blocos)
- **Easing padrao:** cubic-bezier(0.16, 1, 0.3, 1)
- **AOS duration:** 800ms, once: true, offset: 50

---

## Secoes ja construidas

1. **Header** — Sticky com backdrop blur, logo, nav, CTA
2. **Hero** — Type Hero + Headline >150px + Selective Color
3. **Metodo** — Split Assimetrico + Overlap + Fade Up
4. **Footer** — Minimal, border-top, copyright centralizado

---

## Secao 3: Plataforma (O que voce recebe)

### Arquetipo e Constraints
- Arquetipo: **Bento Box** — celulas de tamanhos variados, densidade organica, ritmo visual
- Constraints: **Hover Lift** (Interacao) + **Stagger** (Movimento)
- Justificativa: 8 itens com pesos diferentes de informacao. Bento Box permite dar destaque ao cronograma e revisoes (celulas maiores) enquanto itens menores ocupam menos espaco. Evita o grid simetrico generico.

### Conteudo
- Titulo da secao: "Tudo o que a plataforma oferece"
- 8 itens:
  1. Cronograma personalizado (DESTAQUE — celula grande)
  2. Revisoes espacadas (DESTAQUE — celula grande)
  3. Material em PDF
  4. Banco de questoes e flashcards
  5. Simulados
  6. Suporte humanizado
  7. 3 anos de acesso
  8. 7 dias de garantia

### Layout

**Desktop (>768px):**

Grid de 4 colunas com rows auto:

```
[  Cronograma  (col 1-2, row 1-2)  ] [ Material PDF (col 3, row 1) ] [ Questoes (col 4, row 1)    ]
[                                    ] [ Simulados    (col 3, row 2) ] [ Suporte  (col 4, row 2)    ]
[ 3 anos       (col 1, row 3)      ] [ Garantia (col 2, row 3)     ] [ Revisoes (col 3-4, row 3-4) ]
```

CSS Grid:
```css
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: minmax(200px, auto);
gap: 16px;
```

Item Cronograma: `grid-column: 1 / 3; grid-row: 1 / 3;`
Item Revisoes: `grid-column: 3 / 5; grid-row: 3 / 5;`
Demais itens: 1 coluna x 1 row cada

**Tablet (768px):**
```css
grid-template-columns: repeat(2, 1fr);
grid-auto-rows: minmax(180px, auto);
```
Cronograma: `grid-column: 1 / 3;` (full width, 1 row)
Revisoes: `grid-column: 1 / 3;` (full width, 1 row)
Demais: 1 coluna cada

**Mobile (480px):**
```css
grid-template-columns: 1fr;
```
Todos os itens: 1 coluna, empilhados

### Tipografia

**Titulo da secao:**
- Fonte: DM Serif Display
- Tamanho: clamp(1.75rem, 3.5vw, 2.5rem)
- Peso: 400
- Line-height: 1.2
- Cor: #0C2340
- Margin-bottom: clamp(2rem, 4vw, 3rem)
- Alinhamento: esquerda

**Titulo de cada card:**
- Fonte: DM Sans
- Tamanho: 1.125rem
- Peso: 700
- Line-height: 1.3
- Cor: #0C2340
- Margin-bottom: 0.75rem

**Descricao de cada card:**
- Fonte: DM Sans
- Tamanho: 0.9375rem
- Peso: 400
- Line-height: 1.7
- Cor: #64748B

**Cards de destaque (Cronograma, Revisoes) — titulo:**
- Tamanho: clamp(1.25rem, 2vw, 1.5rem)
- Peso: 700

### Cores

**Background da secao:** #FFFFFF (contraste com a secao anterior que e #F8FAFC)

**Cards normais:**
- Background: #F8FAFC
- Border: 1px solid #E2E8F0
- Border-radius: 10px
- Padding: 1.75rem

**Cards normais hover:**
- Background: #FFFFFF
- Border: 1px solid #DBEAFE
- Transform: translateY(-4px)
- Box-shadow: 0 12px 32px rgba(12, 35, 64, 0.08)
- Transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)

**Cards destaque (Cronograma, Revisoes):**
- Background: #0C2340
- Border: none
- Border-radius: 10px
- Padding: clamp(2rem, 3vw, 2.5rem)
- Titulo cor: #FFFFFF
- Descricao cor: rgba(255, 255, 255, 0.75)

**Cards destaque hover:**
- Background: #0F2B4A (ligeiramente mais claro)
- Transform: translateY(-4px)
- Box-shadow: 0 16px 40px rgba(12, 35, 64, 0.2)

### Elementos Visuais

Cada card tem um pequeno indicador visual no topo-esquerda:

**Cards normais:** uma linha horizontal de 32px x 2px em #DBEAFE, posicionada no topo do card com margin-bottom: 1.25rem

**Cards destaque:** uma linha horizontal de 32px x 2px em rgba(255,255,255,0.2), mesma posicao

Nenhum icone. Nenhuma imagem. O design depende da tipografia e do layout bento para criar interesse visual.

### Animacoes

**Stagger nos cards:**
- Cada card usa `data-aos="fade-up"`
- Delay escalonado: card 1 = 0ms, card 2 = 80ms, card 3 = 160ms, card 4 = 240ms, etc.
- `data-aos-delay="[valor]"`
- Duration: 800ms
- Easing: ease-out-cubic

### Responsividade

**Desktop (>768px):** Grid 4 colunas, cards destaque ocupam 2x2
**Tablet (768px):** Grid 2 colunas, cards destaque ocupam full width
**Mobile (480px):** 1 coluna, todos empilhados, padding dos cards reduz para 1.5rem

---

## Secao 4: FAQ

### Arquetipo e Constraints
- Arquetipo: **Single Focus** — uma pergunta por vez, leitura limpa e focada
- Constraints: **Container Narrow** (Layout) + **Text Reveal** (Movimento)
- Justificativa: FAQ com apenas 3 perguntas nao precisa de layout complexo. Container estreito centralizado cria foco e elegancia. Evita o accordion generico com bordas e setas.

### Conteudo

- Titulo: "Perguntas frequentes"

- Pergunta 1: "Estou terminando a faculdade, este curso e para mim?"
  Resposta: "Sim. Se voce ja esta nos ultimos periodos de Direito e quer comecar a se preparar cedo, a plataforma se adapta ao seu tempo disponivel."

- Pergunta 2: "O curso me prepara para todas as fases do concurso da Magistratura?"
  Resposta: "Sim. O conteudo cobre todas as fases previstas no edital, com material atualizado e questoes alinhadas ao perfil da banca."

- Pergunta 3: "O curso e os materiais sofrem atualizacoes?"
  Resposta: "Sim. O conteudo e atualizado conforme mudancas legislativas e novos editais."

### Layout

Container estreito centralizado:
```css
max-width: 720px;
margin: 0 auto;
```

Cada item FAQ:
- Sem borda entre itens
- Separacao por espaco generoso: padding 2rem 0 entre cada item
- Divider sutil entre itens: 1px solid #E2E8F0, somente entre items (nao no primeiro nem no ultimo)

**Estrutura de cada item:**
- Pergunta clicavel (botao semantico)
- Resposta oculta, revelada com transicao suave
- Indicador: um "+" que rotaciona para "x" ao abrir

**Desktop:** max-width 720px centralizado
**Tablet:** max-width 720px centralizado
**Mobile:** full width com container padding padrao

### Tipografia

**Titulo da secao:**
- Fonte: DM Serif Display
- Tamanho: clamp(1.75rem, 3.5vw, 2.5rem)
- Peso: 400
- Line-height: 1.2
- Cor: #0C2340
- Alinhamento: centro
- Margin-bottom: clamp(2.5rem, 5vw, 3.5rem)

**Pergunta:**
- Fonte: DM Sans
- Tamanho: 1.125rem
- Peso: 600
- Line-height: 1.4
- Cor: #1E293B
- Cursor: pointer

**Pergunta hover:**
- Cor: #1E40AF
- Transition: color 0.25s ease

**Resposta:**
- Fonte: DM Sans
- Tamanho: 1rem
- Peso: 400
- Line-height: 1.75
- Cor: #64748B
- Margin-top: 0.75rem
- Max-height transition para abrir/fechar

**Indicador "+":**
- Fonte: DM Sans
- Tamanho: 1.25rem
- Peso: 300
- Cor: #64748B
- Transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)
- Ao abrir: rotate(45deg) — o "+" vira "x"

### Cores

**Background da secao:** #F8FAFC (alterna com a secao anterior branca)
**Divider entre itens:** #E2E8F0
**Pergunta ativa (aberta):** cor do texto muda para #1E40AF

### Interatividade

**Comportamento:**
- Clicar na pergunta abre/fecha a resposta
- Somente uma resposta aberta por vez (fechar a anterior ao abrir nova)
- A primeira pergunta inicia fechada

**Animacao de abertura:**
- max-height: 0 → max-height: 300px
- opacity: 0 → opacity: 1
- Transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease 0.1s
- overflow: hidden durante transicao

**Animacao de fechamento:**
- Inverso, sem delay no opacity

### Animacoes AOS

- Titulo: `data-aos="fade-up"`
- Cada item FAQ: `data-aos="fade-up"` com delay escalonado (0ms, 100ms, 200ms)

### Responsividade

**Todos os breakpoints:** mesma estrutura, max-width 720px se ajusta naturalmente
**Mobile:** pergunta font-size 1.0625rem, padding entre itens reduz para 1.5rem 0

---

## Secao 5: Contato

### Arquetipo e Constraints
- Arquetipo: **Isolated Element** — conteudo centralizado com muito espaco negativo
- Constraints: **Dark Mode** (Cor) + **Hover Glow** (Interacao)
- Justificativa: secao de contato como fechamento da pagina. Fundo navy escuro cria contraste dramatico com o resto da pagina. Elementos isolados com bastante respiro transmitem confianca e acessibilidade.

### Conteudo

- Titulo: "Tem alguma duvida?"
- Subtitulo: "Fale com a gente pelo canal que preferir."
- WhatsApp: (67) 99906-2339
- E-mail: suporte@institutoird.com.br

### Layout

**Estrutura:**
```
[          Titulo centralizado          ]
[         Subtitulo centralizado        ]
[                                       ]
[   Card WhatsApp    |   Card Email     ]
```

Container centralizado:
```css
text-align: center;
max-width: 640px;
margin: 0 auto;
```

Cards lado a lado:
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1.5rem;
margin-top: clamp(2rem, 4vw, 3rem);
```

**Mobile:** `grid-template-columns: 1fr;` — empilhados

### Tipografia

**Titulo:**
- Fonte: DM Serif Display
- Tamanho: clamp(1.75rem, 3.5vw, 2.5rem)
- Peso: 400
- Line-height: 1.2
- Cor: #FFFFFF
- Margin-bottom: 0.75rem

**Subtitulo:**
- Fonte: DM Sans
- Tamanho: 1.0625rem
- Peso: 400
- Line-height: 1.6
- Cor: rgba(255, 255, 255, 0.6)

**Label do card (ex: "WhatsApp", "E-mail"):**
- Fonte: DM Sans
- Tamanho: 0.75rem
- Peso: 600
- Letter-spacing: 0.12em
- Text-transform: uppercase
- Cor: rgba(255, 255, 255, 0.4)
- Margin-bottom: 0.5rem

**Valor do card (numero/email):**
- Fonte: DM Sans
- Tamanho: 1.0625rem
- Peso: 500
- Cor: #FFFFFF
- Line-height: 1.4

### Cores

**Background da secao:** #0C2340 (navy — dark mode)
**Cards:**
- Background: rgba(255, 255, 255, 0.06)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border-radius: 10px
- Padding: 2rem
- Text-align: center

**Cards hover:**
- Background: rgba(255, 255, 255, 0.1)
- Border: 1px solid rgba(255, 255, 255, 0.18)
- Box-shadow: 0 0 24px rgba(30, 64, 175, 0.15)
- Transform: translateY(-2px)
- Transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1)

### Elementos Visuais

Nenhuma imagem ou icone. Apenas tipografia e cor.

Opcional (sutil): um gradiente radial muito suave no background da secao, centrado no topo:
```css
background: #0C2340;
background-image: radial-gradient(ellipse at 50% 0%, rgba(30, 64, 175, 0.15) 0%, transparent 60%);
```
Isso cria uma leve "luz" azul no topo da secao escura, adicionando profundidade sem ser obvio.

### Interatividade

**Card WhatsApp:** link para `https://wa.me/5567999062339`
**Card Email:** link para `mailto:suporte@institutoird.com.br`

Ambos sao `<a>` com display block.

### Animacoes AOS

- Titulo + subtitulo: `data-aos="fade-up"`
- Card WhatsApp: `data-aos="fade-up"` delay 100ms
- Card Email: `data-aos="fade-up"` delay 200ms

### Responsividade

**Desktop/Tablet:** 2 colunas lado a lado
**Mobile (<640px):** 1 coluna, cards empilhados

---

## Secao 6: Footer (ja construido)

Manter como esta:
- Border-top: 1px solid #E2E8F0
- Padding: 2.5rem 0
- Texto centralizado: "InstitutoIRD — Todos os direitos reservados."
- Font-size: 0.8125rem
- Cor: #64748B

---

## Resumo dos Arquetipos por Secao

| Secao       | Arquetipo          | Constraints                         |
|-------------|--------------------|-------------------------------------|
| Hero        | Type Hero          | Headline >150px, Selective Color    |
| Metodo      | Split Assimetrico  | Overlap Elements, Fade Up           |
| Plataforma  | Bento Box          | Hover Lift, Stagger                 |
| FAQ         | Single Focus       | Container Narrow, Text Reveal       |
| Contato     | Isolated Element   | Dark Mode, Hover Glow               |
| Footer      | Minimal            | —                                   |

Nenhum arquetipo se repete em secoes consecutivas. 5 arquetipos diferentes para 5 secoes.
