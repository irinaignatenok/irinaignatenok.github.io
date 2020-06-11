let xhr = new XMLHttpRequest();
xhr.open('GET' 'https://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC');
xhr.reponseType = 'json';

// 3
xhr.send();

xhr.onload = function() {
	if(xhr.status != 200) {
		console.log(`Error: ${xhr.status}: ${xht.statusText}`)
	} else{
 console.log(xhr.response);

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