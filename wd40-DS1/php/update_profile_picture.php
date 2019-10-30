<?php

    session_start();

    if(isset($_POST['update_url'])) {
        include("db_connect.php");
        
        $first=$_POST['first'];
        $last=$_POST['last'];
        $email=$_POST['email'];
        $url=$_POST['url'];
        
        $sql = "UPDATE dreamslogin SET url = '$url' WHERE email = '$email'";
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