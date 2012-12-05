(function($) {
  $.fn.caret = function(pos) {
    var target = this[0];
    //get
    if (arguments.length == 0) {
      if (target.selectionStart) { //HTML5
        var pos = target.selectionStart;
        return pos > 0 ? pos : 0;
      }
      else if (target.createTextRange) { //IE<9
        target.focus();
        var range = document.selection.createRange();
        if (range == null)
            return '0';
        var re = target.createTextRange();
        var rc = re.duplicate();
        re.moveToBookmark(range.getBookmark());
        rc.setEndPoint('EndToStart', re);
        return rc.text.length;
      }
      else return 0; //not supported
    }
    //set
    if (target.setSelectionRange) //HTML5
      target.setSelectionRange(pos, pos);
    else if (target.createTextRange) { //IE<9
      var range = target.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
})(jQuery)