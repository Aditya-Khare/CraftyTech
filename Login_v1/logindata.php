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
        $email=$_POST['email'];
        $password=$_POST['pass'];
        //$sql="INSERT into signin values(\"".$name."\" ,\"".$email."\" , \"".$password."\");"; 
        $sql="SELECT * FROM signin WHERE email = '$email' AND password = '$password' ";
        $result = mysqli_query($conn, $sql);


        if (mysqli_num_rows($result) > 0) {
          // output data of each row
          while($row = mysqli_fetch_assoc($result)) {
            echo "<script>
                  window.location.href = '../index.html';
                  alert('Welcome');
                </script>";
          }
        } else {
          echo "<script>
                  window.location.href = '../Login_v1/login.html';
                  alert('Invalid UserID or Password');
                </script>";
        }         
    }
?>