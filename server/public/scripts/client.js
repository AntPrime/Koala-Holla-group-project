console.log( 'js' );

getKoalas()

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios({
    method: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log('Got koalas', response.data);
   renderKoalas(response.data)
  }).catch(function (error) {
    console.log('error in koalas get', error);
  });
} // end getKoalas

function addKoala(event){
  console.log( 'in addKoala' );
  // axios call to server to get koalas
   event.preventDefault();

    // Get info to send to the server
    const newKoala = {
      name: document.getElementById('nameIn').value,
      age: Number(document.getElementById('ageIn').value),
      favoriteColor:  document.getElementById('colorIn').value,
      readyToTransfer: document.getElementById('readyForTransferIn').value,
      notes: document.getElementById('notesIn').value
     }

    console.log('Adding Koala', newKoala)

    // Send the new koala to the server as data
    axios({
      method: 'POST',
      url: '/koalas',
      data: newKoala
    }).then(function(response) {
      console.log("koalas POST", response.data);
      getKoalas()
    }).catch(function(error) {
      console.log('error in Koala post', error); 
      alert('Error adding koala. I dare you to try again later.')       
    });
}

function renderKoalas(listOfKoalas) {
  // Store selector in variable
  const koalaTableBody = document.getElementById('viewKoalas');

  // Empty previous data
 // koalaTableBody.innerHTML = '';

  // Add all artists to table
  // updated the function to end the } at the end
  for (let koala of listOfKoalas) {
    // let favButton = 'Favorite Me';
    // if( artist.favorite ){
    //   favButton = 'Unfave Me';
  
   koalaTableBody.innerHTML += (`
      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td>${koala.ready_to_transfer}</td>
        <td><button onClick="toggleReadyToTransfer()">Ready for Transfer</td>
        <td>${koala.notes}</td>
      </tr>`
    );
  }
}
