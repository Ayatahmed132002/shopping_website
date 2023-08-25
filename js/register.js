let f_name=document.querySelector("#fname")
let l_name=document.querySelector("#lname")

let email=document.querySelector("#email")
let password=document.querySelector("#password")
let register_btn=document.querySelector("#register")

register_btn.addEventListener("click",function(e){
    e.preventDefault()
    if(f_name.value===""||l_name.value===""||email.value===""||password.value===""){
        alert("please,fill all data")
    }else{
        localStorage.setItem("Fname",f_name.value)
        localStorage.setItem("Lname",l_name.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout(()=>{
            window.location="login.html"
        },1500)
    }
})