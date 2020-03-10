//Form validated with MULTIPLE IF AND ELSE/ CONDITIONAL STATEMENT

function register(e) {
    e.preventDefault();
    // console.log('Submitted...'); (It showed submited,mean working)

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var msg = document.getElementById('msg');

    if(name == ''|| email == '' || password == '' || password2 == ''){
        //DANGER ==INCORRECT
        msg.className= "alert alert-danger"; //boostrap makes it RED
        msg.innerHTML = 'Please fill out all fields';
    } else {
        if(name.length < 3){
            msg.className= "alert alert-danger"; //boostrap makes it RED
            msg.innerHTML = 'Name must be at least 3 characters';
        } else {
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.length){
                msg.className= "alert alert-danger"; //boostrap makes it RED
                msg.innerHTML = 'Please use a valid email';
            } else {
                if(password != password2) {
                    msg.className= "alert alert-danger";
                    msg.innerHTML = 'passwords do not match';
                } else{
                    //SUCCESS == CORRECT
                    msg.className= "alert alert-success"; //boostrap makes it YELLOW
                    msg.innerHTML = name + ' is registered with email ' + email;
                };

            };
           
        };

    
    };

};


document.getElementById('regForm').addEventListener('submit', register, false);