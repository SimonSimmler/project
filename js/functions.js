$(document).ready(function(){

    // Test: Daten aus einer hard-codierten JSON-Datei auslesen
    //     $.getJSON( "./php/getoverview.php", function( data ) {
    $.getJSON( "./json/overview.json", function( data ) {
        showOverview(data);
    });


    // Zeigt die Übersicht über die Werkstücke an
    function showOverview(data){

        console.log ( data['headline'] );

        $("#content").append("<h1>"+data.headline+"</h1>");

        // Über alle Items
        $.each( data.items, function( key, val ) {

            $("#content").append ("<div id='"+val.name+"' json='" + val.json + "''>Item:" + val.name + "</div>");
            $("#"+val.name).click(function(){

                $.getJSON( "./json/" + $(this).attr("json"), function( data ) {
                    updateContent(data);
                });

            });

        });


    }

    // Aktualisiert den Webinhalt mit den Daten aus dem JSON File
    function updateContent(data){

        $("#detail").html("");

        var items = [];+
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
      }).appendTo( "#detail" );
  };

});
