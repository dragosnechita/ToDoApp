export default class ToDoItem {
    constructor() {
        this._id = null;
        this._item = null;
    }

    getId() {
        return this._id;
    }

    setId(itemId) {
        this._id = itemId;
    }

    getItem() {
        return this._item;
    }

    setItem(item) {
        this._item = item;
    }
}