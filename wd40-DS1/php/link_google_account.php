<?php

    session_start();

    if(isset($_POST['link_google_account'])) {
        include("db_connect.php");
        
        $email=$_POST['email'];
        $google=$_POST['google'];
        
        $sql = "UPDATE dreamslogin SET google = '$google' WHERE email = '$email'";
        mysqli_query($connection, $sql);
		
		echo "success";
        
        exit();
    } 
?>