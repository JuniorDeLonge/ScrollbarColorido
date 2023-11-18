function myFunction() {
    const copyText = document.getElementById("myCode");
    navigator.clipboard.writeText(copyText.innerText);

    const copyButton = document.getElementById("myButton");
    updateButton(copyButton, "<i class='fa fa-check'></i> copiado!");

    setTimeout(() => {
        updateButton(copyButton, "<i class='fa fa-copy'></i> copiar");
    }, 2000);
}

function updateButton(button, message) {
    button.innerHTML = message;
}
