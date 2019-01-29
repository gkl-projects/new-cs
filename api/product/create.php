<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json;charset=UTF-8");
header("Access-Control-Allow-Methods:POST");
header("Access-Control-Max-Age:3600");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

include_once '/home/ubuntu/api/config/database.php';

include_once '/home/ubuntu/api/objects/product.php';

$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

$data = json_decode(file_get_contents("php://input"));

$product->name = $data->name;  
$product->price = $data->price;


if($product->create()){
	echo '{';
		echo '"message":"Product was created."';
	echo '}';
}

else{
	echo '{';
		echo '"message":"Unable to create product."';
	echo '}';

}



?>