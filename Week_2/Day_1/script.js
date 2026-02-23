// Save note to localStorage
function saveNote() {
    var note = document.getElementById("noteArea").value;
    localStorage.setItem("myNote", note);
}

// Load note when page refreshes
function loadNote() {
    var savedNote = localStorage.getItem("myNote");
    if (savedNote !== null) {
        document.getElementById("noteArea").value = savedNote;
    }
}

// Clear note from textarea and localStorage
function clearNote() {
    document.getElementById("noteArea").value = "";
    localStorage.removeItem("myNote");
}