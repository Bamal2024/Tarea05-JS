/*Hacer las funciones que sean necesarias para:
 Obtener el promedio de notas de un alumno considerando que la suma de
notas debe ser el retorno de una función y el promedio el retorno de
otra función. Las notas son: 6,8,9,2,5,10. */

const Alumno = {
    nombre: "Camila Meza",
    notas: [6, 8, 9, 2, 5, 10],
    asignatura: "JavaScript"
}

console.log("Todas las notas del Alumno: ", Alumno.notas);

const sumatoria = (u, v, w, x, y, z) => u + v + w + x + y + z;

const sumaNotas = sumatoria(...Alumno.notas);

const totalNotas = Alumno.notas.length;

const promNotas = () => sumaNotas / totalNotas

console.log("total suma de notas alumno", sumaNotas)
console.log('El promedio del alumno es: ', promNotas().toFixed(1))


