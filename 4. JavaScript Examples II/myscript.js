function displayDate() {
    document.getElementById('para1').innerHTML = Date();
}

// -- afisarea lungimii unui sir de caractere --
// var x = "Acesta este un sir de caractere.";
// var lungimeText = x.length;
// window.alert(lungimeText);
// var prenume = new String("Andrei");

// -- afisarea pozitiei textului "are" --
// var text = "Ana are mere.";
// var pozitie = text.indexOf("are");
// window.alert(pozitie);

// -- extragere text dintr-un sir de caractere --
// var text1 = "Mere, pere, banane";
// var rezultat = text1.slice(6, 10);
// window.alert(rezultat);

// -- inlocuire text intr-un sir de caractere --
// var text = "Acest text se termina cu abc.";
// var text1 = text.replace("abc", "xyz");
// window.alert(text1);

// -- transformarea unui sir de caractere in litere de tipar --
// var text = "Buna ziua!";
// var text1 = text.toUpperCase();
// window.alert(text1);

// -- concatenarea a doua siruri de caractere --
// var text1 = "Buna";
// var text2 = "ziua";
// var text3 = text1.concat(" ", text2);
// window.alert(text3);

// -- exemple de numere in JavaScript --
// var x = 5.23;   // numar cu zecimale
// var y = 5;      // numar fara zecimale

// -- verificarea unei valori daca este un numar valid --
// var x = 10 / "Abc";     // x va avea valoarea NaN (Not a Number)
// window.alert(isNaN(x));

// var y = new Number(123);

// -- scrierea unui numar cu un numar specificat de zecimale --
// var x = 5.678;
// x.toFixed(0);      // intoarce 6
// x.toFixed(2);      // intoarce 5.68

// -- transformarea unui sir de caractere la un numar intreg --
// parseInt("10");             // 10
// parseInt("10.22");          // 10
// parseInt("10 15 20");       // 10
// parseInt("10 abc");         // 10

// -- declaratii de siruri --
// var fructe = [ "Mere", "Pere", "Banane"];
// var numere = [ 5, 10, 15, 20 ];

// var fructe = new Array("Mere", "Pere", "Banane");
// var numere = new Array(5, 10, 15, 20);

// -- adaugarea unui element la finalul unui sir --
// var fructe = [ "Mere", "Pere", "Banane"];
// fructe.push("Piersici");    // adauga un nou element (Piersici) la fructe
// window.alert(fructe);

// -- adaugarea unui element la inceputul unui sir --
// var fructe = [ "Mere", "Pere", "Banane"];
// fructe.unshift("Piersici");
// window.alert(fructe);

// -- extragerea de elemente dintr-un sir --
// var fructe = [ "Mere", "Pere", "Banane"];
// var citrice = fructe.slice(1);
// window.alert(citrice);

// -- ordonarea alfabetica a unui sir --
// var fructe = [ "Mere", "Pere", "Banane"];
// fructe.sort();
// window.alert(fructe);

// -- ordonarea unui sir numeric --
// var numere = [5, 12, 10, 15, 4, 3, 2, 1];
// numere.sort(function (a, b) {
//     return a - b;
// });
// window.alert(numere);

// -- valori booleene --
// (20 > 10)       // adevarat
// 20 > 10         // adevarat

// -- structura if --
// var ora = 10;
// if(ora < 18) {
//     formulaDeSalut = "Buna ziua";
// }
// window.alert(formulaDeSalut);

// -- structura if else --
// if(ora < 18) {
//     formulaDeSalut = "Buna ziua";
// } else {
//     formulaDeSalut = "Buna seara";
// }

// -- structura if else if --
// if(ora < 11) {
//     formulaDeSalut = "Buna dimineata";
// } else if (ora < 18) {
//     formulaDeSalut = "Buna ziua";
// } else {
//     formulaDeSalut = "Buna seara";
// }

// -- structura switch --
// switch(new Date().getDay()) {
//     case 1:
//         day = "Luni";
//         break;
//     case 2:
//         day = "Marti";
//         break;
//     case 3:
//         day = "Miercuri";
//         break;
//     case 4:
//         day = "Joi";
//         break;
//     case 5:
//         day = "Vineri";
//         break;
//     case 6:
//         day = "Sambata";
//         break;
//     case 7:
//         day = "Duminica";
//         break;
// }

// window.alert(day);

// -- verificarea numarului de elemente dintr-un sir --
// if(numere.length < 2) {
//     window.alert("Sirul are maxim un element.");
// }

// -- structura for --
// var text = "<br>";
// for(i = 0; i < 5; i++) {
//     text += "Numarul este " + i + "<br>";
// }
// document.getElementById('placeholder-element').innerHTML = text;

// -- structura for/in --
// var persoana = {
//     nume:"Popescu", 
//     prenume:"Andrei", 
//     varsta: 25
// };

// var text = "<br>";
// var x;
// for(x in persoana) {
//     text += " ";
//     text += persoana[x];
// }
// document.getElementById('placeholder-element').innerHTML = text;

// -- structura while --
// var i = 0;
// text = "<br>";
// while(i < 10) {
//     text += "Numarul este " + i + "<br>";
//     i++;
// }
// document.getElementById('placeholder-element').innerHTML = text;

// -- structura do/while --
// var i = 0;
// text = "<br>";
// do {
//     text += "Numarul este " + i + "<br>";
//     i++;
// } while(i < 10);
// document.getElementById('placeholder-element').innerHTML = text;

// -- instructiunea break --
// var text = "<br>";
// for (i = 0; i < 10; i++) {
//     if (i == 3) { break; }
//     text += "Numarul este " + i + "<br>";
// }
// document.getElementById('placeholder-element').innerHTML = text;

// -- instructiunea continue --
// var text = "<br>";
// for (i = 0; i < 10; i++) {
//     if (i == 3) { continue; }
//     text += "Numarul este " + i + "<br>";
// }
// document.getElementById('placeholder-element').innerHTML = text;