
let products=document.querySelector(".products")
let price_div=document.querySelector(".price")
function draw(){
    if(localStorage.getItem("products_added")){
        let all_products=JSON.parse(localStorage.getItem("products_added"))
       let products_count=JSON.parse(localStorage.getItem("count"))
       products.innerHTML=""
       all_products.forEach((item,index)=>{
          
        products.innerHTML+=`<div class="product_item col-12 col-md-5">
        <div class="product_info_top">
            <img src="${item.img_url}" alt="not found">
            <div class="product-info">
                <div class="product_pg">
                    <p>product:${item.title}</p>
                    <p>price:${item.price} $</p>
                    <p>Category:${item.category}</p>
                </div>
                  
                <div class="product-info-bottom">
                    <div class="icons">
                        <span id="span">${products_count[index]}</span>
                        <i class="fas fa-plus"id="plus"></i>
                        <i class="fas fa-minus"id="minus"></i>
                    </div>
                    <div class="button-div">
                        <button id="remove_btn" class=" btn my-2" onClick="Remove(${index})">Remove</button>
                    </div>
                </div>
            </div>    
        </div>
    </div>`
    })
    price_div.innerHTML=`<p class="total">Total Price:0$</p>`
    }
    

   
}
draw()

////////////////////////////////////////////////////////////////
function price(){
    let all_products=JSON.parse(localStorage.getItem("products_added"))
    let price_pg=document.querySelector(".total")
    let products_count=JSON.parse(localStorage.getItem("count"))
    total=0
    
    all_products.forEach((item,index)=>{
        total +=(item.price*products_count[index])
    })
    console.log(price_pg)
    price_pg.innerHTML=`total price:${total} $`

}
price()
/////////////////////////////////////////////////////////////
let Remove_btns=document.querySelectorAll("#remove_btn")
function Remove(index){
    let all_products=JSON.parse(localStorage.getItem("products_added"))
    let products_count=JSON.parse(localStorage.getItem("count"))
    all_products.splice(index,1)
    products_count.splice(index,1)
    localStorage.setItem("products_added",JSON.stringify(all_products))
    localStorage.setItem("count",JSON.stringify(products_count))
    draw()
    price()
    plus_minus()
    
   
}

//__________///////////////////////////////////___________________________//////////
////////____________________________________________-//////////////////
function plus_minus(){
    let all_plus_icons=document.querySelectorAll("#plus")
    let all_minus_icons=document.querySelectorAll("#minus")
    

    all_plus_icons.forEach((item,index)=>{
        item.addEventListener("click",function(){
            let badges=document.querySelectorAll("#span")
            badges[index].innerHTML=parseInt(badges[index].innerHTML)+1
            products_count=JSON.parse(localStorage.getItem("count"))
            products_count[index]=badges[index].innerHTML
            localStorage.setItem("count",JSON.stringify(products_count))
             price()
           
        })
        })
        all_minus_icons.forEach((item,index)=>{
            item.addEventListener("click",function(){
                let badges=document.querySelectorAll("#span")
                if(badges[index].innerHTML>1){
                    badges[index].innerHTML=parseInt(badges[index].innerHTML)-1
                    products_count=JSON.parse(localStorage.getItem("count"))
                    products_count[index]=badges[index].innerHTML
                    localStorage.setItem("count",JSON.stringify(products_count))
                    price()
                }
                else{
                    products_displayed=document.querySelectorAll(".product_item")
                    products_displayed[index].style.display="none"
                    all_products=JSON.parse(localStorage.getItem("products_added"))
                    products_count=JSON.parse(localStorage.getItem("count"))
                    all_products.splice(index,1)
                    products_count.splice(index,1)
                    localStorage.setItem("count",JSON.stringify(products_count))
                    localStorage.setItem("products_added",JSON.stringify(all_products))
                    price()
                    
                }
                 
               
            })
        })

}

plus_minus()
///////////////////////////////////////////

////////////////////////////////////////

let carousel_item1=document.querySelector(".carousel-item .products-div")
let carousel_item2=document.querySelector(".carousel-inner .carousel-2 .products-div")

function fav_draw(){
    if(localStorage.getItem("fav_products")){
        let fav_products=JSON.parse(localStorage.getItem("fav_products"))
        let count=0
        fav_products.forEach((item,index)=>{
            if(index<=3){
                carousel_item1.innerHTML+=`<div class="favItem item1 col-12 col-md-6 col-lg-2">
                <img class="fav_img" src="${item.img_url}" alt="">
                <div class="info d-flex justify-content-between">
                   <div>
                      <p>product:${item.title}</p>
                      <p>category:${item.category}</p>
                   </div>
                    <div class="d-flex">
                      <i class="fas fa-heart fav" style="color:red;"></i>
                    </div>
                    
                </div>
           </div>`
            }
                
          
        else if(index>3){
            carousel_item2.innerHTML +=`<div class="favItem item1 col-12 col-md-6 col-lg-2">
            <img class="fav_img" src="${item.img_url}" alt="">
            <div class="info">
                <p>product:${item.title}</p>
                <p>category:${item.category}</p>
                <i class="fas fa-heart" style="color:red;"></i>
            </div>
       </div>`
   
        }
        })
    }
}


fav_draw()
let logout_btn=document.querySelector(".nav-link")
logout_btn.addEventListener("click",function(){
      localStorage.clear()
      setTimeout(()=>{
        window.location="login.html"
      },1500)
     
})

