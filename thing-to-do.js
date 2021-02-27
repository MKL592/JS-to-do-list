export default class listElementClass{
    constructor(userInput){
        this.userInput = userInput;
    }
    validateInput(){
        if(this.userInput != ""){
            return true;
        }else{
            this.handleError("Please write something");
            return false;
        }
    }

    createListElement(){
        if(this.validateInput() == true){
            const newListElement = document.createElement("li");
            const newDeleteButton = document.createElement("button");
            const newUserNode = document.createTextNode(this.userInput);

            newDeleteButton.innerHTML = "✖";
            newDeleteButton.addEventListener("click", function(){
                newListElement.parentNode.removeChild(newListElement);
            })
            
            newListElement.appendChild(newDeleteButton);
            newListElement.appendChild(newUserNode);

            return newListElement;
        }
    }

    addElementToList(tagId){
        document.getElementById(tagId).appendChild(this.createListElement());
    }

    handleError(message){
        alert(message);
    }
};