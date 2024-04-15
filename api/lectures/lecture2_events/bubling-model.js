/**
 * <button class="open-modal-btn">Открыть модальное окно</button>

    <div id="modal">
        <h2>Модальное окно</h2>
        <p>Нажми вне окна, чтобы его закрыть</p>
    </div>
 */

const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('.open-modal-btn');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});


document.addEventListener('mousedown', (event) => {
    if (!modal.contains(event.target) && event.target !== openModalBtn) {
        modal.style.display = 'none';
    }
});