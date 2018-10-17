(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function () {
    var array = this.noteList.returnList()
    array.length < 1 ? this.noNotes() : ""
    text = "<ul>"
    for (var i = 0; i < array.length; i++) {
      text = text + "<li>" + array[i].title + ": " + array[i].body + "</li>"
     }
    text = text + "</ul>"
    return text
  };

  NoteListView.prototype.noNotes = function () {
    return "No Notes"
  };

  exports.NoteListView = NoteListView
})(this)
