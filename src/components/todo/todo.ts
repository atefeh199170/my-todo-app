import {createLabel} from "../label/label";
import {ITodo} from "../../interfaces/todo.interface";

export class Todo {
    container: HTMLDivElement;

    constructor(todoDetail: ITodo) {
        this.container = document.createElement('div');
        this.addLabel(todoDetail.label);
    }

    private addLabel(label: string): void {
        createLabel(this.container, label);
    }

    getHtmlElement(): HTMLDivElement {
        return this.container;
    }
}
