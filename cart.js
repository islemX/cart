var removeitem = document.getElementsByClassName('rm')
console.log(removeitem)
for ( var i=0; i<removeitem.length; i++){var button=removeitem[i]
button.addEventListener('click',function(event){var buttonclicked= event.target
buttonclicked.parentElement.parentElement.remove()      
total()        })}


function total() {

var container= document.getElementsByClassName('CartContainer')[0]
var cartitem =container.getElementsByClassName('Cart-Items')
var total=0
for ( var i=0; i< cartitem.length; i++) { 
var item=cartitem[i]
var elmntprice = item.getElementsByClassName('amount')[0]       
var Quant = item.getElementsByClassName('count')[0]
var price = parseFloat(elmntprice.innerText.replace('$',''))
var q = parseFloat(Quant.value)
total = total + (price * q)
}
total = Math.round(total * 100) / 100
document.getElementsByClassName('total-amount')[0].innerText = '$' + total
console.log(total);
}

 
var qty = document.getElementsByClassName('count')

for (let i = 0; i < qty.length; i++) {
    qty[i].addEventListener('change',function(){

     total()  
    })
    
}





  let hearts= document.querySelectorAll(".fa-heart")

  for (let heart of hearts ){heart.addEventListener("click",function(){heart.classList.toggle("red");})}