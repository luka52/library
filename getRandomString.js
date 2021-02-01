
function getRandomString(chap) {
 const aaaa = document.querySelector('.randomString')
  random_string=''
  if (chapters==null) {
    var chapters="1q2w3e4r5t6y7u8i9o0pazsxdcfvgbhnjmkllmknjbhvgcfxdzsa0p9o8i7u6y5t4r3e2w1q"
  }
  if (chap==null) {
    chap=10
  }
  for (var i = 0; i < chap; i++) {
    random_string += chapters.charAt(Math.floor(Math.random() * chapters.length))
  }
  aaaa.innerHTML=random_string
  
}
getRandomString();