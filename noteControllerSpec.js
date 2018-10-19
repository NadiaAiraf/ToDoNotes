
describe("NoteController", function() {
  describe('changes the inner HTML of a div', function() {
    var noteController = new NoteController()
    noteController.noteListView.returnHTML = function() { return "<ul><li><a href='#notes/0'>hello</a></li></ul>" }
    noteController.thorMethod();
    var thor = document.getElementById('app');
  })

  describe('changes the note that appears on the page',function(){
    function MockNote() {}
    MockNote.prototype.returnList = function () { return [{body: 'this is the body'}]};
    var mockNote = new MockNote
    var noteController = new NoteController(mockNote)
    noteController.noteListView.returnHTML = function() { return "<ul><li><a href='#notes/0' id='link0'>hello</a></li></ul>" }
    noteController.thorMethod();
    noteController.changeUrlToNote();
      document
        .getElementById('link0')
        .click();
    setTimeout(function(){
        thor = document.getElementById('currentnote')
        assert.isTrue(thor.innerHTML === "this is the body")
    },500);
  })
})
