// like button
var likes=document.getElementsByClassName("like")
console.log(likes)
for(let i=0 ;i<likes.length;i++){
let colors=likes[i]
colors.addEventListener('click',function(){
    if (colors.style.color !== 'red'){
        colors.style.color='red'
    }else{colors.style.color='black'}
})  
}
// delete button
var remove=document.getElementsByClassName("delete")
for(let i=0;i<remove.length;i++){
    let delet=remove[i]
    delet.addEventListener('click',function(){
      var parent=this.parentNode
      parent.remove()  
    })
}
//button+
var btn=document.getElementsByClassName("plus-btn")
for(let i=0;i<btn.length;i++){
let bt=btn[i]
bt.addEventListener('click',function(){
bt.previousElementSibling.value++
//   pu=document.getElementsByClassName("price")[i];
//   qty= bt.previousElementSibling.value++; 
// pu.innerHTML=qty[i].value;
// //  itemPrice = Pt * Qt;
// //  price.innerHTML= pu[i]*quant1.value;
//   // putot=pu*bt.previousElementSibling.value;
  // console.log(pu.innerHTML)
  totalprice() 
})    
}
//button-
var btm=document.getElementsByClassName("minus-btn")
for(let i=0;i<btm.length;i++){
let bt=btm[i]
bt.addEventListener('click',function(){
  if(bt.nextElementSibling.value>0) {
    bt.nextElementSibling.value--;
    totalprice()
  } 
})    
}
// item price

// total price
function totalprice(){
var items=document.getElementsByClassName("Item")
var total=0
for(let i=0;i<items.length;i++){
    var price=items[i].querySelector(".price")
    var qt=items[i].querySelector(".Quant")
    total+=price.innerHTML*qt.value
}
document.getElementById("finalPrice").value=total
}