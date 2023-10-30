function textInput(change, textElement, link = false) {
    if (link) {
        change.addEventListener("change", () => {
            textElement.innerText = change.value;
            return;
        });
    } else {
        change.addEventListener("change", () => {
            textElement.innerText = change.value;
        });
    }
}
const change = document.querySelectorAll("#firstname, #lastname, #city, #country");
const textElement = document.querySelectorAll("#firstNameInput, #lastNameInput, #cityInput, #countryInput");

textInput(change, textElement)


// const firstName= document.querySelector("#firstName")
// firstNameInput.addEventListener("change", ()=>{
// document.querySelector("#firstName").innerText = firstNameInput.value
// })
// const lastName= document.querySelector("#lastName")
// lastnameInput.addEventListener("change", ()=>{

//     document.querySelector("#lastName").innerText = lastNameInput.value
// })

// const city= document.querySelector("#city")
// cityInput.addEventListener("change", ()=>{
//     document.querySelector("#city").innerText = cityInput.value
// })

// const country= document.querySelector("#country")
// countryInput.addEventListener("change", ()=>{
//     document.querySelector("#country").innerText = countryInput.value
// })



