// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

function functionContent(){
    const contactPage = document.getElementById("contact-page");
    
    const messageElement = document.createElement("p");

    messageElement.innerHTML = "Thank you for your message";
    messageElement.style.fontSize = "24px";
    messageElement.style.marginBottom = "400px";
    
    contactPage.innerHTML = "";
    contactPage.append(messageElement);
}
const sumbitButton = document.getElementById("submit-button");
sumbitButton.addEventListener("click", functionContent);


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
