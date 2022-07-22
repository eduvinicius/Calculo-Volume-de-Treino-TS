var treino = [
    { exercicio: "Puxada Frente", series: 3, reps: 8, peso: 55 },
    { exercicio: "Remada sentado", series: 7, reps: 8, peso: 60 },
    { exercicio: "Pulldown", series: 3, reps: 8, peso: 50 },
    { exercicio: "Encolhimento", series: 3, reps: 8, peso: 50 },
    { exercicio: "Rosca direta", series: 5, reps: 8, peso: 29 },
    { exercicio: "Rosca inclinada", series: 4, reps: 8, peso: 24 },
    { exercicio: "Rosca inversa", series: 3, reps: 8, peso: 30 },
    { exercicio: "Rosca punho", series: 3, reps: 8, peso: 30 },
];
function volumeTotal(treino) {
    var soma = 0;
    
    for(let treinos of treino){
        soma += treinos.series * treinos.reps * treinos.peso
    }
    return `O volume total de treino é de ${soma} kg`;
}
console.log(volumeTotal(treino));
