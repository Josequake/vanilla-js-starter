import { obtenerTarea, guardarTarea, modificarTarea, eliminarTarea, createElement } from './index2.js'
let input = document.getElementById("input");
let agregarTareas = document.getElementById("agregarTarea");
let button2 = document.getElementById("Eliminar")
let lista=document.getElementById("lista")
//let eliminarlaTarea = document.getElementById("eliminar")
//let array = data[i]


mostrarDatos()


async function mostrarDatos() {
    console.log("hola")



  let valor = await obtenerTarea()

 valor.forEach(element => {

    let lista = document.getElementById("lista");
    let tareaEnLista = document.createElement("li");
    let check=document.createElement("input");
    check.type="checkbox";
    check.id="checkid";
    console.log(check.value);
    check.style.marginLeft = "50%";
    tareaEnLista.textContent = element.task;
    tareaEnLista.id = element.id;
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
    button2.onclick=borrar()
    lista.appendChild(button2);
  });

  
 
 

}


agregarTareas.addEventListener("click", async function () {

    if (input.value.trim() === "") {
        alert("Ingrese una tarea");
        return;
    } else {
        console.log("hola")
        guardarTarea(input.value)
        createElement()
        let button2 = document.getElementById("Eliminar")
        let button = document.getElementById("Modificar")
        if (button2 == true) {

             button2.addEventListener("click", function () {

            
        })
        } else if (button == true) {
            button, addEventListener("click", function () {

              
            })
        }

        
       
        
        
    }


})


/*let button2 = document.createElement("button");


button2.addEventListener("click", function(){
    
     console.log("hola") 
      
     for (let i = 0; i < data.length; i++) {
        if (data.id == data[i]) {
            eliminarTarea(data.id)
            break
            
        }
        
    }
})*/