export class Book {
    constructor({id, name, price = 0, provider = ""}) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._provider = provider;
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get price() { return this._price; }
    get provider() { return this._provider; }

    set id(id) { this._id = id; }
    set name(name) { this._name = name; }
    set price (price) { this.price = price; }
    set provider(provider) { this._provider = provider; }
}