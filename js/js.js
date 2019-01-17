
var btn = document.querySelector(".hotels-search");
var popup = document.querySelector(".hotels-search-form");


btn.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
});

