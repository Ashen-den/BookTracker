//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


//Take results from API and append to DOM
function addSearchItem(obj){
  let item = document.querySelector('.findbooks')
  
  for(let i = 0; i<obj.numFound;i++){
    let li = document.createElement('li')
    li.innerHTML = `Title: ${obj.docs[i].title} <br>Author: ${obj.docs[i].author_name} <br> ${obj.docs[i].first_publish_year}`
    item.append(li)
  }

 
}


//Retrieve JSON from openlibrary API
function getFetch(){
  let choice = document.querySelector('input').value
  choice = choice.split(' ').join('+')
  console.log(choice)

  const url = `http://openlibrary.org/search.json?q=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        addSearchItem(data)
        


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// API for ISBN https://openlibrary.org/api/books?
//API for author name https://openlibrary.org/search/authors.json?q=rowling
//&bibkeys=OCLC:#########
//LCCN

//&bibkeys=LCCN:#########
//OLID

//&bibkeys=OLID:OL123M