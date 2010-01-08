$(function(){
  var obj= $('pre.eval');
  obj.each(function(){
     var  txt= $(this).html().replace(/<br>/gi,'').replace(/<br \/>/gi,'');
     alert(txt);
     eval(txt);
  })
  SyntaxHighlighter.config.bloggerMode = true;
  SyntaxHighlighter.all();
});
