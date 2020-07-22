const container = document.querySelector('.container');
console.log(container);

// fetch = function call .then()return a response from the fetch call
fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    console.log(response);
    return response.json();

})
.then(data => {
    // console.log(data);
    // const firstElement = data[0];
    // console.log(firstElement);
    // let capsuleID = firstElement.capsule_id;  // search the id
    // console.log(capsuleID);
    // let details = firstElement.details;
    // console.log(details);
    // let landings = firstElement.landings;
    // console.log(landings);

    for (let i = 0; i <data.length; i++){    //loop for each data which length=19
        let eachCapsule = data[i]; //data[i] is an object
        // console.log(eachCapsule);

        // create an object, grab the below data
        const obj = {
            capsuleID: eachCapsule.capsule_id, //first=dragon1
            details: eachCapsule.details,  //some sentence
            landings: eachCapsule.landings //1
        };
        console.log(obj);

        // create New Element'p'
        const capsuleElement = document.createElement('p');
        capsuleElement.textContent = obj.capsuleID;   //what you want to print out BUT without showing up yet at site

        container.appendChild(capsuleElement);  //print out n show at the website

    }
});