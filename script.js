function nSpiralRing(n) {
  for (j=0; j<360/n; j++){
    goForward(180/n)
    nDegreesLeft((720/n)+1)
    goForward(360/n)
    nDegreesRight((360/n))
  }  
}

function fourThreeRing() {
for (q=0; q<12; q++){
  nSpiralRing(4)
  nSpiralRing(3)
}}

function fourFourThreeRing() {
  for (q=0; q<12; q++){
    nSpiralRing(4)
    nDegreesLeft(180)
    go
    nSpiralRing(4)
    nSpiralRing(3)
  }}

function fiveFourThreeRing() {
for (q=0; q<3; q++){
  nSpiralRing(5)
  nSpiralRing(4)
  nSpiralRing(3)
}}


function sixFiveFourThreeRing() {
for (q=0; q<6; q++){
  nSpiralRing(6)
  nSpiralRing(5)
  nSpiralRing(4)
  nSpiralRing(3)
}
nSpiralRing(6)
nSpiralRing(5)
nSpiralRing(4)
}

fourFourThreeRing()