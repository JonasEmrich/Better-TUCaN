function max(arr){
  return Math.max.apply(null, arr);
}

function sum(arr){
  return  arr.reduce((a, b) => a + b, 0);
}
/*
function gradeoverview(){
  labels = [];
  $('table.nb').children('tbody').children('tr').eq(0).children('td').each(function(){
    labels.push($(this).text());
  });
  labels.splice(0,1);

  students = [];
  $('table.nb').children('tbody').children('tr').eq(1).children('td').each(function(){
    if(isNaN(parseInt($(this).text())))
      students.push(0);
    else
       students.push(parseInt($(this).text()));
  });
  students.splice(0,1);
alert(max());
  var max = max(students);
  var sum = sum(students);
  var durchfallquote = Math.round(students[students.length-1]/sum*100*100)/100;
  var bestanden = 100-durchfallquote;

  if(isNaN(max) || isNaN(sum) || isNaN(durchfallquote))
    return;

  // Bestanden - Durchgefallen Progress Bar
  $('#pageContentPopUp > div.tb').prepend('<div class="bar-wrapper"><span class="green"><b>Bestanden</b> <br>'+bestanden+'%</span><strong class="bar-label"></strong><progress class="pbar" max="100" value="'+bestanden+'"> '+bestanden+'% / '+durchfallquote+'% </progress><span><b>Durchgefallen</b> <br> '+durchfallquote+'%</span></div>');

  // Notenverteilung Chart
  $('#pageContentPopUp > div.tb').prepend('<ul id="grade-chart" class="chart-grades"></ul>');

  for (var i = 0; i < students.length; i++){
    var height = students[i]/max*100;
    if(height == 0)
      height += 1;
    $('#grade-chart').append('<li><div style="height:'+  height +'%" title="'+labels[i]+'" value="'+students[i]+'"><span class="chart-value">'+students[i]+'</span></div></li>');
  }

}
*/

//$('#imagePageHeadLeft').attr('src', '');

//moz-extension://0058ebac-72f6-41e1-86b4-d3dba5cec76e/img/tu-logo.png

var url = window.location.href;

if(url.includes('PRGNAME=GRADEOVERVIEW')){
  //$('#pageContentPopUp > h2').eq(1).replaceWith('<h3>'+$('#pageContentPopUp > h2').eq(1).html()+'</h3>');

  labels = [];
  $('table.nb').children('tbody').children('tr').eq(0).children('td').each(function(){
    labels.push($(this).text());
  });
  labels.splice(0,1);

  students = [];
  $('table.nb').children('tbody').children('tr').eq(1).children('td').each(function(){
    if(isNaN(parseInt($(this).text())))
      students.push(0);
    else
       students.push(parseInt($(this).text()));
  });
  students.splice(0,1);

  var max = max(students);
  var sum = sum(students);
  var durchfallquote = Math.round(students[students.length-1]/sum*100*100)/100;
  var bestanden = Math.round((100-durchfallquote)*100)/100;

  if(!(isNaN(max) || isNaN(sum) || isNaN(durchfallquote))){

      $('div.tbhead').html("Made with BetterTUCaN Add-On by Jonas Emrich");
      $('div.tbhead').addClass("credit");

      // Bestanden - Durchgefallen Progress Bar
      $('#pageContentPopUp > div.tb').prepend('<div class="bar-wrapper"><span class="green"><b>Bestanden</b> <br>'+bestanden+'%</span><strong class="bar-label"></strong><progress class="pbar" max="100" value="'+bestanden+'"> '+bestanden+'% / '+durchfallquote+'% </progress><span><b>Durchgefallen</b> <br> '+durchfallquote+'%</span></div>');

      // Notenverteilung Chart
      $('#pageContentPopUp > div.tb').prepend('<ul id="grade-chart" class="chart-grades"></ul>');

      for (var i = 0; i < students.length; i++){
        var height = students[i]/max*100;
        var percentage = Math.round(students[i]/sum*100*10)/10;
        if(height == 0)
          height += 1;
        $('#grade-chart').append('<li><div style="height:'+  height +'%" title="'+labels[i]+'" value="'+percentage+'"><span class="chart-value">'+percentage+'%</span></div></li>');
      }
  }

}
