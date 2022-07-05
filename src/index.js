//import { todoItem, globalInfo } from "./items";

function addListItem() {
    let previousListItem = document.getElementById("mainList");
    let container = document.createElement('div');
    let input = document.createElement('input');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');

    container.classList.add('list-item');
    input.classList.add('listitem-input');
    span1.classList.add('material-symbols-outlined');
    span2.classList.add('material-symbols-outlined');
    span3.classList.add('material-symbols-outlined done');
};


document.getElementById('add-listitem').addEventListener('click', addListItem);

