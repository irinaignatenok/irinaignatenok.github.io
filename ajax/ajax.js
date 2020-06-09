// 1
let xhr = new XMLHttpRequest();
xhr.open('GET' 'https://irinaignatenok.github.io/ajax/data.html' false)

// 3
xhr.send();

xhr.onload = function() {
	if(xhr.status != 200) {
		console.log(`Error: ${xhr.status}: ${xht.statusText}`)
	}
}
console.log(xhr.reponse);

// xhr.onprogress





// xhr.onerror

