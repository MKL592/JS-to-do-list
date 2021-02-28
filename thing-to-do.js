export default class listElementClass{
    constructor(userInput){
        this.userInput = userInput;
    }

    validateInput(){
       if(this.userInput == "") return false;
       return true;
    }

    handleError(message){
        alert(message);
        console.log(message);
    }

    createButton(text, buttonId ,addClass = {}){
        let button = document.createElement("button");

        if(typeof text !== 'string' || text == null) return button;
            button.innerHTML = text;

        if(typeof addClass !== 'string' || addClass.length === 0) return button;
            button.classList.add(addClass);

        return button;
    }

    createListElement(){
        if(this.validateInput() == true){
            let newListElement = document.createElement("li");
            let newDeleteButton = this.createButton("✖", "deleteButton");
            let newUserNode = document.createTextNode(this.userInput);
            
            newListElement.appendChild(newDeleteButton);
            newListElement.appendChild(newUserNode);

            return newListElement;
        }else{
            this.handleError("Please write something");
        }
    }

    addElementToList(tag){
        if(typeof tag !== 'string' || tag.length === 0 || tag === null) return this.handleError("addElementToList: Invalid tag");
        
        if(document.body.contains(document.getElementById(tag))){
            document.getElementById(tag).appendChild(this.createListElement());
        }else{
            this.handleError("addElementToList: Tag does not exists");
        }
    }

};