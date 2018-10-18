(function(exports) {
  function Note(title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id
  };

  Note.prototype.getBody = function () {
    return this.body;
  };

  exports.Note = Note;
})(this);
