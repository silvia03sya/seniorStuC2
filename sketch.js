let pageImage = [];
let pageNumber = 0;

let headImage = [];
let headNumber = 0;
let headCount = 0;

let tvImage = [];
let tvNumber = 0;

let tvLeftButton;
let tvRightButton;
let eightHonest;
let eightLie;
let eightGenuine;
let eightAnnoyed;

function preload() {
  headImage[0] = loadImage('pages/2-2.png');
  headImage[1] = loadImage('pages/2-3.png');
  headImage[2] = loadImage('pages/blank.png');
  
  tvImage[0] = loadImage('pages/2-4.png');
  tvImage[1] = loadImage('pages/2-5.png');
  tvImage[2] = loadImage('pages/2-6.png');
  tvImage[3] = loadImage('pages/2-7.png');
  tvImage[4] = loadImage('pages/2-8.png');
  
  pageImage[0] = loadImage('pages/1_1.png');
  pageImage[1] = loadImage('pages/1_2.png');
  pageImage[2] = loadImage('pages/1_3.png');
  pageImage[3] = loadImage('pages/1_4.png');
  pageImage[4] = loadImage('pages/1_5.png');
  pageImage[5] = loadImage('pages/2.png');
  pageImage[6] = loadImage('pages/3_1.png');
  pageImage[7] = loadImage('pages/3_2.png');
  pageImage[8] = loadImage('pages/3_3.png');
  pageImage[9] = loadImage('pages/3_4.png');
  pageImage[10] = loadImage('pages/4_1.png');
  pageImage[11] = loadImage('pages/4_2.png');
  pageImage[12] = loadImage('pages/4_3.png');
  pageImage[13] = loadImage('pages/4_4.png');
  pageImage[14] = loadImage('pages/5_1.png');
  pageImage[15] = loadImage('pages/5_2.png');
  pageImage[16] = loadImage('pages/5_3.png');
  pageImage[17] = loadImage('pages/5_4.png');
  pageImage[18] = loadImage('pages/5_5.jpg');
  pageImage[19] = loadImage('pages/6_1.jpg');
  pageImage[20] = loadImage('pages/6_2.jpg');
  pageImage[21] = loadImage('pages/6_3.jpg');
  pageImage[22] = loadImage('pages/6_4.jpg');
  pageImage[23] = loadImage('pages/6_5.jpg');
  pageImage[24] = loadImage('pages/7_1.jpg');
  pageImage[25] = loadImage('pages/7_2.jpg');
  pageImage[26] = loadImage('pages/7_3.jpg');
  pageImage[27] = loadImage('pages/7_4.jpg');
  pageImage[28] = loadImage('pages/7_5.jpg');
  pageImage[29] = loadImage('pages/8_1.jpg');
  pageImage[30] = loadImage('pages/8_2.jpg');
  pageImage[31] = loadImage('pages/8_3.jpg');
  pageImage[32] = loadImage('pages/8_4.jpg');
  pageImage[33] = loadImage('pages/8_5.jpg');
  pageImage[34] = loadImage('pages/9_1.jpg');
  pageImage[35] = loadImage('pages/9_2.jpg');
  pageImage[36] = loadImage('pages/9_3.jpg');
  pageImage[37] = loadImage('pages/9_4.jpg');
  pageImage[38] = loadImage('pages/9_5.jpg');
  pageImage[39] = loadImage('pages/10_1.jpg');
  pageImage[40] = loadImage('pages/10_2.jpg');
  pageImage[41] = loadImage('pages/10_3.jpg');
  pageImage[42] = loadImage('pages/10_4.jpg');
  pageImage[43] = loadImage('pages/10_5.jpg');
  pageImage[44] = loadImage('pages/11_1.jpg');
  pageImage[45] = loadImage('pages/11_2.jpg');
  pageImage[46] = loadImage('pages/11_3.jpg');
  pageImage[47] = loadImage('pages/11_4.jpg');
  pageImage[48] = loadImage('pages/11_5.jpg');
  pageImage[49] = loadImage('pages/12wip.jpg');
  pageImage[50] = loadImage('pages/13_1.jpg');
  pageImage[51] = loadImage('pages/13_2.jpg');
  pageImage[52] = loadImage('pages/13_3.jpg');
  pageImage[53] = loadImage('pages/13_4.jpg');
  pageImage[54] = loadImage('pages/13_5.jpg');
  pageImage[55] = loadImage('pages/14_1.jpg');
  pageImage[56] = loadImage('pages/14_2.jpg');
  pageImage[57] = loadImage('pages/15_1.jpg');
  pageImage[58] = loadImage('pages/15_2.jpg');
  pageImage[59] = loadImage('pages/15_3.jpg');
  pageImage[60] = loadImage('pages/16_1.jpg');
  pageImage[61] = loadImage('pages/16_2.jpg');
  pageImage[62] = loadImage('pages/16_3.jpg');
  pageImage[63] = loadImage('pages/16_4.jpg');
  pageImage[64] = loadImage('pages/17_1.jpg');
  pageImage[65] = loadImage('pages/17_2.jpg');
  pageImage[66] = loadImage('pages/17_3.jpg');
  pageImage[67] = loadImage('pages/17_4.jpg');
  pageImage[68] = loadImage('pages/17_5.jpg');
  pageImage[69] = loadImage('pages/18_1.jpg');
  pageImage[70] = loadImage('pages/18_2.jpg');
  pageImage[71] = loadImage('pages/18_3.jpg');
  pageImage[72] = loadImage('pages/18_4.jpg');
  pageImage[73] = loadImage('pages/19_1.jpg');
  pageImage[74] = loadImage('pages/19_2.jpg');
  pageImage[75] = loadImage('pages/19_3.jpg');
  pageImage[76] = loadImage('pages/19_4.jpg');
  pageImage[77] = loadImage('pages/19_5.jpg');
  pageImage[78] = loadImage('pages/20_1.jpg');
  pageImage[79] = loadImage('pages/20_2.jpg');
  pageImage[80] = loadImage('pages/20_3.jpg');
  pageImage[81] = loadImage('pages/20_4.jpg');
  pageImage[82] = loadImage('pages/21_1.jpg');
  pageImage[83] = loadImage('pages/21_2.jpg');
  pageImage[84] = loadImage('pages/21_3.jpg');
  pageImage[85] = loadImage('pages/21_4.jpg');
  pageImage[86] = loadImage('pages/22_1.jpg');
  pageImage[87] = loadImage('pages/22_2.jpg');
  pageImage[88] = loadImage('pages/22_3.jpg');
  pageImage[89] = loadImage('pages/23_1.jpg');
  pageImage[90] = loadImage('pages/23_2.jpg');
  pageImage[91] = loadImage('pages/23_3.jpg');
  pageImage[92] = loadImage('pages/23_4.jpg');
  pageImage[93] = loadImage('pages/24_1.jpg');
  pageImage[94] = loadImage('pages/24_2.jpg');
  pageImage[95] = loadImage('pages/24_3.jpg');
  pageImage[96] = loadImage('pages/25_1.jpg');
  pageImage[97] = loadImage('pages/25_2.jpg');
  pageImage[98] = loadImage('pages/25_3.jpg');
  pageImage[99] = loadImage('pages/25_4.jpg');
  pageImage[100] = loadImage('pages/26_1.jpg');
  pageImage[101] = loadImage('pages/26_2.jpg');
  pageImage[102] = loadImage('pages/26_3.jpg');
  pageImage[103] = loadImage('pages/26_4.jpg');
  pageImage[104] = loadImage('pages/27-1.png');
  pageImage[105] = loadImage('pages/27-2.png');
  pageImage[106] = loadImage('pages/27-3.png');
  pageImage[107] = loadImage('pages/27-4.png');
  pageImage[108] = loadImage('pages/27-5.png');
  pageImage[109] = loadImage('pages/28_1.jpg');
  pageImage[110] = loadImage('pages/28_2.jpg');
  pageImage[111] = loadImage('pages/28_3.jpg');
  pageImage[112] = loadImage('pages/29_1.jpg');
  pageImage[113] = loadImage('pages/29_2.jpg');
  pageImage[114] = loadImage('pages/29_3.jpg');
  pageImage[115] = loadImage('pages/29_4.jpg');
  pageImage[116] = loadImage('pages/29_5.jpg');
  pageImage[117] = loadImage('pages/30_1.jpg');
  pageImage[118] = loadImage('pages/30_2.jpg');
  pageImage[119] = loadImage('pages/30_3.jpg');
  pageImage[120] = loadImage('pages/31_1.jpg');
  pageImage[121] = loadImage('pages/31_2.jpg');
  pageImage[122] = loadImage('pages/31_3.jpg');
  pageImage[123] = loadImage('pages/31_4.jpg');
  pageImage[124] = loadImage('pages/32_1.jpg');
  pageImage[125] = loadImage('pages/32_2.jpg');
  pageImage[126] = loadImage('pages/32_3.jpg');
  pageImage[127] = loadImage('pages/33_1.jpg');
  pageImage[128] = loadImage('pages/33_2.jpg');
  pageImage[129] = loadImage('pages/33_3.jpg');
  pageImage[130] = loadImage('pages/33_4.jpg');
  pageImage[131] = loadImage('pages/33_5.jpg');
  pageImage[132] = loadImage('pages/34_1.jpg');
  pageImage[133] = loadImage('pages/34_2.jpg');
  pageImage[134] = loadImage('pages/34_3.jpg');
  pageImage[135] = loadImage('pages/34_4.jpg');
  pageImage[136] = loadImage('pages/35_1.jpg');
  pageImage[137] = loadImage('pages/35_2.jpg');
  pageImage[138] = loadImage('pages/35_3.jpg');
  pageImage[139] = loadImage('pages/35_4.jpg');
  pageImage[140] = loadImage('pages/36_1.jpg');
  pageImage[141] = loadImage('pages/36_2.jpg');
  pageImage[142] = loadImage('pages/36_3.jpg');
  pageImage[143] = loadImage('pages/36_4.jpg');
  pageImage[144] = loadImage('pages/36_5.jpg');
  pageImage[145] = loadImage('pages/37_1.jpg');
  pageImage[146] = loadImage('pages/37_2.jpg');
  pageImage[147] = loadImage('pages/37_3.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //tv buttons
  tvLeftButton = createButton('<-');
  tvLeftButton.position(windowWidth*0.3, windowHeight*0.8);
  tvLeftButton.size(windowWidth*0.1, windowHeight*0.1);
  tvLeftButton.mousePressed(tvChannelBack);
  
  tvRightButton = createButton('->');
  tvRightButton.position(windowWidth*0.6, windowHeight*0.8);
  tvRightButton.size(windowWidth*0.1, windowHeight*0.1);
  tvRightButton.mousePressed(tvChannelForward);
  
  //page 8 interaction buttons
  eightHonest = createButton('Be Honest');
  eightHonest.position(windowWidth*0.15, windowHeight*0.65);
  eightHonest.size(windowWidth*0.7, windowHeight*0.1);
  eightHonest.mousePressed(eightHonestFunction);
  
  eightLie = createButton('Lie');
  eightLie.position(windowWidth*0.15, windowHeight*0.8);
  eightLie.size(windowWidth*0.7, windowHeight*0.1);
  eightLie.mousePressed(eightLieFunction);
  
  eightGenuine = createButton('Genuine');
  eightGenuine.position(windowWidth*0.15, windowHeight*0.65);
  eightGenuine.size(windowWidth*0.7, windowHeight*0.1);
  eightGenuine.mousePressed(eightGenuineFunction);
  
  eightAnnoyed = createButton('Annoyed');
  eightAnnoyed.position(windowWidth*0.15, windowHeight*0.8);
  eightAnnoyed.size(windowWidth*0.7, windowHeight*0.1);
  eightAnnoyed.mousePressed(eightAnnoyedFunction);
}

function draw() {
  background(220);
  
  //load pages
  image(pageImage[pageNumber], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
  
  //load the head for the second page
  if (pageNumber == 5) {
    image(tvImage[tvNumber], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
    image(headImage[headNumber], 0, 0, width, height, 0, 0, 2063, 3131, CONTAIN);
  }
  
  //show or hide buttons
  if (pageNumber == 5) {
    tvLeftButton.show();
    tvRightButton.show();
  } else {
    tvLeftButton.hide();
    tvRightButton.hide();
  }
  
  if (pageNumber == 29) {
    eightHonest.show();
    eightLie.show();
  } else {
    eightHonest.hide();
    eightLie.hide();
  }
  if (pageNumber == 30) {
    eightGenuine.show();
    eightAnnoyed.show();
  } else {
    eightGenuine.hide();
    eightAnnoyed.hide();
  }
}

function mousePressed() {
  //if mouse is on top right side of screen, go next page
  if (pageNumber >= 29 && pageNumber <= 30) {
    //do nothing
  }else if (mouseX > windowWidth*0.5 && mouseY < windowHeight*0.5) {
    if (pageNumber == 33 || pageNumber == 32 || pageNumber == 31) {
      pageNumber = 34;
    } else if (pageNumber == 147) {
      //do nothing
    } else {
      pageNumber++;
    }
    console.log('page: ' + pageNumber + ' head: ' + headNumber + ' tv: ' + tvNumber);
  }
}

//tv channel stuff
function tvChannelBack() {
  //make head fall
  headCount++;
  if (headCount == 3) {
    headNumber++;
  } else if (headCount == 6) {
    headNumber++;
  } 
  
  //go back a channel
  if (tvNumber == 0) {
    tvNumber = 4;
  } else {
    tvNumber--;
  }
}

function tvChannelForward() {
  //make head fall
  headCount++;
  if (headCount == 3) {
    headNumber++;
  } else if (headCount == 6) {
    headNumber++;
  } 
  
  //go forward a channel
  if (tvNumber == 4) {
    tvNumber = 0;
  } else {
    tvNumber++;
  }
}

function eightHonestFunction() {
  pageNumber = 30;
}

function eightLieFunction() {
  pageNumber = 33;
}

function eightGenuineFunction() {
  pageNumber = 32;
}

function eightAnnoyedFunction() {
  pageNumber = 31;
}

//if window is resized, resize the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}