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
