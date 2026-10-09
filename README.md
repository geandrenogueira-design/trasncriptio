# Caderno de Reuniões

Aplicativo para transcrever reuniões e organizar sínteses, decisões e temas de estudo no iPad (Safari) e no computador (Chrome ou Edge). O app detecta o aparelho e ajusta o comportamento.

## Publicar no seu Cloudflare Worker

O Worker mostrado no painel é **`trasncriptio`**; `wrangler.jsonc` aponta para ele e para a pasta `dist/`. O GitHub compila e disponibiliza essa pasta na aba **Actions**. A publicação no Cloudflare é feita por você.

No painel do Worker, em **Settings → Build**, mantenha a branch `main` e configure:

- **Build command:** `npm run build` (já passou no seu log).
- **Deploy command:** `bunx wrangler deploy` (o ambiente mostrado no seu log tem Bun, mas não encontrou `npx`).

O Wrangler está listado nas dependências de desenvolvimento para que o Cloudflare o instale durante o build. Depois de salvar, execute um novo deploy no painel. O arquivo `wrangler.jsonc` define o nome do Worker e a pasta de arquivos estáticos.

## Modelo local

Baixe separadamente o arquivo `qwen2.5-0.5b-instruct-q4_k_m.gguf` fornecido com este projeto, guarde em Arquivos no iPad e selecione-o no botão **Carregar LLM local**. O modelo não é enviado ao GitHub nem a uma API. A inferência usa arquivos WebAssembly preparados durante a publicação. Sem o modelo, o app oferece uma organização básica do texto.

As transcrições salvas ficam no armazenamento deste navegador. O reconhecimento de voz depende do navegador e pode usar serviços externos. O carregamento e o desempenho do modelo ainda precisam ser validados num iPad real.

## Uso no computador

- A transcrição continua mesmo com a aba em segundo plano (por exemplo, enquanto você usa o Meet). O reconhecimento usa sempre o microfone padrão do sistema; para captar todos os participantes de uma chamada, use caixas de som em vez de fones.
- No Chrome, o reconhecimento de voz é processado pelos servidores do Google; no Edge, pelos da Microsoft. O LLM roda localmente.
- O LLM tenta usar a placa de vídeo (WebGPU) e, se não conseguir, usa o processador. O arquivo `_headers` ativa o isolamento de origem (COOP/COEP), que permite usar vários núcleos.
- Atalhos: `Alt+R` grava/pausa, `Ctrl+Enter` organiza, `Ctrl+S` salva. Arraste um `.gguf` para carregar o modelo ou um `.txt`/`.vtt`/`.srt` para importar uma transcrição.
- O modelo de 0,5B erra o formato da resposta com frequência; no computador, um modelo de 1,5B a 3B (Q4) tende a gerar sínteses melhores. Arquivos acima de 2 GB precisam estar divididos em partes.

## Desenvolvimento local

Execute `npm install`, `npm run build` e `python -m http.server 8000 --directory dist`. Abra `http://localhost:8000`. Abrir `index.html` diretamente como `file://` pode bloquear os componentes da IA.

Biblioteca: [wllama](https://github.com/ngxson/wllama), licença MIT incluída em `llm/LICENSE`.
