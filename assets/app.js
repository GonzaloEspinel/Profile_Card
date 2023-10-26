function textInput(input,textElement, link=false){
    if (link){
    input.addEventListener("input", ()=>{
        textElement.innerText = input.value
        return})
    }
   input.addEventListener("input", ()=>{
       textElement.innerText = input.value
    })
}
textInput(input, textElement)


const firstname= document.querySelector("firstname")
firstname.addEventListener("change", ()=>{
document.querySelector("#firstname").innerText = firstnameInput.value
})
const lastname= document.querySelector("lastname")
lastname.addEventListener("change", ()=>{

    document.querySelector("#lastname").innerText = lastnameInput.value
})

const city= document.querySelector("city")
city.addEventListener("change", ()=>{
    document.querySelector("#city").innerText = cityInput.value
})

const country= document.querySelector("country")
country.addEventListener("change", ()=>{
    document.querySelector("#country").innerText = countryInput.value
})



