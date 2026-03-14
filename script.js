document.getElementById("contact-form")
.addEventListener("submit", function(event){

event.preventDefault();

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this
).then(function(){

window.location.href="thankyou.html"

}, function(error){

alert("Failed to send message")

});

});
