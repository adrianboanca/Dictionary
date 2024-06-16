var dictionary = new Set();

function saveWord() {
    var word = document.getElementById('word').value.trim();
        dictionary.add(word);
        document.getElementById('output').innerText += ` 
            ${word}
        `
}

function checkWord() {
    var word = document.getElementById('word').value.trim();
    if (word !== "") {
        if (dictionary.has(word)) {
            alert('Word "' + word + '" is in the dictionary.');
        } else {
           alert('Word "' + word + '" not found in the dictionary.');
        }
    } else {
        alert('Please enter a word.');
    }
}