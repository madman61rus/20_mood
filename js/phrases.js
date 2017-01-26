function load_message(quotas,phrase,signature)
{
    var items = $.parseJSON(quotas.text());
    var message = items[Math.floor(Math.random()*items.length)];
    phrase.text(message['phrase']);
    signature.text(message['signature'] ? message['signature'] : '');

}



