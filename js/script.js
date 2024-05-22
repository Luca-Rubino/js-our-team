console.log('Js-our-team')

// Traccia:
// > Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// > Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// > MILESTONE 0:
// - Creare l’array di oggetti con le informazioni fornite.
// > MILESTONE 1:
// - Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// > MILESTONE 2:
// - Stampare le stesse informazioni su DOM sottoforma di stringhe
// > BONUS 1:
// - Trasformare la stringa foto in una immagine effettiva
// > BONUS 2:
// - Organizzare i singoli membri in card/schede


// Dati da inserire negli oggetti
// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg


// creo gli oggetti con i dati richiesti
const object1 = {
    nome:'Wayne Barnett',
    ruolo:'Founder & CEO',
    foto:'img/wayne-barnett-founder-ceo.jpg',
}
const object2 = {
    nome:'Angela Caroll',
    ruolo:'Chief Editor',
    foto:'img/angela-caroll-chief-editor.jpg',
}
const object3 = {
    nome:'Walter Gordon',
    ruolo:'Office Manager',
    foto:'img/walter-gordon-office-manager.jpg',
}
const object4 = {
    nome: 'Angela Lopez',
    ruolo:'Social Media Manager',
    foto:'img/angela-lopez-social-media-manager.jpg',
}
const object5 = {
    nome: 'Scott Estrada',
    ruolo:'Developer',
    foto:'img/scott-estrada-developer.jpg',
}
const object6 = {
    nome: 'Barbara Ramos',
    ruolo:'Graphic Designer',
    foto:'img/barbara-ramos-graphic-designer.jpg',
}


// stampo in console per ogni oggetto le informazioni
console.log('Object1')
for (const key in object1) {
    console.log(object1[key])
}
console.log('Object2')
for (const key in object2) {
    console.log(object2[key])
}
console.log('Object3')
for (const key in object3) {
    console.log(object3[key])
}
console.log('Object4')
for (const key in object4) {
    console.log(object4[key])
}
console.log('Object5')
for (const key in object5) {
    console.log(object5[key])
}
console.log('Object6')
for (const key in object6) {
    console.log(object6[key])
}