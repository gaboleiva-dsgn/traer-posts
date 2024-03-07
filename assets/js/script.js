// Llamamos a la api
const getData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    // console.log("Response: ", response);
    // manejo de posibles errores
    if (response.status !== 404) {
      const datos = await response.json();
      console.log(datos);
      // Acá imprimimos los datos cuando el bloque try es encontrado
      imprimir(datos);
    } else {
      throw new Error("404");
    }
    // acá imprimimos los errores
  } catch (err) {
    alert(err);
  }
};

document.getElementById("btn").addEventListener("click", () => {
  // llamamos a la función getData
  getData();
});

// Funcion para imprimis y contruir la lista
function imprimir(datos) {
  // Creamos una variable boxUl para guardar el elemento que recibe la lista
  const boxUl = document.getElementById("post-data");
  // CReamos en una variable una lista desordenada <ul>
  const ul = document.createElement("ul");
  // con un forEach recorremos los datos que recibimos desde la api
  datos.forEach((dato) => {
    // Contruimos con innerHML las listas que vamos a ir inyectando en el la ul
    ul.innerHTML += ` <li><p><b>${dato.title}</b></p><p>${dato.body}</p></li>`;
  });
  // Creamos la ul
  boxUl.appendChild(ul);
}
