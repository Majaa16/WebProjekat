//ovde pravimo funciju koja sluzi za selektivno prikazivanje pasusa
function prikazivanje() {
    var pasus = document.getElementsByTagName("p");
    var dugme = document.appendChild("button");
}

// Funkcija koja se poziva prilikom prelaska miša preko tabele
function onMouseOverTable() {
    console.log("Miš je prešao preko tabele.");
}

// Funkcija koja se poziva kada miš napusti tabelu
function onMouseOutTable() {
    console.log("Miš je napustio tabelu.");
}

// Funkcija za inicijalizaciju događaja
function initializeTableEvents() {
    var table = document.querySelector("table");
    table.onmouseover = onMouseOverTable;
    table.onmouseout = onMouseOutTable;
}

// Povezivanje funkcija sa događajima kada se učita stranica
window.onload = function() {
    initializeTableEvents();
}
