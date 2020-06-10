let xhr = new XMLHttpRequest();
xhr.open('GET' 'https://jsonplaceholder.typicode.com/users' true);
xhr.reponseType = 'json';

// 3
xhr.send();

xhr.onload = function() {
	if(xhr.status != 200) {
		console.log(`Error: ${xhr.status}: ${xht.statusText}`)
	} else{
 console.log(JSON.parse(xhr.response));

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