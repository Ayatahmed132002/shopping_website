// let links=document.querySelector("#links")
// let user_info=document.querySelector("#user_info")
// let cart_content=document.querySelector("#cart_content")
// let user_data=document.querySelector("#user_data")

// let stored_fname=localStorage.getItem("Fname")


// if(localStorage.getItem("Fname")){
//     links.remove()
//     user_info.style.display="block"
//     user_data.innerHTML=`Welcome,${stored_fname}`
//     cart_content.style.display="flex"
// }



// let products=document.querySelector(".products")
// let all_products=[
//     {
//         id:1,
//         title:"tshirt",
//         price:100 ,
//         category:"fashion",
//         img_url:"images/black t_shirt.jpeg"
//     },
//     {
//         id:2,
//         title:"glasses",
//         price:10 ,
//         category:"women accessories",
//         img_url:"images/glasses.jpg"
//     },
//     {
//         id:3,
//         title:"sweatshirt",
//         price:120 ,
//         category:"fashion",
//         img_url:"images/sweatshirt.jpg"
//     },   
//     {
//         id:4,
//         title:"watch",
//         price:100 ,
//         category:"men accessories",
//         img_url:"images/watch.jpg"
//     },
//     {
//         id:5,
//         title:"glasses",
//         price:20 ,
//         category:"women accessories",
//         img_url:"images/glasse.jpg"
//     },
//     {
//         id:6,
//         title:"earbuds",
//         price:140 ,
//         category:"phone accessories",
//         img_url:"images/earbuds.jpg"
//     },
//     {
//         id:7,
//         title:"headphone",
//         price:100 ,
//         category:"fashion",
//         img_url:"images/headphone.jpg"
//     },
//    {
//         id:8,
//         title:"bag",
//         price:100 ,
//         category:"fashion",
//         img_url:"images/bag.jpg"
//     }
// ]
// function draw(){
//     products.innerHTML=""
//     let y=all_products.map((item)=>{
//         return` <div class="product-item col-12 col-sm-12 col-lg-4">
//         <img src="${item.img_url}" alt="not found">
//         <div class="product-info">
//             <p>product:${item.title}</p>
//             <p>price:${item.price} $</p>
//             <p>Category:${item.category}</p>

//         </div>
//         <div class="button-div">
//             <button id="add_btn" class=" btn btn-primary  my-2" onClick="add_to_cart(${item.id})" >add to cart</button>
//             <i class="fas fa-heart fav"id="fav1"></i>
//         </div>
//     </div>
//         `
//     })
//     products.innerHTML=y.join(" ")
// }
// draw()

// // /////////////////////////////////////////////////////////////
// let select=document.querySelector("#select")
// let option1=document.querySelector("#select #option1")
// let option2=document.querySelector("#select #option2")
// let search=document.querySelector("#search")
// let all_products_container=all_products


// ////////////////////////////////////////////////////////////////////
// select.onchange=function(){
//     selected_option=select.value
//     if(selected_option==="search by category")
//      {
//         search.onkeyup=function(){
           
//             if(search.value !=="" && search.value.length>=3){
//                 let all_items=[]
//                 all_products.forEach((item)=>{
//                   if (item.category.indexOf(search.value.toLowerCase())!=-1){
//                        all_items=[...all_items,item]
//                   }
//                 })
//                 console.log(all_items)
//                all_products=all_items
//                draw()
//             }
//             else{
//                 all_products=all_products_container
//                 draw()
//             }
//         }
//      }
//      else{
//         search.onkeyup=function(){
           
//             if(search.value !=="" && search.value.length>=3){
//                 let all_items=[]
//                 all_products.forEach((item)=>{
//                   if (item.title.indexOf(search.value.toLowerCase())!=-1){
//                        all_items=[...all_items,item]
//                   }
//                 })
//                 // console.log(all_items)
//                all_products=all_items
//                draw()
//             }
//             else{
//                 all_products=all_products_container
//                 draw()
//             }
//         }
//      }
// }


// if(select.value==="search by name"){
//     search.onkeyup=function(){
//         if(search.value!=="" && search.value.length>=3){
//             console.log(search.value)
//             let all_items=[]
//            all_products.forEach((item)=>{
//                 if(item.title.indexOf(search.value.toLowerCase())!=-1){
                    
//                      all_items= [...all_items,item]
//                 }
     
//             }
               
//             )
//             // console.log(all_items)
//             all_products=all_items
//             draw()
//         }else{

//             all_products=all_products_container
//             draw()
//         } }
        
// }
// ///////////////////////////////////////////////////////////////////////   
// let buttons=document.querySelectorAll("#add_btn")
// let fav=document.querySelectorAll("#fav1")


// buttons.forEach((btn)=>{ 
//     btn.addEventListener("click",function(){
        
//         if(localStorage.getItem('Fname')){
//             if(btn.textContent=="add to cart"){
//              btn.innerHTML="Remove from cart"
//              btn.style.backgroundColor="red"
//              btn.style.border="none"

            
          
//             }else if(btn.textContent=="Remove from cart"){
//                    btn.innerHTML="add to cart"
              
//                    btn.style.backgroundColor="var(--blue)"
//             }
//          }
//          else{
//              window.location="login.html"
//          }
//     })
// })

// ////////////////////////////////////////////////////////////////////////
// fav_list=[]
// fav.forEach((icon,index)=>{
//     icon.onclick=function(){
//         if(localStorage.getItem("Fname")){
//             icon.style.color="red"
//             fav_list=[...fav_list,all_products[index]]
//             localStorage.setItem("fav_list",JSON.stringify(fav_list))
//         }
//         else{
//             window.location="login.html"
//         }
//     }
// })


// function favourite(){
//     if(localStorage.getItem("Fname")){
//         fav.style.color="red"

//     }
//     else{
//         window.location="login.html"
//     }
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////
// let products_list=document.getElementsByClassName("products-list")
// let product_div=document.querySelector(".products-list #products-div")
// let cart_badge=document.querySelector(".badge")


// let list=localStorage.getItem("products_added")?JSON.parse(localStorage.getItem("products_added")):[]
// let cart_list=localStorage.getItem("carts")?JSON.parse(localStorage.getItem("carts")):[]
// if(cart_list !==""){
//   cart_list.forEach((item)=>{
//     product_div.innerHTML+=`<div class="product-div">
//     <div class="product-name"><p>${item.tittle}</p></div>
//      <div class="product-info"><span class="badge" id="badge">${item.count}</span>
//      <i class="fas fa-plus"id="plus"></i>
//      <i class="fas fa-minus"id="minus"></i>
//      </div>
// </div>
// `
// cart_badge.innerHTML=cart_list.length
//   })
// }

// ///////////////////////////////////////////////////////////////////////////////////////////
// function add_to_cart(id){
//     btn_index=id-1
//     btn_content=buttons[btn_index].textContent
   
//     console.log(btn_content)
//     if(localStorage.getItem('Fname')){
//         if(btn_content=="add to cart"){
         
//             chosen_product= all_products.find((item)=>item.id===id)
//             product_div.innerHTML+=`<div class="product-div">
//                 <div class="product-name"><p>${chosen_product.title}</p></div>
//                  <div class="product-info"><span class="badge" id="badge">1</span>
//                  <i class="fas fa-plus"id="plus"></i>
//                  <i class="fas fa-minus" id="minus"></i>
//                  </div>
//             </div>
//             `
//             let badges = document.querySelectorAll(".product-info #badge");
//             let all_pg=document.querySelectorAll(".product-name p")
//             let all_plus_icons = document.querySelectorAll("#plus");
//             let all_minus_icons=document.querySelectorAll("#minus");
//             let pr_div=document.querySelectorAll(".product-div")
            

//             arr=[]
           
//             all_plus_icons.forEach((plus_icon, index) => {
//                 obj={}
//                 obj.tittle=all_pg[index].innerHTML
//                 obj.count=parseInt(badges[index].innerHTML)
//                 arr.push(obj)
               
//                 plus_icon.addEventListener("click", () => {
//                     // console.log(all_plus_icons)
//                     badges[index].innerHTML = parseInt(badges[index].innerHTML) + 1;
//                     arr[index].count=parseInt(badges[index].innerHTML)
//                     localStorage.setItem("carts",JSON.stringify(arr))
//                     localStorage.setItem("carts",JSON.stringify(arr))
//                 });
//             });
            
//             localStorage.setItem("carts",JSON.stringify(arr))

//             all_minus_icons.forEach((minus,index)=>{
//                 obj={}
//                 minus.addEventListener("click",()=>{
                   
//                   if(parseInt(badges[index].innerHTML)>1){
//                     badges[index].innerHTML= parseInt(badges[index].innerHTML) - 1
                  
//                     arr[index].count=parseInt(badges[index].innerHTML)
//                     console.log(arr)

//                   }else{
//                       pr_div[index].style.display="none"
//                       arr.splice(index,1)
//                       console.log(arr)
//                       cart_badge.innerHTML=arr.length
//                       localStorage.setItem("carts",JSON.stringify(arr))
//                       if(localStorage.getItem("produts_added")){
//                         products=JSON.parse(localStorage.getItem("products_added"))
//                         index=products.findIndex((item)=>{
//                         (item.title===all_pg[index].innerHTML&&item.count===parseInt(badges[index].innerHTML))
        
//                         })
//                     }
//                     products.splice(index,1)
//                     localStorage.getItem("products_added",JSON.stringify(products))
//                }
                
//              })
                      
                
//            })
           
        
            
//             list=[...list,chosen_product]
//             localStorage.setItem("products_added",JSON.stringify(list))
           
//             products_count=document.querySelectorAll(".product-name p").length
//             cart_badge.innerHTML=products_count
            
//          }
//          else if(btn_content==="Remove from cart"){
//                 item_removed=all_products.find((item)=>{
//                 item.id==id
//             })
          
//            list=JSON.parse(localStorage.getItem("products_added"))
//            R_index=list.findIndex((item)=>item.id==id)
//            console.log(R_index)
//            list.splice(R_index,1)
//            localStorage.setItem("products_added",JSON.stringify(list))
//            cart_badge.innerHTML=list.length

//            if(localStorage.getItem("carts")){
//                cart_items=JSON.parse(localStorage.getItem("carts"))
//                 index=cart_items.findIndex((item)=>{
//                 item.tittle===item_removed.title
//                })
//                cart_items.splice(index,1)
//                localStorage.setItem("carts",JSON.stringify(cart_items))
//                cart_badge.innerHTML=cart_items.length
//            }

//            if(localStorage.getItem("carts")){
//               z=JSON.parse(localStorage.getItem("carts"))
//               let stored_product= z.map((item)=>{
//                    return`<div class="product-div">
//                    <div class="product-name"><p>${item.tittle}</p></div>
//                     <div class="product-info"><span class="badge" id="badge">${item.count}</span>
//                     <i class="fas fa-plus"id="plus"></i>
//                     <i class="fas fa-minus" id="minus"></i>
//                     </div>
//                </div>`
//               })
              
//               product_div.innerHTML=stored_product.join("")
         

//             ///////////////////////////////////////////////////////////////////////
             
//               let badges = document.querySelectorAll(".product-info #badge");
//               let all_plus_icons=document.querySelectorAll("#plus")
//               let all_minus_icons=document.querySelectorAll("#minus")
             
             
              
//               arr=[]
           
//               all_plus_icons.forEach((plus_icon, index) => {
//                   obj={}
//                   obj.tittle=all_pg[index].innerHTML
//                   obj.count=parseInt(badges[index].innerHTML)
//                   arr.push(obj)
                 
//                   plus_icon.addEventListener("click", () => {
//                       // console.log(all_plus_icons)
//                       badges[index].innerHTML = parseInt(badges[index].innerHTML) + 1;
//                       arr[index].count=parseInt(badges[index].innerHTML)
//                       localStorage.setItem("carts",JSON.stringify(arr))
//                       localStorage.setItem("carts",JSON.stringify(arr))
//                   });
//               });
              
//               localStorage.setItem("carts",JSON.stringify(arr))
  
//               all_minus_icons.forEach((minus,index)=>{
//                   obj={}
//                   minus.addEventListener("click",()=>{
                     
//                     if(parseInt(badges[index].innerHTML)>1){
//                       badges[index].innerHTML= parseInt(badges[index].innerHTML) - 1
                    
//                       arr[index].count=parseInt(badges[index].innerHTML)
//                       console.log(arr)
  
//                     }else{
//                         pr_div[index].style.display="none"
//                         arr.splice(index,1)
//                         console.log(arr)
//                         cart_badge.innerHTML=arr.length
//                         localStorage.setItem("carts",JSON.stringify(arr))
//                         if(localStorage.getItem("produts_added")){
//                             products=JSON.parse(localStorage.getItem("products_added"))
//                             index=products.findIndex((item)=>{
//                                      (item.title===all_pg[index].innerHTML&&item.count===parseInt(badges[index].innerHTML))
            
//                             })
//                         }
//                         products.splice(index,1)
//                         localStorage.getItem("products_added",JSON.stringify(products))
//                    }
                    
//                  })
                        
//                   })    }
                     
                  
            

//             // })
            
        
//          }
//     }
// }
// // let all_plus_icons=document.querySelectorAll("#plus")
// // let all_minus_icons=document.querySelectorAll("#minus")
// // let badges=document.querySelectorAll("#badge")
// // let x=0
// // all_plus_icons.forEach(function(plus_icon){
// //     plus_icon.onclick=function(){
// //       k= all_plus_icons.indexOf(plus_icon)
// //       badges[k].innerHTML=++x
    
// //     }
// // })
// // let all_plus_icons = document.querySelectorAll("#plus");
// // let badges = document.querySelectorAll("#badge");
// // let counters = Array.from({ length: all_plus_icons.length }, () => 0);

// // all_plus_icons.forEach(function (plus_icon, index) {
// //     plus_icon.addEventListener("click", function () {
// //         counters[index]++;
// //         badges[index].innerHTML = counters[index];
// //     });
// // });


// let all_plus_icons = document.querySelectorAll("#plus");
// let all_minus_icons=document.querySelectorAll("#minus")
// let badges = document.querySelectorAll(".product-info #badge");
// let pr_div=document.querySelectorAll(".product-div")
// let all_pg=document.querySelectorAll(".product-name p")
// arr=[]
// all_plus_icons.forEach((plus_icon, index) =>{
  
//     obj={}
//     obj.tittle=all_pg[index].innerHTML
//     obj.count=parseInt(badges[index].innerHTML)
//     arr.push(obj)
//     plus_icon.addEventListener("click", () => {
     
//         badges[index].innerHTML = parseInt(badges[index].innerHTML) + 1;
//         obj[index].count=parseInt(badges[index].innerHTML)
//         localStorage.setItem("carts",JSON.stringify(arr))
//     });
// });
// all_buttons=document.querySelectorAll("#add_btn")
// localStorage.setItem("carts",JSON.stringify(arr))

// all_minus_icons.forEach((minus,index)=>{
//      minus.addEventListener("click",()=>{

//        if(parseInt(badges[index].innerHTML)>1){
//           badges[index].innerHTML= parseInt(badges[index].innerHTML) - 1
//        }
//        else{
//             pr_div[index].remove()
//             arr.splice(index,1)
//             console.log(arr)
//             cart_badge.innerHTML=arr.length
//             pr_index= all_products.findIndex((item)=>{
//                   item.title===all_pg[index].innerHTML
                 
//             })
//             console.log(pr_index)
//            let button=all_buttons[pr_index]
//            console.log(button)
//             // button.innerHTML="add to cart"
//             button.style.backgroundColor="var(--blue)"
            
//             localStorage.setItem("carts",JSON.stringify(arr))
//             if(localStorage.getItem("produts_added")){
//                 products=JSON.parse(localStorage.getItem("products_added"))
//                 index=products.findIndex((item)=>{
//                          (item.title===all_pg[index].innerHTML&&item.count===parseInt(badges[index].innerHTML))

//                 })
//             }
//             products.splice(index,1)
//             localStorage.getItem("products_added",JSON.stringify(products))
//        }
        
//      })
// })