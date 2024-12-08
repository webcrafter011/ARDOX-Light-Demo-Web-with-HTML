//========== DOM Variables
let button                  = document.querySelector('.button');
let fuhadShiblu_inputPass   = document.querySelector('.fuhadShiblu_inputPass');
let fuhadShiblu_inputName   = document.querySelector('.fuhadShiblu_inputName');
let fuhadShiblu_nameErr                     = document.querySelector('.fuhadShiblu_nameErr');
let fuhadShiblu_passErr                     = document.querySelector('.fuhadShiblu_passErr');

//========== Functions
button.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(fuhadShiblu_inputName.value == ''){
        fuhadShiblu_nameErr.innerHTML = 'Please Enter your Username'
        fuhadShiblu_passErr.innerHTML = ''
    }else if(fuhadShiblu_inputPass.value == ''){
        fuhadShiblu_passErr.innerHTML = 'Please Enter your Username'
        fuhadShiblu_nameErr.innerHTML = ''
    }else{
        fuhadShiblu_nameErr.innerHTML = ''
        fuhadShiblu_inputName.value = ''
        fuhadShiblu_passErr.innerHTML = ''
        fuhadShiblu_inputPass.value = ''
        console.log('Success')
    }
})
