# Caderno de Reuniões

Aplicativo para transcrever reuniões e organizar sínteses, decisões e temas de estudo no iPad.

## Publicar no Cloudflare Worker existente

A cada envio à branch `main`, a aba **Actions** do GitHub prepara `dist/` como artefato para download. A publicação no seu Worker existente precisa do nome ou endereço dele para configurar a implantação sem alterar outro projeto por engano.

Se o Worker já estiver conectado ao GitHub via **Cloudflare Workers Builds**, configure o comando de compilação como `npm install --ignore-scripts --no-audit --no-fund && npm run build`. Para configurar o comando de implantação no Worker correto, use o nome dele e uma configuração Wrangler com `assets.directory = "./dist"`. Um Worker que já execute código ou use bindings precisa conservar essas configurações ao adicionar os arquivos estáticos.

## Modelo local

Baixe separadamente o arquivo `qwen2.5-0.5b-instruct-q4_k_m.gguf` fornecido com este projeto, guarde em Arquivos no iPad e selecione-o no botão **Carregar LLM local**. O modelo não é enviado ao GitHub nem a uma API. A inferência usa arquivos WebAssembly preparados durante a publicação. Sem o modelo, o app oferece uma organização básica do texto.

As transcrições salvas ficam no armazenamento deste navegador. O reconhecimento de voz depende do navegador e pode usar serviços externos. O carregamento e o desempenho do modelo ainda precisam ser validados num iPad real.

## Desenvolvimento local

Execute `npm install`, `npm run build` e `python -m http.server 8000 --directory dist`. Abra `http://localhost:8000`. Abrir `index.html` diretamente como `file://` pode bloquear os componentes da IA.

Biblioteca: [wllama](https://github.com/ngxson/wllama), licença MIT incluída em `llm/LICENSE`.
