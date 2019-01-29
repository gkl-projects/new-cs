<?php
class product{
	private $conn;
	private $table_name = "products";
	
	public $id;
	public $name;
	public $price;

	public function __construct($db){
		$this->conn = $db;
	}
	
	function create(){
		$query = "insert into " . $this->table_name . "
			set name=:name,price=:price";
		$stmt = $this->conn->prepare($query);

		$this->name=htmlspecialchars(strip_tags($this->name));
		$this->price=htmlspecialchars(strip_tags($this->price));
		
		$stmt->bindParam(":name",$this->name);
		$stmt->bindParam(":price",$this->price);

		if($stmt->execute()){
			return true;
		}
		return false;
	}
}
?>
