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

//Delete old search results
export const deleteOldResults = function(){
  const parent = document.querySelector('.searchResult')
  let childElement = parent.lastElementChild; 
  while(childElement){
    parent.removeChild(childElement);
    childElement = parent.lastElementChild;
  }
}

//Retrieve user search text from search form
const getSearchValue = function(){
  const searchValue = document.querySelector('input').value.trim();
  const searchBookValue = searchValue.split(' ').join('+');
  return searchBookValue
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

// Store data as an array with default values for undefined keys
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
      author : author ?? 'unknown',
      year : year ?? 'unknown',
      isbn : isbn ?? 'unknown',
    }
    dataArray.push(store)
  }
  )
  return dataArray
}

//Create Div and add to searchResult Div
export const createResult = function (data){
  for(let i=0; i<data.length; i++){
  const resultDiv = document.querySelector('.searchResult')
  const addBookDiv = document.createElement('div')
  addBookDiv.classList.add('resultItem')
  addBookDiv.append(addBookTitle(data[i]));
  addBookDiv.append(addBookInfo(data[i]));
  resultDiv.append(addBookDiv)
  }
}

//Create book item and add book title and add book info
const addBookTitle = function(data){
  let addTitleDiv = document.createElement('div')
  addTitleDiv.classList.add('bookTitle')
  let addTitleSpan = document.createElement('span')
  addTitleSpan.textContent = `${data.title}`
  addTitleDiv.append(addTitleSpan)
  return addTitleDiv
}

// Create bookInfo 
const addBookInfo = function(data){
  // let cleanData = limitCharacters(data)
  // // console.log(cleanData)
  let addInfoDiv = document.createElement('div')
  addInfoDiv.classList.add('BookInfo')
  let addParagraph = document.createElement('p') 
  addParagraph.innerHTML = `Author: ${data.author}<br>Year: ${data.year}<br>ISBN: ${data.isbn}<br>Key: ${data.key}`
  addInfoDiv.append(addParagraph)
  return addInfoDiv
}

// reduce the size of a string down to fit HTML better
// const limitCharacters = function(data){
//   console.log(data)
//   let splitData = {}
//   data.author.length > 3 ?  = data.author.slice(0,40) + '...' : data.author; 
//   typeof data.isbn === 'string' ? data.isbn.split('').slice(0,3) : data.isbn
//   // splitData.length > 3 ? data.isbn.slice(0,3) + '...' : data.isbn;
// }

