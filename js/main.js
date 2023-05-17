// Popup Menu
const mainBtns = document.querySelectorAll('.buttons');
const popupOverlay = document.getElementById('popup-overlay');
const popupCloseBtn = document.getElementById('popup-close-btn');

mainBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        popupOverlay.style.display = 'grid';
    });
});

popupCloseBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});