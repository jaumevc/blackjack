/**
 * funció per demanar una carta
 * @param {Array<String>} baralla es un array d'Strings
 * @returns {String} retorna la carta de la baralla
 */
export const demanarCarta = (baralla) =>{
    
    if(!baralla || baralla.length === 0){
        throw new Error('La baralla és buida');
    }

    const carta = baralla.pop();
    //console.log(baralla);
    //console.log(carta); 
    //carta ha de pertanyer a les cartes existents a la baralla i despres cal treure-la
    return carta;
}