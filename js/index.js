
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var nameInput = document.getElementById("nameInput");
var loginBtn = document.getElementById("loginBtn");
var signUpBtn = document.getElementById("signUpBtn");
var logoutBtn = document.getElementById("logoutBtn");
var successMessage  =  document.querySelector(".valid");

var usersContainer  ;

if(localStorage.getItem("usersList") == null)
{
    usersContainer =  [];
}
else
{
    usersContainer =  JSON.parse(localStorage.getItem("usersList"));
    

}

function createUser()
{
    var user =  
    {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }

    usersContainer.push(user);

    localStorage.setItem("usersList" , JSON.stringify(usersContainer));

    console.log("user created");

}

// signUpBtn.addEventListener("click" , function(){

//     createUser();
//     successMessage.classList.remove("d-none");


// });


function login()
{
   for (var  i  =  0;  i< usersContainer.length; i++)
   {
        if( usersContainer[i].email  ===   emailInput.value  
        
            &&
            usersContainer[i].password  ===   passwordInput.value )
        {
            return true;
        }
   }

   return  false;
}

loginBtn.addEventListener("click" ,  function(){

    if(login())
    {
        window.location.href = "home.html";

        // loginBtn.innerHTML += `<a  href="home.html"> </a>`;
        console.log("yes");
    }
    else
    {
        console.log("noe");
    }

});


logoutBtn.addEventListener("click",  function(){


    window.location.href =  "index.html";
    console.log("logout");
});


