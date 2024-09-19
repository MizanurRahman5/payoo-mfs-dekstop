document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
    // console.log('click me')
    const phoneNumber = document.getElementById('phone-number');
    const newPhoneNumber = phoneNumber.value;
    // console.log(newPhoneNumber)
    const pinNumber = document.getElementById('password');
    const newPinNumber = pinNumber.value;
    // console.log(newPinNumber);

    if(newPinNumber === '1234'){
        // console.log('your are logged')
        window.location.href = '/home.html';
    }else{
        alert('your pin or phone number encorrect');
    }

})