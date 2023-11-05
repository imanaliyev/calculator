
const ekran = document.querySelector(".ekran")
const box = document.querySelectorAll(".box");
const c = document.querySelector(".C")
const result = document.querySelector(".result")
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click",function () {
        ekran.value += box[i].value
       
        

        
    })
    
}   
c.addEventListener("click" , function () {
    ekran.value = "   "
    
})

result.addEventListener("click",function () {
    ekran.value = eval(ekran.value)
    
    
})



