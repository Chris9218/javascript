import {Person} from "./types";
import {persons} from "./persons";

function populatePersonsList (persons){
    function toListItem({name, city, age}) {
        return `<li class="list-group-item d-flex">
                        <div>${name} ${(city.length > 0) ? `(${city})` : ''}</div>
                        <div class="ms-auto">${age} anni</div></li>`;
    }

    if(persons instanceof Array){
        const ul = document.getElementById("persons-list");

        ul.innerHTML = persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .map(toListItem)
            .join("");

    }

}

function populateOptions(persons){
    if(persons instanceof Array){
        const form = document.forms.item(1);
        const select = form.elements[0];
        const newOptions = persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .map((p) => new Option(p.name, p.name + "-" + p.age + "-" + p.city));
        const firstChild = [select.children[0]];
        const t = firstChild.concat(newOptions);
        select.innerHTML = "";
        t.forEach(i => {
            select.append(i);
        })

    }
}
populatePersonsList(persons.list);
populateOptions(persons.list);

export {populatePersonsList, populateOptions};