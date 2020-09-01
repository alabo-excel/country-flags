var country = document.getElementById('name');
var search = document.getElementById('search');


search.addEventListener('click', () => {
    var content = country.value;
    var flag = document.getElementById('flag').innerHTML = `
    <div class="m-auto d-flex justify-content-center">
    <img src="https://www.countryflags.io/${content}/flat/64.png">
    </div>
    
    `


})