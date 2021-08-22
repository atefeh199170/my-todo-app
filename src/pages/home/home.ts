import './container.scss';
import {TodoMock} from "../../mock/todo.mock";
import {Todo} from "../../components/todo/todo";
import {Button} from "../../components/button/button";

export function homePage() {
    const todosContainer = document.createElement('div');
    todosContainer.classList.add('container');

    const addBtn = new Button('Add', 'primary');
    const deleteBtn = new Button('Delete All', 'danger');

    todosContainer.appendChild(addBtn.getHtmlElement());
    todosContainer.appendChild(deleteBtn.getHtmlElement());

    TodoMock.forEach(todo => {
        const todoObj = new Todo(todo);
        todosContainer.appendChild(todoObj.getHtmlElement());
    });

    return todosContainer;
}

document.body.appendChild(homePage());
