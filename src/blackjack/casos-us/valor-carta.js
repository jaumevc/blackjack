/**
 * Rep una carta per extreure el valor de la mateixa.
 * Si es una figura pot ser un A = 11 punts o !A = 10 punts
 * Si no es una figura la carta val el seu valor
 * @param {String} carta rep una carta
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = (carta) =>{

    const valor = carta.substring(0, carta.length -1);
    return (isNaN(valor)) ? ( (valor === 'A') ? 11 : 10 ) : (valor * 1);  

    // let punts = 0;
    // if( isNaN(valor)){
    //     //console.log('No és un numero');
    //     punts = (valor === 'A') ? 11: 10;
    // }else{
    //     //console.log('És un número');
    //     punts = valor * 1;
    // }
    // console.log(punts);
}