
var reponses = ["Hello ! Who you are?",
"I am Eliot. Do you see someone width me?",
"shit",
"It's official i'm crazy",
"I must be amnesic or schizophrenic.",
"I stretch, I see, and I speak to my dead father",
"Excuse me but, who are you? "]
var x = 0;

// $("#write").hide();


// input send
$("#send").click(function send(){
        var contenu = $('#value').val();
        var user = $('#user').val();

        $("#chat").append( "<p>" + user + " :  "+ contenu + "</p>");
        setTimeout(function() {
        $("#chat").append("<h6>" + "Eliot : " + reponses[x] + "</h6>");
        $("#chat").scrollTop(position);
        x++;
        $("#write").hide();
      }, 3000);


         if(x==7){
          x=0
        }
        var contenu = $('#value').val(" ");

});
// end of input


// $("#hu").keypress(function(e) {
//     if(e.which == 13) {
//       var user = $('#user').val();
//       var contenu = $('#hu').val();
//       $("#chat").append( "<p>" + user  + " : " + contenu + "</p>");

//       setTimeout(function() {
//       $("#chat").append("<h6>" + "Sylvain Durif : " + reponses[x] + "</h6>");
//       var position = $("#chat")[0].scrollHeight;
//       $("#chat").scrollTop(position);
//       x++;
//       $("#write").hide();

//     }, 3000);

//       setTimeout(function() {
//      $("#write").show();
//      $("#user").hide();
//       }, 1000);


//       if(x==5){
//         x=0
//       }
//       var contenu = $('#hu').val(" ");


// }
// });