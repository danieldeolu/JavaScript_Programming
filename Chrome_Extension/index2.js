
//obtain the DOM of the input box and the save button
const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const displayItems = document.querySelector("#displayItems");

//create a list for storing the various inputs
let storage = [];
let returnItem = [];

const saveBtnRoutine = ()=>{
    //obtain the content of the input box
    let userInput = inputEl.value    
    storage.push(userInput);
    displayItems.innerHTML = null
    

    storage.forEach((item, index)=>{
        displayItems.innerHTML  += "<li>"+item+"</li>"
    })

}

const enterKeyPressed = (event)=>{
    //obtain the content of the input box
    if (event.keyCode == 13){
        let userInput = inputEl.value    
        storage.push(userInput);
        inputEl.value = null
        displayItems.innerHTML = null
        

        console.time("render");
        storage.forEach((item, index)=>{
            // displayItems.innerHTML  += "<li>"+item+"</li>"
            const li = document.createElement("li");
            const linkText = document.createTextNode("Link");
            const anch = document.createElement("a")

            anch.appendChild(linkText);
            anch.href = item;
            // li.innerHTML = anch;
            displayItems.append(anch);
        })
        console.timeEnd("render");
    }

    else {
        console.log("Enter key has been pressed")
    }

}


inputEl.addEventListener("keyup", enterKeyPressed)
saveBtn.addEventListener("click", saveBtnRoutine);

