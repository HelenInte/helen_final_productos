let datatable;
let datatableisinitialized = false;

const initdatatable = async() =>{
    if(datatableisinitialized) {
        datatable.destroy();
    }

    await listaUsuarios();

    datatable = $("#datatable_users").DataTable(datatableoptions);

    datatableisinitialized = true;
};


const datatableoptions = {
    columnDefs:[ {className:"centered",targets:[0,1,2,3,4,5,6]},
    { orderable: false, targets: [5,6]}],
    pageLength: 5,
    destroy: true,
    language: {
        LengthMenu: "Mostrar _MENU_ registros por página", 
        zeroRecords: "Ningún usuario encontrado", 
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL registros", 
        infoEmpty: "Ningún usuario encontrado", 
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        LoadingRecords: "Cargando ... ",
        paginate: {
            first: "Primero",
            last: "Último", 
            next: "Siguiente",
            previous: "Anterior"
        }
    }
};




const listaUsuarios = async () => {
    try {
        const respuesta = await fetch("https://dummyjson.com/products");
        const data = await respuesta.json();

        const productos = data.products;

        let content = "";

        productos.forEach((producto, index) => {
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${producto.title}</td>
                <td>${producto.description}</td>
                <td>Q ${producto.price}</td>
                <td>${producto.brand ?? "Sin marca"}</td>
            </tr>`;
            
        });

        document.getElementById("tableBody_users").innerHTML = content;

    } catch (e) {
        alert("Error al cargar productos: " + e);

 }
}

window.addEventListener("load", initdatatable);

const contenedor = document.getElementById("contenedor");

document.getElementById("agregar").addEventListener("click", () => {
    const nuevo = document.createElement("p");
    nuevo.textContent = "❤️";
    contenedor.appendChild(nuevo);
});

document.getElementById("eliminar").addEventListener("click", () => {
    if (contenedor.lastChild) {
        contenedor.lastChild.remove();
    }
});



let nombre = "Helen";
  let apellido = "Interiano";

let edad = 27;
let nota = 98;

let estaActivo = true;
let estaEliminado = false;

let direccion = null;


console.log("hola soy " + nombre + "   creadora de esta pagina " );
  alert(" BIENVENIDOS A PRODUCTOS GIMI");
