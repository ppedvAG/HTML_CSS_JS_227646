
const passwordInp = document.querySelector("#password");

// Lambads in JS

const multiply = (x, y) => x*y;
let erg = multiply(5, 5);
console.log(erg);


passwordInp.addEventListener("focus", function(ev)  {
    if(passwordInp.validity.valueMissing) {
        passwordInp.setCustomValidity("Das Passwort darf nicht leer sein.");
        passwordInp.reportValidity();
    }
    else {
        passwordInp.setCustomValidity("");
    }
})


/*
    Mögliche validty Props

    patternMismatch => Inhalt stimmt nicht mit pattern überein
    tooLong => Inhalt ist zu lang
    tooShort => Inhalt ist zu kurz
    rangeOverflow => Wert höher ist als im max-Attribut bestimmt
    rangeUnderflow => Wert niedriger als im min-Attribut bestimmt
    typeMismatch => Wert ist nicht der richtige Typ. z.B. email ohne @
    valid => Gibt true zurück, wenn alles gültig ist
    valueMissing => Wenn das Input-Element das Attribut required hat und das Feld leer ist
*/
passwordInp.addEventListener("keyup", function(ev) {
    if(passwordInp.validity.tooShort) {
        passwordInp.setCustomValidity(`Das Passwort muss mindestens 8 Zeichen lang sein. Gerade hat es ${passwordInp.value.length} Zeichen lang`);
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.reportValidity();
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist

    }else {
        passwordInp.setCustomValidity("");
    }
} )

document.querySelector("form").addEventListener("submit", function(ev) {
    // Auf die Form angewendet verhindert event.preventDefault() das Neuladen der Seite bei senden der Form
    ev.preventDefault();
})


function checkPlz() {
    const constraints = {
        ch: ['^(CH-)?\\d{4}$', "Schweizerische PLZ müssen aus genau 4 Zeichen bestehen: e.g. CH-1950 or 1950"],
        de: ['^(D-)?\\d{5}$', "Deutsche PLZ müssen aus genau 5 Zeichen bestehen: e.g. DE-12345 or 12345"],
        fr: ['^(F-)?\\d{5}$', "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g. F-75012 or 75012"],

    }

    const countryValue = country.value;
    const zipCodeValue = zipCode.value;

    const constraint = new RegExp(constraints[countryValue][0], "");

    if(constraint.test(zipCodeValue)) {
        zipCode.setCustomValidity("");
    }
    else {
        zipCode.setCustomValidity(constraints[countryValue][1]);
        zipCode.reportValidity();
    }
}

zipCode.addEventListener("input", checkPlz);
country.addEventListener("input", checkPlz);