import './textarea.scss';

export function Textarea(placeHolder:string, row: number, maxlength:number):HTMLTextAreaElement {
    const textareaEl = document.createElement('textarea');
    textareaEl.classList.add('textarea');
    textareaEl.placeholder = placeHolder;
    textareaEl.rows = row;

    return textareaEl;
}


