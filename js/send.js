const botToken = '5910929545:AAEbngSaMjvtuzTFluUJJgmQPjYjpAJi3Lw';
const chatId = '2091107961';

function sendtelegram() {
    const username = document.getElementById('form-username').value;
    const phone = document.getElementById('form-phone').value;
    const message = `<b>❗Данные нового пользователя</b> \n\n<b>📌 Имя:</b> <code>${username}</code> \n<b>🔒 Телефон:</b> <code>${phone}</code>`;
    const encodedMessage = encodeURIComponent(message);
  
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodedMessage}`);
}