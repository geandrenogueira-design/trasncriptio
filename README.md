# Caderno de Reuniões

Aplicativo para transcrever reuniões e organizar sínteses, decisões e temas de estudo no iPad.

## Publicar no seu Cloudflare Worker

O Worker mostrado no painel é **`trasncriptio`**; `wrangler.jsonc` aponta para ele e para a pasta `dist/`. O GitHub compila e disponibiliza essa pasta na aba **Actions**. A publicação no Cloudflare é feita por você.

No painel do Worker, em **Settings → Build**, mantenha a branch `main` e configure:

- **Build command:** `npm run build` (já passou no seu log).
- **Deploy command:** `bunx wrangler deploy` (o ambiente mostrado no seu log tem Bun, mas não encontrou `npx`).

O Wrangler está listado nas dependências de desenvolvimento para que o Cloudflare o instale durante o build. Depois de salvar, execute um novo deploy no painel. O arquivo `wrangler.jsonc` define o nome do Worker e a pasta de arquivos estáticos.

## Modelo local

Baixe separadamente o arquivo `qwen2.5-0.5b-instruct-q4_k_m.gguf` fornecido com este projeto, guarde em Arquivos no iPad e selecione-o no botão **Carregar LLM local**. O modelo não é enviado ao GitHub nem a uma API. A inferência usa arquivos WebAssembly preparados durante a publicação. Sem o modelo, o app oferece uma organização básica do texto.

As transcrições salvas ficam no armazenamento deste navegador. O reconhecimento de voz depende do navegador e pode usar serviços externos. O carregamento e o desempenho do modelo ainda precisam ser validados num iPad real.

## Desenvolvimento local

Execute `npm install`, `npm run build` e `python -m http.server 8000 --directory dist`. Abra `http://localhost:8000`. Abrir `index.html` diretamente como `file://` pode bloquear os componentes da IA.

Biblioteca: [wllama](https://github.com/ngxson/wllama), licença MIT incluída em `llm/LICENSE`.
