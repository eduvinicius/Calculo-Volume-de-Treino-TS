const treinoDorsais = [
    {exercicio: "Puxada Frente", series: 3, reps: 8, peso: 55},
    {exercicio: "Remada sentado", series: 7, reps: 8, peso: 60},
    {exercicio: "Pulldown", series: 3, reps: 8, peso: 50},
    {exercicio: "Encolhimento", series: 3, reps: 8, peso: 50},
    {exercicio: "Rosca direta", series: 5, reps: 8, peso: 29},
    {exercicio: "Rosca inclinada", series: 4, reps: 8, peso: 24},
    {exercicio: "Rosca inversa", series: 3, reps: 8, peso: 30},
    {exercicio: "Rosca punho", series: 3, reps: 8, peso: 30},
]

function volume(treinoVolume) {
     
    let soma: number = 0;

     for (let treinos of treinoVolume){

        soma += treinos.series * treinos.reps * treinos.peso;
        
     }

     console.log(`O volume total do treino é de ${soma} kg!`)
 }

 volume(treinoDorsais)