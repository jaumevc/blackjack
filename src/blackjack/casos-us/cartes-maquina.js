import { demanarCarta } from "./demanar-carta";
import { valorCarta } from "./valor-carta";
import { crearCartaHtml } from "./crear-carta-html";


/**
 * Torn i valor de cartes per a la màquina: 
 * Es dispara quan el jugador perd o arriva a 21 
 * o quan el jugador clica el bto de plantar-se
 * @param {Number} puntsPerSuperar punts que ha sumat el jugador
 * @param {HTMLElement} puntsHTML element HTML per a mostrar els punts
 * @param {HTMLElement} cartesMaquina element HTML per a mostrar img
 * @param {Array<String>} baralla 
 */
export const valorCartesMaquina = ( puntsPerSuperar, puntsHTML, cartesMaquina, baralla ) =>{

    if(!puntsPerSuperar) throw new Error('Els punts mínims són necessaris');
    if(!baralla || baralla.length === 0) throw new Error('la baralla no pot estar buida');
    if(!puntsHTML) throw new Error('Els punts del marcador són necessaris');
    if(!cartesMaquina) throw new Error('Les imatges per visualitzar són necessaris');
  
    let puntsMaquina = 0;
    do{ 
        const carta = demanarCarta(baralla);

        const cartaDinamicaJugador = crearCartaHtml(carta);
        
        cartesMaquina.append(cartaDinamicaJugador);
        //sumatori de punts
        puntsMaquina = puntsMaquina + valorCarta(carta);
        
        //afegim els punts dinamicament en l'html per l'etiqueta <small>
        puntsHTML.innerText = puntsMaquina;

        if(puntsPerSuperar > 21){
            break;
        }

    }while( (puntsMaquina < puntsPerSuperar) && puntsPerSuperar <= 21 );
    
    //retardem amb la funcio de callback de setTimeout, 
    // l'execucio 10 milisegons xq aqparegui abans les cartes de la computadora i despres el resultat
    setTimeout(()=>{
        if(puntsMaquina === puntsPerSuperar){
            alert('NO HI HA GUANYADOR');
        }else if(puntsPerSuperar > 21 ){
            alert('LA CASA GUANYA');
        }else if(puntsMaquina > 21){
            alert('TU GUANYES');
        }else if(puntsPerSuperar < 21 && puntsMaquina <= 21 && puntsMaquina > puntsPerSuperar ){
            alert('LA CASA GUANYA');
        }else{
            alert('TU GUANYES');
        }
    },500);
}