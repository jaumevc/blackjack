//import _ from 'underscore';
import {shuffle} from 'underscore';


//exportacio individual
export const elMeuNom = 'Jaume Valls';


//crearBaralla vull que sigui la exportacio per defecte
//funcio per crear una nova baralla

/**
 * Aquesta funcio crea una nova baralla
 * @param {Array<String>} pals exemple: ['C','D','H','S'];
 * @param {Array<String>} figures exemple: ['A','J','K','Q']
 * @returns Array<String> retorna una nova baralla barrejada
 */
export const crearBaralla = (pals, figures) =>{

    if(!pals || pals.length === 0) throw new Error('Els pals de la baralla són obligatoris');

    if(!figures || figures.length === 0) throw new Error('Les figures de la baralla són obligatòries');

    let baralla = [];

   for(let i = 2; i<= 10; i++){
       for(let pal of pals){
           baralla.push(i+pal);
       }
   }

   for(let pal of pals){
       for(let figura of figures){
           baralla.push(figura+pal);
       }
   }

   //baralla ordenada
   // console.log(baralla);
//    baralla = _.shuffle( baralla );
   baralla = shuffle( baralla );
   //baralla desendreçada
   //console.log(baralla);

   return baralla;
}

//export default crearBaralla;