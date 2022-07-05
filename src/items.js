const todoItem = (title, description, dueDate, priority, notes, category='default', done=false) => {
    const numberOfItems = (() => {globalInfo.numberOfItems += 1;})();
    let name = "";
    const getName = (() => {name = 'item' + globalInfo.numberOfItems})();
    return {title, description, dueDate, priority, notes, name, category, done};
};

const globalInfo = (() => {
    let numberOfItems = 0;

    return {numberOfItems};
})();



export {todoItem, globalInfo};
