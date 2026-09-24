# Caderno de Reuniões

Aplicativo para transcrever reuniões e organizar sínteses, decisões e temas de estudo no iPad.

## Publicar este repositório

1. Em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.
2. Ao enviar alterações à branch `main`, o fluxo **Publicar Caderno de Reuniões** instala os componentes da IA, cria `dist/` e publica o aplicativo.
3. O endereço aparece em **Settings → Pages**; no iPad, abra no Safari e use **Compartilhar → Adicionar à Tela de Início**, se desejar.

## Modelo local

Baixe separadamente o arquivo `qwen2.5-0.5b-instruct-q4_k_m.gguf` fornecido com este projeto, guarde em Arquivos no iPad e selecione-o no botão **Carregar LLM local**. O modelo não é enviado ao GitHub nem a uma API. A inferência usa arquivos WebAssembly preparados durante a publicação. Sem o modelo, o app oferece uma organização básica do texto.

As transcrições salvas ficam no armazenamento deste navegador. O reconhecimento de voz depende do navegador e pode usar serviços externos. O carregamento e o desempenho do modelo ainda precisam ser validados num iPad real.

## Desenvolvimento local

Execute `npm install`, `npm run build` e `python -m http.server 8000 --directory dist`. Abra `http://localhost:8000`. Abrir `index.html` diretamente como `file://` pode bloquear os componentes da IA.

Biblioteca: [wllama](https://github.com/ngxson/wllama), licença MIT incluída em `llm/LICENSE`.
