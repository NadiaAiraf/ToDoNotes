
describe("NoteController", function() {
  describe('changes the inner HTML of a div', function() {
    var noteController = new NoteController()
    noteController.noteListView.returnHTML = function() { return "<ul><li>hello</li></ul>" }
    noteController.thorMethod();
    var thor = document.getElementById('app');
    assert.isTrue(thor.innerHTML === '<ul><li>hello</li></ul>')
  })
})
