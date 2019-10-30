<?php

    session_start();

    if(isset($_POST['create_account'])) {
        include("db_connect.php");
        
        $first=$_POST['first'];
        $last=$_POST['last'];
        $email=$_POST['email'];
        $url=$_POST['url'];
        $method=0;
        $google=$_POST['google'];
        $facebook=$_POST['facebook'];
        
        $sql = "INSERT INTO dreamslogin (first,last,email,url,method,google,facebook) VALUES('$first','$last','$email','$url','$method','$google','$facebook')";
        mysqli_query($connection, $sql);
        
        $_SESSION['logged_in'] = true;
        $_SESSION['first'] = $first;
        $_SESSION['last'] = $last;
        $_SESSION['email'] = $email;
        $_SESSION['url'] = $url;
		
		echo "success";
        
        exit();
    } 
?>