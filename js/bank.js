document.getElementById('deposit').addEventListener('click',function(){

    // step-1/ get deposit value
    const depositField = document.getElementById('deposit-field')
    const newDeposit = depositField.value
    const newDepositBalance = parseFloat(newDeposit)

    //  setpe-2 get privious deposit valu
    const priviousDeopsit = document.getElementById('deposite-total')
    const priviousAmount  = priviousDeopsit.innerText
    const priviousDepositBalence = parseFloat(priviousAmount)

    //  step- 3  set new deposit value)
    const currentDeposit = priviousDepositBalence+ newDepositBalance
    // console.log(typeof parseFloat(currentDeposit))
    if(currentDeposit !== NaN){
       
        priviousDeopsit.innerText = currentDeposit
        depositField.value =''
    }
    else{
        priviousDeopsit.innerText =priviousAmount 
        alert('Please Enter valid Ammount of Deposit')
    }

    // step- 4  set total balance

    const priviousTatal = document.getElementById('total-balance')
    const priviousTatalBalnce = priviousTatal.innerText
    const priviousBalence = parseFloat(priviousTatalBalnce)
    const newTotalBalance = newDepositBalance + priviousBalence
    priviousTatal.innerText = newTotalBalance
    
})


// +++++++++++++withdraw+++++++++++

document.getElementById('withdraw').addEventListener('click', function(){
    // step-1  get withdraw value ny withdraw btn from input feild
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdraw = withdrawField.value
    const newWithdeawBalance = parseFloat(newWithdraw)
    console.log(newWithdeawBalance)


    //  step-2 get privious Withdraw value 
    const priviousWithdeaw = document.getElementById('withdraw-tatal')
    const priviousWithdrawAmount  = priviousWithdeaw.innerText
    const priviousWithdrawBalence = parseFloat(priviousWithdrawAmount)


        //  step- 3  set new deposit value)
        const currentWithdeaw = priviousWithdrawBalence + newWithdeawBalance
        // console.log(typeof parseFloat(currentWithdeaw))
        if(currentWithdeaw !== NaN){
           
            priviousWithdeaw.innerText = currentWithdeaw
            withdrawField.value =''
        }
        else{
            priviousWithdeaw.innerText =priviousWithdrawAmount 
            alert('Please Enter valid Ammount of Deposit')
        }




        // step- 4  set total balance

    const priviousTatal = document.getElementById('total-balance')
    const priviousTatalBalnce = priviousTatal.innerText
    const priviousBalence = parseFloat(priviousTatalBalnce)
    const newTotalBalance = priviousBalence - newWithdeawBalance  
    priviousTatal.innerText = newTotalBalance
    
})

