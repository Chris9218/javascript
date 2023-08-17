import {Person} from "./types";
import {persons} from "./persons";


const personCreateForm = document.forms.item(0);
personCreateForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    e.stopPropagation();
    const form = e.target;
    const name = form.elements[0].value;
    const city = form.elements[2].value;
    const age = form.elements[1].value;
    const person = new Person(name, age, city);

    persons.addItemToList(person);

    form.reset();

})

const birthdayForm = document.forms[1];
birthdayForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    const selectedPersonName = e.target.elements[0].value;
    const selectedPerson = persons.list.find(p => (p.name + "-" + p.age + "-" + p.city) === selectedPersonName);
    if (selectedPerson instanceof Person){
        selectedPerson.age++;
        document.dispatchEvent(new Event('listUpdated', {
            bubbles:true
        }));
    }
})

export {personCreateForm, birthdayForm};