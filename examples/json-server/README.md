# Workshop Fetch

The idea of this workshop is to complete the necessary code to make the application work correctly using the services that call an API

## Steps:

> All of the following steps require you to complete the character services file `src/services/characters.js`

1. List the characters on the home page. The `<CharacterCard />` component must receive the information as props
2. Each of these characters must send me to the detail page where I must show all the information of the character
3. List the characters in the character page from the service and dynamically paint the `<CharacterCard />` component
4. On the page to create a new character, you must capture the information from the form and then complete it before sending it to the service that is responsible for creating it in the database.
5. On the character detail page, you must add a button that allows you to delete the current character by calling the corresponding service.

### Developing

1. Run `npm install` to install dependencies.

2. Run `npm run dev` to start the development server.
