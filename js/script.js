// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
// costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile
// e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima 
// e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per 
// l'ultima miniatura se l'utente clicca la freccia verso il basso.

// scriviamo un array contentente oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// valore active di default
let activeImg = 0;
// attribuiamo le costanti collegate al DOM
const mainImgContainer = document.querySelector('#main-container');
const sideImgContainer = document.querySelector('#side-container');
// creiamo un ciclo for per far girare le immagini
for (let i = 0; i < images.length; i++) {
    const thisImage = images[i];
    // creiamo il path da satampare nel DOM img grande
    const newImage = `
    <div id="text" class="position-absolute text-white bottom-0 end-0 text-end pe-3">
        <h3>${thisImage.title}</h3>
        <p>${thisImage.text}</p>
    </div>
    <img class="main" src="${thisImage.image}" alt="${thisImage.title}"> 
    `
    mainImgContainer.innerHTML += newImage;
    // creiamo il path da satampare nel DOM img grande
    const newSide = `
    <img class="side" src="${thisImage.image}" alt="${thisImage.title}">
    `
    sideImgContainer.innerHTML += newSide;
}
// aggiunta active default
const allImages = document.querySelectorAll('.main');
allImages[activeImg].classList.add('active');
const text = document.querySelectorAll('#text');
text[activeImg].classList.add('active');
const allSide = document.querySelectorAll('.side');
allSide[activeImg].classList.add('active');
// definiamo il click della freccia in basso 
const down = document.querySelector('.down');
down.addEventListener('click', function (){
    // al click, rimuoviamo la classe active 
    document.querySelector('.main.active').classList.remove('active');
    document.querySelector('#text.active').classList.remove('active');
    document.querySelector('.side.active').classList.remove('active');
    // creiamo un ciclo for per incrementare active di 1 
    if (activeImg < allImages.length - 1) {
        activeImg++;
    } else {
        activeImg = 0;
    }
    // attribuiamo active all'oggetto successivo contenente nell'array
    allImages[activeImg].classList.add('active');
    text[activeImg].classList.add('active');
    allSide[activeImg].classList.add('active');
});
// definiamo il click della freccia in alto 
const up = document.querySelector('.up');
up.addEventListener('click', function() {
    // al click, rimuoviamo la classe active 
    document.querySelector('.main.active').classList.remove('active');
    document.querySelector('#text.active').classList.remove('active');
    document.querySelector('.side.active').classList.remove('active');

    if(activeImg > 0) {
        activeImg--;
    } else {
        activeImg = allImages.length - 1;
    }
    // attribuiamo active all'oggetto precedente contenente nell'array
    allImages[activeImg].classList.add('active');
    text[activeImg].classList.add('active');
    allSide[activeImg].classList.add('active');
});

