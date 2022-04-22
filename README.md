For this project, I made a pretty default React application with some components to allow the code to be as scalable as possible and a custom hook named EditorContext that allowed me to expose the values typed in the editor to the footer and the graph component to avoid prop drilling.

Inside EditorContext, there is editorText and a function that changes editorText, this is updated everytime the user types something into the text editor
there is also updateGraph and a function that changes it, this is updated only when the user clicks Generate Chart and copies editorText's values and updates the graph,
this was made because I made the graph update on the onChange property of the graph but it needed to be updated only when Generate Chart was clicked.

Another solution to update the graph only on the Generate Chart click would be to call useRef instead of another variable inside the custom hook.

The user can input a JSON inside the text editor as
{ "name": "NAME", "data": { "X AXIS": Y AXIS VALUE, "X AXIS": Y AXIS VALUE } }

Same values for X AXIS will be grouped and colors for each item will be auto generated.

The user can input up to 1000 characters.

If the user inputs an invalid JSON format there will be a message and the graph will not render.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
