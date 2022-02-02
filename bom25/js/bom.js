const addButton = document.getElementById('add');
const chapterInput = document.querySelector('#favchap');
const chapterList = document.querySelector('#favlist');



addButton.addEventListener('click', function() {
    favChapter = chapterInput.value
    if (favChapter != '') { 
        let newChapter = document.createElement('li');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        newChapter.textContent = favChapter;
        document.querySelector('#favlist').appendChild(newChapter);
        newChapter.appendChild(deleteButton);
        deleteButton.addEventListener('click', function() {
            document.querySelector('#favlist').removeChild(newChapter);
        })
        chapterInput.focus();
        chapterInput.value = '';

        }
    })
    
