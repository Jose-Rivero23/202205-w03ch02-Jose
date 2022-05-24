export class Works {
    id;
    name;
    resp;
    isCompleted;

    constructor(id = 0, name = '', resp = '') {
        this.id = id;
        this.name = name;
        this.resp = resp;
        this.isCompleted = false;
    }
}
