//Get user search results and append to DOM
export const getSearchResult = async function(){
  const userSearch = getSearchValue();
  const userRequestString = queryURL(userSearch);
  const storeData = await getData(userRequestString);
  let dataArray = []
  if(storeData.hasOwnProperty("docs")){
    dataArray = showResult(storeData)
  }
  return dataArray
}

//Retrieve user search text from search form
export const getSearchValue = function(){
  const searchValue = document.querySelector('input').value.trim();
  const searchBookValue = searchValue.split(' ').join('+');
  return searchBookValue
}

//Create Div and add to searchResult Div
export const createResult = function (data){
  const resultDiv = document.querySelector('.searchResult')
  const addBookDiv = document.createElement('div')
  addBookDiv.classList.add('resultItem')
  addBookDiv.append(addBook());
  resultDiv.append(addBookDiv)
}

//Create query URL to OpenLibrary API
const queryURL = function(searchValue) {
  const url = `http://openlibrary.org/search.json?q=${searchValue}`
  return url
}

//Retrieve JSON from openlibrary API
const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// Input data into DOM
const showResult = function(data) {
  let dataArray = []
  data.docs.forEach((e)=> {
    const key = e.key
    const title = e.title
    const author = e.author_name
    const year = e.first_publish_year
    const isbn = e.isbn
    const store = {
      key : key,
      title : title,
      author : author,
      year : year,
      isbn : isbn,
    }
    dataArray.push(store)
  }
  )
  return dataArray
}

//Add book item and title div
export const addBook = function(data){
  let addTitleDiv = document.createElement('div')
  addTitleDiv.classList.add('bookTitle')
  let addTitleSpan = document.createElement('span')
  let addTitleContent = addTitleSpan.textContent = "hello?"
  addTitleDiv.append(addTitleContent)
  return addTitleDiv
}


//Add book info
// const inputDOM = function(){
//   let currentInfoDiv = `bookInfo${i}`
//   const addTextDiv = document.createElement('div').classList.add(currentInfoDiv)
//   const addTextSpan = document.createElement('span')
//   appendDiv.append(addTextDiv)
//   return appendDiv


  // document.querySelector(currentBookDiv).append(addTitleSpan)
  // document.querySelector(currentInfoDiv).append(addTextSpan)

