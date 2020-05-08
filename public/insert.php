<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
	$Cargo_id=$_POST['Cargo_id'];
	$Cargo_name=$_POST['Cargo_name'];
	$Cargo_img=$_POST['Cargo_img'];
	$Cargo_type=$_POST['Cargo_type'];
	$Cargo_price=$_POST['Cargo_price'];
	$Cargo_info=$_POST['Cargo_info'];
	echo $Cargo_id;
	include("conn.php");
	$sql="insert into Cargo(Cargo_id,Cargo_img,Cargo_info,Cargo_name,Cargo_price,Cargo_type) value ('$Cargo_id','$Cargo_img','$Cargo_info','$Cargo_name','$Cargo_price','$Cargo_type')";
	$flag=mysqli_query($link,$sql);
	if($flag){
		echo '<script>alert("添加成功");location.href="insert_form.html";</script>'
	}else{
		echo '<script>alert("添加错误");location.href="insert_form.html";</script>';
	}
	mysql_close($conn);
}else{
	header("location:error.php"); 
} 
?>