import {obtenerTarea,guardarTarea,modificarTarea,eliminarTarea,} from './index2.js'

//visualizacionentabla()

let input = document.getElementById("input");
let lista = document.getElementById("lista");
let tareaEnLista = document.createElement("li");
let agregarTareas = document.getElementById("agregarTarea");
let borrardeLista = document.getElementById("Eliminar");
let listacheck = []


/*async function visualizacionentabla(data){
    data = await obtenerTarea(data)
    console.log("datos totales", data)
    for (let i = 0; i < data.length; i++) {
        
        createElement(data[i]) 

        
    }
    
}*/

/*listacheck.addEventListener("click",function(){
    if (listacheck != "") {
        console.log("aqui vamos")
        
    } else {
        
    }
})*/

agregarTareas.addEventListener("click", async function () {
   
  

    if (input.value.trim() === "") {
        alert("Ingrese una tarea");
        return;
    }
    
    //createElement()
    /*for (let i = 0; i < data.length; i++) {
      // primera opcion usar el for pero antes del for tenemos que limpiar tenemos que limpiar todos lo 
      // hijos del elemento padre que nuestro elemento padre lista y podremos llamar al for o si no la segunda opcion
      // seria enlugar de llamar el for vamos a extraer la ultima tarea dentro de data y psarle esa ultima tarea
      // a createElement 
        createElement(data[i]) 

        
    }*/
    let postValor =await guardarTarea()
    console.log(postValor)

    obtenerTarea()
    input.value = "";


})


//exportar todas las tareas desde fetch.js a este index lo recorremos exportamos los datos luego vamos a recorrer
// ese arreglo que nos devuelve el fetch.js que es el que se puede ver en la consola
// y por cada uno de esos elementos del for vamos a crear un elemento HTML
//por cada uno de los elementoes del arreglo
  

function createElement() {

    
    
    lista = document.getElementById("lista");
    tareaEnLista = document.createElement("li");
    let check=document.createElement("input");
    check.type="checkbox";
    check.id="checkid";
    console.log(check.value);
    check.style.marginLeft = "50%";
    console.log("aqui vamos" , check)
    tareaEnLista.textContent = input.value;
    lista.appendChild(tareaEnLista);
    lista.appendChild(check);
    let button = document.createElement("button");
    button.innerHTML = "Modificar";
    button.id="Modificar";
    lista.appendChild(button);
    let button2 = document.createElement("button");
    button2.innerHTML = "Eliminar";
    button2.style.marginLeft = "2%";
    button2.id="Eliminar";
    console.log(button2)
    button2.id="cf027de2-497c-4707-8923-7a7bd92d168e"
    //for (let i = 0; i < array.length; i++) {
        
        
   //}
   
   // button2.onclick = borrarTarea();
    console.log(button2);
    lista.appendChild(button2);


    button2.addEventListener("click",function () {
        
        eliminarTarea(button2.id)
    })


    

}








//function borrarTarea() {
    
   // lista.parentNode.removeChild(lista);

/*const clickEliminar = (lista,Lista) => {
    Lista.parentNode.removeChild(Lista);
    eliminar(lista);
    
}*/

/*borrardeLista.addEventListener("click",function(){
    Lista.parentNode.removeChild(Lista);
        eliminar(li);
})*/



/*function eliminarElemento(modificar) {
    let button = document.getElementById(modificar);
    if (button) {
        button.parentNode.removeChild(button);
        console.log("Elemento eliminado exitosamente.");
    } else {
        console.log("El elemento con el ID '" + modificar + "' no fue encontrado.");
    }
}*/

    




/*function createElement2(data) {

    if (input.value.trim() === "") {
        alert("Ingrese una tarea");
        return;
    }
    
    lista = document.getElementById("lista");
    tareaEnLista = document.createElement("li");
    let check=document.createElement("input");
    check.type="checkbox";
    check.id="checkid";
    console.log(check.value);
    check.style.marginLeft = "50%";
    console.log("aqui vamos" , check)
    tareaEnLista.textContent = input.value;
    lista.appendChild(tareaEnLista);
    lista.appendChild(check);
    let button = document.createElement("button");
    button.innerHTML = "Modificar";
    button.id="Modificar";
    lista.appendChild(button);
    let button2 = document.createElement("button");
    button2.innerHTML = "Eliminar";
    button2.style.marginLeft = "2%";
    button2.id="Eliminar";
    console.log(button2);
    lista.appendChild(button2);
    

}*/

















