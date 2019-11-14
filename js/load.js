var anfrage = new XMLHttpRequest();

window.onload = function(){
  startRequest();
}
function startRequest(){
  anfrage.open("GET", "./php/getoverview.php", true);

  anfrage.onload = function(){
    behandleAntwort();
  }
  anfrage.send(null);
}
function behandleAntwort(){

  if(anfrage.status == 200){
    //alert(anfrage.responseText);

    $("#content").append("<h1>"+"Übersicht"+"</h1>");
    //var div = document.getElementById("content");
    //div.innerHTML += anfrage.responseText;

    $.getJSON( "./php/getoverview.php", function( data ) {
        //showOverview(data);
        $.each( data, function( key, val ) {

            $("#content").append ("<div id='"+val.id+"' '>Item:" + val.name + "</div>");
            /*
              $.getJSON( "./php/getItem.php"), function( data ) {
                  updateContent(data);
              });
    });*/


    // Zeigt die Übersicht über die Werkstücke an
    //function showOverview(data){

        //console.log ( data['headline'] );

        //$("#content").append("<h1>"+Übersicht+"</h1>");

        // Über alle Items
        //$.each( data, function( key, val ) {

            //$("#content").append ("<div id='"+val.id+"' '>Item:" + val.name + "</div>");
            //$("#"+val.name).click(function(){

                /*$.getJSON( "./json/" + $(this).attr("json"), function( data ) {
                    updateContent(data);
                });*/

            });

        });


    }

  else{
    alert("problem");
  }
}
