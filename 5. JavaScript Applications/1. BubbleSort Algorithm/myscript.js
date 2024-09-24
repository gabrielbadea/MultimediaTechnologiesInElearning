function bubble_sort(a)
{
    var swapp;                      // indica faptul ca a fost cel putin o interschimbare in timpul unei parcurgeri a sirului
    var n = a.length - 1;           // pot fi maxim n parcurgeri ale sirului
    var x = a;                      // ordonam o copie a sirului specificat ca parametru
    do {
        swapp = false;
        // se parcurge sirul
        for (var i = 0; i < n; i++)
        {
            // daca elementul curent este mai mare decat urmatorul se interschimba valorile
            if (x[i] > x[i+1])              
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;       // avem o interschimbare
            }
        }
        n--;
    } while (swapp);    // se parcuge sirul cat timp nu este sortat (avem cel putin o interschimbare)
    
    return x;           // intoarcem rezultatul
}

function sort() {
    var arrayToSort = document.getElementById('array').value;       // sirul este citit din elementul cu id-ul 'array' (tipul datelor citite este string)
    arrayToSort = JSON.parse("[" + arrayToSort + "]");              // arrayToSort este convertit la tipul de date array     
    var sortedArray = bubble_sort(arrayToSort);                     // arrayToSort este sortat, iar rezultatul este stocat in sortedArray
    document.getElementById('sortedArray').innerHTML = sortedArray;     // rezultatul este afisat in elementul cu id-ul 'sortedArray'
}