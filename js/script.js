// 1. Chiedere Nome all'Utente
let nome = prompt("Inserisci il tuo nome :)");
console.log("Il tuo nome è: ",nome);

// 2. Chiedere Cognome all'Utente
let cognome = prompt("Inserisci il tuo cognome :)");
console.log("Il tuo nome è: ",cognome);

// 3. Chiedere Colore Preferito all'Utente
let colorePreferito = prompt("Inserisci il tuo colore preferito :)");
console.log("Il tuo nome è: ",colorePreferito);

// 4. Chiedere Numero all'Utente
let numero = prompt("Inserisci un numero :)");
console.log("Il tuo nome è: ",numero);

// 5. Generare Password concantenando i dati richiesti
let password = nome + cognome + colorePreferito + numero;
console.log("La tua password è: ",password);
// 6. Stampare Password su file HTML