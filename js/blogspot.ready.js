$(function(){
  var obj= $('pre.eval');
  obj.each(function(){
     eval($(this).html().replace(/<br>/gi,''));
  });
  
  var obj= $('div.demo');
  obj.each(function(){
     var  dmo= $(this);
     dmo.html(dmo.html().replace(/<br>/gi,''));
  });
  
  var obj= $('pre.css');
  obj.each(function(){
     var  css= $(this);
     var  txt= css.html().replace(/<br>/gi,'');
     css.parent().prepend('<style>'+txt+'</style>');
  });
  
  SyntaxHighlighter.config.bloggerMode = true;
  SyntaxHighlighter.all();
});
