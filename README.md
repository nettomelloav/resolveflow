# ResolveFlow

**Do cartão ao DaVinci Resolve em poucos cliques.** App gratuito para Mac que copia cartões de câmera e drone
com verificação SHA-256 para até 3 HDs, cria a estrutura do projeto e monta o projeto no
DaVinci Resolve Studio: biblioteca, preset, bins organizados e proxies.

- Página: https://nettomelloav.github.io/resolveflow/
- Download (sempre a versão mais nova): https://github.com/nettomelloav/resolveflow/releases/latest/download/ResolveFlow.pkg

## Instalar

1. Dois cliques em `ResolveFlow.pkg`. Se o macOS disser que não pode abrir:
   **Ajustes do Sistema › Privacidade e Segurança › Abrir Mesmo Assim** (o instalador não tem assinatura da Apple).
2. Na primeira cópia, permita o acesso a **volumes removíveis**.
3. No DaVinci: **Preferences › System › General › External scripting using = Local**, salve e reinicie.

Guia completo: [GUIA.md](GUIA.md).

## Requisitos

- Mac com Apple Silicon, macOS 14 ou mais novo
- DaVinci Resolve Studio 21
- Para proxies: `ffmpeg` (`brew install ffmpeg`)

## O que ele faz

- Detecta o cartão (DCIM, PRIVATE, CLIP ou XDROOT) e mostra os clipes com miniatura, duração e codec
- Cartão somente leitura: nada é formatado, apagado, movido ou renomeado
- Pasta "Nome AAAA - Mês DD" com CAM/CAM1–3, DRONE, ARQUIVOS, RENDER e DATABASE; cada cartão em CARD N
- Cópia para o HD de trabalho e até 2 backups, cada arquivo conferido por SHA-256 (manifesto compatível com `shasum -c`)
- Se um HD sair no meio, só ele pausa e retoma depois; dois cartões copiam em paralelo
- No DaVinci: biblioteca em DATABASE/Biblioteca, projeto com o nome da pasta, preset, bins
  (Master › TIMELINE, CAM1 › CARD 1…, CAM2, DRONE, ARQUIVOS), RENDER como destino e proxies ProRes com timecode

---

Desenvolvido por **Netto Mello Videomaker**. DaVinci Resolve é marca da Blackmagic Design; este é um app
independente e gratuito, sem vínculo com a Blackmagic Design.
