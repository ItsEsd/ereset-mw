'use strict';
var ur1 = "https://script.google.com/macros/s/";
var ur2= "AKfycbx27EKa3hrnUL8JNXrL5lBQVLMWrv07XNXy5iBDF-04E_5_g4xwsTMKTIc3OqscvPGuXQ";
repassonest.addEventListener('submit', (event) => {
    $('#checkemidst').fadeOut();
    document.getElementById("loader-fpst").style.visibility = "visible";
    var mailat =  document.getElementById('mailrepassst').value;

    var url = ur1+ur2+"/exec" + "?callback=ctrlqchemidst&chemid=" + mailat + "&action=chstum";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });

  
  });
  function ctrlqchemidst(e){
    var res= e.records;
    if(res=="ID found!"){
      document.getElementById("checkemidst").style.display = "none";
      var k =Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
      document.getElementById('vercodestprest').value = k;
      sendEmailst();
      document.getElementById("loader-fpst").style.visibility = "hidden";
    }
    else{
      document.getElementById("checkemidst").style.display = "block";
      document.getElementById("checkemidst").innerHTML = "User email not found.";
      document.getElementById("loader-fpst").style.visibility = "hidden";
      setTimeout(function() {
        jQuery('#checkemidst').fadeOut();
      }, 5000);
    }
  }
  function sendEmailst() {
    var k =Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
    var mailat =  document.getElementById('mailrepassst').value;
    document.getElementById('vercodestprest').value = k;
      Email.send({
        SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
        To: mailat,
        From: "noreply@mastrowall.com",
          Subject: "Email Verification",
          Body:  "<html><body style='color:white;'><center><div align='center' style='border-radius:10px;background-color:#161616;padding:40px;max-width:600px;'><h2 style='color:white'>W E L C O M E</h2><h2><a target='_blank' href='https://mastrowall.com' style='text-decoration:none;'>M A S T R O W A L L</a></h2>" + "<p style='color:white;'>Your Confirmation Code is: </p><h3 style='color:black;width:140px;background-color:#e6e6e6;border-radius:4px;padding:6px;'>"+ k +"</h3><br><p style='color:white;'>Contact: <a href='mailto:mail@mastrowall.com'>mail@mastrowall.com</a></p><h4 style='color:white;'>Thank You</h4><p style='font-size:12px;color:#cccccc;'>N.B. Do not reply to this email</p></div></center></body></html>",
      })
          .then(function (message) {
if(message=="OK"){
  $("#resetpst_two").show();
  $("#resetpst_one").hide();
 document.getElementById('checkemidst-2st').style.display= 'block';
  document.getElementById('checkemidst-2st').innerHTML= 'Verification code send to your email.';
  setTimeout(function() {
    jQuery('#checkemidst-2st').fadeOut();
  }, 10000);

}
else{
  document.getElementById('checkemidst-2st').style.display= 'block';
  document.getElementById('checkemidst-2st').innerHTML= 'Contact Mastro Desk: '+'<a class="veremfalse" href="mailto:mail@mastrowall.com">Send Mail</a>';
}
          
          });
      }
  
    $('#confirm_passwordnewst').on('keyup', function() {
      if ($('#passwordnewst').val() == $('#confirm_passwordnewst').val()) {
        $('#messagenewst').html('Matching').css('font-size', '12px');
        document.getElementById('repassconfirmst').disabled = false;
      } else {
        $('#messagenewst').html('Not Matching').css('font-size', '12px');
        document.getElementById('repassconfirmst').disabled = true;
      }
    });
  
  function verfycodest(){
   var verc = $('#vercodest').val();
   var prec = $('#vercodestprest').val();
   if(verc == prec){
    document.getElementById('verconfirmst').disabled = false;
   }
   else{
    document.getElementById('verconfirmst').disabled = true;
     return false;
   }
  }
  
  
  repassthreest.addEventListener('submit', (event) => {
    document.getElementById("loader-fpst").style.visibility = "visible";
    var pass1 = "https://script.google.com/macros/s/";
    var pass2 = "AKfycbxf84HYz9Fo5T-Y5yeGdM2yNgl56D2KDUT84__sZkRkKcKVQoHzzOU6LBvHdBP8Hjzq";
    var newP = $('#passwordnewst').val();
    var emid = $('#mailrepassst').val();
      var urlp = pass1+pass2+"/exec" + "?callback=ctrlqrepassst&mailrepass=" + emid + "&passwordnew=" + newP + "&action=cuiweryuiwrnweroumorilewr-wer";
      var request = jQuery.ajax({
        crossDomain: true,
        url: urlp,
        method: "GET",
        dataType: "jsonp"
      });
  });
  
  
  function ctrlqrepassst(){
  
    document.getElementById("loader-fpst").style.visibility = "hidden";
    $('#resetpst_three').fadeOut();
    $('#resetpst_four').show();
  }