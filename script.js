let mlCafe = document.querySelector('input#txt1')
let result = document.querySelector('h3#result')
let msg = document.querySelector('h4#msg')
let div = document.querySelector('div')
let img = document.createElement('img')
img.className = "minha-img"


function encher() {
    document.querySelector("button").disabled = true;
    img.src = './Assets/enchendo.png'
    div.appendChild(img);
    result.style.color = 'black'
    msg.innerText = '';
    result.innerText = '';
    let ml = Number(mlCafe.value);
    
    if (ml == 0 || ml < 5) {
        img.src = './Assets/cancelar.png'
        div.appendChild(img);
        result.innerText = '';
        result.style.color = 'red'
        result.innerText = `Valor inválido! Digite um número a partir de 5ml!`
        document.querySelector("button").disabled = false;
        return;
    }
    let incremento = ml;
    function loop() {
        document.querySelector("button").disabled = true;
        
        if (ml < 325) {
            result.innerText = '';
            msg.innerText = '';
            ml += incremento;
            let p = document.createElement('p');
            p.textContent = `Enchendo.... (${ml})ml.`
            result.appendChild(p);
        }
        if (ml > 325) {
            msg.innerText = '';
            msg.style.color = 'red'
            msg.innerText = 'Seu copo transbordou!!'
            img.src = './Assets/derramar.png'
            div.appendChild(img);
            document.querySelector("button").disabled = false;
            return;
        }
        if (ml == 325) {
            msg.innerText = '';
            msg.style.color = 'green'
            msg.innerText = `Parabéns! Você chegou ao valor esperado. Desfrute do seu delicioso café!!`
            img.src = './Assets/xicara.png'
            div.appendChild(img);
            document.querySelector("button").disabled = false;
            return;

          
        }
        setTimeout(loop, 350)
    }
    loop();
    document.querySelector("button").disabled = false;

    
}

