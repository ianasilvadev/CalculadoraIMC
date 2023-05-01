const peso = document.getElementById ("peso"); // PESO
const altura = document.getElementById ("altura"); // ALTURA
const enviar = document.getElementById ("calculate"); // ENVIAR
const resultadoDiv = document.getElementById("resultado");



enviar.addEventListener('click', calcularIMC);

function calcularIMC() {
    event.preventDefault()
    if (peso.value === "" || altura.value === "") {
        alert("Por favor, preencha todos os campos");
        return;
    }

    const resultado = (peso.value / (altura.value * altura.value)).toFixed(2);
    resultadoDiv.innerHTML = `Seu IMC é ${resultado}`
    resultadoDiv.style.display = "block"; // para exibir a div
    if (resultado > 30) {
        resultadoDiv.innerHTML += "<br> Seu IMC indica que você está acima do peso recomendado. <br> Recomendamos que você consulte um médico <br> para avaliar sua saúde e, se necessário, <br> discutir opções para alcançar um peso saudável.";
    } 
    else if (resultado < 18,5){
        resultadoDiv.innerHTML += "<br> Seu IMC indica que você está abaixo do peso recomendado. <br> Recomendamos que você consulte um médico <br> para avaliar sua saúde e, se necessário, <br> discutir opções para alcançar um peso saudável.";
    }
    else {
        resultadoDiv.innerHTML = `Seu IMC é ${resultado}`
    }

    enviar.textContent = "Calcular novamente";
    enviar.removeEventListener('click', calcularIMC);
    enviar.addEventListener('click', recomecar);
}

function recomecar() {
    peso.value = "";
    altura.value = "";
    resultadoDiv.innerHTML = "";
    resultadoDiv.style.display = "none";
    enviar.addEventListener('click', calcularIMC);
    enviar.textContent = "Enviar";
  }