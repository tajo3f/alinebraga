# Instituto Aline Braga — redesign institucional V3

## Abrir
Extraia o ZIP e abra `index.html`. O site funciona em HTML, CSS e JavaScript, sem instalação, Node.js ou banco de dados. Publique os arquivos desta pasta na raiz da hospedagem.

## Nova direção
Layout refeito: abertura clara com retrato, faixa institucional de aniversário, biografia integral, tratamentos expansíveis, jornada de atendimento, galeria, depoimentos, perguntas frequentes e localização. Identidade baseada no manual: #8A5245 e #F7E5DB. Logo oficial fornecido pelo cliente.

A referência principal foi `web-design-engineer.md`, com critérios de composição de `visual-critique.md`. As skills orientam a produção e não são componentes que precisam ser instalados no site. Não são usadas bibliotecas de animação ou carregamentos externos de fontes.

## História correta
- Aline iniciou sua trajetória profissional na estética em **2009**.
- A clínica completa **14 anos em novembro de 2026**, conforme informação enviada pelo cliente em outubro de 2026.
- As duas informações são distintas. A clínica não é apresentada como inaugurada em 2009.
- O aniversário está acompanhado da data absoluta, sem a expressão “mês que vem”.

## Recursos
- Tratamentos e FAQ com elementos nativos `details` e `summary`, funcionais sem JavaScript.
- Menu mobile com Escape, foco controlado e fechamento ao selecionar uma seção.
- Galeria com ampliação, bloqueio de foco no fundo e retorno ao item original; sem JavaScript, abre a própria foto.
- WhatsApp com mensagens específicas para cada área de tratamento.
- Navegação e conteúdo utilizáveis sem JavaScript.
- Animações discretas que respeitam movimento reduzido.
- CSS adaptado para telas estreitas, tablets e desktop.

## Validação executada
- Estrutura HTML, fechamento de tags, IDs únicos e âncoras.
- Existência dos arquivos locais, atributos alt e decodificação das imagens.
- Um título H1; seis tratamentos e cinco perguntas frequentes.
- Texto integral da biografia preservado e informações de tempo verificadas contra o pedido.
- JavaScript sem erro de sintaxe.
- Teste simulado de estado do menu, tecla Escape, foco após navegação, abertura/fechamento da galeria, isolamento do fundo, retorno de foco e redimensionamento para desktop.
- Integridade do ZIP.

Não foi possível fazer renderização visual ou teste interativo em navegador neste ambiente. Os testes simulados não substituem a conferência em navegador e celular real. Recomenda-se conferir a aparência e os serviços externos antes da publicação.

## Antes de publicar
O domínio preservado é `institutoalinebraga.com.br`, ainda sem verificação de registro nesta tarefa. Se for outro, atualize `index.html` (canonical, Open Graph e JSON-LD), `robots.txt` e `sitemap.xml`.

Telefone, Instagram, tratamentos e quatro depoimentos foram preservados do projeto original. Os depoimentos não foram verificados independentemente nesta revisão. Confirme origem e autorização para uso. O site não promete resultados nem confirma horários automaticamente.

As fotografias vieram do arquivo original e possuem entre 287 e 382 pixels de largura. Para melhor nitidez em monitores, substitua por versões de alta resolução das mesmas fotos. Não houve alteração de aparência ou geração de retratos artificiais.

O manual informa Cinema Sunday Regular e Poppins Light. Como os arquivos licenciados não vieram anexados, o projeto usa Georgia e fontes locais. Os arquivos oficiais podem ser incorporados posteriormente com `@font-face`.

Mapa, WhatsApp, Instagram e Google exigem conexão. O manifesto não implementa modo offline.
