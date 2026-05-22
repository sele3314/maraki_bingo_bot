const socket = io("https://291341c54c40fb15-102-218-51-203.serveousercontent.com");

socket.on('connect', () => {
    console.log('Connected to Bingo Server!');
});

socket.on('new_number', (data) => {
    const statusText = document.getElementById('status-text');
    if (statusText) {
        statusText.innerText = `የወጣው ቁጥር፦ ${data.number}`;
    }
});
