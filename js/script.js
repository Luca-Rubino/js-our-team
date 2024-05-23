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

membri = [object1, object2, object3, object4, object5,object6]


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

// stampo le informazioni degli oggetti nel dom

const bodySelector = document.querySelector('body')
const sectionObject = document.createElement('section')
bodySelector.appendChild(sectionObject)
// Object1
const articoleObject1 = document.createElement('article')
sectionObject.appendChild(articoleObject1)
const h2Object1 = document.createElement('h2')
const pRuolo1 = document.createElement('p')
const imgfoto1 = document.createElement('img')
articoleObject1.appendChild(imgfoto1)
articoleObject1.appendChild(h2Object1)
articoleObject1.append(pRuolo1)
h2Object1.textContent = object1.nome
pRuolo1.textContent = object1.ruolo
imgfoto1.src = object1.foto

// Object2
const articoleObject2 = document.createElement('article')
sectionObject.appendChild(articoleObject2)
const h2Object2 = document.createElement('h2')
const pRuolo2 = document.createElement('p')
const imgfoto2 = document.createElement('img')
articoleObject2.appendChild(imgfoto2)
articoleObject2.appendChild(h2Object2)
articoleObject2.append(pRuolo2)
h2Object2.textContent = object2.nome
pRuolo2.textContent = object2.ruolo
imgfoto2.src = object2.foto

// Object3
const articoleObject3 = document.createElement('article')
sectionObject.appendChild(articoleObject3)
const h2Object3 = document.createElement('h2')
const pRuolo3 = document.createElement('p')
const imgfoto3 = document.createElement('img')
articoleObject3.appendChild(imgfoto3)
articoleObject3.appendChild(h2Object3)
articoleObject3.append(pRuolo3)
h2Object3.textContent = object3.nome
pRuolo3.textContent = object3.ruolo
imgfoto3.src = object3.foto

// Object4
const articoleObject4 = document.createElement('article')
sectionObject.appendChild(articoleObject4)
const h2Object4 = document.createElement('h2')
const pRuolo4 = document.createElement('p')
const imgfoto4 = document.createElement('img')
articoleObject4.appendChild(imgfoto4)
articoleObject4.appendChild(h2Object4)
articoleObject4.append(pRuolo4)
h2Object4.textContent = object4.nome
pRuolo4.textContent = object4.ruolo
imgfoto4.src = object4.foto

// Object5
const articoleObject5 = document.createElement('article')
sectionObject.appendChild(articoleObject5)
const h2Object5 = document.createElement('h2')
const pRuolo5 = document.createElement('p')
const imgfoto5 = document.createElement('img')
articoleObject5.appendChild(imgfoto5)
articoleObject5.appendChild(h2Object5)
articoleObject5.append(pRuolo5)
h2Object5.textContent = object5.nome
pRuolo5.textContent = object5.ruolo
imgfoto5.src = object5.foto

// Object6
const articoleObject6 = document.createElement('article')
sectionObject.appendChild(articoleObject6)
const h2Object6 = document.createElement('h2')
const pRuolo6 = document.createElement('p')
const imgfoto6 = document.createElement('img')
articoleObject6.appendChild(imgfoto6)
articoleObject6.appendChild(h2Object6)
articoleObject6.append(pRuolo6)
h2Object6.textContent = object6.nome
pRuolo6.textContent = object6.ruolo
imgfoto6.src = object6.foto