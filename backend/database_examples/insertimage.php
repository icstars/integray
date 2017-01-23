<?php 

$host = "localhost"; 
$user = "user12"; 
$pass = "acc"; 
$db = "testdb"; 

$con = pg_connect("host=$host dbname=$db user=$user password=$pass")
    or die ("Could not connect to server\n");

$file_name = "woman.jpg";

$img = fopen($file_name, 'r') or die("cannot read image\n");
$data = fread($img, filesize($file_name));

$es_data = pg_escape_bytea($data);
fclose($img);

$query = "INSERT INTO images(id, data) Values(1, '$es_data')";
pg_query($con, $query); 

pg_close($con); 

?>