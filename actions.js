
import fetch from 'isomorphic-fetch';
//import 'babel-polyfill'; // la doc decia que lo importe, TODO: averiguar bien si lo necesito.

export const actionTypes = {
 MORE_CONTENT: 'MORE_CONTENT',

  PODCAST_OPEN: 'PODCAST_OPEN',
  SET_PLAYING: 'SET_PLAYING',
 SELECT_CATEGORY: 'SELECT_CATEGORY',
 REQUEST_CATEGORY: 'REQUEST_CATEGORY',
 RECEIVE_CATEGORY: 'RECEIVE_CATEGORY',

 REQUEST_CHANNEL: 'REQUEST_CHANNEL',
 SELECT_CHANNEL: 'SELECT_CHANNEL',
 RECEIVE_CHANNEL: 'RECEIVE_CHANNEL'
}

export const setPlaying = () => {
  return {
    type: actionTypes.SET_PLAYING,
    
  }
}

export const togglePodcast = (podcast) => {
  return {
    type: actionTypes.PODCAST_OPEN,
    podcast
  }
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

export const fetchCategory = category => async dispatch => {
   // Primer envío: se actualiza el estado de la aplicación para informar
   // que la llamada al API está iniciando.
   dispatch(requestCategory(category))
   // devolvemos una promesa para esperar por la respuesta.
   const response = await fetch(`https://api.audioboom.com/channels/${category}`)
    const json = await response.json()
       // Aquí, actualizamos el estado de la aplicación con los resultados de la llamada a la API.
       dispatch(receiveCategory(category, json))
       
       //TODO: captura de errores aca.
 }

