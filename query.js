var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');
var nama = document.querySelector('#nama')


document.querySelector('body').onload = function () {
	if (name != null && name != '') {
		nama.innerHTML = name
	} else {
		nama.innerHTML = "Aan Suseno"
	}
}