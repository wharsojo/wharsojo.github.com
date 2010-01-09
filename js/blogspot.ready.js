$(function(){
  var obj= $('pre.css');
  obj.each(function(){
     var  css= $(this);
     var  txt= css.html().replace(/<br>/gi,'').replace(/<br \/>/gi,'');
     css.parent().prepend(txt);
  })
  
  var obj= $('pre.eval');
  obj.each(function(){
     var  txt= $(this).html().replace(/<br>/gi,'').replace(/<br \/>/gi,'');
     eval(txt);
  })
  SyntaxHighlighter.config.bloggerMode = true;
  SyntaxHighlighter.all();
});
