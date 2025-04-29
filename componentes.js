
document.addEventListener("DOMContentLoaded", () => {
    fetch('componentes.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('componentes').innerHTML = data;
        });
    });