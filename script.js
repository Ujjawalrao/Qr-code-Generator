let input = document.querySelector('input')
let btn = document.querySelector('button')
let img = document.querySelector('img')

function genQR(params) {
    if (input.value == "") {
        setTimeout(() => {
            input.classList.add('shake')
        }, 1000);
        
        clearInterval()
    }else {
        let inputVal = input.value;
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
    }
}

genQR();