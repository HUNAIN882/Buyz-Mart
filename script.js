
let registeredUser = null;  
let loggedInUser = null;

const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const userNameSpan = document.getElementById('user-name');

const registerModal = document.getElementById('register-modal');
const loginModal = document.getElementById('login-modal');

const submitRegister = document.getElementById('submit-register');
const submitLogin = document.getElementById('submit-login');

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

loginBtn.addEventListener('click', () => {
    if (!registeredUser) {
        alert("Please register first!");
        return;
    }
    loginModal.style.display = 'flex';
});

submitRegister.addEventListener('click', () => {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    registeredUser = { name, email, password };
    alert("Registration successful! You can now login.");
    registerModal.style.display = 'none';


    document.getElementById('reg-name').value = '';
    document.getElementById('reg-email').value = '';
    document.getElementById('reg-password').value = '';
});

submitLogin.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!registeredUser) {
        alert("Please register first!");
        return;
    }

    if (email === registeredUser.email && password === registeredUser.password) {
        loggedInUser = registeredUser;
        alert("Login successful!");
        loginModal.style.display = 'none';
        userNameSpan.textContent = `Hello, ${loggedInUser.name}`;

        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
    } else {
        alert("Incorrect email or password!");
    }
});

window.addEventListener('click', (e) => {
    if (e.target === registerModal) registerModal.style.display = 'none';
    if (e.target === loginModal) loginModal.style.display = 'none';
});


function openCategory(category) {
    if (!loggedInUser) {
        alert("Please login first!");
        return;
    }

    window.location.href = 'category.html';
}