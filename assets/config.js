'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Mariana Herrera",
	profesion: "Desarrollador Junior",
	correo: "mherrera5115@misena.edu.co",
	telefono: "+57 3013834283",
	perfil: "Aprendiz del SERVICIO NACIONAL DE APRENDIZAJE, programa ANALISIS Y DESARROLLO EN SISTEMAS DE INFORMACIÓN. Habilidades para trabajar en equipo en comunidades de: Desarrollo junior de Software, Definición de arquitectura, Diseño base de datos, Logica y algoritmos.",
	habilidades: {
		comunicativas:['Activa, ','Atenta, ','Paciente, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Dialogo abierto, ','Orden, ','Apoyo'],
		gestion: ['Liderazgo, ','Responsabilidad, ','Análisis para toma de decisiones'],
		tecnicas: ['Definicion de arquitectura, ','Diseño de base de datos, ','Logica y algoritmos']
	},
	hobbies: ['Escuchar Música, ', 'Ver Television, ', 'Salir, ','Viajar, ', 'Video-Juegos']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://3.bp.blogspot.com/-TkVKyVxdxgQ/U2kGFcBl3LI/AAAAAAAABVo/zrDM3ittaz0/s1600/Banner+Soy+Cultura+SENA+-+CTMA.png";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}