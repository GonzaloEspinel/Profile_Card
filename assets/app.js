function render(variables = {}) {
  console.log("These are the current variables: ", variables); 
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

 
  document.querySelector("#card_content").innerHTML = `<div class="card">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>
            ${variables.name ? variables.name : ""} 
            ${variables.lastname ? variables.lastname : ""}
          </h1>
          <h2>
             ${variables.role ? variables.role : ""}
          </h2>
          <h3>
             ${variables.city ? variables.city : ""}
          </h3>
          <h3>
             ${variables.country ? variables.country : ""}
          </h3>
          <ul class=${
            variables.socialMediaPosition ? variables.socialMediaPosition : ""
          }>
            <li><a href="https://twitter.com/@${
              variables.twitter ? variables.twitter : "birraslover"
            }"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github ? variables.github : "GonzaloEspinel"
            }"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${
              variables.linkedin ? variables.linkedin : "gonzalo-espinel"
            }"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram ? variables.instagram : "gonzaloaespinel"
            }"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}


window.onload = function() {
  window.variables = {
    includeCover: true,
    background: ("proback.jpg"),
    avatarURL: "mypic.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: "Gonzalo",
    lastname: "Espinel",
    role: "Full Stack Web Developer",
    country: "Usa",
    city: "Miami"
  };
  render(window.variables); 

  
  document.querySelectorAll(".data").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
       const attribute = e.target.getAttribute("for"); 
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); 
    });
  });
};