<?php

    session_start();

    if(isset($_POST['check_login'])) {
        include("db_connect.php");
        
        $email=$_POST['email'];
        $password=$_POST['password'];
        $password = sha1($password);
        
        $sql = "SELECT * FROM dreamslogin WHERE email='" . $email . "' AND pass='".$password."' LIMIT 1";
        $result = mysqli_query($connection, $sql);
        
        if (mysqli_num_rows($result) == 1) {
            $row = mysqli_fetch_row($result);
            
            $_SESSION['logged_in'] = true;
            $_SESSION['first'] = $row[1];
            $_SESSION['last'] = $row[2];
            $_SESSION['email'] = $row[3];
            $_SESSION['url'] = $row[5];
            $_SESSION['setup'] = $row[9];
            $_SESSION['month'] = $row[10];
            $_SESSION['day'] = $row[11];
            $_SESSION['meme'] = $row[12];
            $_SESSION['city'] = $row[13]
            $_SESSION['background'] = $row[14];
            
            
            $details = new \stdClass();
            $details->first = $row[1];
            $details->url = $row[5];
            $details->setup = $row[9];
            $details->month = $row[10];
            $details->day = $row[11];
            $details->meme = $row[12];
            $details->city = $row[13];
            $details->background = $row[14];
            
            $myJSON = json_encode($details);
            
            echo $myJSON;
        }
        
        else {
            echo "fail";
        }
		
		
        
        exit();
    } 
?>