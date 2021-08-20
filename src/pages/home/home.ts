import './container.scss';
import {TodoMock} from "../../mock/todo.mock";
import {Todo} from "../../components/todo/todo";
import {createAddBtn, createClearBtn} from "../../components";

export function homePage() {
    const todosContainer = document.createElement('div');
    todosContainer.classList.add('container');

    todosContainer.appendChild(createAddBtn());
    todosContainer.appendChild(createClearBtn());

    TodoMock.forEach(todo => {
        const todoObj = new Todo(todo);
        todosContainer.appendChild(todoObj.getHtmlElement());
    });

    return todosContainer;
}

document.body.appendChild(homePage());
