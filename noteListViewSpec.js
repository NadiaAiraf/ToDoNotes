describe("NoteListView", function() {
  describe('has a method that returns a HTML string', function() {
    var note = new Note('florence','is omg is nonononon hahaha nonon hahaha',0)
    var noteList = new NoteList();
    noteList.addNote(note);
    var noteListView = new NoteListView(noteList)
    var text = "<ul><li><a href='#notes/0' id='link0'>Note 1</a> florence: is omg is nonononon...</li></ul>";
    assert.isTrue(noteListView.returnHTML() === text)
  })
})
