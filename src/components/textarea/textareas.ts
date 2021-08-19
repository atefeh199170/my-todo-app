import './textarea.scss';

function createAddTextarea() {
    const textarea = document.createElement('textarea');

    textarea.classList.add('textarea');
    return textarea;
}

document.body.appendChild(createAddTextarea());
