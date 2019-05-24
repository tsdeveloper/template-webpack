// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// "use strict";

// import $ from 'jquery';
// import jQuery from 'jquery';
// window.$ = jQuery;
// // const CONDICAO_FUNCIONARIO = true;
// // const CONDICAO_ADMINISTRADOR = true;

// // if (CONDICAO_FUNCIONARIO) {
// //     import(
// //         /* webpackChunkName: "funcionario" */
// //         './funcionario'
// //     ).then(funcionario => {
// //         funcionario.default();
// //     });
// // }

// // if (CONDICAO_ADMINISTRADOR) {
// //     import(
// //         /* webpackChunkName: "administrador" */
// //         './administrador'
// //     ).then(administrador => {
// //         administrador.default();
// //     });
// // }

import 'airbnb-browser-shims';
import '../scss/main.scss';

import './page/index/custom';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
} else {
    console.log('Looks like we are in production mode!');

}


// $(function () {
//     alert('work');
// });