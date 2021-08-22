import {createLabel} from "../label/label";
import {ITodo} from "../../interfaces/todo.interface";
import {Button} from "../button/button";

export class Todo {
    container: HTMLDivElement;

    constructor(todoDetail: ITodo) {
        this.container = document.createElement('div');
        this.container.classList.add('todo');

        this.addLabel(todoDetail.label);
        this.addButtons();
    }

    private addButtons(): void {
        const completeBtn = new Button('Done');
        const deleteBtn = new Button('Remove', 'danger');

        this.container.appendChild(deleteBtn.getHtmlElement());
        this.container.appendChild(completeBtn.getHtmlElement());
    }

    private addLabel(label: string): void {
        createLabel(this.container, label);
    }

    getHtmlElement(): HTMLDivElement {
        return this.container;
    }
}
