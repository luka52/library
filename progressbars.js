
function ProgressBar(whggs,widthhh) {
  let whatselest=document.querySelector(whggs+" span");
  let progreslinee = document.querySelector("progress-line");
  whatselest.style.width=widthhh;
  const linkpppp=document.createElement('link')
linkpppp.type="text/css";
linkpppp.rel="stylesheet";
linkpppp.href="progress.css";
document.head.appendChild(linkpppp)
}
ProgressBar(".htmll","95%");