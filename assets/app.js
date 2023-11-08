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
textInput(document.querySelector("#firstName"), 
document.querySelector("#firstNameInput"))

textInput(document.querySelector("#lastName"), 
document.querySelector("#lastNameInput"))

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

const uploadButton = document.getElementById('upload-button');
    const circularDiv = document.querySelector('.circular-div');

    uploadButton.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = () => {
        const file = input.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          circularDiv.style.backgroundImage = `url(${reader.result})`;
        };
      };
      input.click();
    });


