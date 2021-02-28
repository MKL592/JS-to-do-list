export default class listElementClass{
    constructor(userInput){
        this.userInput = userInput;
    }

    validateInput(){
       if(this.userInput == "") return false;
       return true;
    }

    createListElement(){
        if(this.validateInput() == true){
            let newListElement = document.createElement("li");
            let newDeleteButton = document.createElement("button");
            let newUserNode = document.createTextNode(this.userInput);

            newDeleteButton.innerHTML = "✖";
            newDeleteButton.addEventListener("click", function(){
                newListElement.parentNode.removeChild(newListElement);
            })
            
            newListElement.appendChild(newDeleteButton);
            newListElement.appendChild(newUserNode);

            return newListElement;
        }else{
            this.handleError("Please write something");
        }
    }

    addElementToList(tagId){
        document.getElementById(tagId).appendChild(this.createListElement());
    }

    handleError(message){
        alert(message);
    }
};