<?php
// 指定允许其他域名访问  
header('Access-Control-Allow-Origin:*');  
// 响应类型  
header('Access-Control-Allow-Methods:POST');  
// 响应头设置  
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
$servername = "localhost";
$username = "root";
$psw = "";
$con = new mysqli($servername, $username, $psw);
if($con->connect_error){
    die('连接失败: '.$conn->connect_error);
}
    // request payload

    // $request_body = file_get_contents('php://input');
    // $data = json_decode($request_body);
    
    // form data
    print_r($_POST);
    $postUserData = isset($_POST["name"])?$_POST["name"]:'提交的空';
    // echo $postUserData;

?>

