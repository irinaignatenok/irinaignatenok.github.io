// 1
let xhr = new XMLHttpRequest();
xhr.open('GET' 'https://irinaignatenok.github.io/ajax/data.html' false)

// 3
xhr.send();

xhr.onload = function() {
	if(xhr.status != 200) {
		console.log(`Error: ${xhr.status}: ${xht.statusText}`)
	} else{
console.log(xhr.reponse);
const data = xhr.response;
console.log(data.getElementsByTagName('user')
}
}

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};

