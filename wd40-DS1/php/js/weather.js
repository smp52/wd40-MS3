  $(document).ready(function(){

    // var units;
    //
    // if (user.preferredUnit == farenheit){
    //   units = "units=imperial";
    //   $("#deg").html("&#8457;");
    // }
    // if (user.preferredUnit == celcius){
    //   units = "units=metric";
    //   $("#deg").html("&#8451;");
    // }


    $.ajax({
      //url:"https://api.openweathermap.org/data/2.5/find?q="+user.city+"&"+units+"&APPID=a287ec139e178c4da981c95590c41a12",
      url:"https://api.openweathermap.org/data/2.5/find?q=orlando&units=imperial&APPID=a287ec139e178c4da981c95590c41a12",
      method: 'POST',
      success: function(data){

      <!-- making img appear -->
        var imgTag = data.list[0].weather[0].icon;
        var img = new Image();
        var div = document.getElementById('weatherImg');
        img.src = "http://openweathermap.org/img/w/"+imgTag+".png";
        div.appendChild(img);

        <!-- temp -->
        var temp = data.list[0].main.temp;
        temp = Math.round(temp);
        $("#temp").append(temp);

        <!-- description -->
        var dec = data.list[0].weather[0].description;
        $("#words").append(dec);
      }
    })
  })

  $("#weatherCity").click(function(){
    $("#changeCity").show();
  })

  $("#changeCity").click(function(){
    var newCity = $("#weatherCity").val();
    $.ajax({
      url:"https://api.openweathermap.org/data/2.5/find?q="+newCity+"&units=imperial&APPID=a287ec139e178c4da981c95590c41a12",
      method: 'POST',
      success: function(data){

      <!-- making img appear -->
        var imgTag = data.list[0].weather[0].icon;
        var img = new Image();
        img.src = "http://openweathermap.org/img/w/"+imgTag+".png";
        $("#weatherImg").html(img);

        <!-- temp -->
        var temp = data.list[0].main.temp;
        temp = Math.round(temp);
        $("#temp").html(temp);

        <!-- description -->
        var dec = data.list[0].weather[0].description;
        $("#words").html(dec);

        $("#changeCity").hide(1000);
      }
    })
  })
