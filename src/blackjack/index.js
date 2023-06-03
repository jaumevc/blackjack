//import _ from 'underscore';
// import { crearBaralla as crearNovaBaralla } from './casos-us/crear-baralla.js';
// import crearNovaBaralla , { elMeuNom } from './casos-us/crear-baralla.js';
// import { demanarCarta } from './casos-us/demanar-carta.js';
// import { valorCarta } from './casos-us/valor-carta.js';

import { elMeuNom, crearBaralla, demanarCarta, valorCarta, valorCartesMaquina, crearCartaHtml } from './casos-us';

console.log(elMeuNom);

/*
* 2C = 2 of clubs (trèbol)
* 2D = 2 of Diamond (diamants)
* 2H = 2 of Heards (cors)
* 2S = 2 of Spades (espases)
*/

let baralla = [];
const pals = ['C','D','H','S'];
const figures = ['A','J','K','Q'];

let puntsJugador = 0, puntsMaquina = 0;

//Referencies a l'Html
const btnDemanar = document.querySelector('#btnDemanar');
const btnPlantarse = document.querySelector('#btnPlantarse');
const btnJugar = document.querySelector('#btnJugar');

const puntsHTML = document.querySelectorAll('small');

const cartesJugador = document.querySelector('#jugador-cartes');
const cartesMaquina = document.querySelector('#maquina-cartes');


baralla = crearBaralla(pals, figures);

//EVENTS (CLICK):
//btnDemanar.addEventListener('click', function(){}); //pot ser una function tradicional o  de fletxa
//Quan es faci click en el bto es dispara l'accio definida en la funcio de fletxa
btnDemanar.addEventListener('click', () => {

    const carta = demanarCarta(baralla);
    //sumatori de punts
    puntsJugador = puntsJugador + valorCarta(carta);
    //afegim els punts dinamicament en l'html per l'etiqueta <small>
    puntsHTML[0].innerText = puntsJugador;
    // console.log(puntsJugador);

    const cartaDinamicaJugador = crearCartaHtml(carta);

    cartesJugador.append(cartaDinamicaJugador);

    if(puntsJugador > 21){
        // console.warn('HAS PERDUT');
        // puntsHTML[0].innerText = 'Has perdut. Has superat els 21 pts';
        btnDemanar.disabled = true;
        btnPlantarse.disabled = true;

        valorCartesMaquina(puntsJugador,puntsHTML[1],cartesMaquina,baralla);

    } else if(puntsJugador === 21){
        // puntsHTML[0].innerText = 'Has aconseguit l\'objectiu de 21 pts';
        btnDemanar.disabled = true;
        valorCartesMaquina(puntsJugador,puntsHTML[1], cartesMaquina,baralla);
    }
});

btnPlantarse.addEventListener('click', () => {
    btnPlantarse.disabled = true;
    btnDemanar.disabled = true;
 
    valorCartesMaquina(puntsJugador, puntsHTML[1],cartesMaquina,baralla);

    // if((puntsMaquina > puntsJugador) &&  (puntsMaquina <= 21)){
    //      puntsHTML[1].innerText = `${puntsMaquina} punts, La Casa Guanya`;
    // }else if ((puntsMaquina > puntsJugador) && puntsMaquina>21){
    //     puntsHTML[1].innerText = `${puntsMaquina} punts, La Casa Perd`;
    // }
    
});

btnJugar.addEventListener('click', () => {
    
    console.clear();
    baralla= [];
    baralla = crearBaralla(pals, figures);

    puntsJugador = 0;
    puntsMaquina=0;

    puntsHTML[0].innerText = puntsJugador;
    puntsHTML[1].innerText = puntsMaquina;

    btnPlantarse.disabled = false;
    btnDemanar.disabled = false;

    cartesJugador.innerHTML = '';
    cartesMaquina.innerHTML = '';
    
});


