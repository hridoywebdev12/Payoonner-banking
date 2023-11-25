document.getElementById('login-button').addEventListener('click',function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email,password);

    if(email == 'hs@gmail.com'&& password == 123456){
        window.location.href = 'banking.html'
    }
})