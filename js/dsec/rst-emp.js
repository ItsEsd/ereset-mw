/* MASTROWALL  */
veridemp.addEventListener('submit', (event) => {
    $('#succs-emp').fadeOut();
    document.getElementById("loader-emp").style.visibility = "visible";
    var exid =  document.getElementById('exidcheck-emp').value;
    var ur1 = "https://script.google.com/macros/s/";
    var ur2= "AKfycbw2t4zxCPbX6Wo7KoLfyncU4PpzDTzOC-Xq-_4xgaEWaRVf2lP9FVmF_pKVVjVZ2QgwUw";
    var url = ur1+ur2+"/exec" + "?callback=ctrlqchexidemp&exid="+exid+"&action=chexid";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
  });
  
function ctrlqchexidemp(e){
  var res= e.records;
  if(res !="ID not found!"){
          document.getElementById("succs-emp").style.display = "none";
          document.getElementById('vrmail-emp').value = res;
          $("#emp-two").fadeIn();
          $("#emp-one").hide();
        var resem =res.split('@');
        var len = resem[0].length;
        var resfst = resem[0].substr(0,1);
        var reslst = resem[0].substr(len-2,len);
        var newstr = resfst + '******'+reslst+'@'+ resem[1];
        document.getElementById('rstmailid-emp').innerHTML = newstr;
        document.getElementById("loader-emp").style.visibility = "hidden";
}
else{
  document.getElementById("succs-emp").style.display = "block";
  document.getElementById("succs-emp").innerHTML = "Exam ID not found.";
  document.getElementById("loader-emp").style.visibility = "hidden";
  setTimeout(function() {
    jQuery('#succs-emp').fadeOut();
  }, 5000);
}
}
document.getElementById('mcheckem-emp').addEventListener('input',checkemep);

function checkemep(){
var emck = $('#mcheckem-emp').val();
var res = $('#vrmail-emp').val();
if(emck == res){
document.getElementById('chembtn-emp').disabled= false;
}
else{
    document.getElementById('chembtn-emp').disabled= true;
}}

checkememp.addEventListener('submit',(event)=>{
    SendMailEmp();
});

$('#confrmpasskey-emp').on('keyup', function() {
    if ($('#newpasskey-emp').val() == $('#confrmpasskey-emp').val()) {
      $('#messagenew-emp').html('Matching').css('font-size', '12px');
      document.getElementById('submtnps-emp').disabled = false;
    } else {
      $('#messagenew-emp').html('Not Matching').css('font-size', '12px');
      document.getElementById('submtnps-emp').disabled = true;
    }
  });


  rstpkeyemp.addEventListener('submit', (event)=>{
    document.getElementById('submtnps-emp').disabled = true;
    document.getElementById("loader-emp").style.visibility = "hidden";
    var mailat =  $('#mcheckem-emp').val();
    var exid= $('#exidcheck-emp').val();
    var pchk = $('#confrmpasskey-emp').val();
    var ur1 = "https://script.google.com/macros/s/";
    var ur2= "AKfycbw2t4zxCPbX6Wo7KoLfyncU4PpzDTzOC-Xq-_4xgaEWaRVf2lP9FVmF_pKVVjVZ2QgwUw";
    var url = ur1+ur2+"/exec" + "?callback=ctrlqcngpkemp&exid="+exid+"&em="+mailat+"&pk="+escape(JSON.stringify(pchk))+"&action=cngpk";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
  })

function ctrlqcngpkemp(e){
var cs = e.result;
if(cs != "ID not found!"){
    document.getElementById("loader-emp").style.visibility = "hidden";
    $('#emp-three').hide();
    $('#emp-four').fadeIn();
}}

  function SendMailEmp() {
    var k1 =Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
    var k2 =Math.random().toString(26).substring(2, 10) + Math.random().toString(26).substring(2, 10);
    var mailat =  document.getElementById('mcheckem-emp').value;
    var exid= document.getElementById('exidcheck-emp').value;
    var emidbt= "ech1"+ k1 + "-"+window.btoa(mailat);
    var exidbt= "ech0"+ k2 + "-"+window.btoa(exid);
    var mln = "https://e-reset.mastrowall.com/?ep_reset="+exidbt+"&ep_check="+emidbt+"&n=true";
    var htm = "<html><body style='color:white;font-family:Arial, Helvetica, sans-serif;'><center><div align='center' style='border-radius:10px;background-color:#161616;padding:40px;max-width:600px;'><h2 style='color:white'>W E L C O M E</h2><h2><a target='_blank' href='https://mastrowall.com' style='text-decoration:none;'>M A S T R O W A L L</a></h2><p style='color:white;'>Reset your Online Test Passkey<br><br>Exam ID: <span style='font-size:16px;'>"
    +exid+"</span></p><a style='text-decoration:none;color:#fff444;line-height:60px;' target='_blank' href='"+mln+"'>Click Here >></a><br><p style='color:white;'>Contact: <a href='mailto:mail@mastrowall.com'>mail@mastrowall.com</a></p><h4 style='color:white;'>Thank You</h4><p style='font-size:12px;color:#cccccc;'>N.B. Do not reply to this email</p></div></center></body></html>";
      Email.send({
        SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
        To: mailat,
        From: "MASTROWALL<examportal@mastrowall.com>",
          Subject: "Exam Portal - MASTROWALL",
          Body:  htm,
      })
          .then(function (message) {
         if(message=="OK"){
        //   $("#resetp_two").show(); ==> $("#resetp_two").fadeIn();
        //   $("#resetp_one").fadeOut(); ==> $("#resetp_one").hide();
           document.getElementById('chembtn').disabled = true;
          document.getElementById('mailsuccs-emp').style.display= 'block';
          document.getElementById('mailsuccs-emp').innerHTML= 'Verification link send to your email.';
          setTimeout(function() {
            location.reload();
          }, 10000);
           
         }
         else{
          document.getElementById('mailsuccs-emp').style.display= 'block';
          document.getElementById('mailsuccs-emp').innerHTML= 'Contact Mastro Desk: '+'<a class="veremfalse" href="mailto:mail@mastrowall.com">Send Mail</a>';
         } 
          });
      }
    
var url_string = window.location.href;
var url = new URL(url_string);
var q = url.searchParams.get("ep_reset");
var k = url.searchParams.get("ep_check");
var r = url.searchParams.get("n");

if(r =="true"){
    var qDi = q.split('-');
    var qDf = window.atob(qDi[1]);
    var mDi = k.split('-');
    var mDf = window.atob(mDi[1]);
    document.getElementById('exidcheck-emp').value= qDf;
    document.getElementById('mcheckem-emp').value= mDf;
    $('#rst-emp').show();
    $('#emp-one,#emp-two').hide();
    $('#emp-three').show();
}