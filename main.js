
//Ejercicio 1
const elementoP = document.createElement('p');
elementoP.setAttribute("class", 'parrafo');
elementoP.innerHTML = 'Te damos la bienvenida al curso';
console.log(elementoP);
elementoP.style.fontSize = '2em';
elementoP.style.fontWeight = 'bolder';

const explicacion = document.getElementById('explicacion')
console.log(explicacion);
explicacion.append(elementoP);



//Ejercicio 2
var standard = document.getElementsByClassName('standard');
for (let index = 0; index < standard.length; index++) {
    standard[index].style.Maxwidth = "800px";
}


//Ejercicio 3
var horario = document.getElementById("horario");
horario.style.border = '2px solid navy';
horario.style.margin = '0 auto';


//Ejercicio 4
var recreo = document.getElementById("cuartaHora");
recreo.style.backgroundColor = 'grey';


//Ejercicio 5
var asignaturas = document.getElementsByClassName('asignaturas');
console.log('asignaturas');
for (let index = 0; index < asignaturas.length; index++) {
    asignaturas[index].style.textAlign = 'center'
}


//Ejercicio 6
var bienvenida = document.getElementById('bienvenida');
console.log('bienvenida');
bienvenida.style.fontFamily = 'Times New Roman';
bienvenida.style.textDecoration = 'underline';


//Ejercicio 8
const parrafo = document.createElement('p');
parrafo.setAttribute("class", 'parrafo');
parrafo.innerHTML = 'Los horarios son provisionales, están dispuestos a cambios';
horario.after(parrafo);


//Ejercicio 9
var nombresAsignaturas = ['Diseño de interfaces web', 'Despliegue de aplicaciones Web', 'Formacion en centros de trabajo'];
for (let index = 0; index < nombresAsignaturas.length; index++) {
    const asignatura = document.createElement('li');
    asignatura.innerHTML = nombresAsignaturas[index];
    document.getElementById('segundo').appendChild(asignatura);
}

//Ejercicio 10
let body = document.getElementsByTagName('body')[0];
body.style.textAlign = 'center';

//let grid1 = document.getElementsById('primeraDivision');
//grid1.style.display = 'grid';
//grid1.style.gridTemplateColumns = '1fr 1fr 1fr';


