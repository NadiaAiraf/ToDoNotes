describe("NoteListView", function() {
  describe('has a method that returns a HTML string', function() {
    var note = new Note('florence','is omg is nonononon hahaha nonon hahaha',0)
    var noteList = new NoteList();
    noteList.addNote(note);
    // var noteList = new Mock('can we please not do that at first',[['returnList',{heading: 'florence',text: 'is omg is nonononon hahaha nonon hahaha'}]])
    var noteListView = new NoteListView(noteList)
    var text = "<ul><li><a href='#notes/0'>Note 1</a> florence: is omg is nonononon...</li></ul>";
    assert.isTrue(noteListView.returnHTML() === text)
  })
})
