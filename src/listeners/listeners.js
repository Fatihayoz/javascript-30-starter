/*
First, we write the event listener.
Then write a basic function to see if it is working.
--> By doing this we will see the coordinates in the console while the mouse moves.
Second, we write the handler. We have to export handlers.js to make listener to use it.
--> In the listener part, we have to import what we export in handler.
Third, we also write the querySelector in the handler
Forth, we also write variables in the handler
Fifth, we write a function defining the coordinates in the logic.
Then export it to the handler.

*/

import { shadow } from "../handlers/handlers.js";

const hero = document.querySelector(".hero");

// hero.addEventListener('mousemove', (e) => console.log(e));

hero.addEventListener("mousemove", shadow);
