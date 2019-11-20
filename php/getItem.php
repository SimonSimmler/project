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

      $sql = "SELECT item.text, item.video, division.name FROM item JOIN division_to_item ON item.id = division_to_item.iditem JOIN division ON division.id = division_to_item.iddivision WHERE item.id = $id";
      //für Abteilungen:
      //SELECT item.name, item.text, item.video, division.name FROM item JOIN division_to_item ON item.id = division_to_item.iditem JOIN division ON division.id = division_to_item.iddivision
      //für spezifische ID:
      //SELECT item.name, item.text, item.video, division.name FROM item JOIN division_to_item ON item.id = division_to_item.iditem JOIN division ON division.id = division_to_item.iddivision WHERE item.id = $id
      $result = mysqli_query($db, $sql);
      if(!$result){
        echo "Bei der Abfrage ist ein Fehler aufgetreten.";
        exit();
      }


      while($zeile = mysqli_fetch_assoc($result)){
        $data[] = array(
          "text"  => $zeile["text"],
          "video" => $zeile["video"],
          "division" => $zeile["name"]

        );
      }
      return json_encode($data);

}

echo data_connect();



?>
