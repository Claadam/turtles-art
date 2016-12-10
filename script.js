function nSpiralRing(n) {
  for (j=0; j<360/n; j++){
    goForward(180/n)
    nDegreesLeft((720/n)+1)
    goForward(360/n)
    nDegreesRight((360/n))
  }  
}

//for (q=0; q<12; q++){
//  nSpiralRing(4)
//  nSpiralRing(3)
//}

//for (q=0; q<3; q++){
//  nSpiralRing(5
//  nSpiralRing(4)
//  nSpiralRing(3)
//}

for (q=0; q<9; q++){
  nSpiralRing(6)
  nSpiralRing(5)
  nSpiralRing(4)
  nSpiralRing(3)
}