function func1(){
  var x = document.forms["myform"]["namee"];
  var xx = document.forms["myform"]["nameee"];
  var e = document.forms["myform"]["emails"];
  var ph = document.forms["myform"]["phoneno"];
  var curadd = document.forms["myform"]["curad"];
  
  var numbers = /^[0-9]+$/;
  var alphaExp = /^[a-zA-Z]+$/;

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (x.value == "")
  {
    window.alert('please enter your first name.');
    return false;
  }

  if(!alphaExp.test(x.value))
  {
    window.alert('Please use characters.');
    return false;
  }

  if(!alphaExp.test(xx.value))
  {
    window.alert('Please use characters.');
    return false;
  }

  if (xx.value == "")
  {
    window.alert('please enter your last name.');
    return false;
  }

  if(!mailformat.test(e.value))
  {
    alert('wrong format must contain @ . only letters and numbers.');
    return false;
  }

  if(!numbers.test(ph.value))
  {
    window.alert('enter only numbers in phone number.');
    return false;
  }

  if(ph.value.length<10)
  {
    alert('invalid phone number.');
    return false;
  }

  if(myform.passwd.value == "")
  {
    window.alert('password cannot be less than 6 characters.');
    return false;
  }

  if (myform.curad.value == "")
  {
    window.alert('please enter your address.');
    return false;
  }

  if (myform.pcode.value == "")
  {
    window.alert('please enter the pincode.');
    return false;
  }

  if(!numbers.test(myform.pcode.value))
  {
    window.alert('enter only numbers in pincode.');
    return false;
  }

  if ( ( myform.gender[0].checked == false ) && ( myform.gender[1].checked == false ) )
  {
    window.alert ( "Please choose your Gender: Male or Female." );
    return false;
  }
}
