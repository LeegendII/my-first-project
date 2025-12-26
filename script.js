const nameInput = document.getElementById('name-input');
const generateBtn = document.getElementById('generate-btn');
const presentContainer = document.querySelector('.present-container');
const messageContainer = document.querySelector('.message-container');
const personalizedMessage = document.getElementById('personalized-message');
const bubblesContainer = document.querySelector('.bubbles-container');
const inputSection = document.querySelector('.input-section');

generateBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name.trim() !== '') {
        personalizedMessage.textContent = `${name}! My person! How far nah?

I just say make I reach out to you as this year dey wrap up so. You know say no be by power or by might say we still dey gidigba today; na Grace carry us reach here.

I dey wish you the kind celebration wey go sweet your belle reach your bone marrow. Make this season bring plenty jollification, beta food (especially that bottom-pot jollof!), and correct chilling with the people wey you love.

As we dey enter the new year so, I pray say your pocket no go dry. Every hustle wey you start, make God double the alert for your side. No be only work work work make you find time rest, make you laugh out loud, and make you enjoy the fruit of your labor.

Blessings go fall on you like rain. Your house go full of laughter, and any level you dey aim for, you go reach there with ease. No shaking, no tension, only pure vibes and testimony throughout.

Merry Christmas and a Fantastic New Year to you and your complete family! We move!`;
        inputSection.style.display = 'none';
        presentContainer.style.display = 'block';
    }
});

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

const clockElement = document.getElementById('real-time-clock');

function updateClock() {
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

