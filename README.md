This webapp is used as a university project. It main functionality is to show my ability to create my own web applications. One could use this app, as a basic reminder, where one can update and delete items, which will be shared with everyone else using this app.

SE19-api is the api for the frontend found in se19-webapp - https://github.com/NateCode98/se19-webapp.<br>
It main functionality is to handle data from the frontend, and pass it to the database and back.<br>
One has to change the .env file; pointing to the personally owned database. <br>

## Change Mongo Atlas URI

Connect your own database.<br>
Change the Atlas URI within the .env file.

## Available Scripts

In the project directory, you can run:

### `npm install -g nodemon`

When you make edits, this will reload the script & consequently the pages.<br />
You will also see any lint errors in the console.

### `nodemon server`

Starts the server on local host.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
