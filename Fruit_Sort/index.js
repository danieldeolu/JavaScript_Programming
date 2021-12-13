let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let apples = document.getElementById("apples")
let oranges = document.getElementById("oranges")

let StartSortingBtn = document.querySelector("#startSortingBtn");
let fruits = document.querySelector("#fruits");


StartSortingBtn.addEventListener("click", sort)

function sort(){
    fruits.textContent = ""
    fruit.forEach((item, index)=>{
        if(item =="🍎"){
            apples.textContent +=" "+item
        }
        else {
            oranges.textContent +=" "+item
        }
    })
    
}
