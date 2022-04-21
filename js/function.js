//Take results from API, clean up undefined later, and append to DOM
function addSearchItem(obj){
  let bookResult = document.querySelector('.bookTitle')
  let stat = document.querySelector('#stats')
  let statNum = obj.docs.length
  let statHolder = document.createElement('span')

  if(stat.innerHTML != '') { 
  stat = ''
  }

  statHolder.innerHTML = `Displaying ${statNum} Book Results`
  stat.append(statHolder)
 
  for(let i = 0; i<obj.numFound;i++){
    let bookTitle = document.createElement('span')
    
    bookTitle.innerHTML = `Title: ${obj.docs[i].title}` 
    // <br>Author: ${obj.docs[i].author_name} <br>Published Year: ${obj.docs[i].first_publish_year} <br> ISBN: ${obj.docs[i].isbn}
    bookResult.append(bookTitle)
  }
}