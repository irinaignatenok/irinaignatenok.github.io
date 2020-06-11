function getDoc() {
 let xhr = new XMLHttpRequest();
let box = document.getElementById("box");
let random = Math.floor(Math.random() * 100);
let url = "https://swapi.dev/api/people/" + random

 xhr.open('GET', url, true);
 xhr.send();

 xhr.responseType = 'json'; 

 xhr.onprogress = function() {
 	 loadingimg()
 }

 xhr.onload = function() {
	if(xhr.status != 200) {
		const box = document.getElementById("box");
		function remove() {
    document.getElementById("box").innerHTML = "";}
    let text = document.createElement("h3")
    text.innerText = "Oh no!That person isn't available."
    text.setAttribute("style", "font-size: 3em");
    box.appendChild(text)

	} else{
console.log(xhr.response.data);
built(xhr.response, planet.response)
}
}

xhr.onerror = function () {
        console.log("Fail");
    };

    function remove() {
    document.getElementById("box").innerHTML = "";}

loadingimg() {
	const box = document.getElementById("box");
	remove()
	let i = document.createElement("i");
		box.appendChild(i);
		i.setAttribute("class", "fas fa-spinner fa-spin");
		i.setAttribute("style", "font-size:3em;")
	let parag = document.createElement("h3");
	box.appendChild(parag);
	parag.innerHTML = "Loading..."

}

 const built = (arr, link) => {
   	const box = document.getElementById("box");
   		remove()
   		let name = document.createElement("h2");
   		name.innerText = arr.name
   		let height = document.createElement("h4");
   		height.innerText = 'Height: ' + arr.height;
   		let gender = document.createElement("h4");
   		gender.innerText = 'Gender: ' + arr.gender;
   		let birth = document.createElement("h4");
   		birth.innerText = 'Birth Year: ' + arr.birth_year;
   		let home = document.createElement("h4");
   		home.innerText = 'Home World: ' + link.name;


   		box.appendChild(name);
   		box.appendChild(height);
   		box.appendChild(gender);
   		box.appendChild(birth);
   		box.appendChild(home);
   	}
   }
