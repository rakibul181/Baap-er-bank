document.getElementById('deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field')
    const newDeposit = depositField.value
    const newDepositBalance = parseFloat(newDeposit)

    // console.log(typeof newDeposit)
    const priviousDeopsit = document.getElementById('deposite-total')
    const priviousAmount  = priviousDeopsit.innerText
    const priviousDepositBalence = parseFloat(priviousAmount)

    // console.log(typeof parseFloat(newDeposit))
    const currentDeposit = priviousDepositBalence+ newDepositBalance
    console.log(typeof parseFloat(currentDeposit))
    if(currentDeposit !== NaN){
       
        priviousDeopsit.innerText = currentDeposit
        depositField.value =''
    }
    else{
        priviousDeopsit.innerText =priviousAmount 
        alert('Please Enter valid Ammount of Deposit')
    }

    // total balance

    const priviousTatal = document.getElementById('total-balance')
    const priviousTatalBalnce = priviousTatal.innerText
    const priviousBalence = parseFloat(priviousTatalBalnce)
    const newTotalBalance = newDepositBalance + priviousBalence
    priviousTatal.innerText = newTotalBalance
    
})