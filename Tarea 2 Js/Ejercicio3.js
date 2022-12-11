/**
 * Determinar la nota final de un alumno, la cual depende de lo siguiente: Examen =20% , tareas 40%, 
asistencia =10% e investigación =30% , al final deberá mostrar los datos del alumno , nombre , carnet 
y nota final. Para este ejercicio deberá de utilizar una fuction y asignar parámetros para llenar los 
valores.
 */

let nombre = 'Jeff';
let id = '56476';

function notaFinal(examen,tareas,asistencia, investigacion){
let calcExamen = examen * 0.20
let calTareas = tareas *0.40
let calAsistencia = asistencia * 0.10
let calInvestigacion = investigacion * 0.30
let notaFinal = calcExamen + calTareas + calAsistencia + calInvestigacion

console.log(' Nombre del Alumno : ' + nombre,'\n','Carnet: ' + id,'\n', 'Nota final: ' + notaFinal)
}

notaFinal(5,1,4,6)