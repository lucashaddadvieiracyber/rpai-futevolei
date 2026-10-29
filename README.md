# Rui Pai · CT de Futevôlei

Landing do CT Rui Pai no Recreio dos Bandeirantes: aulas de futevôlei na praia (Posto 11) e na Praça Mozart Firmeza.

[**Site no ar**](https://rpai-futevolei.vercel.app) · [**Código**](https://github.com/lucashaddadvieiracyber/rpai-futevolei)

## Rodar local

```bash
npm install
npm run dev -- -p 3100
```

Abre `http://localhost:3100`.

Node 20+ e npm. Não precisa de variável de ambiente: WhatsApp, Instagram e textos estão em `src/lib/site.ts`.

## O que tem na página

- Hero e fotos reais do CT (time, aulas, fundamento, game)
- Aulas e valores: futevôlei, personal, Clubinho/funcional, day use e Gympass/Wellhub
- Método em três passos: nivelamento, fundamento, jogo real
- História do Rui Pai, infra, parceiros (Alfa Belle, Atual Clube, Churrasco Express, Vrauu)
- Avaliações do Google, vídeos do YouTube, FAQ e os dois endereços
- CTA principal no WhatsApp `(21) 97909-0667`

## Stack

Next.js 15 (App Router) + TypeScript + Tailwind CSS 4. Scroll com Lenis e motion com GSAP. Sem CMS: conteúdo e mídia no repo (`src/lib/site.ts`, `public/media/`).

## Estrutura

```text
src/app/           layout, página e tokens
src/components/    seções da landing
src/lib/site.ts    copy, preços, WhatsApp, FAQ
public/media/      fotos e logos originais do CT
```

Fotos e logos vêm do site original do CT. A implementação visual é nova e independente do WordPress/Elementor.
