function sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
}

function predict(features) {
    const coef = [0.03157457, 0.08901733, 0.01157691, 0.10239868];
    const intercept = -8.34727251;

    let z = intercept;
    for (let i = 0; i < coef.length; i++) {
        z += coef[i] * features[i];
    }

    return sigmoid(z);
}

function calculateResult() {
    const glico = parseFloat(document.getElementById('glico').value);
    const idade = parseFloat(document.getElementById('idade').value);
    const imc = parseFloat(document.getElementById('imc').value);
    const genetica = parseFloat(document.getElementById('genetica').value);

    const inputFeatures = [glico, idade, imc, genetica];
    const probability = predict(inputFeatures);

    document.getElementById('result').innerText = `Probabilidade de classificação positiva: ${probability.toFixed(4)}`;
}
