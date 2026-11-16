// ResolveFlow — página oficial: link de download (Release "latest" no GitHub) e Pix do café.
(function () {
    const $ = (s) => document.querySelector(s);
    const cfg = window.CONFIG || {};
    if (/[?&]anim\b/.test(location.search)) document.documentElement.classList.add('forcar-anim');

    // ---------------------------------------------------------------- download
    // O link "latest/download" nunca muda: cada versão nova sobe o mesmo nome de arquivo.
    const urlDownload = `https://github.com/${cfg.repo}/releases/latest/download/${cfg.arquivo}`;
    // (o botão da barra de navegação não tem data-download: ele rola até a seção de download)
    document.querySelectorAll('[data-download]').forEach((a) => { a.href = urlDownload; });
    if ($('#linkCodigo')) $('#linkCodigo').href = `https://github.com/${cfg.repo}`;
    if ($('#versao') && cfg.versao) $('#versao').textContent = 'v' + cfg.versao;

    // ---------------------------------------------------------------- etapas animadas quando aparecem
    const fluxo = $('.etapas');
    if (fluxo && 'IntersectionObserver' in window) {
        new IntersectionObserver((entradas, obs) => {
            entradas.forEach((e) => {
                if (e.isIntersecting) { fluxo.classList.add('rodando'); obs.disconnect(); }
            });
        }, { threshold: 0.4 }).observe(fluxo);
    } else if (fluxo) {
        fluxo.classList.add('rodando');
    }

    // ---------------------------------------------------------------- Pix
    async function copiar(texto) {
        try {
            await navigator.clipboard.writeText(texto);
            return true;
        } catch (e) {
            const t = document.createElement('textarea');
            t.value = texto;
            t.style.position = 'fixed';
            t.style.opacity = '0';
            document.body.appendChild(t);
            t.select();
            let ok = false;
            try { ok = document.execCommand('copy'); } catch (e2) { ok = false; }
            t.remove();
            return ok;
        }
    }
    const pix = window.PIX;
    if (pix && $('#copiarPix')) {
        const aviso = $('#pixAviso');
        const avisar = (ok, msg) => {
            aviso.textContent = ok ? msg : 'Não consegui copiar. Selecione e copie a chave manualmente.';
            aviso.classList.toggle('copiado', ok);
        };
        $('#copiarPix').addEventListener('click', async () => avisar(await copiar(pix.copiaECola),
            'Pix copia e cola copiado! Cole no app do seu banco. Obrigado ☕'));
        $('#copiarChave').addEventListener('click', async () => avisar(await copiar(pix.chave.replace(/\D/g, '')),
            'Chave copiada! Obrigado ☕'));
    }
})();
