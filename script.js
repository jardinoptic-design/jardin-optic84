function scrollToReservation() {
  document.getElementById("reservation").scrollIntoView({
    behavior: "smooth"
  });
}

function sendWhatsApp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let message = document.getElementById("message").value;

  let text = `Bonjour, je souhaite réserver:\nNom: ${name}\nTéléphone: ${phone}\nDate: ${date}\nMessage: ${message}`;

  let url = `https://wa.me/212660877648?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
function buyNow(product, image) {
  let phone = "212660877648";

  let fullImage = window.location.origin + "/" + image;

  let message = `Bonjour, je veux commander ${product} 
Voici la photo: ${fullImage}`;

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}