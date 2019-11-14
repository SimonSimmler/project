<?php
/*    // Datenbankanbindung machen und SQL Abfragen abschicken ...

    echo "{"



        // TODO: Text drunter rausschmeissen ...
?>
    "headline":"Übersicht",
    "items":
        [
            {
                "name":"Lötkolbenhalter",
                "json":"lkh.json"
            },
            {
                "name":"Netzgerät",
                "json":"netz.json"
            }
<?php
    // Datenbankanbindung machen und SQL Abfragen abschicken ...

    echo "]"
    echo "}"
*/

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

      $sql = "SELECT name, id FROM item";

      $result = mysqli_query($db, $sql);
      if(!$result){
        echo "Bei der Abfrage ist ein Fehler aufgetreten.";
        exit();
      }


      while($zeile = mysqli_fetch_assoc($result)){
        $data[] = array(
          "name"  => $zeile["name"],
          "id"    => $zeile["id"]

        );
      }
      return json_encode($data);

}

echo data_connect();



?>
