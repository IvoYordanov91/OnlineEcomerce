const myHeaders = {
    'Content-Type': 'application/json'
};

const API = {
    getProducts: () => {
        return fetch('api/products')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error getting product list:', error));
    },
    createUser: (userData) => {
        return fetch('/api/users/register/', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error creating user:', error));
    },
    deleteUser: (userSessionID) => {
        return fetch(`/api/users/delete/${userSessionID}`, {
            method: 'DELETE',
            headers: myHeaders
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error deleting user:', error));
    },
    updateUser: (userSessionID, userData) => {
        return fetch(`/api/users/update/${userSessionID}`, {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error updating user:', error));
    },
    verifyUser: (userResponse) => {
        return fetch('/api/users/verify', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(userResponse)
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error verifying user:', error));
    },
    loginUser: (username, password) => {
        return fetch('/api/users/login', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({username, password})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Login failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Login successful', data);
            return data;
        })
        .catch(error => {
            console.error('Error during login:', error);
            return error;
        });
    },
    newsletterSubscribe: (email) => {
        return fetch('/api/newsletter/subscribe/', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({email})
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error subscribing for newsletter updates', error))
    },
    newsletterUnsubscribe: (email) => {
        return fetch(`/api/newsletter/unsubscribe/${email}`, {
            method: 'DELETE',
            headers: myHeaders,
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error un-subscribing from newsletter:', error));
    },
    contactFormSubmit: (prospectData) => {
        return fetch('/api/contactForm/submit', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(prospectData)
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error submitting contact data:', error));
    },
};

