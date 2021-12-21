  function getLocation() {
    $.get("https://ipapi.co/81.49.236.70/json/", function (data) {
      buttonClickGET(data.city);
      console.log(data.city);
    });
  };

  function buttonClickGET(city) {
    var api = "https://api.openweathermap.org/data/2.5/weather?q=";
    console.log(api);
    var appid = "&APPID=c21a75b667d6f7abb81f118dcf8d4611";
    console.log(appid);
    var units = "&units=metric";
    var lang = "&lang=fr";
    var http = api + city + units + lang + appid;
    $.get(http, function (data) {
      city = data.name;
      humidity = data.main.humidity;
      console.log(humidity);
      pressure = data.main.pressure;
      console.log(pressure);
      weatherIcon = data.weather[0].icon;
      console.log(weatherIcon);
      weatherDesc = data.weather[0].description;
      console.log(weatherDesc);
      windDeg = data.wind.deg;
      console.log(windDeg);
      windSpeed = data.wind.speed ? (data.wind.speed * 3.6).toFixed(0) : "N/A";
      console.log(windSpeed);
      console.log(data);
      console.log(city);
      temp = data.main.temp.toFixed(0);
      $(".humidity").text("Humidité : " + humidity + "%");
      $(".pressure").text("\nPression : " + pressure + "hp");
      $(".description").text(weatherDesc);
      $(".windDeg").text("Orientation du vent : " + windDeg + "°");
      $(".windSpeed").text("Vitesse du vent : " + windSpeed + " km/h");
      $(".wi").attr("src", "http://www.openweathermap.org/img/wn/" + weatherIcon + ".png");
      $(".temp").text("Température : " + temp + " ℃");
      $("#ville").text(city);
    });
  };
  let champ;
  $("#champ").on("click", function () {
    $(this).val("");
    champ = "";

  });
  $("#envoi").submit(function () {
    if (~champ.indexOf(",")) champ = "";
    buttonClickGET(champ);
    return false;
  });
  getLocation();

  window.onkeyup = keyup;

  function keyup(e) {
    //setting your input text to the global Javascript Variable for every key press
    champ = e.target.value;
    if (e.keyCode == 13) {
      console.log(champ);
      if (~champ.indexOf(",")) champ = "";
      buttonClickGET(champ);
    }
  }
  $(document).ready(function () {
    $("#champ").on("click", function () {
      $(this).val("");
      champ = "";
    });
    $("form").submit(function () {
      if (~champ.indexOf(",")) champ = "";
      buttonClickGET(champ);
      return false;
    });
  });