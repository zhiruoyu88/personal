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
$con = mysql_connect($servername, $username, $psw);
// if($con->connect_error){
//     die('连接失败: '.$conn->connect_error);
// }
    // 请求为request payload时

    // $request_body = file_get_contents('php://input');
    // $data = json_ecode($request_body);
    
    // form data
    // print_r(json_encode($_POST));
    

    $pname = $_POST["name"];
    $password = $_POST["password"];
    if(isset($_GET["logout"])){
        $glogout = $_GET["logout"];
        exit;
    }
    $postUserData = isset($pname)?$pname:'提交的空';
    if($postUserData=='提交的空'){
        $data  = json_encode(array('success'=>false,'msg' => $postUserData ));
        echo $data;
        exit;
    }
    mysql_select_db("test",$con);
    $result = mysql_query("select * from user where username='".$pname."'",$con);
    $result = mysql_fetch_assoc($result);
    // session_start();
    // $_SESSION('userinfo')=$result;
    if($result['password']==$_POST["password"]){
        foreach ($result as $key => $value) {
            if($key=='password'){
                unset($result[$key]);
            }
        }
        $data = json_encode(array('success'=>true,'data'=>$result));
    }else{
        $data = json_encode(array('success'=>false,'msg' => '用户名或密码错误！' ));
    }
    echo $data;
?>

