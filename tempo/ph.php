<!DOCTYPE html>
<html>
  <head>
	<title>form action</title>
  </head>
  <body>
	 <?php

    extract($_POST);

		$connection = mysqli_connect("localhost","root","");

		if(!$connection)
			print("connection Error");


		if(! mysqli_select_db($connection,"rform"))
			print("Database connection error");

		//$query = "INSERT INTO signup('firstname', 'lastname', 'emailid', 'username', 'password', 'confirmpassword', 'age', 'gender', 'country', 'city', 'district', 'street', 'houseno') VALUES('$firstname', '$lastname', '$email', '$user', '$pass', '$confpass', '$age', '$gender', '$country', '$city', '$dist', '$street', '$house')";
    //$query = "INSERT INTO signup VALUES('$firstname', '$lastname', '$email', '$user', '$pass', '$confpass', '$age', '$gender', '$country', '$city', '$dist', '$street', '$house')";
    $query = "INSERT INTO table1(firstname) values('THISISIT')";
		if(mysqli_query($connection,$query))
      print("Success");
		else
			print("Invalid Details");
	?>

</body>
</html>
