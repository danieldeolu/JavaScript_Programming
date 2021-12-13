
let counter = document.getElementById("counter")
let incrementButton = document.getElementById("incrementButton");
let saveButton = document.getElementById("saveButton");
let displaySaved = document.getElementById("displaySaved");


let counterState = 0;

let storage =[];



let incrementButtonClicked = ()=>{
    counterState =  counter.textContent;

    
    counterState ++; //this increments the value of the counter state. 
    counter.textContent = counterState; //this sets the display equal to the counter value
}

let saveButtonClicked = ()=>{
    //we'll first get the current count of the counter
    let counterValue = counter.textContent;
    storage.push(counterValue);
    //then I'll convert the entire array to a string to be displayed;
    
    displaySaved.textContent = convertArrayToString();
    
}

let convertArrayToString = ()=>{
    console.log(storage)
    let displayString = ""
    if (storage.length != 0){
        for(let a=0; a<storage.length; a++){
            if(a ==0){
                displayString += storage[0]
            }
            else{
                displayString += "-"+storage[a];
            }
        }
    }

    //then we set the counter back to zero
    counter.textContent = 0


    return displayString;
}

saveButton.onclick = saveButtonClicked
incrementButton.onclick = incrementButtonClicked



