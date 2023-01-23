const NotaTecnicaCandidata = 96;
if (NotaTecnicaCandidata >= 80) {
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!")
} else if (NotaTecnicaCandidata < 80 && NotaTecnicaCandidata >= 60) {
    console.log("Você está na nossa lista de espera")
} else {
    console.log("Infelizmente, você reprovou.")
}