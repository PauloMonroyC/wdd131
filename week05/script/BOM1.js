
//sekect elements from the DOM
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});



//wait for button clicks
buttonElement.addEventListener('click', function () {
// Check if the user enterd something
    if (inputElement.value != "") {

      displayList(inputElement.value);
      chaptersArray.push(inputElement.value);
      setChapterList();
      inputElement.value = '';
      inputElement.focus();
    }
});


function displayList(item) {
  // create list item and give it the value of the input
  let li = document.createElement('li');
  // create a button and add a click event listener
  const deletBtn = document.createElement("button");
  li.textContent = item;
  deletBtn.textContent ="❌";
  deletBtn.classList.add('delete');
  li.append(deletBtn);
  listElement.append(li);
  deletBtn.addEventListener("click", function () {
    listElement.removeChild(li);
    deleteChapter(item);
    inputElement.focus();
  });
  
  console.log('I dont like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {

  chaptersArray = chaptersArray.filter(
    item => item !== chapter
  );

  setChapterList();

}
