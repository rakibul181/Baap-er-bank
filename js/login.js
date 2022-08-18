// steep=1
document.getElementById('submit').addEventListener('click', function(){

    // step-2

    const emailFild = document.getElementById('email-field')
    const passwordField = document.getElementById('password-field')
    const eamil = emailFild.value 
    const password = passwordField.value 

    if(eamil=='rakib@bap.er.bank' && password == 'baperbank'){
        console.log('Valid User')
    }
    else{
        console.log('Invalid User')
    }
})