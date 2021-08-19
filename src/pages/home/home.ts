import './container.scss';
import {TodoMock} from "../../mock/todo.mock";
import {Todo} from "../../components/todo/todo";

export function homePage() {
    const element = document.createElement('div');

    TodoMock.forEach(todo => {
        const todoObj = new Todo(todo);
        element.appendChild(todoObj.getHtmlElement());
    });

    return element;
}

document.body.appendChild(homePage());
