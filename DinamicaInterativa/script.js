document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');

    fetch('https://b3c5-177-91-39-198.ngrok-free.app/api/user', {
        method: "GET",
        headers: {
            'ngrok-skip-browser-warning': true
        }
    }).then(response => {
     response.json().then(user => {
            content.innerHTML = 
               `<p><strong>Nome:</strong> ${user.name}</p>
                <p><strong>Idade:</strong> ${user.age}</p>
                <p><strong>Sobre mim:</strong> ${user.aboutme}</p>`;
        })
    })
});