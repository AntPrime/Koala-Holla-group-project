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
  // event.preventDefault();

    // Get info to send to the server
    const newKoala = {
      name: document.getElementById('nameIn').value,
      favoriteColor:  document.getElementById('colorIn').value,
      age: Number(document.getElementById('ageIn').value),
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
      console.log('error in song post', error); 
      alert('Error adding koala. Please try again later.')       
    });
}

function renderKoalas(listOfKoalas) {
  // Store selector in variable
  const koalaTableBody = document.getElementById('viewKoalas');

  // Empty previous data
  //koalaTableBody.innerHTML = '';

  // Add all artists to table
  for(let koala of listOfKoalas) {
    // let favButton = 'Favorite Me';
    // if( artist.favorite ){
    //   favButton = 'Unfave Me';
    }
   koalaTableBody.innerHTML += (`
      <tr>
        <td>${koala.name}</td>
        <td></td>
        <td></button></td>
      </tr>`
    );
  }

