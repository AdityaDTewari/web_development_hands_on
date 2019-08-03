function func1()
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!mailformat.test(myform.emaill.value))
  {
    alert('wrong format must contain @ . only letters and numbers.');
    return false;
  }

  if(myform.passwd.value == "")
  {
    window.alert('password cannot be less than 6 characters.');
    return false;
  }

}
