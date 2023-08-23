let mlCafe = document.querySelector('input#txt1')
let result = document.querySelector('h3#result')
let msg = document.querySelector('h4#msg')
let div = document.querySelector('div')
let img = document.createElement('img')

function encher() {
    result.style.color ='black'
    msg.innerText = '';
    result.innerText = '';
    let ml = Number(mlCafe.value);

    if (ml == 0 || ml < 5) {
        result.innerText = '';
        result.style.color = 'red'
        result.innerText = `Valor inválido! Digite um número a partir de 5ml!`
        return;
    }
    let incremento = ml;
    function loop() {
        if (ml < 325) {
            result.innerText = '';
            msg.innerText = '';
            ml += incremento;
            let p = document.createElement('p');
            p.textContent = `Enchendo.... (${ml})ml.`
            img.src = './Assets/enchendo.png'
            div.appendChild(img);
            result.appendChild(p);
        }
         if (ml > 325) {
            msg.innerText = '';
            msg.style.color = 'red'
            msg.innerText = 'Seu copo transbordou!!'
            img.src = './Assets/derramar.png'
            div.appendChild(img);
            return;
        }
        if (ml == 325) {
            msg.innerText = '';
            msg.style.color = 'green'
            msg.innerText = `Parabéns! Você chegou ao valor esperado. Desfrute do seu delicioso café!!`
            img.src = './Assets/xicara.png'
            div.appendChild(img);
            return;

        }
        setTimeout(loop, 350)
    }
    loop();
}

