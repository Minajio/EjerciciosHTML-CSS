let fotosMostradas = false;

function agregarImg(){
    if(!fotosMostradas){
        for(let i = 1; i <= 20; i++){
            const imagen = `imagenes/mascota${i}.jpg`;
            const contenedor = document.getElementById(`${i}`);
            contenedor.insertAdjacentHTML("beforeend", `<img src=${imagen} alt=${imagen} class="imgBody">`);
        }
        fotosMostradas = true;
    }
}

function eliminarImg(){
    if(fotosMostradas){
        for(let i = 1; i <= 20; i++){
            const contenedor = document.getElementById(`${i}`);
            contenedor.childNodes[0].remove();
        }
        fotosMostradas = false;
    }
}