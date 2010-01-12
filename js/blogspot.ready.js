$(function(){
  var rgx= /<br>/gi;
  $('div.demo').each(function(){
     var  dmo= $(this);
     dmo.html(dmo.html().replace(rgx,''));
  });
  
  $('pre.css').each(function(){
     var  css= $(this);
     var  txt= css.html().replace(rgx,'');
     css.parent().prepend('<style>'+txt+'</style>');
  });
  
  var scp= '';
  $('pre.eval').each(function(){
     scp+= $(this).html().replace(rgx,'').replace(/&gt;/gi,'>');
  });
  alert(scp);
  eval(scp);
  SyntaxHighlighter.config.bloggerMode = true;
  SyntaxHighlighter.all();
});
