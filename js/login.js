let email=document.querySelector("#email")
let password=document.querySelector("#password")
let login_btn=document.querySelector("#login")


let get_email=localStorage.getItem("email")
let get_password=localStorage.getItem("password")

login_btn.addEventListener("click",function(e){
    e.preventDefault()
    if(email.value===""||password.value===""){
        alert("please fill all data")
    }
    else if(email.value.trim()===get_email.trim()&&password.value.trim()===get_password.trim()){
           setTimeout(()=>{
              window.location="index.html"
           },1500)
    }else{
          if(email.value.trim()!==get_email.trim()&&password.value.trim()!==get_password.trim()){
            alert("please enter correct email and password")
          } 
          else if(email.value.trim()!==get_email.trim()){
                alert("please enter correct email")
          }else{
               alert("please enter correct password")
            }

    }
})