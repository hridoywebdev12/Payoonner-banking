document.getElementById('Deposit-button').addEventListener('click',function(){

   // after click get the input from the input field
   const DepositInputField = document.getElementById('Deposit-input');
   const DepositInputText = DepositInputField.value; 

   if(parseFloat(DepositInputText) <= 0) {
     return alert('plese provide more then 0')
   }

   // get the previous deposit and update deposit total
   const previousDepositTotal = document.getElementById('Deposit-total');
   const DepositText = previousDepositTotal.innerText
   const totalDeposit = parseFloat(DepositInputText) + parseFloat(DepositText);
   previousDepositTotal.innerText = totalDeposit;

   // balance update
   const previousBalance = document.getElementById('Balance-total');
   const previousBalanceText = previousBalance.innerText;
   const newBalance = parseFloat(previousBalanceText) + parseFloat(DepositInputText);
   previousBalance.innerText = newBalance;
   // clear tha input filed
   DepositInputField.value = '';
})

document.getElementById('Withdraw-button').addEventListener('click',function() {

   const WithdrawInputField = document.getElementById('Withdraw-input');
   const WithdrawInputText = WithdrawInputField.value;
   const WithdrawInputNumber = parseFloat(WithdrawInputText)

   if (WithdrawInputNumber <= 0) {
      return alert('plese provide more then 0')
   }

   const previousWithdrawTotal = document.getElementById('Withdraw-total');
   const previousWithdrawTotalText = previousWithdrawTotal.innerText;
   const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalText);

   const newWithdrawTotal = WithdrawInputNumber + previousWithdrawTotalNumber;
   previousWithdrawTotal.innerText = newWithdrawTotal 

   const previousBalance = document.getElementById('Balance-total');
   const previousBalanceText = previousBalance.innerText;
   const previousBalanceNumber = parseFloat(previousBalanceText)
   const newBalance = previousBalanceNumber - WithdrawInputNumber;
   previousBalance.innerText = newBalance

   WithdrawInputField.value = '';
})