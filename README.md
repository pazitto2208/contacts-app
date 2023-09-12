# Wellcome to my Contact App Manager

Before to start: 
- npm install

To start Frontend, open terminal and type: 
- npm run dev

To start Json-server, open a second terminal and type: 
- npm run db

This application is completely functional and you can add, update and delete contacts thanks to json server that simulates backend and allows you to do request by URL, at this case http://localhost:5000.
Icons was added to make it easier to user to recognize its function.

## Add button 
It allows you to add a new contact, by form that contains all fields. You don't have to fill all fields, only that you want. 

## Edit button 
It allows you to update a contact that already exists, by form that contains all fields. Only fields those are edited will be modified on db. 

## Delete button 
It allows you to delete a contact. On click delete button will open a confirm dialog, if you confirm it will be deleted else you will be redirected to contacts page.

## File: db.json
It is simulating database behaviour, you can see, add, edit and delete data on it. Json-server module create routes, as a backend server, those allow you to have all the functionality those you had with backend (example: on NodeJS). Remember to run json-server on a secondary terminal, otherwise data will not be edited.