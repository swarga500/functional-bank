
function getinput(inputId){
    
        const inputField = document.getElementById(inputId);
        const AmountText = inputField.value;
        const Amount = parseFloat(AmountText);
         // clear input field 
     inputField.value = '';
    return Amount;
}
function updateTotalField(totalFieldId, amount){
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;

}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
}
function updateBalance(depositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalance = parseFloat(balanceTotalText);
    const previousBalance = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalance + depositAmount;
    }
    else{
        balanceTotal.innerText = previousBalance - depositAmount;
    }
    
}

document.getElementById('deposit-btn').addEventListener('click', function(){

    const depositAmount = getinput('deposit-input');
    // get current deposit 
   /*  const totalElement = document.getElementById('deposit-total');
    const totalElementText = totalElement.innerText;
    const previousDeposit = parseFloat(totalElementText);
    totalElement.innerText = previousDeposit + depositAmount;

 */
   if(depositAmount > 0){
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
   }


    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance + depositAmount; */
    
   
})

// withdraw handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText =withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getinput('withdraw-input')


    /* const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = newWithdrawTotal + withdrawAmount; */
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount); 
    updateBalance(withdrawAmount, false);
    }
    // balance update 
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance - withdrawAmount; */
    

    
})