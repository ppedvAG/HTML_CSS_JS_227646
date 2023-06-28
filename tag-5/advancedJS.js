// Classes in JS
// Syntactic Sugar für Objekt-Erstellung
// function introduce() {
//      console.log(`Hi my Name is ${this.name}`);   
// }

/* 
    function Person(name) {
        // this ist ein Platzhalter für die neuerstellte Instanz des aktuellen Objektes
        this.name = nam;
        this.introduce = introduce;
    }

const p1 = new Person("Max");
p1.name; // => Max
p1.introduce();

neue Keyword => class
*/

class Person {
    // mit hashtag definiere ich ein privates Feld
    // Kann nur noch durch klassen-Methoden aufgerufen werden und nicht direkt
    #age;

    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    // Hier wird ein setter definiert, dieser wird nun immer aufgerufen wenn ich age etwas zuweise
    set age(newAge) {
        console.log("setter wurde aufgerufen");
        if(newAge < this.age) {
            console.error("Man kann nicht jünger werden!");
        }
        else {
            this.#age = newAge;
        }
    }

    get age() {
        console.log("Getter wurde aufgerufen");
        return this.#age;
    }

    #introduce() {
        return `Hi my name is ${this.firstName} ${this.lastName}. ${this.age}`;
    }

    introduceSelf() {
        console.log(this.#introduce());
        return this.#introduce;
    }

} 

const p2 = new Person("Max", "Musterman", 29, "male");
p2.introduceSelf();
p2.age = 30;
p2.introduceSelf();

// Mit extends leiten wir eine Klasse von einer basis Klasse ab
class Student extends Person {
    constructor(firstName, lastName, age, gender, schoolClass) {
        super(firstName, lastName, age, gender);
        this.schoolClass = schoolClass;
    }

    showGrade() {
        const grade = Math.floor(Math.random() * 6) + 1; 
        console.log(grade);
        return grade;

    }

    introduceSelf() {
        console.log(`Hi my name is ${this.firstName} ${this.lastName}. ${this.age}`);
    }
}

const p3 = new Student("Erika", "Musterfrau", 17, "female", 11);
p3.introduceSelf();
p3.showGrade();

// ERstellt eine Klasse Teacher, die von Person abgeleitet wird und zusätzlich ein private field mit subject hat
// Die methode introduceSelf() soll erweiter oder überschreieben werden um zusätzlich das subject anzuzeigen
// Zusätzlich einen getter und setter für subject erstellen


// Lambdas
// sin kürzere alternativen zu den anonymen Funktionen
// Nennt man auch Pfeil oder Arrow Functions
// Werden häufig als Parameter für andere Funktionen benutzt
// Sparen function Keyword, Klammern und return ein solange sie einzeilig sind

const add = (num1, num2) => num1 + num2;
let sum = add(5,7);

// array höhere Funktionen
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(callback)
// Iteriert über jedes Element des Arrays und führt damit die callback-Methode aus

function logNumber(num)  {
    console.log(num);
}

numArr.forEach(logNumber);

console.log("Jetzt mit Lambda: ");
// Klammern werden bei einer lambda Funktion nur benötigt, wenn wir mehr als einen Parameter haben
numArr.forEach((num, index) =>
{
    console.log("Nummer: " + num + "| Index: " + index);
});

// arr.filter
// Gibt ein neues Array zurück, das aus den Elementen besteht bei denen der callback true ergeben hat

let evenNums = numArr.filter((num) => num % 2 === 0);
let oddNums = numArr.filter((num) => num % 2 !== 0);

// arr.map
// Gibt uns ein neues Array zurück, das aus den Elementen des Arrays besthet auf denen die callback Funktion angewendet wurde
evenNums = evenNums.map((num) => num*2);
console.log(evenNums);

// arr.reduce
// Iteriert über das Array und gibt einen einzigen Wert zurück
sum = numArr.reduce((sum, number) => sum + number);
console.log(sum);

// arr.some
// Gibt true zurück, falls der callback bei mindestens einem element true ergibt
console.log(evenNums.some(
    num => num > 8
));
