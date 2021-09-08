window.onload = function() {
var src = "$('#field_user').attr('placeholder', 'TU-ID');"+
          "$('#field_pass').attr('placeholder', 'Passwort');"+
          "document.getElementById('field_pass').type = 'password';"+
          "$('#inhalt p[style*=\"color: darkred\"]').css('color', 'red');";

var jq = document.createElement('script');
jq.append(src);
document.getElementsByTagName('head')[0].appendChild(jq);
}
