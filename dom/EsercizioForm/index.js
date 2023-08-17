import {persons} from "/persons.js";
import {populatePersonsList, populateOptions} from "/populatepersonlist.js";
//import {personCreateForm, birthdayForm} from "./personcreate";




document.addEventListener("listUpdated", () => {
    populatePersonsList(persons.list);
    populateOptions(persons.list);
})