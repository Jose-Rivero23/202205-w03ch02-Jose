import { Component } from './components';
import { Works } from './items';

export class worksList extends Component() {
    constructor() {
        this.createWorkList();
    }

    createWorkList(works = new Works()) {
        return `
    <li class="worklist_work">
                    <div class"works"> </div>
                </li>

    `;
    }
}
