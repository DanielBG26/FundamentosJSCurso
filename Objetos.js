var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

funcion imprimirNombreEnMayusculas(persona)
{
  var nombre = persona.nombre.toUpperCase();
  console.log(nombre);
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
