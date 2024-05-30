// Fetch some JSON data and print the result

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

// This makes a HTTP request to that URL to get the data
// This is asyn and returns a promise

// To run this code in the terminal type
// tsc index.ts
// This will create a index.js file

// Then you can use
// node index.js to run that file

// Or use ts-node index.ts
axios.get(url).then(response => {
    const todo = response.data as ToDo;

    console.log('NeilTest - todo', todo);

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logToDo(id, title, completed)
});

const logToDo = (id:number, title:string, completed:boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}