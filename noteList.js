(function(exports) {
  function NoteList() {
    this.list = [];
    this.noteCount = 0
  }

  NoteList.prototype.createAndStoreNote = function(text, title = 'hello', note = new Note("","",this.noteCount)) {
    note.body = text;
    note.title = title;
    this.list.push(note);
    this.noteCount++;
  }

  NoteList.prototype.addNote = function (note) {
    this.list.push(note)
  };

  // NoteList.prototype.createAndStoreNote = function(text) {
  //   var note = new Note(text)
  //   this.list.push(note);
  // }

  NoteList.prototype.returnList = function () {
    return this.list
  };

  exports.NoteList = NoteList;
})(this);
