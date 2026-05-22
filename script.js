const socket = io("https://291341c54c40fb15-102-218-51-203.serveousercontent.com");

socket.on('connect', () => {
    console.log('Connected to Bingo Server!');
});

socket.on('new_number', (data) => {
    console.log('Received number:', data.number);
    
    // በገጹ ላይ ያለውን ማንኛውንም በተን ፈልጎ ጽሑፉን ይቀይራል
    const statusText = document.getElementById('status-text');
    if (statusText) {
        statusText.innerText = `🎯 የወጣው ቁጥር፦ ${data.number}`;
    } else {
        const anyButton = document.querySelector('button');
        if (anyButton) {
            anyButton.innerText = `🎯 የወጣው ቁጥር፦ ${data.number}`;
        }
    }

    // ቁጥሩን በሰሌዳው ላይ ምልክት ማድረጊያ
    const cells = document.querySelectorAll('td, .bingo-cell');
    cells.forEach(cell => {
        if (cell.innerText.trim() == data.number) {
            cell.style.backgroundColor = '#ff9800'; 
            cell.style.color = 'white';
        }
    });
});
