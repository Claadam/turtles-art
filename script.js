function nSpiralRing(n) {
  for (j=0; j<360/n; j++){
    goForward(180/n)
    nDegreesLeft((720/n)+1)
    goForward(360/n)
    nDegreesRight((360/n))
  }  
}

function four3Ring() {
for (q=0; q<12; q++){
  nSpiralRing(4)
  nSpiralRing(3)
}}

function four43Ring30Space () {
  for (q=0; q<6; q++){
    nSpiralRing(4)
    goInvisible(30)
    nSpiralRing(4)
    nSpiralRing(3)
  }}

function four43Ring60Space () {
  for (q=0; q<6; q++){
    nSpiralRing(4)
    goInvisible(60)
    nSpiralRing(4)
    goInvisible(60)
    nSpiralRing(3)
  }}

function five43Ring() {
for (q=0; q<3; q++){
  nSpiralRing(5)
  nSpiralRing(4)
  nSpiralRing(3)
}}


function six543Ring() {
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

four43Ring60Space()