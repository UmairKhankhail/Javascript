function validation()
{
var result=true;
var x=document.getElementsByTagName("input");
if(x[0].value.length==0)
  result=false;
return(result);

}