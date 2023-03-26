const btnDog = document.querySelector(".btnDog");
const btnCat = document.querySelector(".btnCat");
const btnSurprise = document.querySelector(".btnSurprise");
const fotoAnimal = document.querySelector(".fotoAnimal");

btnDog.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const fotoURL = data.message;
      fotoAnimal.src = fotoURL;
    })
});

btnCat.addEventListener("click", () => {
  fetch("https://aws.random.cat/meow")
  .then((response) => response.json())
  .then((data) => {
    const fotoURL = data.file;
    fotoAnimal.src = fotoURL;
  })
});

btnSurprise.addEventListener("click", () => {
  Promise.any([
    fetch("https://dog.ceo/api/breeds/image/random"),
    fetch("https://aws.random.cat/meow"),
  ])
  .then((response) => response.json())
  .then((data) => {
    const fotoURL = data.file || data.message;
    fotoAnimal.src = fotoURL;
  });
});