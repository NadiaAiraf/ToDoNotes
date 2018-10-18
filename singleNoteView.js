(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype = {
    returnNoteHTML: function () {
      return "<div>" + this.note.title + ": " + this.note.body + "</div>"
    },
    shortenReturnHTML: function() {
      var text =  this.note.body
      if (text.length > 19) {
        return this.note.title + ": " + text.substring(0,19) + '...'
      } else {
        return this.note.title + ": " + text.substring(0,19)
      }
    }
  };


  exports.SingleNoteView = SingleNoteView
})(this)
