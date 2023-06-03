
/**
 * 
 * @param {String} carta nom de la carta a mostrar 
 */
export const crearCartaHtml = (carta)=>{

    if(!carta) throw Error('La carta és un element obligatori');
    
    // <img class="carta" src="assets/cartas/2C.png">
    const cartaDinamicaJugador = document.createElement('img');
    // cartaDinamicaJugador.classList.add('carta');
    cartaDinamicaJugador.className = 'carta';
    cartaDinamicaJugador.src = `assets/cartas/${carta}.png`;

    return cartaDinamicaJugador;
}