var anfrage = new XMLHttpRequest();
var anfrage2 = new XMLHttpRequest();

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
    

    $("#content").prepend("<h1>"+"Übersicht"+"</h1>");
    //var div = document.getElementById("content");
    //div.innerHTML += anfrage.responseText;

    $.getJSON( "./php/getoverview.php", function( data ) {
        //showOverview(data);
        $.each( data, function( key, val ) {

            $("#form").append("<div id='"+val.id+"' ' name='"+val.name+"'>Item:" + val.name + "</div>");
            //Der Nachfolgende Code ist nur bedingt fertig

            $("#"+val.id).click(function(){


              var url = "./php/getItem.php" + "?id=" + val.id;
              console.log(url);

              anfrage.open("GET", "./php/getoverview.php", true);


              anfrage.onload = function(){
                $.getJSON( url, function( data ) {

                  //alert("Test1")
                    updateContent(data);

                });
              }
              anfrage.send(null);


            });
    });

        });


    }

  else{
    alert("problem");
  }
}
function updateContent(data){
    //alert("Test");

    $("#detail").html("");

    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + val.id + "'>" +"Text: "+ val.text + "</li>" + "<li>" + "Video: "+ val.video + "</li>" );
    });

    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
  }).appendTo( "#detail" );
}
