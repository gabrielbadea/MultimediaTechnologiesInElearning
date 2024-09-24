function moveObject() {
    var elementToAnimate = document.getElementById("objectToAnimate");   // elementul pe care vrem sa il animam
    var objectPosition = 0;                                              // pozitia initiala a elementului este 0
    var interval = setInterval(updateObjectPosition, 5);                 // se apeleaza functia updateObjectPosition la fiecare 5 ms pentru a actualiza pozitia obiectului 
    function updateObjectPosition() {
      if (objectPosition == 675) {                                       // daca pozitia a fost actualizata de 675 ori animatia se opreste
        clearInterval(interval);
      } else {
        objectPosition++;                                                // calculam noua pozitie a elementului
        elementToAnimate.style.top = objectPosition + 'px';              // se seteaza noua pozitie a elementului prin modificarea proprietatilor top si left
        elementToAnimate.style.left = objectPosition + 'px'; 
      }
    }
}


  