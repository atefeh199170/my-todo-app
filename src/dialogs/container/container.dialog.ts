import './container.dialog.scss';

export class ContainerDialog {
    wrapper: HTMLDivElement;
    backdrop: HTMLDivElement;
    dialogContainer: HTMLDivElement;

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('dialog-wrapper');

        this.backdrop = document.createElement('div');
        this.backdrop.classList.add('backdrop');
        this.wrapper.appendChild(this.backdrop);

        this.backdrop.addEventListener('click', () => this.removeDialog());

        this.dialogContainer = document.createElement('div');
        this.dialogContainer.classList.add('dialog-container');
    }

    addDialog(dialog: HTMLDivElement): void {
        this.dialogContainer.appendChild(dialog);
        this.wrapper.appendChild(this.dialogContainer);
    }

    removeDialog(): void {
        document.body.removeChild(this.wrapper);
    }

    showDialog(): void {
        document.body.appendChild(this.wrapper);
    }
}
