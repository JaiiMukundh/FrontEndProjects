const itemsTodo = [];

renderlist();

function renderlist(){

    let todolistHTML = '';

    for(let i=0;i<itemsTodo.length;i++){
        const todoObject = itemsTodo[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button onclick="itemsTodo.splice(${i}, 1); renderlist();" class='delete-button'>Delete</button>
        `;
        todolistHTML+=html;
    }

    console.log(todolistHTML);

    document.querySelector('.js-todo-list')
    .innerHTML=todolistHTML;
}

function addToList(){
    const input = document.querySelector('.js-name-input');
    const value = input.value;

    const dateInputElement = document.querySelector('.js-due-date');
    const dueDate = dateInputElement.value;

    console.log(value);
    itemsTodo.push({
        name: value,
        dueDate: dueDate}
    );
    console.log(itemsTodo);

    input.value = '';
    renderlist();
}