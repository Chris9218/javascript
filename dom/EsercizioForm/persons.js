import {Person} from "./types";

const persons = {
    list: [
        new Person("Klaus", 41),
        new Person("Walter", 45, "Hamburg"),
        new Person("Susi", 39, "Hamburg"),
        new Person("Antonio", 20, "Milano")
    ],
    addItemToList : function (item) {
        this.list.push(item);
        document.dispatchEvent(new Event('listUpdated', {
            bubbles:true
        }));
    },
    getlist : function () {
        return [...this.list];

    }
}

export {persons};