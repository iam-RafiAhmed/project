<?php
    require_once('db.php');

    function login($user){
        $con = getConnection();
        $sql = "select * from users where email='{$user['email']}' and password='{$user['password']}'";
        $result = mysqli_query($con, $sql);
        if(mysqli_num_rows($result) == 1){
            return true;
        }else{
            return false;
        }
    }

    function addUser($user){
        $con = getConnection();
        $sql = "insert into users values(null, '{$user['email']}', '{$user['password']}')";
        if(mysqli_query($con, $sql)){
            return true;
        }else{
            return false;
        }
    }

    function updatePassword($email, $newPassword) {
    $con = getConnection();  // Connect to the database
    
    // Directly use the new password (no hashing)
    $sql = "UPDATE users SET password = '$newPassword' WHERE email = '$email'";

    if (mysqli_query($con, $sql)) {
        return true;  // Password updated successfully
    } else {
        return false;  // Error updating the password
    }
}

 

?>