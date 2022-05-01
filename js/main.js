import { getSearchResult, createResult} from "./searchresults.js"

//Event Listeners
function loadEventListeners(){
document.querySelector('button').addEventListener('click', evaluateResults)
}

const evaluateResults = async function(){
  const searchResult = await getSearchResult()
  
    createResult(searchResult)
  
  console.log(searchResult)
} 

loadEventListeners()









// //Take results from API, clean up undefined later, and append to DOM
// function addSearchItem(obj){
//   let bookResult = document.querySelector('.bookTitle')
//   let stat = document.querySelector('#stats')
//   let statNum = obj.docs.length
//   let statHolder = document.createElement('span')

//   if(stat.innerHTML != '') { 
//   stat = ''
//   }

//   statHolder.innerHTML = `Displaying ${statNum} Book Results`
//   stat.append(statHolder)
 
//   for(let i = 0; i<obj.numFound;i++){
//     let bookTitle = document.createElement('span')
    
//     bookTitle.innerHTML = `Title: ${obj.docs[i].title}` 
//     // <br>Author: ${obj.docs[i].author_name} <br>Published Year: ${obj.docs[i].first_publish_year} <br> ISBN: ${obj.docs[i].isbn}
//     bookResult.append(bookTitle)
//   }
// }

// function addSearchItem(obj){
//   let item = document.querySelector('.findbooks')
  
  
//   for(let i = 0; i<obj.numFound;i++){
//     let li = document.createElement('li')
    
//     li.innerHTML = `Title: ${obj.docs[i].title} <br>Author: ${obj.docs[i].author_name} <br>Published Year: ${obj.docs[i].first_publish_year} <br> ISBN: ${obj.docs[i].isbn}`
//     item.append(li)
//   }
// }


//Retrieve JSON from openlibrary API
// function getFetch(){
//   let choice = document.querySelector('input').value
//   choice = choice.split(' ').join('+')
//   console.log(choice)

//   const url = `http://openlibrary.org/search.json?q=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         addSearchItem(data)
        


//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// API for ISBN https://openlibrary.org/api/books?
//API for author name https://openlibrary.org/search/authors.json?q=rowling
//&bibkeys=OCLC:#########
//LCCN

//&bibkeys=LCCN:#########
//OLID

//&bibkeys=OLID:OL123M