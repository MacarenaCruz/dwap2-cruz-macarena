const hbs = require('hbs');

hbs.registerHelper('getArt',(text)=>{
    let palabras = text.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toUpperCase();

    });
    return palabras.join(' ');
});