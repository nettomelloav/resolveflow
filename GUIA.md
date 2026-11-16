# ResolveFlow — guia rápido

## Instalar

1. Dê dois cliques em **ResolveFlow.pkg**.
2. Como o instalador não tem assinatura da Apple, o macOS pode dizer que ele “não pode ser aberto”.
   Nesse caso abra **Ajustes do Sistema → Privacidade e Segurança**, role até o fim e clique em
   **Abrir Mesmo Assim** ao lado de “ResolveFlow.pkg”. Confirme com sua senha.
3. Siga o instalador. No fim, o app abre sozinho e a detecção de cartões já fica ligada.
4. Na tela **Ativar o ResolveFlow**, cole a chave de licença que você recebeu depois da compra
   (começa com `RF1-`) e clique em **Ativar**. A chave é pessoal, vai no seu nome e ativa sem internet.
   Ainda não tem a chave? Compre em https://nettomelloav.github.io/resolveflow/#comprar

Requisitos: Mac com Apple Silicon, macOS 14 ou mais novo e DaVinci Resolve Studio.
Para gerar proxies, instale o ffmpeg uma vez: `brew install ffmpeg`.

## Os 2 passos manuais

### 1. Liberar o app em Privacidade e Segurança

- Na primeira vez em que o app ler um cartão ou HD, o macOS pergunta se o **ResolveFlow** pode acessar
  arquivos em **volumes removíveis**. Clique em **Permitir**.
- Se recusou sem querer: **Ajustes do Sistema → Privacidade e Segurança → Arquivos e Pastas →
  ResolveFlow** e ligue **Volumes Removíveis**.
- Se o macOS disser que o app “não pode ser aberto”: **Ajustes do Sistema → Privacidade e
  Segurança**, role até o fim e clique em **Abrir Mesmo Assim**.

### 2. Ligar “External scripting using: Local” no DaVinci

1. Abra o DaVinci Resolve.
2. Menu **DaVinci Resolve → Preferences → System → General**.
3. Em **External scripting using**, escolha **Local**.
4. Clique em **Save** e reinicie o DaVinci.

## Como o ResolveFlow usa o DaVinci

- A biblioteca de cada projeto novo é criada sozinha em `DATABASE/Biblioteca`.
  Para isso o DaVinci precisa estar **fechado**: se ele estiver aberto, o ResolveFlow pede para você
  salvar e fechar com ⌘Q e depois clicar em **Já fechei**. Ele então cria a biblioteca e reabre o DaVinci.
- Ao abrir, o DaVinci mostra a lista de bibliotecas encontradas nos discos. Clique em **OK** nela;
  enquanto essa janela estiver aberta, o ResolveFlow espera.

### Presets de proxy e cache (uma vez só)

Os codecs de mídia otimizada e render cache só podem vir de um preset do DaVinci. Crie uma vez, em
qualquer projeto: **Project Settings → Master Settings** (Optimized Media and Render Cache: formato e
resolução) → menu **⋯ → Save As**:

- **Gestor - Arquivos pesados**: ProRes Proxy, Quarter
- **Gestor - Arquivos leves**: ProRes LT, Half

Depois disso o ResolveFlow guarda uma cópia e aplica o preset sozinho em todos os projetos novos.

## Conferir

No app, abra **Ajustes** (⌘,) e clique em **Testar conexão**. As três linhas devem ficar verdes:
Python, ffmpeg e DaVinci conectado.

## Uso no dia a dia

Insira o cartão: o app abre e mostra os clipes. Preencha o projeto à direita, ligue os backups se quiser
e clique em **Criar projeto**. O cartão só é lido; nada nele é apagado.

## Desinstalar

No Terminal:

```
/Applications/ResolveFlow.app/Contents/Resources/desinstalar.sh
```

Projetos, cópias e a configuração (`~/.gestor_davinci`) continuam onde estão.

---

Desenvolvido por Netto Mello Videomaker
