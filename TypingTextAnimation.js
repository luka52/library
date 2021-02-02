

function allftyp(){
  var i=0;

  text2 = document.querySelector("TypingTextAnimation").innerHTML
document.querySelector("TypingTextAnimation").innerHTML="";
  function typingtext() {
    if(i<text2.length){
      let textbar=document.querySelector("TypingTextAnimation");
      textbar.innerHTML += text2.charAt(i);
      i++;
      setTimeout(typingtext,500);
    }
  }
  
  typingtext();
}
allftyp();