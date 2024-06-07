async function obtenerTarea() {
    try {
        const response = await fetch('http://localhost:3000/api/task/');
        const data = await response.json();
        // console.log("aqui vamos", data)
        return data
    } catch (error) {
        console.error(error);
    }
}
// console.log(data)


async function guardarTarea(titulo) {
    try {
        const response = await fetch("http://localhost:3000/api/task/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
              
            {
                task:titulo

            }

            )

        });
        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error("Error al guardar la tarea:", response.statusText);
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
}

async function modificarTarea(titulo) {
    try {
        const response = await fetch("http://localhost:3000/api/task/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(titulo)
        });
        if (response.ok) {
            const data = await response.json();
        } else {
            console.error("Error al modificar la tarea:", response.statusText);
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
}


async function eliminarTarea(id) {
    try {
        const response = await fetch("http://localhost:3000/api/task/"+id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
           
        });
        if (response.ok) {
            const data = await response.json();
        } else {
            console.error("Error al eliminar la tarea:", response.statusText);
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }

    window.location.reload()
}

async function createElement() {

    


  //let valor = await obtenerTarea()


     

    
    let lista = document.getElementById("lista");
    let tareaEnLista = document.createElement("li");
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
    button2.onclick= ()=> eliminar(button2)
    
    function eliminar(button2){
        const allSelectCheckboxes = document.querySelectorAll('button[name="Modificar"]');
            allSelectCheckboxes.forEach(cb => {
                if (cb !== button2) cb.checked = false;
            });
            console.log("seleccion",button2.checked)
            const delete1 = documentQuerySelector('button[name="Modificar"]:checked'); 
            console.log("aqui vamos", delete1)
    }    
    lista.appendChild(button2);

    input.value= ""
    


    

}


export {obtenerTarea,guardarTarea,modificarTarea,eliminarTarea,createElement};
















