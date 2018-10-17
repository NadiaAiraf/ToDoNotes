describe('NoteList', function() {
  var noteList = new NoteList;
  describe('starts with empty array', function() {
    assert.isEmpty(noteList.list);
    assert.isArray(noteList.list);
  });

  describe('can create and add a note', function() {
    let note = new Mock('Note', [["body", "message"]]);
    var noteList2 = new NoteList;
    noteList2.createAndStoreNote('message', note)
    assert.isTrue(noteList2.list[0].body === 'message');
  })

  describe('can add a note object', function() {
    var noteList2 = new NoteList;
    var note = new Mock('nothing',[['body','florence']])
    noteList2.addNote(note)
    assert.isTrue(noteList2.list[0].body === 'florence');
    assert.isTrue(noteList2.list.includes(note));
  })
})
