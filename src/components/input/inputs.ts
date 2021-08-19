import './input.scss';

function createAddInput() {
    const input = document.createElement('input');

    input.classList.add('input');
    input.innerText = 'Add TODO';
    return input;
}

document.body.appendChild(createAddInput());
