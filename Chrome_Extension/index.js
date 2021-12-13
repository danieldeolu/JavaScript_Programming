
//obtain the DOM of the input box and the save button
const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const displayItems = document.querySelector("#displayItems");
const deleteBtn = document.querySelector("#delete-btn");
const saveTabBtn = document.querySelector("#save-btn");



//create a list for storing the various inputs
let storage = [];
let returnItem = [];



//check if the local storage contains the key pair
if(localStorage.getItem("myLeads") != null){
    
    //then we obtain it and store it in the storage variable. 
    storage = JSON.parse(localStorage.getItem("myLeads"));
    storage.forEach((item, index)=>{
        displayItems.innerHTML  += `<li><a href='${item}'>${item}</a></li>`
    })
}


const saveBtnRoutine = ()=>{
    //obtain the content of the input box
    let userInput = inputEl.value    
    storage.push(userInput);
    displayItems.innerHTML = null
    

    storage.forEach((item, index)=>{
        displayItems.innerHTML  += `<li><a href='${item}'>${item}</a></li>`
    })

    //store the array of links in local storage
    localStorage.setItem("myLeads", JSON.stringify(storage)); 

}

const enterKeyPressed = (event)=>{
    //obtain the content of the input box
    if (event.keyCode == 13){
        let userInput = inputEl.value    
        storage.push(userInput);
        inputEl.value = null
        displayItems.innerHTML = null
        

        storage.forEach((item, index)=>{
            displayItems.innerHTML  += `<li><a href='${item}'>${item}</a></li>`
        })

        localStorage.setItem("myLeads", JSON.stringify(storage)); 
    }

}

const deleteAllItems = (event)=>{
    //this will get called when the delete button is double clicked in order to delete al
    //entry items 
    
    storage = []; //clear the storage variable
    localStorage.clear(); //clear the localStorage for the key.
    displayItems.innerHTML = "" //clear the DOM display list as well

}



const saveTab  =  ()=>{
    //first grab the url of the current browser tab
    let activeTab = null
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        activeTab = tabs[0]    
        storage.push(activeTab.url);//pushes the url into the storage;

        console.log(activeTab)
        displayItems.innerHTML  += `<li><a href='${activeTab.url}'>${activeTab.url}</a></li>`
        localStorage.setItem("myLeads", JSON.stringify(storage)); //then save the storage to the localStorage
    })    
    
    
}


inputEl.addEventListener("keyup", enterKeyPressed)
saveBtn.addEventListener("click", saveBtnRoutine);
deleteBtn.addEventListener("dblclick", deleteAllItems);
saveTabBtn.addEventListener("click", saveTab);

