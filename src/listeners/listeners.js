/*
First, we write the event listener.
Then write a basic function to see if it is working.
--> By doing this we will see the coordinates in the console while the mouse moves.


*/


const hero = document.querySelector('.hero');

// hero.addEventListener('mousemove', (e) => console.log(e));

hero.addEventListener("mousemove", shadow);
