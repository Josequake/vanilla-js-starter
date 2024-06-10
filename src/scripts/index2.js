/*Funcion que hace que el get se ejecute y se pueda ver la lista 
por si se refresca la pagina */


async function obtenerTarea() {
    try {
        const response = await fetch('http://localhost:3000/api/task/');
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}
/*Funcion que lo que hace es ingresar la tarea a la API */
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
/*FEsta funcion nos deja modificar la tarea y claramente se actualiza en la API */
async function modificarTarea(titulo,id) {
    try {
        const response = await fetch("http://localhost:3000/api/task/"+id, {
            method: "PUT",
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
        } else {
            console.error("Error al modificar la tarea:", response.statusText);
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
}

/*Esta funcion elimina la tera de la API*/
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


/*Aqui modulamos exportando todas estas funciones para el in.js */
export {obtenerTarea,guardarTarea,modificarTarea,eliminarTarea};
















