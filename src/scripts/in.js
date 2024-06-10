/*aqui exportamos todas las funciones del index2.js que son las que 
ingresar, eliminan, modifican daton en la API*/

import { obtenerTarea, guardarTarea, modificarTarea, eliminarTarea } from './index2.js'
/*aquio declaramos estas variables que despues seran usadas dentro de la funcion
"createElement" que es la que cuando el usuario ingresa la tarea se refleje en la lista y tambien 
hace el llamado de la funcion "guardarTarea" que es la que hace el POST a la API*/
let input = document.getElementById("input");
let agregarTareas = document.getElementById("agregarTarea");
let actualizarTareas = document.getElementById("actualizarTarea");
let conteo = document.getElementById("conteo");
mostrarDatos();
/*Esta funcion es la que refresca los datos en el HTML mediante el get*/
async function mostrarDatos() {
  let valor = await obtenerTarea()
  document.getElementById("lista").innerHTML = "";
 valor.forEach(element => {
    let lista = document.getElementById("lista");
    let tareaEnLista = document.createElement("li");
    let check=document.createElement("input");
    check.type="checkbox";
    check.id=element.id;
    check.addEventListener("click",function(){
        if (check.checked == true) {
            conteo.innerHTML = conteo.innerHTML+++1;
        } else {
            conteo.innerHTML = parseInt(conteo.innerHTML)-1;
        }
    })
    console.log(check.value);
    check.style.marginLeft = "50%";
    tareaEnLista.textContent = element.task;
    tareaEnLista.id = element.id;
    lista.appendChild(tareaEnLista);
    lista.appendChild(check);
    let button = document.createElement("button");
    button.innerHTML = "Modificar";
    button.id="Modificar";
    button.lang=element.id;
    lista.appendChild(button);
    let button2 = document.createElement("button");
    button2.innerHTML = "Eliminar";
    button2.style.marginLeft = "2%";
    button2.id="Eliminar";
    button2.lang= element.id;
    button.addEventListener("click", function(){
        document.getElementById("hdnid").value=button.lang;
        document.getElementById("input").value=element.task;
        document.getElementById("actualizarTarea").style.display="";
        document.getElementById("agregarTarea").style.display="none";
    })
    
    button2.addEventListener("click", function(){
        
        eliminarTarea(button2.lang);
    })
    lista.appendChild(button2);
  });
}
/*Funcion que ingresa la tarea al HTML*/
agregarTareas.addEventListener("click", async function () {
    if (input.value.trim() === "") {
        alert("Ingrese una tarea");
        return;
    } 
        guardarTarea(input.value);
        mostrarDatos()
        
        
    
})
/*Funcion que deja modificar cualquier tarea que se halla ingresado a la lista,
 una vez que ud actualice la tarea se refleje en la API y tambien en el HTML */
actualizarTareas.addEventListener("click", async function () {
    if (input.value.trim() === "") {
        alert("Ingrese una tarea");
        return;
    } else {
        modificarTarea(input.value,document.getElementById("hdnid").value);
        document.getElementById("actualizarTarea").style.display="none";
        document.getElementById("agregarTarea").style.display="";
        input.value = "";
        mostrarDatos();
    }
})

