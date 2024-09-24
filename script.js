function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function submitQuiz() {
    // Desabilita o botão de envio após ser clicado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = true;

    // Habilita o botão de "Responder novamente"
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = false;

    let correctAnswers = {
        q1: "A",
        q2: "A",
        q3: "C",
        q4: "A",
    };


let form = document.getElementById('quiz-form');
let score = 0;

for (let key in correctAnswers) {
    let userAnswers = form.elements[key].value;
    if (userAnswers === correctAnswers[key]) {
        score++;
    }
}

let result = document.getElementById('result');
result.innerHTML = `Parabens vc completou nosso quiz, como recompensa vc recebeu 50% de desconto na sua primeira compra`;

if (score === 7){
    let sucessSound = document.getElementById('venceusom');
    sucessSound.play();
}

if (score === 0){
    let perdeuSound = document.getElementById('erradosom');
    perdeuSound.play();
}

if (score === 1){
    let perdeuSound = document.getElementById('erradosom');
    perdeuSound.play();
}

if (score === 2){
    let perdeuSound = document.getElementById('erradosom');
    perdeuSound.play();
}

if (score === 3){
    let perdeuSound = document.getElementById('erradosom');
    perdeuSound.play();
}

if (score === 4){
    let perdeuSound = document.getElementById('erradosom');
    perdeuSound.play();
}

if (score === 5){
    let perdeuSound = document.getElementById('erradosom');
    perdeuSound.play();
}

if (score === 6){
    let perdeuSound = document.getElementById('erradosom');
    perdeuSound.play();
}

}

function resetQuiz() {
    // Reabilita o botão de envio quando o quiz é reiniciado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = false;

    // Desabilita o botão de "Responder novamente" novamente
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = true;

    // Limpa as respostas e reseta o formulário
    document.getElementById('quiz-form').reset();

    // Reabilita as opções de resposta
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    // Limpa o resultado
    let result = document.getElementById('result');
    result.innerHTML = "";
}