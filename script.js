function login() {
   
    const users = [
        "dzejkobsim@kkt.heslo123",
        "lexaasd@kkt.ahoj",
        "idkad@kkt.123",
    ]

    

    let userEmail, userPassword

    userEmail = document.getElementById("emailIn").value
    userPassword = document.getElementById ("passIn").value

    let userLogin = userEmail + "." + userPassword
    
    for(let i = 0 < users.length; i++;) 
        if(userLogin === users[i]){
            alert("Uspesne prihlaseni")
            break
        }else alert("spatne prihlasky")
    

}

