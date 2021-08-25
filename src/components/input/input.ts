export function Input(placeHolder: string): HTMLInputElement {
    const inputEl: HTMLInputElement = document.createElement('input');
    inputEl.placeholder = placeHolder;

    return inputEl;
}