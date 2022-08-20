/* MASTROWALL  */
veridont.addEventListener('submit', (event) => {
    $('#succs-ont').fadeOut();
    document.getElementById("loader-ont").style.visibility = "visible";
    var exid =  document.getElementById('exidcheck-ont').value;
    var ur1 = "https://script.google.com/macros/s/";
    var ur2= "AKfycbzuMfEalC57AObAFIlRASjGc0_dTbptQ9ztQY0vmbuhCXIoabotQHwdQdIBxpdMdiGb";
    var url = ur1+ur2+"/exec" + "?callback=ctrlqchexid&exid="+exid+"&action=chexid";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
  });
  
function ctrlqchexid(e){
  var res= e.records;
  if(res !="ID not found!"){
          document.getElementById("succs-ont").style.display = "none";
          document.getElementById('vrmail').value = res;
          $("#ont-two").fadeIn();
          $("#ont-one").hide();
        var resem =res.split('@');
        var len = resem[0].length;
        var resfst = resem[0].substr(0,1);
        var reslst = resem[0].substr(len-2,len);
        var newstr = resfst + '******'+reslst+'@'+ resem[1];
        document.getElementById('rstmailid-ont').innerHTML = newstr;
        document.getElementById("loader-ont").style.visibility = "hidden";
}
else{
  document.getElementById("succs-ont").style.display = "block";
  document.getElementById("succs-ont").innerHTML = "Exam ID not found.";
  document.getElementById("loader-ont").style.visibility = "hidden";
  setTimeout(function() {
    jQuery('#succs-ont').fadeOut();
  }, 5000);
}
}
document.getElementById('mcheckem-ont').addEventListener('input',checkem);

function checkem(){
var emck = $('#mcheckem-ont').val();
var res = $('#vrmail').val();
if(emck == res){
document.getElementById('chembtn').disabled= false;
}
else{
    document.getElementById('chembtn').disabled= true;
}}

checkemont.addEventListener('submit',(event)=>{
   
    SendMailOnt();
});

$('#confrmpasskey-ont').on('keyup', function() {
    if ($('#newpasskey-ont').val() == $('#confrmpasskey-ont').val()) {
      $('#messagenew-ont').html('Matching').css('font-size', '12px');
      document.getElementById('submtnps').disabled = false;
    } else {
      $('#messagenew-ont').html('Not Matching').css('font-size', '12px');
      document.getElementById('submtnps').disabled = true;
    }
  });


  rstpkeyont.addEventListener('submit', (event)=>{
    document.getElementById('submtnps').disabled = true;
    document.getElementById("loader-ont").style.visibility = "hidden";
    var mailat =  $('#mcheckem-ont').val();
    var exid= $('#exidcheck-ont').val();
    var pchk = $('#confrmpasskey-ont').val();
    var ur1 = "https://script.google.com/macros/s/";
    var ur2= "AKfycbzuMfEalC57AObAFIlRASjGc0_dTbptQ9ztQY0vmbuhCXIoabotQHwdQdIBxpdMdiGb";
    var url = ur1+ur2+"/exec" + "?callback=ctrlqcngpk&exid="+exid+"&em="+mailat+"&pk="+escape(JSON.stringify(pchk))+"&action=cngpk";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
  })

function ctrlqcngpk(e){
var cs = e.result;
if(cs != "ID not found!"){
    document.getElementById("loader-ont").style.visibility = "hidden";
    $('#ont-three').hide();
    $('#ont-four').fadeIn();
}}

  function SendMailOnt() {
    var k1 =Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
    var k2 =Math.random().toString(26).substring(2, 10) + Math.random().toString(26).substring(2, 10);
    var mailat =  document.getElementById('mcheckem-ont').value;
    var exid= document.getElementById('exidcheck-ont').value;
    var emidbt= "ech1"+ k1 + "-"+window.btoa(mailat);
    var exidbt= "ech0"+ k2 + "-"+window.btoa(exid);
    var mln = "https://e-reset.mastrowall.com/?ex_reset="+exidbt+"&ex_check="+emidbt+"&nw=true";
    var htm = "<html><body style='color:white;font-family:Arial, Helvetica, sans-serif;'><center><div align='center' style='border-radius:10px;background-color:#161616;padding:40px;max-width:600px;'><h2 style='color:white'>W E L C O M E</h2><h2><a target='_blank' href='https://mastrowall.com' style='text-decoration:none;'>M A S T R O W A L L</a></h2><p style='color:white;'>Reset your Online Test Passkey<br><br>Exam ID: <span style='font-size:16px;'>"
    +exid+"</span></p><a style='text-decoration:none;color:#fff444;line-height:60px;' target='_blank' href='"+mln+"'>Click Here >></a><br><p style='color:white;'>Contact: <a href='mailto:mail@mastrowall.com'>mail@mastrowall.com</a></p><h4 style='color:white;'>Thank You</h4><p style='font-size:12px;color:#cccccc;'>N.B. Do not reply to this email</p></div></center></body></html>";
      Email.send({
        SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
        To: mailat,
        From: "noreply@mastrowall.com",
          Subject: "Email Verification",
          Body:  htm,
      })
          .then(function (message) {
         if(message=="OK"){
        //   $("#resetp_two").show(); ==> $("#resetp_two").fadeIn();
        //   $("#resetp_one").fadeOut(); ==> $("#resetp_one").hide();
           document.getElementById('chembtn').disabled = true;
          document.getElementById('mailsuccs-ont').style.display= 'block';
          document.getElementById('mailsuccs-ont').innerHTML= 'Verification link send to your email.';
          setTimeout(function() {
            location.reload();
          }, 10000);
           
         }
         else{
          document.getElementById('mailsuccs-ont').style.display= 'block';
          document.getElementById('mailsuccs-ont').innerHTML= 'Contact Mastro Desk: '+'<a class="veremfalse" href="mailto:mail@mastrowall.com">Send Mail</a>';
         } 
          });
      }
    
var url_string = window.location.href;
var url = new URL(url_string);
var q = url.searchParams.get("ex_reset");
var k = url.searchParams.get("ex_check");
var r = url.searchParams.get("nw");

if(r =="true"){
    var qDi = q.split('-');
    var qDf = window.atob(qDi[1]);
    var mDi = k.split('-');
    var mDf = window.atob(mDi[1]);
    document.getElementById('exidcheck-ont').value= qDf;
    document.getElementById('mcheckem-ont').value= mDf;
    $('#rst-ont').show();
    $('#ont-one,#ont-two').hide();
    $('#ont-three').show();
}