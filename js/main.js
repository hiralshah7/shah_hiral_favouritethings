// imports always go at the top of the file
//this is called an IIFE (Inmediatly Invoked Function Expression)
import { getData } from "./modules/dataMiner.js";


// adding the script below : 
(() => {
    console.log('fired!');
    let theTeam = document.querySelector('#fav-section'),
        theTemplate = document.querySelector('#fav-template').content;
    const thebtn = document.querySelectorAll(".btn");



    function buildTeam(data) {
        //get all the keys (names) from the data object and use that to iterate through the data
        // debugger;
        const people = Object.keys(data); // Object.keys creates an array

        people.forEach(prof => {

                // copy the template's contents
                let panel = theTemplate.cloneNode(true);

                // get a reference to the template's elements
                let containers = panel.firstElementChild.children;

                // grab the image from the object and set it as the source
                containers[0].querySelector('img').src = `images/${data[prof].fav_images}`;

                containers[1].textContent = data[prof].favourite;
                containers[2].textContent = data[prof].info;
                containers[3].textContent = data[prof].nickname;

                theTeam.appendChild(panel);

                // adding the button function 
                // debugger;

                function showData() {

                    containers[0].querySelector('img').src = `images/${data[prof].picture}`;
                }



                thebtn.forEach(button => button.addEventListener("click", showData));

            })
            // let Draggable = document.querySelectorAll('#fav_info');


    }



    getData(buildTeam);



})();