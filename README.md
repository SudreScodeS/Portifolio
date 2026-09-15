# D&S core

Site institucional estático da **D&S core** (sociedade SudreScodeS + Dtech Labs): apresentação, trabalhos em screenshots, preços. **PT / EN** (em EN os preços aparecem em USD).

Sem build. Abra `index.html` no navegador ou sirva a pasta:

```bash
npx serve .
```

## Estrutura

```
index.html
css/styles.css
js/i18n.js          # strings PT/EN + locale + tema
js/main.js          # slides, carrosséis, preços, contato
assets/
  LogoC-VS.png / LogoE-VS.png   # SudreScodeS (C=claro, E=escuro)
  LogoC-DL.png / LogoE-DL.png   # Dtech Labs
  screenshots/
    sites/
    pedidos/
    erp/
    agendamento/
    personalizado/
```

## Seções

Sobre · O que fazemos · Ideais · Trabalhos (carrosséis) · Preços · Contato

## Projetos → carrosséis

| Projeto | Seção |
| --- | --- |
| Elitium-Site, Clínica Vida Plena, PlanAI landing | **Sites** |
| BasiquinhoBurguer | **Pedidos** |
| Elitium-ERP | **ERP** |
| GeSis Agenda / AgSys | **Agendamento** |
| PlanAI (app) | **Personalizado** |

## Adicionar screenshots

1. Salve as imagens em `assets/screenshots/<pasta>/`.
2. Em `js/main.js`, no array `SECTIONS`, registre `src` e legendas `caption.pt` / `caption.en`.

## Idioma e tema

- PT/EN no header (`localStorage`: `portfolio-locale`)
- Claro/escuro (`portfolio-theme`) — troca também as logos VS e DL
- Contato WhatsApp e textos: `js/main.js` + `js/i18n.js`
