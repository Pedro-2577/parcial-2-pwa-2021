if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}


window.addEventListener('offline', event => {
  document.getElementById('msj').innerHTML = "estas offline D:";
});

window.addEventListener('online', event => {
  document.getElementById('msj').innerHTML = "Tranquilo, ya estas online de nuevo, ya vas a poder disfrutar de nuevo de los mejores animes";
});