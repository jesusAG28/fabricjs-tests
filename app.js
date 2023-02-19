var $ = function (id) { return document.getElementById(id) };

var canvas = new fabric.Canvas('canvas', {
    selection: true
});



// Crea un objeto Image
var image = new fabric.Image.fromURL('./assets/img/garuda.png', function (img) {
    // Ajusta las propiedades de la imagen
    img.set({
        left: 0,
        top: 0
    });

    // Agrega la imagen al canvas
    canvas.add(img);

    // Crea un objeto Text
    var text = new fabric.Text('Hola Mundo', {
        left: 300,
        top: 300,
        fill: 'white',
        textBackgroundColor: 'rgb(0,200,0)'
    });

    // Agrega el objeto Text al canvas
    canvas.add(text);

    // Agrega un controlador de eventos al objeto Image para el evento moving
    img.on('moving', function () {
        // no hace na, IDK
        // Lleva el objeto Text a la capa superior
        // text.bringToFront();

        //Para que el texto siempre este por encima de la imagen
        // Selecciona el objeto Text y haz que esté activo en el canvas
        canvas.setActiveObject(text);

    });
});


canvas.setOverlayImage('./assets/img/iphone.png', canvas.renderAll.bind(canvas));
