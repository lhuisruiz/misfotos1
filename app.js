const evento = document.getElementById('send')
const enviarFormulario =() => {

        let numero = document.getElementById('numero').value;
       
        
var win= window.open(`https://wa.me/54${numero}?text=App:%20 
https://bit.ly/3SMO8Aw`,'_blank');       
//
}
evento.addEventListener('click', enviarFormulario)



//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Please read this great article: ',
            url: 'https://bit.ly/3SMO8Aw'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("The current browser does not support the share function. Please, manually share the link")
    }
});



//************************************************************************************************* */
//Numero de pagina
function modal_009() {
    Swal.fire({
        html: '<h3 class="bm">jaqui 15 Foto1</h3>',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',
        //ajustes
        showCloseButton: true,
        timer: '3000',
        timerProgressBar: true,
        customClass: {
            actions: 'content',
        }
    })
}




function modal_05() {
    Swal.fire({
        html: '<h3  onclick="modal_009();" class="bm">Black Momets</h3>',
        imageUrl: 'https://res.cloudinary.com/lhuis/image/upload/v1666754485/iconos/fkppmxoe9qs9xhggmzcc.png',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',
    })
}

// automatica
setTimeout(function () {
Swal.fire({
    /*
    html: '<div class="mensaje">' +
        '<h3 class="bm">Black Momets</h3>' +
        '<p>Foto disponible el <b>4 de octubre</b>, Si no aparecen escribeme al </p>' +
        '<a href="https://wa.me/541144382987" target="_blank"><button class="bt-msj" >+54 11 4438-2987</button></a>' +
        '</div>',
  */
        html: '<div class="mensaje">' +
        '<h3 class="bm">Black Momets</h3>' +
        '<p>Fotos listas, gracias por la confianza</p>' +
        
        '</div>',
  
    //tamaño
    imageWidth: 300,
    imageHeight: 300,
    //cerrar
    padding: '1rem',
    showCloseButton: true,
    showConfirmButton: false,
    background: 'linear-gradient(#000,#000)',
    //ajustes
    showCloseButton: true,
    timer: '3000',
    timerProgressBar: true,
    customClass: {
        actions: 'content',
    }
})
}, 1000 * 2);