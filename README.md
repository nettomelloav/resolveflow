# ResolveFlow

**Do cartão ao DaVinci Resolve em poucos cliques.** App para Mac e Windows (R$ 49,97, pagamento único via Pix) que copia cartões de câmera e drone
com verificação SHA-256 para até 3 HDs, cria a estrutura do projeto e monta o projeto no
DaVinci Resolve Studio: biblioteca, preset, bins organizados e proxies.

- Página: https://nettomelloav.github.io/resolveflow/
- Comprar: https://nettomelloav.github.io/resolveflow/#comprar
- Download Mac (sempre a versão mais nova; pede a chave de licença): https://github.com/nettomelloav/resolveflow/releases/latest/download/ResolveFlow.dmg (instalador + LEIA-ME em PDF + vídeo)
- Download Windows (beta): https://github.com/nettomelloav/resolveflow/releases/latest/download/ResolveFlow-Setup.exe

## Instalar

1. Abra o `ResolveFlow.dmg` e dê dois cliques em `ResolveFlow.pkg`. Se o macOS disser que não pode abrir:
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
independente, sem vínculo com a Blackmagic Design.
