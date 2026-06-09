const container = document.getElementById("project-container");

fetch("http://localhost:5000/projects")
.then(response => response.json())
.then(data => {

data.forEach(project => {

const card = document.createElement("div");

card.classList.add("project-card");

card.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
<p><b>Technology:</b> ${project.technology}</p>
<a href="${project.githubLink}" target="_blank">
View Project
</a>
`;

container.appendChild(card);

});

})
.catch(error => console.log(error));

document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Message Sent Successfully!");

});