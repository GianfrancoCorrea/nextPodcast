
import fetch from 'isomorphic-fetch';
//import 'babel-polyfill'; // la doc decia que lo importe, TODO: averiguar bien si lo necesito.

export const actionTypes = {
 TICK: 'TICK',
 INCREMENT: 'INCREMENT',
 DECREMENT: 'DECREMENT',
 RESET: 'RESET',

 MORE_CONTENT: 'MORE_CONTENT',

 SELECT_CATEGORY: 'SELECT_CATEGORY',
 REQUEST_CATEGORY: 'REQUEST_CATEGORY',
 RECEIVE_CATEGORY: 'RECEIVE_CATEGORY',

 REQUEST_CHANNEL: 'REQUEST_CHANNEL',
 SELECT_CHANNEL: 'SELECT_CHANNEL',
 RECEIVE_CHANNEL: 'RECEIVE_CHANNEL'
}


export const selectCategory = category => {
 return {
   type: actionTypes.SELECT_CATEGORY,
   category
 }
}

const requestCategory = (category) => {
 return {
   type: actionTypes.REQUEST_CATEGORY,
   category
 }
}

const receiveCategory = (category, json) => {
 return {
   type: actionTypes.RECEIVE_CATEGORY,
   category,
   channels: json.body,
   receivedAt: Date.now()
 }
}

export const fetchCategory = category => {
 return function (dispatch) {
   // Primer envío: se actualiza el estado de la aplicación para informar
   // que la llamada al API está iniciando.
   dispatch(requestCategory(category))

   // devolvemos una promesa para esperar por la respuesta.
   //TODO: cambiar /recommended por ${recommended}
   return fetch('https://api.audioboom.com/channels/recommended')
     .then(response => response.json())
     .then(json =>

       // Aquí, actualizamos el estado de la aplicación con los resultados de la llamada a la API.
       dispatch(receiveCategory(category, json))
       )

       //TODO: captura de errores aca.
 }
}
