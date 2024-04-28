const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    trapFocus(modal);
};

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    restoreFocus();
};

const setupModalListeners = () => {
    const closeButtons = document.querySelectorAll('.modal-close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeModal(this.closest('.modal').id);
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });
};

document.addEventListener('DOMContentLoaded', setupModalListeners);
