# Segurança aplicada — Instituto Aline Braga

Esta versão foi preparada para hospedagem estática em HTTPS, preferencialmente na Vercel.

## Headers configurados
- Content-Security-Policy (CSP) com `default-src 'self'` e hashes SHA-256 para os blocos JSON-LD.
- Strict-Transport-Security (HSTS).
- X-Content-Type-Options: nosniff.
- X-Frame-Options: DENY.
- CSP `frame-ancestors 'none'` contra clickjacking.
- Referrer-Policy: strict-origin-when-cross-origin.
- Permissions-Policy bloqueando câmera, microfone, geolocalização, pagamento e USB.
- Cross-Origin-Opener-Policy: same-origin.
- Cross-Origin-Resource-Policy: same-origin para reduzir hotlinking em navegadores compatíveis.
- X-Permitted-Cross-Domain-Policies: none.

## Arquitetura
- Sem backend, banco de dados, login, formulário ou API própria nesta versão.
- Sem chaves, tokens ou credenciais no frontend.
- Sem bibliotecas JavaScript externas.
- Sem source maps.
- Scripts carregados apenas do próprio domínio.
- Assets estáticos com cache imutável.

## Limite técnico importante
Nenhum site público pode impedir de forma absoluta que alguém salve HTML, CSS, JavaScript, textos ou imagens que o navegador precisa baixar para exibir a página. Bloquear clique direito, seleção de texto ou atalhos não oferece proteção real e prejudica acessibilidade/UX; por isso essas técnicas não foram usadas.

A proteção aplicada é voltada à segurança real: reduzir XSS, clickjacking, MIME sniffing, permissões indevidas, incorporação e hotlinking, além de manter o projeto sem segredos no cliente.
