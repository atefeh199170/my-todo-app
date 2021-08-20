import './btn.scss';

function onAddBtnClick() {
    const label = document.getElementById('my-label');

    if (label) {
        label.innerText = 'Updated Text'
    } else {
        window.alert('Div Element Not Exist');
    }
}

export function createAddBtn() {
    const btn = document.createElement('button');

    btn.classList.add('btn');
    btn.innerText = 'Add TODO';

    btn.addEventListener('click', () => {
        onAddBtnClick();
    });

    return btn;
}

function onClearBtnClick() {
    const label = document.getElementById('my-label')!;
    label.innerText = 'Cleared';
}

export function createClearBtn() {
    const btn = document.createElement('button');

    btn.classList.add('btn', 'clear');
    btn.innerText = 'Clear TODO';

    btn.onclick = onClearBtnClick;

    return btn;
}
