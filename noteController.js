(function(exports) {
  function NoteController(noteList = new NoteList) {
    this.noteList = noteList
    // this.noteList.createAndStoreNote('Lemonade', 'Favourite Drink')
    // this.noteList.createAndStoreNote('Pasta', 'Favourite Food')
    // this.noteList.createAndStoreNote('well in terms of playing it has to be tennis.', 'Favourite sport')
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.thorMethod = function () {
    var thor = document.getElementById('app');
    thor.innerHTML = this.noteListView.returnHTML()
  };

  NoteController.prototype.changeUrlToNote = function () {
    window.addEventListener("hashchange",function(){
      var noteNumber = location.hash.split('#notes/')[1];
      document
        .getElementById('currentnote')
        .innerHTML = this.noteList.returnList()[noteNumber].body;
    })
  };

  exports.NoteController = NoteController
})(this)
