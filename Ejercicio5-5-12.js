//cuando todo esta cargado se llama a esta funcion.
function empieza(){
    element = document.getElementById('formulario');
    
    //evento input es cualquier modificacion en el formulario
    element.addEventListener("input",function(e){       
        copiaElement = document.getElementById('color');    
        copiaElement.style.backgroundColor = element.value;              
    });
};
