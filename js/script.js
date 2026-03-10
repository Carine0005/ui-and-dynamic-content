// Save the reference to text-field into a variable. | <input type="text">
const itemInput = document.querySelector("#itemInput");
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
const addButton = document.querySelector("#addButton");
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
const shoppingList = document.querySelector("#shoppingList");
// Save the reference to paragraph for feedback | <p class="feedback"></p>
const feedback = document.querySelector(".feedback");
// Start function addItem.
function addItem(){
    // Create list-item and store output in a variable.
    const listItem = document.createElement("li");
    // Check if user entered the value in input text-field.
    if (itemInput.value.trim() !==""){
    // If so:
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       listItem.textContent = itemInput.value.trim();
       // Append list item to unordered list.
       shoppingList.appendChild(listItem);
       // Clear a feedback-message.
       feedback.textContent = "";
       // Clear the text-field.
       itemInput.value = "";
       // Put the cursor back to text-field  
       itemInput.focus();
    } else {
    // End if. 
    // Otherwise:
       // Print the message nothing entered in the paragraph "feedback"
       feedback.textContent = "Nothing entered!";
       itemInput.focus();
    }
}
    // End otherwise.
// End function addItem.
// Register your function addItem for click event on button.
addButton.addEventListener("click", addItem);
itemInput.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        addItem();
    }
});