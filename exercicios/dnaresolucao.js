//Boa noite Prof.ª 
// Segue a tentativa de resolução do exercício.


let RNA = []
class Conversao {
    constructor(fita) {
        this.fita = fita
    }

    conversao(DNA) {
        let converter = DNA.split("")

        for (let letra of converter) {
            if (letra == "C") {
                letra = "G"
                RNA.push(letra)

            } else if (letra == "G") {
                letra = "C"
                RNA.push(letra)

            } else if (letra == "T") {
                letra = "A"
                RNA.push(letra)

            } else if (letra == "A") {
                letra = "U"
                RNA.push(letra)
            }
            
        }

       let converter2 = RNA.join("")
       console.log(converter2)
    }

}

const converter = new Conversao("ATGCCGAAATTTGCG")

converter.conversao(converter.fita)


