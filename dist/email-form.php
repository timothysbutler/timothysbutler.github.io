<?php

if (isset($_POST['submit'])) {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $mailTo = "timothysbutler@outlook.com";
    $headers = "From: ".$email;

    mail($mailTo, $name, $message, $headers);
    header('Location: index.html');
}

?>