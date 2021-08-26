import './createtask.scss';

import {Input} from "../input/input";
import {Textarea} from "../textarea/textareas";
import {ICreateTask} from "../../interfaces/CreateTask.interface";
import {Button} from "../button/button";

export class CreateTask {
    container: HTMLDivElement;

    constructor(formDetail: ICreateTask) {
        this.container = document.createElement('div');
        this.container.classList.add('createtask');

        this.addInput('New Task');
        this.addTextarea('Description',5,400);
        this.addButtons();
    }

    private addButtons(): void {
        const insertBtn = new Button('save', 'primary');
        insertBtn.getHtmlElement();
    }

    private addInput(placeHolder: string): void {
        Input(placeHolder);
    }

    private addTextarea(placeHolder:string, row: number, maxlength:number) :void{
        Textarea(placeHolder, row, maxlength);
    }
    getHtmlElement(): HTMLDivElement {
        return this.container;
    }
}
