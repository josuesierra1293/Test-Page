var count = 0
$('.carousel.carousel-slider').carousel({fullWidth: true});

function cuenta(){
	if(count == 5){
    $('.carousel').carousel('next', 1); // Move next n times
    count = 0
}else{
	count ++
}
}

function ini(){
	cuenta();
	setInterval("cuenta()",1000);
}


// function add(type) {
//   //Create an input type dynamically.   
//   var element = document.createElement("div");
//   //Assign different attributes to the element. 
//   element.type = type;
//   element.value = type; // Really? You want the default value to be the type string?
//   element.name = type;
//   element.text = "lorem"
//   element.a = element.src = "https://lorempixel.com/800/400/food/1"
//   // element.onclick = function() { // Note this is a function
//   //   alert("blabla");
//   // };
// // <a><img src="https://lorempixel.com/800/400/food/1" height="100%"></a>

//   var foo = document.getElementById("fooBar");
//   //Append the element in page (in span).  
//   foo.appendChild(element);
// }
// document.getElementById("btnAdd").onclick = function() {
// 	add("text");
// };
