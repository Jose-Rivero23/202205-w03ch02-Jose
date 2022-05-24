import { toDoList } from './tareas.js';

function app() {
    console.log(toDoList);
}

() => {
    document.addEventListener('DOMContentLoaded', app);
};
