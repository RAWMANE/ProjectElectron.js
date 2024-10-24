const { ipcRenderer } = require('electron');

const userFormModal = document.getElementById('user-form-modal');
const addUserBtn = document.getElementById('add-user-btn');
const userForm = document.getElementById('user-form');
const cancelBtn = document.getElementById('cancel-btn');
const userList = document.getElementById('user-list');

addUserBtn.addEventListener('click', () => {
    userFormModal.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
    userFormModal.classList.add('hidden');
});

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newUser = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
    };

    ipcRenderer.send('add-user', newUser);

    userFormModal.classList.add('hidden');
    userForm.reset();
});

ipcRenderer.on('new-user', (event, user) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
    `;
    userList.appendChild(newRow);
});