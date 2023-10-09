function calcular() {
    var alt = Number(document.getElementById("alt").value);
    var peso = Number(document.getElementById("peso").value);
    var resultado = document.getElementById("txt1");

    var imc = peso / (alt * alt);

    if (imc < 18.5) {
        resultado.innerHTML = "Seu IMC é igual à: " +  imc.toFixed(2) + " o seu peso está abaixo do peso.";
        return;
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = "Seu IMC é igual à: " + imc.toFixed(2) + " o seu peso está ideal parabéns!";
        return;
    }
    else if (imc > 24.9 && imc <= 29.9) {
        resultado.innerHTML = "Seu IMC é igual à: " + imc.toFixed(2) + " o seu peso está levemente acima do peso.";
        return;
    }
    else if (imc > 29.9 && imc <= 34.9) {
        resultado.innerHTML = "Seu IMC é igual à: " + imc.toFixed(2) + " o seu peso está com grau de obesidade 1.";
        return;
    }
    else if (imc > 34.9 && imc <= 39.9
    ) {
        resultado.innerHTML = "Seu IMC é igual à: " + imc.toFixed(2) + " o seu peso está com grau de obesidade 2(severa).";
        return;
    }
    else (imc >= 40); {
        resultado.innerHTML = "Seu IMC é igual à: " + imc.toFixed(2) + " o seu peso está com grau de obesidade 3(mórbida).";
        return;
    }
}
