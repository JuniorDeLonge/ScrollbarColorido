function copiarTexto() {
    /* Seleciona o conteúdo da caixa de texto */
    var caixaDeTexto = document.getElementById("codigo");
    caixaDeTexto.select();

    /* Copia o texto para a área de transferência */
    document.execCommand('copy');

    /* Deseleciona o texto após a cópia */
    window.getSelection().removeAllRanges();
}
