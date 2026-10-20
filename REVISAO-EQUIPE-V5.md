# Revisão V5 — Instituto Aline Braga

## Escopo aplicado
- Página institucional nova `/equipe/`.
- Equipe adicionada à navegação desktop, mobile e rodapé.
- Retratos reais padronizados em WebP 4:5, sem distorção de proporção.
- Composição editorial `equipe-instituto.webp` criada com os retratos fornecidos. Ela é uma composição, não uma fotografia coletiva.
- Home recebeu seção de equipe antes dos procedimentos.
- Página `O Instituto` recebeu chamada estratégica para a equipe.
- Página `Aline Braga` recebeu a biografia fornecida pelo cliente, com revisão de pontuação e organização editorial.
- Fundação do Instituto registrada como 19/11/2012; trajetória profissional de Aline mantida desde 2009.
- Schema.org atualizado com `foundingDate` e profissionais da equipe.
- Sitemap atualizado com `/equipe/`.

## UX e responsividade
- Menu desktop recalibrado para 6 itens sem instabilidade entre 981 e 1160 px.
- Equipe: 3 colunas em desktop, 2 em tablet e 1 no celular.
- Teaser da equipe: 5 colunas em desktop, 3 em tablet e cards horizontais no celular.
- Imagens usam `aspect-ratio` + `object-fit: cover`, preservando proporção e evitando deformação.
- Animações de entrada reduzidas para 16 px / 550 ms, sem blur.
- `scrollbar-gutter: stable` para reduzir mudanças de layout relacionadas à barra de rolagem.
- `prefers-reduced-motion` mantido.

## Performance
- Retratos convertidos para WebP.
- CSS e JavaScript receberam fingerprint SHA-256 no nome de arquivo para cache seguro.
- Sem frameworks JS externos.

## Observação
A mensagem mencionou uma “foto da equipe completa”, mas o pacote recebido nesta revisão continha cinco retratos individuais. Para não inventar uma fotografia inexistente, foi criada uma composição editorial usando apenas as fotos reais disponibilizadas e o retrato já existente de Aline no site.
