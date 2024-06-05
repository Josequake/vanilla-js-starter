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




export {obtenerTarea,guardarTarea,modificarTarea,eliminarTarea};
















