// create a function to export
function getData(callback) {
    console.log(`it's aliiiiveee!`);

    // use the Fetch API to go and get out data
    fetch(`./data.json`) // go retrieve the data from this file or resourse
    // parse the JSON object -> turn it into a plain JS object
    .then(res => res.json()) // res means 'response' -> the data we retrieved 
    // res.json() is a built-in method or function that turns the JSON into a plain object
    .then(data => {
        console.log(data);

        // build out the team conetent on the page
        //  callback is a refrence to the buildTeam function in the main js file
        callback(data);
    })
    // if anything breaks anywhere along the line,catch the error event
    // here and report it to the developer
    .catch(error => console.log(error));
}

export {getData}