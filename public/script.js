const services = [
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Cardiology", imageURL: "./assets/heart.jpg"},
    {name: "Dermatology", imageURL: "./assets/pic.jpg"},
    {name: "ENT", imageURL: "./assets/corona.png"},
    {name: "Opthalmology", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "Allergies", imageURL: "./assets/corona.png"},
    {name: "More Specification", imageURL: "./assets/corona.png"},

];

const servicesEL = document.querySelector(".services");

services.forEach(function(service){
    servicesEL.innerHTML += `
    <div>
        <div class="service-icon-wrapper">
            <img src="${service.imageURL}" class="service-icon"/>
        </div>
        <p class="service-title">${service.name}</p>
    </div>
    `
});
