
// var note = new Note('Greeting','Hello Florence')
// var note2 = new Note('Greeting2', 'Hello Aidan')
// var noteList = new NoteList()
// noteList.addNote(note)
// noteList.addNote(note2)
// var noteListView = new NoteListView(noteList)
//
// thor.innerHTML = notelistview.returnHTML

(function(exports) {
  function NoteController(noteList = new NoteList) {
    this.noteList = noteList
    this.noteList.createAndStoreNote('Lemonade', 'Favourite Drink')
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.thorMethod = function () {
    var thor = document.getElementById('app');
    thor.innerHTML = this.noteListView.returnHTML()
  };


  exports.NoteController = NoteController
})(this)

var a = new NoteController();
a.thorMethod();
