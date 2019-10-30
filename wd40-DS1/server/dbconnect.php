<?php

$username = "";
$password = "";
$dbname = "";

$connection = mysqli_connect("localhost" , "$username" , "$password", "$dbname"); //(host,username,password,DB name) Connects to mysql server. Throws error if it cannot connect.

if (!$connection){ //If the connection fails
		echo "<br/> Could not connect. <br/>";
		die(mysql_error()); //Close connection and present error message
} else {
	echo 'Connected successfully';
	mysqli_close($connection);
}

?>
