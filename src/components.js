export class Component {
    template;
    render(selector) {
        if (document.querySelector(selector) !== null) {
            document.querySelector(selector).innerHTML = this.template;
        }
    }
}
