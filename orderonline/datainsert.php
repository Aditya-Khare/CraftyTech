<?php    
    $servername="127.0.0.1";
    $username="root";
    $password="";
    $dbname="CustomerData";    
    $conn = new mysqli($servername,$username,$password,$dbname);    
    if($conn->connect_error){
        die("Connection failed: ".$conn->connect_error);
    }    
    //if($_SERVER["REQUEST_METHOD"]=="GET"){
        $name=$_GET['name'];
        $email=$_GET['email'];
        $mobile=$_GET['mobile'];
        $products=$_GET['products'];
        $sql="INSERT into orders values(\"".$name."\" ,\"".$email."\" , \"".$mobile."\" , \"".$products."\");";        
        if($conn->query($sql)===TRUE){
           	 $GLOBALS['conn']->close();
        	echo "<SCRIPT type='text/javascript'> //not showing me this
                                alert('Account Created!');
                                
                            </SCRIPT>";
        }else{
            echo "Error: " . $sql . "<br>" . $conn->error;
        }               
  //  }
?>
