<?php

    session_start();
    include("db_connect.php");

        $email='st933562';
        $password='Jackacar403%';

        $sql = "SELECT * FROM dreamslogin WHERE email='" . $email . "' AND pass='".$password."' LIMIT 1";
        $result = mysqli_query($connection, $sql);

        if (mysqli_num_rows($result) == 1) {
            $row = mysqli_fetch_row($result);

            $_SESSION['logged_in'] = true;
            $_SESSION['first'] = $row[1];
            $_SESSION['last'] = $row[2];
            $_SESSION['email'] = $row[3];
            $_SESSION['url'] = $row[5];


            $details = new \stdClass();
            $details->first = $row[1];
            $details->url = $row[5];

            $myJSON = json_encode($details);

            echo $myJSON;
        }

        else {
            echo "fail";
        }



        exit();
?>
