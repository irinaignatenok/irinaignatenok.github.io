let xhr = new XMLHttpRequest();
xhr.open('GET' 'https://jsonplaceholder.typicode.com/users' true)
xhr.reponseType = 'json';

// 3
xhr.send();

xhr.onload = function() {
	if(xhr.status != 200) {
		console.log(`Error: ${xhr.status}: ${xht.statusText}`)
	} else{
built(xhr.response)
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
const built = (arr) => {
const root = document.getElementById('root');
arr.forEach((item, i) => {
	let div = document.createElement('div');
	let h1 = document.createElement('h1');
	let h2 = document.createElement('h2');
	let img = document.createElement('img');

	h1.innerText = item.name;
	h2.innerText = item.company.name;
	img.setAttribute('src', `https://robohash.org/${item.id}?200x200`)

	div.appendChild(h1);
	div.appendChild(h2);
	root.appendChild(div);



})
}





