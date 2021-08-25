import './todo.scss';

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
        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('actions');
        this.container.appendChild(actionsContainer);

        const completeBtn = new Button('Done');
        const deleteBtn = new Button('Remove', 'danger');

        actionsContainer.appendChild(deleteBtn.getHtmlElement());
        actionsContainer.appendChild(completeBtn.getHtmlElement());
    }

    private addLabel(label: string): void {
        createLabel(this.container, label);
    }

    getHtmlElement(): HTMLDivElement {
        return this.container;
    }
}
