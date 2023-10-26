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
const change = document.querySelector("#firstname, #lastname, #city, #country");
const textElement = document.querySelector("#firstname, #lastname, #city, #country");

textInput(change, textElement)


const firstname= document.querySelector("#firstname")
firstnameInput.addEventListener("change", ()=>{
document.querySelector("#firstname").innerText = firstnameInput.value
})
const lastname= document.querySelector("#lastname")
lastnameInput.addEventListener("change", ()=>{

    document.querySelector("#lastname").innerText = lastnameInput.value
})

const city= document.querySelector("#city")
cityInput.addEventListener("change", ()=>{
    document.querySelector("#city").innerText = cityInput.value
})

const country= document.querySelector("#country")
countryInput.addEventListener("change", ()=>{
    document.querySelector("#country").innerText = countryInput.value
})



