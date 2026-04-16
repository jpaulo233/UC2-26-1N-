// =========================================
/*


   █████████                                                   
  ███░░░░░███                                                  
 ░███    ░███  ████████  ████████   ██████   █████ ████  █████ 
 ░███████████ ░░███░░███░░███░░███ ░░░░░███ ░░███ ░███  ███░░  
 ░███░░░░░███  ░███ ░░░  ░███ ░░░   ███████  ░███ ░███ ░░█████ 
 ░███    ░███  ░███      ░███      ███░░███  ░███ ░███  ░░░░███
 █████   █████ █████     █████    ░░████████ ░░███████  ██████ 
░░░░░   ░░░░░ ░░░░░     ░░░░░      ░░░░░░░░   ░░░░░███ ░░░░░░  
                                              ███ ░███         
                                             ░░██████          
                                              ░░░░░░        
                                              
                                              
*/
// =========================================
// Instruções:
// - Leia cada enunciado com atenção
// - Implemente a solução logo abaixo de cada exercício
// - NÃO pule exercícios
// - Pesquise na internet métodos que você não conhece
// =========================================

/*


// =========================================
// EXERCÍCIO 1
// Crie um array com pelo menos 6 filmes.
// Peça para o usuário digitar um número.
// Mostre o filme que está na posição informada.
// =========================================

let Filmes = ["O resgate do soldado ryan", "O atirador", "Sniper americano", "Até o ultimo homem", "Coraçaoes de ferro", 'Dunkirk']

let ask = require("readline-sync")
let PerguntaUsuario = ask.question("Escolha um filme entre 1 e 6:");
PerguntaUsuario = String(PerguntaUsuario)
console.log(`Sua escolha foi: ${Filmes[PerguntaUsuario -1]}`)


// =========================================
// EXERCÍCIO 2
// Crie um array com 8 tipos de bebidas.
// Mostre quantos elementos existem nele.
// =========================================

let drinks = ["agua", "suco", "cafe", "cha", "refrigerante", "vinho", "leite", "cerveja"]
console.log(drinks.length)

// =========================================
// EXERCÍCIO 3
// Crie um array com 5 Pokémons.
// Peça para o usuário digitar o nome de um Pokémon.
// Verifique se ele está no array.
// =========================================

let Pokemons = ["pikachu", "charizard", "bulbasaur", "squirtle", "mewtwo"];
let PerguntaUsuario1 = ask.question("Digite o nome de um pokemon:")
let resposta1 = (Pokemons.includes(PerguntaUsuario1.trim().toLowerCase()))
console.log(resposta1);



// =========================================
// EXERCÍCIO 4
// Crie um array vazio.
// Peça ao usuário 3 nomes de jogos.
// Adicione ao array.
// Mostre o array final.
// =========================================

let vazio = []
let PerguntaUsuario4 = ask.question('Digite 3 nomes de jogos:')
let resposta4 = (PerguntaUsuario4)
let vazio1 = [resposta4]
console.log(vazio1)

// =========================================
// EXERCÍCIO 5
// Crie um array com 5 séries.
// Remova a última série.
// Mostre o array atualizado.
// =========================================

let series5 = ["o atirador", 'el chapo', 'game of thrones', 'the office', 'peaky blinders'];
series5.pop()
console.log(series5)



// =========================================
// EXERCÍCIO 6
// Crie um array com 6 comidas.
// Remova 2 comidas a partir de uma posição específica.
// Mostre o array resultante.
// =========================================

let comidas6 = ['xis','massa','arroz','carne','feijao']
comidas6.splice(3,2)
console.log(comidas6)



// =========================================
// EXERCÍCIO 7
// Crie um array com nomes de bandas.
// Mostre todas as bandas no console,
// separadas por " - ".
// =========================================

let bandas7 = ['pink floyd','rodox','rainha','legiao urbana','passarela']
console.log(bandas7.join(" - "))


*/
// =========================================
// EXERCÍCIO 8
// Crie um array com preços de produtos.
// Mostre no console o primeiro e o último preço do array.
// =========================================



// =========================================
// EXERCÍCIO 9
// Crie um array com nomes de personagens de jogos.
// Ordene os nomes em ordem alfabética.
// =========================================




// =========================================
// EXERCÍCIO 10
// Crie um array com nomes de filmes repetidos.
// Mostre o tamanho do array.
// =========================================




// =========================================
// EXERCÍCIO 11
// Crie dois arrays:
// - um com filmes
// - outro com séries
// Junte os dois em um único array.
// =========================================




// =========================================
// EXERCÍCIO 12
// Crie um array com episódios de uma série.
// Inverta a ordem dos episódios.
// =========================================




// =========================================
// DESAFIO EXTRA (NÃO OBRIGATÓRIO)
// Crie um sistema simples de catálogo de filmes:
// - Use pelo menos 3 métodos diferentes (map, filter, reduce, find, etc.)
// - Exemplo de ideias:
//   * Filtrar filmes por gênero
//   * Encontrar um filme específico
//   * Calcular média de notas dos filmes
// =========================================