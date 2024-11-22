// Check if the user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('fivemUsername');
    if (!username) {
        alert('You must log in first!');
        window.location.href = 'index.html';
    } else {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;

        // List available scripts
        const scripts = [
            { id: 1, name: 'Police AI Enhancer', file: 'police-ai.zip' },
            { id: 2, name: 'Realistic Traffic', file: 'realistic-traffic.zip' },
            { id: 3, name: 'Advanced Weapon Mechanics', file: 'weapon-mechanics.zip' }
        ];

        const scriptsList = document.getElementById('scriptsList');
        scripts.forEach(script => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" onclick="requestScript(${script.id}, '${script.file}')">${script.name}</a>`;
            scriptsList.appendChild(li);
        });
    }
});

// Request script delivery via backend
function requestScript(scriptId, file) {
    const username = localStorage.getItem('fivemUsername');
    if (!username) {
        alert('You must log in first!');
        return;
    }

    fetch('https://38.69.12.62:2025/api/request-escrow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, scriptId, file })
    })
    .then(response => {
        if (response.ok) {
            alert('The script has been added to your FiveM account!');
        } else {
            alert('Failed to deliver the script. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to deliver the script. Please try again.');
    });
}
