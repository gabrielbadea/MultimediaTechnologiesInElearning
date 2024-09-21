//document.getElementById("para1").innerHTML = "Hello JavaScript";
//document.getElementById("para1").style.fontSize = "35px";

document.write("test document write");
// window.alert("test alert!");
console.log("test console log");

// var text1 = "aaaa";
// text1 += "bbbb";
// window.alert(text1);

var x = produs(5, 6);
//alert(x);

function produs(a, b) {
    return a * b;
}

// var car = {type: "Fiat", model: "500", color: "white" }
// window.alert(car["type"]);

var person = { 
    firstName: "John", 
    lastName : "Doe", 
    id : 5566, 
    fullName : function() { 
    return this.firstName + " " + this.lastName;
    }};
    

//window.alert(person.fullName());