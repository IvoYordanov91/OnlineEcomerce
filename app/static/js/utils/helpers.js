const Helpers = {
    formatDate: (date) => {
        return new Date(date).toLocaleDateString();
    },
    toggleVisibility: (elementId) => {
        const elem = document.getElementById(elementId);
        elem.style.display = (elem.style.display === 'none' ? 'block' : 'none');
    },
    validateEmail: (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    validatePassword: (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
        return regex.test(password);
    },
    validatePhoneNumber: (number) => {
        const regex = /^\+?(\d{1,3})[-\s.]?(\(\d{1,3}\)[-\s.]?|\d{1,3}[-\s.]?)\d{1,4}[-\s.]?\d{1,4}[-\s.]?\d{1,9}$/;
        return regex.test(number);
    }
};
