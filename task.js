function msg(text, addClass) {
    let messages = document.querySelector( '.chat-widget__messages' );
    let time = new Date().toLocaleTimeString().slice(0,-3);

    messages.innerHTML += `
            <div class="message${addClass}">
                <div class="message__time">${time}</div>
                <div class="message__text">
                ${text}
                </div>
            </div>
        `;
}

const answers = [
    'Давай досвидания!',
    'Ты кто такой!?',
    'Шел вон отсюда!',
    'Закрыто!',
    'Не мешай, я тебя игнорирую...',
    'Мы НИЧЕГО не продаем!',
    'Завтра приходите.',
    'Мне лень, двай потом.',
];

const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

const chatWidgetInput = document.getElementById('chat-widget__input');
chatWidgetInput.addEventListener('keyup', (event) => {
    if ((event.key === 'Enter') && (chatWidgetInput.value)) {
        msg(chatWidgetInput.value);
        msg(answers[Math.floor(Math.random() * answers.length)], ' message_client');
        chatWidgetInput.value = '';
    }
    
});
