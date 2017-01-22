function load_message()
{
    var items = $.parseJSON($("#quotes_json").text());
    var message = items[Math.floor(Math.random()*items.length)];
    phrase.text(message['phrase']);
    signature.text(message['signature'] ? message['signature'] : '');

}
$(document).ready(function(){
    load_message();
    $("#next").click(function(){
        load_message();
    });
});


