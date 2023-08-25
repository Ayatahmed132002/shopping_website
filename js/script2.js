let links=document.querySelector("#links")
let user_info=document.querySelector("#user_info")
let cart_content=document.querySelector("#cart_content")
let user_data=document.querySelector("#user_data")

let stored_fname=localStorage.getItem("Fname")


if(localStorage.getItem("Fname")){
    links.remove()
    user_info.style.display="block"
    user_data.innerHTML=`Welcome,${stored_fname}`
    cart_content.style.display="flex"
}



let products=document.querySelector(".products")
let all_products=[
    {
        id:1,
        title:"tshirt",
        price:100 ,
        category:"fashion",
        img_url:"images/black t_shirt.jpeg"
    },
    {
        id:2,
        title:"pink glasses",
        price:10 ,
        category:"women accessories",
        img_url:"images/glasses.jpg"
    },
    {
        id:3,
        title:"sweatshirt",
        price:120 ,
        category:"fashion",
        img_url:"images/sweatshirt.jpg"
    },   
    {
        id:4,
        title:"watch",
        price:100 ,
        category:"men accessories",
        img_url:"images/watch.jpg"
    },
    {
        id:5,
        title:"blue glasses",
        price:20 ,
        category:"women accessories",
        img_url:"images/glasse.jpg"
    },
    {
        id:6,
        title:"earbuds",
        price:140 ,
        category:"phone accessories",
        img_url:"images/earbuds.jpg"
    },
    {
        id:7,
        title:"headphone",
        price:100 ,
        category:"phone accessories",
        img_url:"images/headphone.jpg"
    },
   {
        id:8,
        title:"bag",
        price:100 ,
        category:"fashion",
        img_url:"images/bag.jpg"
    }
    
]
function draw(){
    products.innerHTML=""
    let y=all_products.map((item)=>{
        return` <div class="product-item col-12 col-sm-12 col-lg-4">
        <img src="${item.img_url}" alt="not found">
        <div class="product-info">
            <p>product:${item.title}</p>
            <p>price:${item.price} $</p>
            <p>Category:${item.category}</p>

        </div>
        <div class="button-div">
            <button id="add_btn" class="btn btn-primary"  my-2" onClick="add_to_cart(${item.id})" >add to cart</button>
            <i class="fas fa-heart fav"id="fav1" onClick="add_to_favourite(${item.id})"></i>
        </div>
    </div>
        `
    })
    products.innerHTML=y.join(" ")
}
draw()

// /////////////////////////////////////////////////////////////
let select=document.querySelector("#select")
let option1=document.querySelector("#select #option1")
let option2=document.querySelector("#select #option2")
let search=document.querySelector("#search")
let all_products_container=all_products


////////////////////////////////////////////////////////////////////
select.onchange=function(){
    selected_option=select.value
    if(selected_option==="search by category")
     {
        search.onkeyup=function(){
           
            if(search.value !=="" && search.value.length>=3){
                let all_items=[]
                all_products.forEach((item)=>{
                  if (item.category.indexOf(search.value.toLowerCase())!=-1){
                       all_items=[...all_items,item]
                  }
                })
                console.log(all_items)
               all_products=all_items
               draw()
            }
            else{
                all_products=all_products_container
                draw()
            }
        }
     }
     else{
        search.onkeyup=function(){
           
            if(search.value !=="" && search.value.length>=3){
                let all_items=[]
                all_products.forEach((item)=>{
                  if (item.title.indexOf(search.value.toLowerCase())!=-1){
                       all_items=[...all_items,item]
                  }
                })
                // console.log(all_items)
               all_products=all_items
               draw()
            }
            else{
                all_products=all_products_container
                draw()
            }
        }
     }
}


if(select.value==="search by name"){
    search.onkeyup=function(){
        if(search.value!=="" && search.value.length>=3){
            console.log(search.value)
            let all_items=[]
           all_products.forEach((item)=>{
                if(item.title.indexOf(search.value.toLowerCase())!=-1){
                    
                     all_items= [...all_items,item]
                }
     
            }
               
            )
            // console.log(all_items)
            all_products=all_items
            draw()
        }else{

            all_products=all_products_container
            draw()
        } }
        
}
////////////////_________________________________/////////////////////////
let buttons=document.querySelectorAll("#add_btn")
let products_div=document.querySelector("#products-div")
/////////////////_________________________________///////////////////////////////////

let badge=document.querySelector(".badge")

let list=localStorage.getItem("products_added")?JSON.parse(localStorage.getItem("products_added")):[]

function add_to_cart(id){

    btn_index=id-1
    button_clicked=buttons[btn_index]
    if(localStorage.getItem("Fname")){
        if(button_clicked.innerHTML==="add to cart"){
            button_clicked.style.backgroundColor="red"
            button_clicked.innerHTML="Remove from cart"
            button_clicked.style.border="none"
           ///////////part of addition to cart_div//////////////
           product_selected= all_products.find((item)=>item.id===id)
           products_div.innerHTML +=`<div class="list-div">
               <div class="pg-div"><p>${product_selected.title}</p></div>
               <div class="icons-div">
                   <span id="span">1</span>
                   <i class="fas fa-plus"id="plus"></i>
                   <i class="fas fa-minus"id="minus"></i>
               </div>

           </div>

        `
         selected_product=all_products.find((item)=>item.id===id)  
         list=[...list,selected_product]
         localStorage.setItem("products_added",JSON.stringify(list))

            plus_minus()
        
        }//////_Remove button click_____///////
        else if(button_clicked.innerHTML==="Remove from cart"){
            button_clicked.innerHTML="add to cart"
            button_clicked.style.backgroundColor="var(--blue)"
            button_clicked.style.border="none"

        }
    }
    else{
        window.location="login.html"
    }

}

///////////////_____________________________________////////////
if(localStorage.getItem("count")&& localStorage.getItem("products_added")){
    product_counts=JSON.parse(localStorage.getItem("count"))
    console.log(product_counts)
    products_stored=JSON.parse(localStorage.getItem("products_added"))
    products_stored.forEach((item,index)=>{
        // console.log(product_counts[index])
        products_div.innerHTML +=`<div class="list-div">
        <div class="pg-div"><p>${item.title}</p></div>
        <div class="icons-div">
            <span id="span">${product_counts[index]}</span>
            <i class="fas fa-plus"id="plus"></i>
            <i class="fas fa-minus"id="minus"></i>
        </div>

    </div>

 `

    })

    

}



all_fav_icons=document.querySelectorAll("#fav1")
fav_list=localStorage.getItem("fav_products")?JSON.parse(localStorage.getItem("fav_products")):[]
if(fav_list){
    fav_list.forEach((item)=>{
        id=item.id
        all_fav_icons[id-1].style.color="red"
    })
    
}

function add_to_favourite(id){
    fav_index=id-1
    console.log(all_fav_icons[fav_index])

    let styles=window.getComputedStyle(all_fav_icons[fav_index])
    let fav_color=styles.getPropertyValue("color")
    console.log(fav_color)
    if(localStorage.getItem("Fname")){
        if(fav_color==="rgb(128, 128, 128)"){
            
            all_fav_icons[fav_index].style.color="red"
            fav_product=all_products.find((item)=>item.id===id)
            fav_list=[...fav_list,fav_product]
            localStorage.setItem("fav_products",JSON.stringify(fav_list))
        }
        else if(all_fav_icons[fav_index].style.color==="red"){
            all_fav_icons[fav_index].style.color="gray"
            if(localStorage.getItem("fav_products")){
                fav_products=JSON.parse(localStorage.getItem("fav_products"))
                product_index=fav_products.findIndex((item)=>item.id===id)
                fav_products.splice(product_index,1)
                fav_list.splice(product_index,1)
                localStorage.setItem("fav_products",JSON.stringify(fav_products))
            }

        }
    }
    else{
        window.location="login.html"
    }

}

////////////_______________________________///////////////
function plus_minus(){
    let all_pg=document.querySelectorAll(".pg-div p")
    let plus_icons=document.querySelectorAll("#plus")
    let minus_icons=document.querySelectorAll("#minus")
    let badges=document.querySelectorAll("#span")
    let list_div=document.querySelectorAll(".list-div")
    arr=[]
    badges.forEach((item)=>{
         arr.push(parseInt(item.innerHTML))
         
    })
    console.log(arr)
    localStorage.setItem("count",JSON.stringify(arr))

    
    badge.innerHTML=all_pg.length
    plus_icons.forEach((plus,index)=>{
          plus.addEventListener("click",function(){
             let badges=document.querySelectorAll("#span")
            //  console.log(badges[index].innerHTML)
              badges[index].innerHTML=parseInt(badges[index].innerHTML)+1
             
              arr=[]
              badges.forEach((item)=>{
                arr.push(parseInt(item.innerHTML))
           })
           console.log(arr)
           localStorage.setItem("count",JSON.stringify(arr))
          })
    })
    minus_icons.forEach((plus,index)=>{
        plus.addEventListener("click",function(){
            if(parseInt(badges[index].innerHTML)>1){
                let badges=document.querySelectorAll("#span")
                console.log(badges[index].innerHTM)
                badges[index].innerHTML=parseInt(badges[index].innerHTML)-1
                
                arr=[]
                badges.forEach((item)=>{
                    arr.push(parseInt(item.innerHTML))
           })
           console.log(arr)
           localStorage.setItem("count",JSON.stringify(arr))
            }
            else{
                 list_div[index].remove()
                 let btn_index=all_products.findIndex((item)=>item.title===all_pg[index].innerHTML)
                 buttons[btn_index].innerHTML="add to cart"
                 buttons[btn_index].style.backgroundColor="var(--blue)"
                 badge.innerHTML=document.querySelectorAll(".pg-div p").length
                 let badges=document.querySelectorAll("#span")
                 list.splice(index,1)
                 arr=[]
                 badges.forEach((item)=>{
                 arr.push(parseInt(item.innerHTML))
                 
               })
                console.log(arr)
                localStorage.setItem("count",JSON.stringify(arr))
                

                 if(localStorage.getItem("products_added")){
                    products=JSON.parse(localStorage.getItem("products_added"))
                    products.splice(index,1)
                    localStorage.setItem("products_added",JSON.stringify(products))

                 }
            }
            
        })
  })
}
plus_minus()
////////////////___________________________///////////////////////////////
let down_icon=document.querySelector(".down")
let div_products=document.querySelector("#products-div")
let products_list=document.querySelector(".products-list")
down_icon.addEventListener("click",function(){
    if(div_products.innerHTML !==""){
        if(products_list.style.display=="block"){
            products_list.style.display="none"
        }
        else{
            products_list.style.display="block"
        }

    }
})

let logout_btn=document.querySelector("#log_out")
logout_btn.addEventListener("click",function(){
      localStorage.clear()
      setTimeout(()=>{
        window.location="login.html"
      },1500)
     
})
