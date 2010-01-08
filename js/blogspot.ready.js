$(function(){
  var obj= $('pre.eval');
  if( obj,length >0){
     var  txt= obj.html().replace('<br>','');
     eval(txt);
  }
  SyntaxHighlighter.config.bloggerMode = true;
  SyntaxHighlighter.all();
});
