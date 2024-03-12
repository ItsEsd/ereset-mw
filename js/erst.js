$("#conas-ed").click(function () {
  $("#resetp").show();
});
$("#conas-st").click(function () {
  $("#resetpst").show();
});
$("#conas-otest").click(function () {
  $("#rst-ont").show();
});
$("#conas-exmp").click(function () {
  $("#rst-emp").show();
});

const loca = window.location.hostname;
if (loca.endsWith("mwfbiz.com")) {
  document.body.style.display = "block";
} else {
  document.body.innerHTML = "";
}
