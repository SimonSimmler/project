<?php


function data_connect(){

      //Verbindung zur Datenbank aufbauen
      $db = mysqli_connect("localhost", "root", "root", "Vernetzung");

      if(!$db){
        echo "Verbindungsaufbau zur DB nicht möglich";
        exit();
      }


      //Zeichenkodierung setzen
      if(!mysqli_set_charset($db, "utf8")){
        echo "Beim setzen der Zeichenkodierung ist ein Fehler aufgetreten.";
        exit();
      }
      $id = $_GET["id"];

      $sql = "SELECT text, video FROM item WHERE id=$id";

      $result = mysqli_query($db, $sql);
      if(!$result){
        echo "Bei der Abfrage ist ein Fehler aufgetreten.";
        exit();
      }


      while($zeile = mysqli_fetch_assoc($result)){
        $data[] = array(
          "text"  => $zeile["text"],
          "video" => $zeile["video"]

        );
      }
      return json_encode($data);

}

echo data_connect();



?>
