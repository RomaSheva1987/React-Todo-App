## React Todo App

A single-page application with a user-friendly interface that allows users to create, manage and delete his tasks.

# [DEMO LINK](https://romasheva1987.github.io/React-Todo-App/)

# Technologies used
- React
- Hooks (useMemo, useState, useRef, useEffect, useContext), custom hook useLocalStorage
- TypeScript
- JavaScript
- CSS, classNames utility


## Features
- User can create new todos (just need to start typing and press "Enter").
- User can edit an existing todo: 
    - change description by double-click on todo with the left mouse button. For changes to be applied, press "Enter" or click on an empty area of the page. Also, if the field is empty after changing the todo, this todo will be deleted. Use the "Escape" button to cancel changes.
    - change status by clicking on the checkbox button. User can also mark all todos as "Completed" or "Active" by clicking the appropriate button.
- User can delete todo by clicking on the delete button (X) next to the todo or by clicking "Clear completed" to delete all completed todos.
- User can filter todos based on their status (e.g., completed, active) using a filter option.
- All changes are saved in the local storage.

## Installing and running the project
- Fork and clone this repository
- Run npm install
- Run npm start
