<?php
    session_start();

    if(isset($_POST['check_email'])) {
        include("db_connect.php");

        $email=$_POST['email'];
        
        // Check if Email Exists
        $sql = "SELECT * FROM dreamslogin WHERE email='" . $email . "' LIMIT 1"; //Check to see if email address is already registered
		$result = mysqli_query($connection, $sql); //store results of query in $result var
        $row = mysqli_fetch_row($result);
        
        $method = new \stdClass();
        $method->email = $row[6];
        $method->google = $row[7];
        $method->facebook = $row[8];
        
        $myJSON = json_encode($method);
		
		if (mysqli_num_rows($result) == 1){	//If at least one result
            echo $myJSON;
		}
        else {
            echo "fail";
        }
        
        exit();
    }
?>