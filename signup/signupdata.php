<?php    
    $servername="127.0.0.1";
    $username="root";
    $password="";
    $dbname="SigninData";    
    $conn = new mysqli($servername,$username,$password,$dbname);    
    if($conn->connect_error){
        die("Connection failed: ".$conn->connect_error);
    }    
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $name=$_POST['name'];
        $email=$_POST['email'];
        $password=$_POST['pass'];
        $sql="INSERT into signin values(\"".$name."\" ,\"".$email."\" , \"".$password."\");";        
        if($conn->query($sql)===TRUE){
           	 $GLOBALS['conn']->close();
        	echo "<SCRIPT type='text/javascript'> //not showing me this
                                window.location.href = '../Login_v1/login.html';
                                alert('Account Created!');
                            </SCRIPT>";
        }else{
            echo "Error: " . $sql . "<br>" . $conn->error;
        }               
    }
?>