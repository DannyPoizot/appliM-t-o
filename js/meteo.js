  function buttonClickGET(city) {
    console.log("test");
    const appid = "&APPID=c21a75b667d6f7abb81f118dcf8d4611";
    const api = "https://api.openweathermap.org/data/2.5/weather?q=";
    const units = "&units=metric";
    const lang = "&lang=fr";
    const http = api + city + units + lang + appid;
    $.get(http, function(data) {
      city = data.main.name;
      console.log(data);
      console.log(city);
      temp = data.main.temp.toFixed(0);
      $(".temp").text("Température : " + temp + " ℃");
    });
  };
  let champ;
  $("#champ").on("click", function() {
      $(this).val("");
        champ = "";
    });
  $("#envoi").submit(function() {
    if (~champ.indexOf(",")) champ = "";
      buttonClickGET(champ);
      return false;
    });
  function getLocation() {
    $.get("https://ipapi.co/81.49.236.70/json/", function(data) {
        buttonClickGET(data.city);
        console.log(data.city);
    });
  };
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
$(document).ready(function() {
    $("#champ").on("click", function() {
      $(this).val("");
      champ = "";
    });
    $("#envoi").submit(function() {
      if (~champ.indexOf(",")) champ = "";
      buttonClickGET(champ);
      return false;
    });
});
