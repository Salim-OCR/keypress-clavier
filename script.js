const lettre = document.getElementById("letter");

document.addEventListener('keypress', (e) => {
    clavier.textContent = e.key;
    console.log(e.key);
})