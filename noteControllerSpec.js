describe("NoteController", function() {
  describe('changes the inner HTML of a div', function() {
    var noteController = new NoteController()
    noteController.thorMethod();
    var thor = document.getElementById('app');
    assert.isTrue(noteListView.returnHTML() === text)
  })
})
