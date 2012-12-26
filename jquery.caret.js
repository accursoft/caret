(function($) {
  $.fn.caret = function(pos) {
    var target = this[0];
    //get
    if (arguments.length == 0) {
      //HTML5
      if (target.selectionStart)
        return target.selectionStart;
      //IE<9
      if (document.selection) {
        target.focus();
        var range1 = document.selection.createRange();
        var range2 = document.body.createTextRange();
        range2.moveToElementText(target);
        range2.setEndPoint('EndToEnd', range1);
        return range2.text.length;
      }
      //not supported
      return 0;
    }
    //set
    //HTML5
    if (target.setSelectionRange)
      target.setSelectionRange(pos, pos);
    //IE<9
    else if (target.createTextRange) {
      var range = target.createTextRange();
      range.moveStart('character', pos);
      range.collapse(true);
      range.select();
    }
  }
})(jQuery)