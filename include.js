//fonction pour inclure des fichiers HTMLfunction includeHTML() {
function includeHTML() {     
    let elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        let file = el.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => el.innerHTML = data)
            .catch(error => console.error('Error including HTML:', error));
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);