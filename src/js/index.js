import '../css/style.css'
import io from 'socket.io-client'
import Atlas from './Atlas';

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}



const socket = io();