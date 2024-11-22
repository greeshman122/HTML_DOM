function validate(e) 
{
    e.preventDefault();
    const em = document.getElementById('email').value ;
    const pass = document.getElementById('password').value ;
    const age1 = document.getElementById('age').value;
    const mb = document.getElementById('message');
    let msg = '';
    if (em === '')
    {
        msg = 'Please Enter a Valid Email';
        mb.style.color = 'red';
    }
    else if (pass === '') {
        msg = 'Please Enter 8 to 12 Digit Password';
        mb.style.color = 'red';
    } 
    else if (age1 === '') {
        msg = 'Please Enter a Age between 12 to 50';
        mb.style.color = 'red';
    } 
    else {
        msg = 'Login Successful';
        mb.style.color = 'green';
    }
    mb.innerText = msg;
}
