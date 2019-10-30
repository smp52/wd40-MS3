<?php

    session_start();

    if(isset($_POST['link_facebook_account'])) {
        include("db_connect.php");
        
        $email=$_POST['email'];
        $facebook=$_POST['facebook'];
        
        $sql = "UPDATE dreamslogin SET facebook = '$facebook' WHERE email = '$email'";
        mysqli_query($connection, $sql);
		
		echo "success";
        
        exit();
    } 
?>