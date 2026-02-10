var counter = 0;

const button = document.querySelector("button");

button.addEventListener('click', () => {

	counter += 1;
	button.textContent = counter;

});

const addButton = document.querySelector('#add-btn');
const newItemInput = document.querySelector('#new-item-input');
const userList = document.querySelector('#user-list');

addButton.addEventListener('click', () => {
    const newItemValue = newItemInput.value.trim();

    if (newItemValue !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newItemValue;

        userList.appendChild(listItem);

        newItemInput.value = '';
    }
});

