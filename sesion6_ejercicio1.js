let listaDeCompras = ["azúcar", "café", "cerveza", "chocolate", "helado"];

listaDeCompras.push("aceite de girasol");
console.log(listaDeCompras);

listaDeCompras.pop();
console.log(listaDeCompras);


let peliculasFavoritas = [
    {nombre: "Pulp Fiction", director: "Quentin Tarantino", fecha: 1994},
    {nombre: "The Godfather", director: "Francis Ford Coppola", fecha: 1972},
    {nombre: "Hereditary", director: "Ari Aster", fecha: 2018},
]

let nuevaLista = peliculasFavoritas.filter((valor) => valor.fecha > 2010);
console.log(nuevaLista);

let directores = peliculasFavoritas.map((valor) => valor.director);
console.log(directores);

let titulos = peliculasFavoritas.map((valor) => valor.nombre);
console.log(titulos);

let concatenacion1 = directores.concat(titulos);
console.log(concatenacion1);

let concatenacion2 = [...directores, ...titulos];
console.log(concatenacion2);



