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
// const change = document.querySelectorAll("#firstname, #lastname, #city, #country");
// const textElement = document.querySelectorAll("#firstNameInput, #lastNameInput, #cityInput, #countryInput");

// textInput(change, textElement)


const firstName = document.querySelector("#firstName")
firstName.addEventListener("input", ()=>{
document.querySelector("#firstNameInput").innerText = firstName.value
})
const lastName = document.querySelector("#lastName")
lastName.addEventListener("input", ()=>{
document.querySelector("#lastNameInput").innerText = lastName.value
})
const role = document.querySelector("#role")
role.addEventListener("input", ()=>{
document.querySelector("#roleInput").innerText = role.value
})

const city = document.querySelector("#city")
city.addEventListener("input", ()=>{
document.querySelector("#cityInput").innerText = city.value
})
const country = document.querySelector("#country")
country.addEventListener("input", ()=>{
document.querySelector("#countryInput").innerText = country.value
})
const language = document.querySelector("#language")
language.addEventListener("input", ()=>{
document.querySelector("#languageInput").innerText = language.value
})
textInput(change, textElement)



