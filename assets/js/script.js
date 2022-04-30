// # 2. PROGRAMA OPERACIONES MATEMATICAS
// Leer dos números ingresados por el usuario y guardarlos en dos variables
var num1 = parseInt(prompt('Ingrese un número mayor a cero'));
var num2 = parseInt(
	prompt('Ingrese un número diferente al anterior y mayor a cero')
);

// Calcular resultados
var suma = num1 + num2;
var resta = num1 - num2;
var multip = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

// Mostrar resultados
document.getElementById(
	'operaciones__title'
).innerHTML = `1. Resultados para las operaciones entre ${num1} y ${num2}: <br>Suma = ${suma}; Resta = ${resta}; Multiplicación = ${multip}; División = ${division}; Módulo de la división = ${modulo}.`;

// # 3. PROGRAMA GRADOS TEMPERATURAS
// Obtener temperatura en grados Celsius
var celsius = parseFloat(prompt('Ingrese una temperatura en grados Celsius'));

// Calcular equivalencia en F y K
var kelvin = celsius + 273.15;
var fahrenheit = celsius * (9 / 5) + 32;

// Mostrar resultados
document.getElementById(
	'temperaturas__title'
).innerHTML = `2. ${celsius} grados Celsius equivalen a ${kelvin} Kelvin y ${fahrenheit} Fahrenheit.`;

// # 4. PROGRAMA DIAS A AÑOS/SEMANAS/DIAS
// Obtener cantidad de días
var inDias = parseInt(prompt('Ingrese una cantidad de días'));

// Calcular equivalencias en años, semanas y días
var años = Math.floor(inDias / 365);
var semanas = Math.floor((inDias - 365 * años) / 7);
var outDias = (inDias - 365 * años) % 7;

// Mostrar resultados
document.getElementById(
	'semanas__title'
).innerHTML = `3. ${inDias} días equivalen a ${años} año/s con ${semanas} semanas y ${outDias} días.`;

// # 5. PROGRAMA 5 NUMEROS Y CALCULOS
// Obtener los 5 numeros del usuario
var nume1 = parseInt(prompt('Ingrese un número'));
var nume2 = parseInt(prompt('Ingrese otro número'));
var nume3 = parseInt(prompt('Ingrese un tercer número'));
var nume4 = parseInt(prompt('Ingrese un cuarto número'));
var nume5 = parseInt(prompt('Ingrese un quinto número'));

// Calcular resultados
var sumaTodo = nume1 + nume2 + nume3 + nume4 + nume5;
var promedio = sumaTodo / 5;

// Mostrar resultados
document.getElementById(
	'cinco-numeros__title'
).innerHTML = `4. La suma de ${nume1}, ${nume2}, ${nume3}, ${nume4} y ${nume5} es ${sumaTodo} y el promedio de estos es ${promedio}. <br>Chaolín.`;
