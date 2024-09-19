document.getElementById('add-amount').addEventListener('click', function(event){
    event.preventDefault()
    // console.log('clidfjh')

    const amount = document.getElementById('amount');
    const amountValue = amount.value;
    // console.log(amountValue);
    const pin = document.getElementById('password');
    const pinValue = pin.value;
    // console.log(pinValue);
    // amountValue = ' ';
    if(pinValue === '1234'){
        // console.log('added your mony')
        
        const currentBlance = document.getElementById('current-blance').innerText;
        const currentBlanceNumber = parseFloat(currentBlance);
        const amountValueNumber = parseFloat(amountValue);

        // console.log(currentBlanceNumber , amountValueNumber);
        const newBlance = currentBlanceNumber + amountValueNumber;
        // console.log(newBlance)
        document.getElementById('current-blance').innerText = newBlance;
    }else{
        alert('encorrect pin Number')
    }
})


// console.log(currentBlance);