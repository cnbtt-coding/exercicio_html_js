document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Formulário não será enviado se estiver com os parâmetros em padrão

    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoA < campoB) {
        // Se o formulário estiver preenchido corretamente
        document.getElementById("success").style.display = "block";
        document.getElementById("fail").style.display = "none";
        document.querySelector(".container").style.height = "275px";
    } else {
        // Se o formulário estiver preenchido incorretamente
        document.getElementById("success").style.display = "none";
        document.getElementById("fail").style.display = "block";
        document.querySelector(".container").style.height = "300px";
    }
});
