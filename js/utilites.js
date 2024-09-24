function commonInputIdGet(id) {
  const donation =  document.getElementById(id).value;
  const donationNum =parseFloat(donation);
    return donationNum;
}
function commonBalanceIdGet(id) {
  const donation =  document.getElementById(id).innerText;
  const donationNum =parseFloat(donation);
    return donationNum;
}
// date funtion
function date() {
  var date = new Date();
  var str = date.toString();
  return str ;
}






