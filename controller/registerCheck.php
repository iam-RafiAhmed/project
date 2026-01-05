<?php
    require_once('../model/userModel.php');
    if(isset($_POST['submit']) == true){
        session_start();
        $password = $_REQUEST['password'];
        $email = $_REQUEST['email'];
                   
            $user = ['password'=>$password, 'email'=>$email];
            $status = addUser($user);
            if($status){
                header('location: ../view/login.php');
            }
            else{
                header('location: ../view/register.php');
            }
        
    }else{
        header('location: ../view/register.php');
    }

?>