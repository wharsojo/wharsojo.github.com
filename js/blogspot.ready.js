$(function(){
  var obj= $('pre.eval');
  if( obj,length >0){
     var  txt= obj.html().replace('<br>','');
     alert(txt);
      eval(txt);
  }
  SyntaxHighlighter.config.bloggerMode = true;
  SyntaxHighlighter.all();
});
