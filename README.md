# Portfólio estático

Site HTML/CSS/JS para enviar às leads: carrosséis de screenshots por tipo de projeto + tabela de preços. **PT / EN** (em EN os preços aparecem em USD).

Sem build. Abra `index.html` no navegador ou sirva a pasta:

```bash
npx serve .
```

## Estrutura

```
index.html
css/styles.css
js/i18n.js          # strings PT/EN + locale
js/main.js          # slides, carrosséis, preços, contato
assets/screenshots/
  sites/            # Elitium-Site, Vida Plena, PlanAI landing
  pedidos/          # Basiquinho
  erp/              # Elitium ERP
  agendamento/      # WIP
  personalizado/    # PlanAI app
```

## Projetos → seções

| Projeto | Seção do site |
| --- | --- |
| Elitium-Site, Clínica Vida Plena, PlanAI landing | **Sites** (1 carrossel) |
| BasiquinhoBurguer | **Pedidos** |
| Elitium-ERP | **ERP** |
| Sistema de agendamento (WIP) | **Agendamento** |
| PlanAI (app) | **Personalizado** |

## Adicionar screenshots

1. Salve as imagens em `assets/screenshots/<pasta>/` (ex.: `erp/01-dashboard.webp`).
2. Em `js/main.js`, no array `SECTIONS`, troque `src: null` pelo caminho:

```js
{
  src: "assets/screenshots/erp/01-dashboard.webp",
  caption: {
    pt: "Elitium ERP — Dashboard de vendas",
    en: "Elitium ERP — Sales dashboard",
  },
},
```

## Preços (BRL / USD)

Edite o array `PRICING` em `js/main.js`. Cada linha tem `brl` (PT) e `usd` (EN). Os USD são faixas fixas de exibição (~R$5/US$), não cotação ao vivo.

## Contato

Apenas WhatsApp. N\u00famero e mensagem pr\u00e9-preenchida (PT/EN) em `js/main.js` (`CONTACT` + `WA_MESSAGES`).

## Idioma e tema

- Toggle **PT | EN** no header (preços em R$ / USD). Preferência em `localStorage` (`portfolio-locale`).
- Toggle de **modo claro / escuro** (ícone sol/lua). Preferência em `portfolio-theme` (respeita `prefers-color-scheme` na primeira visita).
