var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex-1].style.display = "flex";
	setTimeout(showSlides, 2000);

}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

function sendMsg() {
	var name = document.getElementById("Name").value;
	var surname = document.getElementById("surname").value;
	var email = document.getElementById("Email").value;
	var phoneNo = document.getElementById("phoneNo").value;
	var text = document.getElementById("text").value;
	const url = "http://localhost:3000";
	var xhttp = new createCORSRequest('POST', url);

	var message = {
		"name": name,
		"surname": surname,
		"email": email,
		"phoneNo": phoneNo,
		"text": text
	}

	message = JSON.stringify(message);

	xhttp.open("POST", "http://localhost:3000", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(message);


}