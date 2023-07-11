document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Formulário não será enviado se estiver com os parâmetros em padrão

    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoA < campoB) {
        // Se o formulário estiver preenchido corretamente
        document.getElementById("campoA").style.display = "none";
        document.getElementById("campoB").style.display = "none";
        document.getElementById("redo").style.display = "block";
        document.querySelector(".container").style.height = "180px";
        document.getElementById("submit-button").style.display ="none";
        document.getElementById("fail").style.display = "none";
        document.getElementById("success-button").style.display = "block";
        document.getElementById("success-button").disabled = "true"
        document.getElementById("campoA").value = "";
        document.getElementById("campoB").value = "";
    } else {
        // Se o formulário estiver preenchido incorretamente
        document.getElementById("fail").style.display = "block";
        document.getElementById("submit-button").style.display ="block";
        document.getElementById("success-button").style.display = "none";
        document.querySelector(".container").style.height = "300px";
    }
});
