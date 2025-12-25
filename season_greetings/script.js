const presentContainer = document.querySelector('.present-container');
const messageContainer = document.querySelector('.message-container');
const bubblesContainer = document.querySelector('.bubbles-container');

presentContainer.addEventListener('click', () => {
    presentContainer.style.display = 'none';
    messageContainer.style.display = 'flex';
    createBubbles();
});

function createBubbles() {
    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 60 + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.bottom = `-${size}px`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubblesContainer.appendChild(bubble);
        bubble.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;

        setTimeout(() => {
            bubble.remove();
        }, 10000);
    }, 500);
}
