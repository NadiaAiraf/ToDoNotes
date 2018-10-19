(function(exports) {
  function NoteController(noteList = new NoteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.thorMethod = function () {
    var thor = document.getElementById('app');
    thor.innerHTML = this.noteListView.returnHTML()
  };

  NoteController.prototype.changeUrlToNote = function () {
    window.noteList = this.noteList
    window.addEventListener("hashchange",function(){
      var noteNumber = location.hash.split('#notes/')[1];
      document
        .getElementById('currentnote')
        .innerHTML = this.noteList.returnList()[noteNumber].body;
    })
  };

  NoteController.prototype.submitHandler = function () {
    document.takeInputAndPutToNote = this.takeInputAndPutToNote
    document.noteList = this.noteList
    document.getElementById('text').addEventListener('submit',function(clickEvent){ console.log(clickEvent.path[4]);})
    document.getElementById('text').addEventListener('submit',function(clickEvent){
      clickEvent.preventDefault();

      title = document.getElementById('noteTitle').value
      body = document.getElementById('noteBody').value
      document.takeInputAndPutToNote(title,body,document.noteList)
      document.noteListView = new NoteListView(document.noteList)
      document
        .getElementById('app')
        .innerHTML =  document.noteListView.returnHTML()
    })

  };

  NoteController.prototype.takeInputAndPutToNote = function (title,body,noteList) {
    noteList.createAndStoreNote(body, title)
  };

  exports.NoteController = NoteController
})(this)
