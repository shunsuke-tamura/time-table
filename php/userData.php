<?php 
$json = file_get_contents("php://input");
$contents = json_decode($json, true);
$bytes = file_put_contents("./src/db/userData.json", $json); 
echo "The number of bytes written are $bytes from post data.";
?>