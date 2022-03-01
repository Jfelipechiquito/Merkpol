var num = 1;


function Siguiente(){
    num++; 
    if (num > 22) {
        num = 1;
    }
    var imagen = document.getElementById("image");
    imagen.src="../img/PA/PA" + num + ".jpg";   
};

function Anterior(){
    num--;
    if (num < 1) {
        num = 22;
    }
    var image = document.getElementById("image");
    image.src="../img/PA/PA" + num + ".jpg";
    
}