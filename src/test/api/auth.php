<?php

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST)&& !empty($_POST)){
  $username = $_Post['username'];
  $password = $_POST['password'];

  if($username == 'Tekkd' && $password == 'malaria'){
    ?>
    {
      "success":true,
    }
    <?php
  } else {
    ?>
    {
      "success":false,
      "message": "Invalid Credentials provided"
    }
    <?php
  }
} else {
  //var_dump($_Post)
  ?>
  {
    "success": false,
    "message": "Only POST access accepted"
  }
  <?php
  }
  ?>
}
