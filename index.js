console.log("sistema de turnos")

for (let i = 1; i < 150; i++) {
    let nombre = prompt("Bienvenido!, ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    alert("Gracias por elegirnos " + nombre + " " + apellido + ". " + "Su turno es el numero " + i);
    if (apellido === "sabatini") {
        alert("Brayannnn, te dejamos una virrita en la heladera, aguantame que cortamos los turnos papá");
        break;
    }
    if (i === 15) {

        break;
    }
    if (i === 3) {
        alert("El turno numero 3 ya tiene una reserva, mil disculpas.")
        continue;

    }
    console.log("turno numero " + i + " otorgado a " + apellido + " " + nombre + ".")
}
alert("Ups!!!, nos quedamos sin turnos automaticos, Disculpe las molestias.");

console.log("Solo doy 15 turnos xq no me gusta laburar, ja.")