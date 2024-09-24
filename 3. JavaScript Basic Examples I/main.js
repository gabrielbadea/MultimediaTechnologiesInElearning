// document.getElementById("para1").innerHTML = "Hello JavaScript";

// document.getElementById("para1").style.fontSize = "35px";

// document.getElementById("para1").style.display = "none";
// document.getElementById("para1").style.display = "block";

// document.write("<b>test document write</b>");
// window.alert("test alert!");
// console.log("test console log");

// var a, b, c;    // declara 3 variabile
// a = 10;         // asigneaza valoarea 10 la a
// b = 20;         // asigneaza valoarea 20 la b
// c = a + b;      // asigneaza suma dintre a si b la c

// function myFunction() {
//     document.getElementById("para1").innerHTML = "Paragraful 1";
//     document.getElementById("para2").innerHTML = "Paragraful 2";
// }

// modificare heading
// document.getElementById("heading1").innerHTML = "Acest element este de tip heading.";

// var a = 123 * 234;
// window.alert(a);

// var a = "Laborator";
// var b = "TMME";
// var result = a + " " + b;
// window.alert(result);

// var string1 = "buna ";
// string1 += "dimineata";
// window.alert(string1);

// var varsta = 16;            // Number
// var nume = "Cosmin";        // String
// var datePersonale = { nume: "Popescu", prenume: "Andrei", varsta: 50 };     // Object

// var x;                 // valoarea lui x este nedefinita
// x = 10;                // acum x este numar (Number)
// x = "Andrei";          // acum x este sir de caractere (String)
// window.alert(x);

// var x1 = 45.00;
// var x2 = 45;


var x = 7;
var y = 7;
var z = 9;
// // (x == y)       // adevarat
// // (x == z)       // fals
// window.alert(x == y);

// var persoana = {
//     nume: "Popescu",
//     prenume: "Andrei",
//     varsta: 50
// };

typeof ""           // returneaza "string"
typeof "Andrei"     // returneaza "string"
typeof 567          // returneaza "number"

// function produs(p1, p2) {
//     return p1 * p2;         // functia returneaza produsul dintre p1 si p2
// }

// var x = produs(22, 33);  // functia este apelata, valoarea intoarsa va fi stocata in variabila x
// window.alert(x);   

// var masina = {
//     tip: "Ford",
//     model: "Focus",
//     color: "alb"
// };

// window.alert(masina.tip);

var persoana = { 
    nume: "Popescu", 
    prenume : "Andrei", 
    varsta : 50, 
    numeComplet : function() { 
        return this.nume + " " + this.prenume;
    }
};
    
// var nume = persoana.numeComplet();
// window.alert(nume);