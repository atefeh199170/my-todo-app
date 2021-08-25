import './btn.scss';

export class Button {
    private readonly btn: HTMLButtonElement;

    constructor(text: string, type: 'primary' | 'danger' = 'primary') {
        this.btn = document.createElement('button');
        this.btn.classList.add('btn');
        this.btn.classList.add(type);
        this.btn.innerText = text;
    }

    getHtmlElement(): HTMLButtonElement {
        return this.btn;
    }
}
