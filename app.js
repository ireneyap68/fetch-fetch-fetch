const body = document.querySelector('body');


fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
.then(response => {
    // console.log(response); // print out the objs{}
    return response.json();
})

.then(data => {
    console.log(data);
    // set a variable sprites here to get what you want and test consolelog each 
    let sprites = data.sprites;
    //console.log(sprites);
    let profilePic = sprites.front_default;
    //console.log(profilePic);
    let pokeName = data.name;
    //console.log(pokeName);
    let height = data.height;
    let weight = data.weight;
    //console.log(height);
    let moves = data.moves;
    //console.log(moves);
    let solarBeam = data.moves[23].move.name;
    //console.log(solarBeam);
    let type = data.types[0].type.name;
    //console.log(type); 

    //CREATE A CARD setup
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    console.log(card);

    // create image refer to getbootstrap
    const image = document.createElement('img');
    image.src = profilePic;
    image.classList.add('card-img-top');
    image.alt = pokeName;
    console.log(image);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    console.log(cardBody);

    let firstLetter = pokeName.charAt(0).toUpperCase();  // ewtwo which start from letter 2
    let otherLetters = pokeName.slice(1);
    let finalName= firstLetter + otherLetters;
    //console.log(finalName);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = finalName;
    console.log(cardTitle);

    const cardWeight = document.createElement('p');
    const cardHeight = document.createElement('p');
    const cardMove = document.createElement('p');
    const cardType = document.createElement('p');

    cardWeight.classList.add('card-text');
    cardHeight.classList.add('card-text');
    cardMove.classList.add('card-text');
    cardType.classList.add('card-text');

    cardWeight.textContent = 'Weight: ' + weight;
    cardHeight.textContent = 'Height: ' + height;
    cardMove.textContent = 'Move: ' + solarBeam;
    cardType.textContent = 'Type: ' + type;

    console.log(cardWeight);
    console.log(cardHeight);
    console.log(cardMove);
    console.log(cardType);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardMove);
    cardBody.appendChild(cardType);
    
    console.log(cardBody)

    card.appendChild(image);
    card.appendChild(cardBody);
    console.log(card);

    body.appendChild(card);

});

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
