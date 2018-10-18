(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function () {
    var array = this.noteList.returnList()
    array.length < 1 ? this.noNotes() : ""
    text = "<ul>"
    for (var i = 0; i < array.length; i++) {
      singleNoteView = new SingleNoteView(array[i])
      text = text + "<li><a href='#notes/" + array[i].id + "'>Note " + (array[i].id+1) + "</a> " + singleNoteView.shortenReturnHTML() + "</li>"
     }
    text = text + "</ul>"
    return text
  };

  NoteListView.prototype.noNotes = function () {
    return "No Notes"
  };

  exports.NoteListView = NoteListView
})(this)
