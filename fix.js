//REPLACE "XXXX" WITH A STRING FROM THE TAGS IMAGE SRC
function checkTag() {
  if ( $('img[src*="XXXX"]') ) {
    $('img[src*="XXXX"]').css('width','1px').css('height','1px');
    clearInterval(myInterval);
  }
}
  
var myInterval = setInterval(checkTag, 1000);
