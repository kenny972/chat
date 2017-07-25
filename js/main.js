
var eliotreplies = ["Hello ! Who you are?",
"I am Eliot. Do you see someone width me?",
"shit",
"It's official i'm crazy",
"I must be amnesic or schizophrenic.",
"I stretch, I see, and I speak to my dead father",
"Excuse me but, who are you? ",
"We are FSociety and we have hacked the world. Do you want to join us?"
]
var x = 0;


// input send
$("#send").click(function send(){
        var contenu = $('#value').val();
        var user = $('#user').val();

        $("#chat").append( "<p>" + user + " :  "+ contenu + "</p>");
        setTimeout(function() {
        $("#chat").append(("<p>") + "Eliot : " + eliotreplies[x] + "</p>");
        $("#chat").scrollTop(position);
        x++;
        $("#write").hide();
      }, 3000);

         if(x==9){
          x=0
        }
        var contenu = $('#value').val(" ");

});

