<?php

//Bismillah

if(isset($_POST["contactName"])){

$br='%0A';
$token='5643419985:AAE0p_rSWMz5VM-UGPKJAKIySE12_HKF90w';// @YoPortfolioBot
$chat_id=-1001580549177;// t.me/+mOjeM6Z6MVhhMDE1

$arFrom='%0A💻%23Portfolio💻%0A%0A';
$userName = $_POST["contactName"];
$userEmail = $_POST["contactEmail"];
$userSubject = $_POST["contactSubject"];
$userMsg = $_POST["contactMessage"];

$final_text=$arFrom.'Name: '.$userName.$br.'Email: '.$userEmail.$br.'Subject: '.$userSubject.$br.'Message: '.$userMsg;

//The URL with parameters / query string.

$url = 'https://api.telegram.org/bot'.$token.'/sendMessage?chat_id='.$chat_id.'&text='.$final_text.'&parse_mode=html';



$contents = file_get_contents($url);  //request

//If $contents is not a boolean FALSE value.
if($contents !== false){
    echo json_encode("OK");
}

}
?>