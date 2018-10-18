
describe('returnNoteHTML', function(){
  describe('returns a string of a single note',function(){
    function NoteDouble() {}
    noteDouble = new NoteDouble()
    noteDouble.title = 'heading'
    noteDouble.body = 'text'
    var singleNoteView = new SingleNoteView(noteDouble)
    assert.isTrue(singleNoteView.returnNoteHTML() === "<div>heading: text</div>")
  })

  describe('returns a string of a single note',function(){
    function NoteDouble(title,body) {}
    noteDouble = new NoteDouble('heading','text')
    noteDouble.title = 'heading'
    noteDouble.body = 'text is a really short word but i need a longer word'
    var singleNoteView = new SingleNoteView(noteDouble)
    assert.isTrue(singleNoteView.shortenReturnHTML() === "heading: text is a really sh...")
  })

  describe('returns a string of a single note',function(){
    function NoteDouble(title,body) {}
    noteDouble = new NoteDouble('heading','text')
    noteDouble.title = 'heading'
    noteDouble.body = 'text'
    var singleNoteView = new SingleNoteView(noteDouble)
    assert.isTrue(singleNoteView.shortenReturnHTML() === "heading: text")
  })
})
