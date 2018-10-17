(function(exports) {
  function Note(title, body) {
    this.title = title;
    this.body = body;
  };

  Note.prototype.getBody = function () {
    return this.body;
  };

  exports.Note = Note;
})(this);
