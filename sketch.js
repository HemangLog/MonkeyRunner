//IT'S MY GLEE TO HELP YOU, MARKS, THE MONKEY

//NAME
//MONKEY RUNNER


//var edge;
var homeBackGroundImg,backGround,backGroundImg1,
    backGroundImg2,backGroundImg3,invisibleGround,
    monkey,monkeyImgs;

var highLightBox1,highLightBox2,highLightBox3,
    highLightBox4,highLightBox5,highLightBox6,
    highLightBox7,highLightBox8,highLightBox9,highLightBox10,highLightBox11,highLightBox12,lock1,lock2,
    lock3,lock4,lock5,lock6,lock7,lock8,lock9,lock10,
    lock11,lockImg;

var boxForText1,boxForText2,boxForText3,boxForText4,boxForButton,
    boxForGuidance1,boxForGuidance2;

var time,energyLevel,wound,life,fruitsBeenEaten,
    score,fruitsBeenEatenTarget,life1,
    life2,life3,life4,life5,
    life6,life7,heartImg;

//Make different gameStates
var HOME = 9;
var SERVE1 = 8;
var SERVE2 = 7;
var SERVE3 = 6;
var SERVE4 = 5;
var SELECT = 4;
var PLAY = 3;
var PAUSE = 2;
var END = 1;
var WIN = 0;
var gameState = HOME;

var playButton,playButtonImg,readButton,
    readButtonImg,backButton1,backButton2,
    backButton3,backButton4,backButton5,
    backButtonImg,continueButton,continueButtonImg,
    mainMenuButton,mainMenuButtonImg,
    instructionsButton,instructionsButtonImg,
    pauseButton,pauseButtonImg,resumeButton,
    resumeButtonImg,resumeButtonWord,
    resumeButtonWordImg,resetButton,resetButtonImg,
    restartButton,restartButtonImg;
    
var fruitGroup,obstaclesGroup;

var fruit,fruitImg,obstalces,obstacleImg;

function preload(){
  
  homeBackGroundImg = loadImage("Home Page BackGround.jpg");
  backGroundImg1 = loadImage("backGround_1.jpg");
  backGroundImg2 = loadImage("backGround_2.jpg");
  backGroundImg3 = loadImage("backGround_3.jpg");
  
  monkeyImgs = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  lockImg = loadImage("Lock.jpg");
  
  heartImg = loadImage("Heart.png");
  
  playButtonImg = loadImage("playButton.jpg");
  readButtonImg = loadImage("readButton.jpg");
  backButtonImg = loadImage("backButton.jpg");
  continueButtonImg = loadImage("continueButton.jpg");
  instructionsButtonImg = loadImage("instructionsButton.jpg");
  mainMenuButtonImg = loadImage("mainMenuButton.jpg");
  pauseButtonImg = loadImage("pauseButton.jpg");
  resumeButtonImg = loadImage("resumeButton.jpg");
  resumeButtonWordImg = loadImage("resumeButtonWord.jpg");
  resetButtonImg = loadImage("resetButton.jpg");
  restartButtonImg = loadImage("restartButton.jpg");
  
  fruitImg = loadImage("banana.png");
  
  obstacleImg = loadImage("stone.png");
  
}

function setup(){
  
createCanvas(650,400);
//edge = createEdgeSprites();  
  
//Give a nature type feeling
backGround = createSprite(290,200);

backGround.addImage(homeBackGroundImg);
backGround.addImage(backGroundImg1);
backGround.addImage(backGroundImg2);
backGround.addImage(backGroundImg3);

//backGround.velocityX = -4;  
  
//Create a ground surface
invisibleGround = createSprite(325,380,650,5);
invisibleGround.visible = false;

//Create Monkey(character) 
monkey = createSprite(45,380);
monkey.addAnimation("monkey",monkeyImgs);
monkey.scale = 0.135;
  
//Create boxes for levels,create a attractive-type of //feeling
highLightBox1 = createSprite(52,105,100,60);
highLightBox1.shapeColor = 'blue';

highLightBox2 = createSprite(328,105,100,60);
highLightBox2.shapeColor = 'blue';

highLightBox3 = createSprite(598,105,100,60);
highLightBox3.shapeColor = 'blue';

highLightBox4 = createSprite(52,190,100,60);
highLightBox4.shapeColor = 'blue';

highLightBox5 = createSprite(328,190,100,60);
highLightBox5.shapeColor = 'blue';

highLightBox6 = createSprite(598,190,100,60);
highLightBox6.shapeColor = 'blue';

highLightBox7 = createSprite(52,275,100,60);
highLightBox7.shapeColor = 'blue';

highLightBox8 = createSprite(328,275,100,60);
highLightBox8.shapeColor = 'blue';

highLightBox9 = createSprite(598,275,100,60);
highLightBox9.shapeColor = 'blue';
  
highLightBox10 = createSprite(52,360,100,60);
highLightBox10.shapeColor = 'blue';
  
highLightBox11 = createSprite(328,360,100,60);
highLightBox11.shapeColor = 'blue';
  
highLightBox12 = createSprite(598,360,100,60);
highLightBox12.shapeColor = 'blue';  
  
//Create a lock for locking unopened levels  
lock1 = createSprite(328,105);
lock1.addImage(lockImg);
lock1.scale = 0.1;

lock2 = createSprite(598,105);
lock2.addImage(lockImg);
lock2.scale = 0.1;

lock3 = createSprite(52,190);
lock3.addImage(lockImg);
lock3.scale = 0.1;

lock4 = createSprite(328,190);
lock4.addImage(lockImg);
lock4.scale = 0.1;

lock5 = createSprite(598,190);
lock5.addImage(lockImg);
lock5.scale = 0.1;

lock6 = createSprite(52,275);
lock6.addImage(lockImg);
lock6.scale = 0.1;

lock7 = createSprite(327,275);
lock7.addImage(lockImg);
lock7.scale = 0.1;

lock8 = createSprite(598,275);
lock8.addImage(lockImg);
lock8.scale = 0.1;

lock9 = createSprite(52,360);
lock9.addImage(lockImg);
lock9.scale = 0.1;

lock10 = createSprite(328,360);
lock10.addImage(lockImg);
lock10.scale = 0.1;

lock11 = createSprite(598,360);
lock11.addImage(lockImg);
lock11.scale = 0.1;  
  
//Make boxes for highlighting the text
boxForText1 = createSprite(325,15,130,30);
boxForText1.shapeColor = 'yellow';

boxForText2 = createSprite(305,15,210,40);
boxForText2.shapeColor = 'yellow';

boxForText3 = createSprite(325,15,230,40);
boxForText3.shapeColor = 'yellow';
  
boxForText4 = createSprite(325,139,155,40);
boxForText4.shapeColor = 'green';

//Make boxes for highlighting the button
boxForButton = createSprite(41,76,40,40);
boxForButton.shapeColor = 'yellow';

//Make boxes for highlighting the text,which are for guidance  
boxForGuidance1 = createSprite(325,210,610,310);
boxForGuidance1.shapeColor = 'lightGreen';

boxForGuidance2 = createSprite(325,250,650,300);
boxForGuidance2.shapeColor = 'yellow';

boxForText4.depth = boxForGuidance1.depth;
boxForText4.depth = boxForText4.depth + 1;

boxForButton.depth = boxForGuidance1.depth;
boxForButton.depth = boxForButton.depth + 1;

//Create a score board,sub-score board
time = 0;
energyLevel = 100;
fruitsBeenEaten = 0;
score = 0;
life = 2;
wound = 0;
fruitsBeenEatenTarget = 20;

/*life1 = createSprite(250,70);
life1.addImage(heartImg);
life1.scale = 0.02;
  
life2 = createSprite(260,70);
life2.addImage(heartImg);
life2.scale = 0.02;
  
life3 = createSprite(270,70);
life3.addImage(heartImg);
life3.scale = 0.02;
  
life4 = createSprite(280,70);
life4.addImage(heartImg);
life4.scale = 0.02;
  
life5 = createSprite(290,70);
life5.addImage(heartImg);
life5.scale = 0.02;
  
life6 = createSprite(300,70);
life6.addImage(heartImg);
life6.scale = 0.02;
  
life7 = createSprite(310,70);
life7.addImage(heartImg);
life7.scale = 0.02;*/
  
//Create different buttons for different functions
playButton = createSprite(339,217);
playButton.addImage(playButtonImg);
playButton.scale = 0.2;

readButton = createSprite(339,295);
readButton.addImage(readButtonImg);
readButton.scale = 0.8;

backButton1 = createSprite(610,9);
backButton1.addImage(backButtonImg);
backButton1.scale = 0.1;
 
backButton2 = createSprite(43,9);
backButton2.addImage(backButtonImg);
backButton2.scale = 0.1;
 
backButton3 = createSprite(610,9);
backButton3.addImage(backButtonImg);
backButton3.scale = 0.1;

backButton4 = createSprite(43,9);
backButton4.addImage(backButtonImg);
backButton4.scale = 0.1;

backButton5 = createSprite(40,9);
backButton5.addImage(backButtonImg);
backButton5.scale = 0.1;

continueButton = createSprite(238,293);
continueButton.addImage(continueButtonImg);
continueButton.scale = 0.3;
    
mainMenuButton = createSprite(200,354);
mainMenuButton.addImage(mainMenuButtonImg);
mainMenuButton.scale = 0.4;  
  
instructionsButton = createSprite(595,295);
instructionsButton.addImage(instructionsButtonImg);
instructionsButton.scale = 0.3;

pauseButton = createSprite(635,18);
pauseButton.addImage(pauseButtonImg);
pauseButton.scale = 0.05;

resumeButton = createSprite(41,76);
resumeButton.addImage(resumeButtonImg);
resumeButton.scale = 0.05;

resumeButtonWord = createSprite(181,273);
resumeButtonWord.addImage(resumeButtonWordImg);
resumeButtonWord.scale = 0.1;

resetButton = createSprite(175,325);
resetButton.addImage(resetButtonImg);
resetButton.scale = 0.07;

restartButton = createSprite(130,320);
restartButton.addImage(restartButtonImg);
restartButton.scale = 0.07;

//Create groups for specific same objects
fruitGroup = new Group();
obstaclesGroup = new Group();

}

function draw(){
  
  background('white');
  
  //Conditions and outcomes
  if(gameState === HOME || gameState === SERVE1 ||
     gameState === SERVE2 || gameState === SERVE3 ||
     gameState === SERVE4){
    
    if(gameState === HOME){
      
      backGround.addImage(homeBackGroundImg);
      backGround.scale = 0.8;
      
      playButton.visible = true;
      readButton.visible = true;
      
      continueButton.visible = false;
      instructionsButton.visible = false;
      mainMenuButton.visible = false;
      boxForText1.visible = false;
      boxForText2.visible = false;
      
      backButton1.visible = false;
      backButton2.visible = false;
      backButton3.visible = false;
      backButton4.visible = false;
      backButton5.visible = false;
      
      if(mousePressedOver(playButton)){
        
        gameState = SELECT;
        
      }
      
      if(mousePressedOver(readButton)){
        
        gameState = SERVE1;
        
      } 
    }
    
    if(gameState === SERVE1){
    
      backGround.x = 328;
      
      backGround.addImage(backGroundImg3);
      backGround.scale = 0.63;
      
      playButton.visible = false;
      readButton.visible = false;
      continueButton.visible = true;
      instructionsButton.visible = false;
      
      mainMenuButton.x = 200;
      mainMenuButton.y = 354;
      
      mainMenuButton.visible = true;
      
      boxForText1.visible = true;
      boxForText2.visible = false;
      
      backButton1.visible = true;
      backButton2.visible = false;
      backButton3.visible = false;
      backButton4.visible = false;
      backButton5.visible = false;
    
      if(mousePressedOver(continueButton)){
      
        gameState = SERVE2;
      
      }
      
      if(mousePressedOver(mainMenuButton)){
        
        gameState = SELECT;
        
      }
      
      if(mousePressedOver(backButton1)){
        
        gameState = HOME;
        
      }
    }
    
    if(gameState === SERVE2){
      
      playButton.visible = false;
      readButton.visible = false;
      continueButton.visible = false;
      instructionsButton.visible = true;
      
      mainMenuButton.x = 215;
      mainMenuButton.y = 354;
      
      mainMenuButton.visible = true;
      
      boxForText1.visible = false;
      boxForText2.visible = false;
      
      backButton1.visible = false;
      backButton2.visible = true;
      backButton3.visible = false;
      backButton4.visible = false;
      backButton5.visible = false;
      
      if(mousePressedOver(instructionsButton)){
        
        gameState = SERVE3;
        
      }
      
      if(mousePressedOver(mainMenuButton)){
        
        gameState = SELECT;
        
      }
      
      if(mousePressedOver(backButton2)){
        
        gameState = SERVE1;
        
      }
    }
    
    if(gameState === SERVE3){
      
      playButton.visible = false;
      readButton.visible = false;
      instructionsButton.visible = false;
      
      mainMenuButton.x = 215;
      mainMenuButton.y = 354;
      
      mainMenuButton.visible = true;
      
      boxForText1.visible = false;
      boxForText2.visible = true;
      
      backButton1.visible = false;
      backButton2.visible = false;
      backButton3.visible = true;
      backButton4.visible = false;
      backButton5.visible = false;
      
      if(keyDown('space')){
        
        gameState = SERVE4;
        
      }
      
      if(mousePressedOver(mainMenuButton)){
        
        gameState = SELECT;
        
      }
      
      if(mousePressedOver(backButton3)){
        
        gameState = SERVE2;
        
      }
    }
    
    if(gameState === SERVE4){
      
      playButton.visible = false;
      readButton.visible = false;
      instructionsButton.visible = false;
      
      mainMenuButton.visible = true;
      
      boxForText1.visible = false;
      boxForText2.visible = false;
      
      backButton1.visible = false;
      backButton2.visible = false;
      backButton3.visible = false;
      backButton4.visible = true;
      backButton5.visible = false;
      
      if(mousePressedOver(mainMenuButton)){
        
        gameState = SELECT;
        
      }
      
      if(mousePressedOver(backButton4)){
          
        gameState = SERVE3;
          
      }
    }
    
    monkey.visible = false;
    
    backGround.y = 200;
    
    pauseButton.visible = false;
    resumeButton.visible = false;
    
    highLightBox1.visible = false;
    highLightBox2.visible = false;
    highLightBox3.visible = false;
    highLightBox4.visible = false;
    highLightBox5.visible = false;
    highLightBox6.visible = false;
    highLightBox7.visible = false;
    highLightBox8.visible = false;
    highLightBox9.visible = false;
    highLightBox10.visible = false;
    highLightBox11.visible = false;
    highLightBox12.visible = false;
    
    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false;
    lock6.visible = false;
    lock7.visible = false;
    lock8.visible = false;
    lock9.visible = false;
    lock10.visible = false;
    lock11.visible = false;

    resetButton.visible = false;
    restartButton.visible = false;
    resumeButton.visible = false;
    resumeButtonWord.visible = false;
    pauseButton.visible = false;
    
    boxForText3.visible = false;
    boxForText4.visible = false;
    boxForButton.visible = false;
    boxForGuidance1.visible = false;
    boxForGuidance2.visible = false;
    
    /*life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    life4.visible = false;
    life5.visible = false;
    life6.visible = false;
    life7.visible = false;*/
  }
  
  if(gameState === SELECT){
    
    backGround.x = 328;
    backGround.y = 200;
    
    backGround.addImage(backGroundImg3);
    backGround.scale = 0.63;
    
    playButton.visible = false;
    readButton.visible = false;
    
    continueButton.visible = false;
    instructionsButton.visible = false;
    mainMenuButton.visible = false;
    
    highLightBox1.visible = true;
    highLightBox2.visible = true;
    highLightBox3.visible = true;
    highLightBox4.visible = true;
    highLightBox5.visible = true;
    highLightBox6.visible = true;
    highLightBox7.visible = true;
    highLightBox8.visible = true;
    highLightBox9.visible = true;
    highLightBox10.visible = true;
    highLightBox11.visible = true;
    highLightBox12.visible = true;
    lock1.visible = true;
    lock2.visible = true;
    lock3.visible = true;
    lock4.visible = true;
    lock5.visible = true;
    lock6.visible = true;
    lock7.visible = true;
    lock8.visible = true;
    lock9.visible = true;
    lock10.visible = true;
    lock11.visible = true;
    
    backButton5.visible = true;
    
    boxForText1.visible = false;
    boxForText2.visible = false;
    boxForText3.visible = true;
    boxForText4.visible = false;
    boxForButton.visible = false;
    
    boxForGuidance1.visible = false;
    boxForGuidance2.visible = false;
    
    resetButton.visible = false;
    restartButton.visible = false;
    resumeButton.visible = false;
    resumeButtonWord.visible = false;
    pauseButton.visible = false;
  
    /*life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    life4.visible = false;
    life5.visible = false;
    life6.visible = false;
    life7.visible = false;*/
    
    backButton1.visible = false;
    backButton2.visible = false;
    backButton3.visible = false;
    backButton4.visible = false;
    
    if(mousePressedOver(backButton5)){
      
      gameState = SERVE4;
      
    }
    
    if(highLightBox1.shapeColor === 'green'){
      
      lock1.visible = false;
      
    }
    
    if(highLightBox2.shapeColor === 'green'){
      
      lock2.visible = false;
      
    }
    
    if(highLightBox3.shapeColor === 'green'){
      
      lock3.visible = false;
      
    }
    
    if(highLightBox4.shapeColor === 'green'){
      
      lock4.visible = false;
      
    }
    
    if(highLightBox5.shapeColor === 'green'){
      
      lock5.visible = false;
      
    }
    
    if(highLightBox6.shapeColor === 'green'){
      
      lock6.visible = false;
      
    }
    
    if(highLightBox7.shapeColor === 'green'){
      
      lock7.visible = false;
      
    }
    
    if(highLightBox8.shapeColor === 'green'){
      
      lock8.visible = false;
    }
    
    if(highLightBox9.shapeColor === 'green'){
      
      lock9.visible = false;
    }
    
    if(highLightBox10.shapeColor === 'green'){
      
      lock10.visible = false;
    }
    
    if(highLightBox11.shapeColor === 'green'){
      
      lock11.visible = false;
    }
    
    if((mousePressedOver(highLightBox1)) || (mousePressedOver(highLightBox2) &&
        lock1.visible === false) || (mousePressedOver(highLightBox3) && 
        lock2.visible === false) || (mousePressedOver(highLightBox4) &&
        lock3.visible === false) || (mousePressedOver(highLightBox5) && 
        lock4.visible === false) || (mousePressedOver(highLightBox6) &&
        lock5.visible === false) || (mousePressedOver(highLightBox7) && 
        lock6.visible === false) || (mousePressedOver(highLightBox8) &&
        lock7.visible === false) ||
(mousePressedOver(highLightBox9) &&
        lock8.visible === false) || (mousePressedOver(highLightBox10) &&
        lock9.visible === false) ||
(mousePressedOver(highLightBox11)  &&
        lock10.visible === false) ||
(mousePressedOver(highLightBox12) &&
        lock11.visible === false)){
          
      monkey.x = 45;
      monkey.y = 380;
 
      if(mousePressedOver(highLightBox1)){
           
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 2;
        fruitsBeenEatenTarget = 20;
        
        /*life1.x = 315;
        life2.x = 340;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = false;
        life4.visible = false;
        life5.visible = false;
        life6.visible = false;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox2) && lock1.visible === false){
          
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 2;
        fruitsBeenEatenTarget = 40;
        
        /*life1.x = 315;
        life2.x = 330;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = false;
        life4.visible = false;
        life5.visible = false;
        life6.visible = false;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox3) && lock2.visible === false){

        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 3;
        fruitsBeenEatenTarget = 60;
        
        /*life1.x = 310;
        life2.x = 325;
        life3.x = 340;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = false;
        life5.visible = false;
        life6.visible = false;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox4) && lock3.visible === false){
 
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 3;
        fruitsBeenEatenTarget = 80;
        
        /*life1.x = 310;
        life2.x = 325;
        life3.x = 340;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = false;
        life5.visible = false;
        life6.visible = false;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox5) && lock4.visible === false){
 
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 4;
        fruitsBeenEatenTarget = 100;
        
        /*life1.x = 305;
        life2.x = 320;
        life3.x = 335;
        life4.x = 350;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = true;
        life5.visible = false;
        life6.visible = false;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox6) && lock5.visible === false){

        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 4;
        fruitsBeenEatenTarget = 120;
        
        /*life1.x = 305;
        life2.x = 320;
        life3.x = 335;
        life4.x = 350;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = true;
        life5.visible = false;
        life6.visible = false;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox7) && lock6.visible === false){
        
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 5;
        fruitsBeenEatenTarget = 140;
        
        /*life1.x = 290;
        life2.x = 305;
        life3.x = 320;
        life4.x = 335;
        life5.x = 350;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = true;
        life5.visible = true;
        life6.visible = false;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox8) && lock7.visible === false){

        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 5;
        fruitsBeenEatenTarget = 160;
        
        /*life1.x = 290;
        life2.x = 305;
        life3.x = 320;
        life4.x = 335;
        life5.x = 350;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = true;
        life5.visible = true;
        life6.visible = false;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox9) && lock8.visible === false){
        
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 6;
        fruitsBeenEatenTarget = 180;
        
        /*life1.x = 275;
        life2.x = 290;
        life3.x = 305;
        life4.x = 320;
        life5.x = 335;
        life6.x = 350;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = true;
        life5.visible = true;
        life6.visible = true;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox10) && lock9.visible === false){
        
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 6;
        fruitsBeenEatenTarget = 200;
        
        /*life1.x = 275;
        life2.x = 290;
        life3.x = 305;
        life4.x = 320;
        life5.x = 335;
        life6.x = 350;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = true;
        life5.visible = true;
        life6.visible = true;
        life7.visible = false;*/
      }
      
      if(mousePressedOver(highLightBox11) && lock10.visible === false){
        
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 7;
        fruitsBeenEatenTarget = 220;
        
        /*life1.x = 275;
        life2.x = 290;
        life3.x = 305;
        life4.x = 320;
        life5.x = 335;
        life6.x = 350;
        life7.x = 365;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = true;
        life5.visible = true;
        life6.visible = true;
        life7.visible = true;*/
      }
      
      if(mousePressedOver(highLightBox12) && lock11.visible === false){
        
        time = 0;
        energyLevel = 100;
        fruitsBeenEaten = 0;
        score = 0;
        wound = 0;
        life = 7;
        fruitsBeenEatenTarget = 240;
        
        /*life1.x = 275;
        life2.x = 290;
        life3.x = 305;
        life4.x = 320;
        life5.x = 335;
        life6.x = 350;
        life7.x = 365;
        
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = true;
        life5.visible = true;
        life6.visible = true;
        life7.visible = true;*/
      }
      
      backGround.scale = 2;
      gameState = PLAY;
    }
  }
  
  if(gameState === PLAY){
    
    backGround.y = 120;
    
    backGround.addImage(backGroundImg1);
    backGround.scale = 1.31;
    if((fruitsBeenEaten >= 5 &&                   fruitsBeenEatenTarget === 20) ||          (fruitsBeenEaten >= 10 &&                   fruitsBeenEatenTarget === 40) ||          (fruitsBeenEaten >= 15 &&                   fruitsBeenEatenTarget === 60) ||          (fruitsBeenEaten >= 20 &&                   fruitsBeenEatenTarget === 80) ||          (fruitsBeenEaten >=25 &&                   fruitsBeenEatenTarget === 100) ||        (fruitsBeenEaten >= 30 &&                   fruitsBeenEatenTarget === 120) ||        (fruitsBeenEaten >= 35 &&                   fruitsBeenEatenTarget === 140) ||        (fruitsBeenEaten >= 40 &&                   fruitsBeenEatenTarget === 160) ||        (fruitsBeenEaten >= 45 &&                   fruitsBeenEatenTarget === 180) ||        (fruitsBeenEaten >= 50 &&                   fruitsBeenEatenTarget === 200) ||        (fruitsBeenEaten >= 55 &&                   fruitsBeenEatenTarget === 220) ||        (fruitsBeenEaten >= 60 &&                   fruitsBeenEatenTarget === 240)){
      
      backGround.velocityX = -7;
    }
    
    if((fruitsBeenEaten < 5 &&                     fruitsBeenEatenTarget === 20) ||          (fruitsBeenEaten < 10 &&                   fruitsBeenEatenTarget === 40) ||          (fruitsBeenEaten < 15 &&                   fruitsBeenEatenTarget === 60) ||          (fruitsBeenEaten < 20 &&                   fruitsBeenEatenTarget === 80) ||          (fruitsBeenEaten < 25 &&                   fruitsBeenEatenTarget === 100) ||        (fruitsBeenEaten < 30 &&                   fruitsBeenEatenTarget === 120) ||        (fruitsBeenEaten < 35 &&                   fruitsBeenEatenTarget === 140) ||        (fruitsBeenEaten < 40 &&                   fruitsBeenEatenTarget === 160) ||        (fruitsBeenEaten < 45 &&                   fruitsBeenEatenTarget === 180) ||        (fruitsBeenEaten < 50 &&                   fruitsBeenEatenTarget === 200) ||        (fruitsBeenEaten < 55 &&                   fruitsBeenEatenTarget === 220) ||        (fruitsBeenEaten < 60 &&                   fruitsBeenEatenTarget === 240)){
    
      backGround.velocityX = -4;
    }
    
    monkey.visible = true;
    
    time = Math.round(frameCount/14);
    
    highLightBox1.visible = false;
    highLightBox2.visible = false;
    highLightBox3.visible = false;
    highLightBox4.visible = false;
    highLightBox5.visible = false;
    highLightBox6.visible = false;
    highLightBox7.visible = false;
    highLightBox8.visible = false;
    highLightBox9.visible = false;
    highLightBox10.visible = false;
    highLightBox11.visible = false;
    highLightBox12.visible = false;
    lock1.visible = false;
    lock2.visible = false;
    lock3.visible = false;
    lock4.visible = false;
    lock5.visible = false;
    lock6.visible = false;
    lock7.visible = false;
    lock8.visible = false;
    lock9.visible = false;
    lock10.visible = false;
    lock11.visible = false;
    
    mainMenuButton.visible = false;
    pauseButton.visible = true;
    resumeButton.visible = false;
    resumeButtonWord.visible = false;
    resetButton.visible = false;
    //restartButton.visible = false;
    
    backButton1.visible = false;
    backButton2.visible = false;
    backButton3.visible = false;
    backButton4.visible = false; 
    backButton5.visible = false;
    
    boxForText1.visible = false;
    boxForText2.visible = false;
    boxForText3.visible = false;
    boxForText4.visible = false;
    boxForButton.visible = false;
    boxForGuidance1.visible = false;
    boxForGuidance2.visible = false;

    if(backGround.x < 0){
      
      backGround.x = backGround.width/2;
      
    }
    
    if(keyDown("space") && monkey.y >= 320){
      
      monkey.velocityY = -10;
      
    }
    
    monkey.velocityY = monkey.velocityY + 0.5;
    
    
    
    if(mousePressedOver(pauseButton)){
    
      gameState = PAUSE;
      
    }
    
    if(monkey.isTouching(fruitGroup)){
      
      fruitGroup.destroyEach();
      fruitsBeenEaten = fruitsBeenEaten + 1;
      score = fruitsBeenEaten*2;
    }
    
    if(fruitsBeenEaten % 5 === 0){
      
      energyLevel = energyLevel - 1;
    }
    
    if(fruitsBeenEaten % 3 === 0 || energyLevel < 0){
      
      energyLevel = energyLevel + 2;
    }
    
    if((fruitsBeenEaten < 3 && fruitsBeenEatenTarget > 99) || (energyLevel > 100)){
    
      energyLevel = energyLevel - 25;  
      
    }
    
    if(fruitsBeenEaten > 117 &&fruitsBeenEatenTareget > 239){
  
    
      energyLevel = energyLevel + 27;  
      
    }
    
    if(monkey.isTouching(obstaclesGroup)){
      
      obstaclesGroup.destroyEach();
      monkey.velocityY = -5;
      wound = wound + 1;
      life = life - 1;
      
      /*if((highLightBox1.shapeColor === 'blue' ||
         highLightBox1.shapeColor === 'green'||
         highLightBox2.shapeColor === 'green') && (monkey.isTouching(obstaclesGroup))){
        
        if(life1.visible === true && 
           life2.visible === true){
          
          life2.visible = false;
        }
         
        if(life1.visible === true &&
           life2.visible === false){
          
          life1.visible = false;
        }  
      }
      
      if(highLightBox3.shapeColor === 'blue' ||
         highLightBox3.shapeColor === 'green'||
         highLightBox4.shapeColor === 'green'){
        
        if(life1.visible === true && 
           life2.visible === true &&
           life3.visible === true){
          
          life3.visible = false;
        }
         
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === false){
          
          life2.visible = false;
        }  
        
        if(life1.visible === true &&
           life2.visible === false){
          
          life1.visible = false;
        }
      }
      
      if(highLightBox5.shapeColor === 'blue' ||
         highLightBox5.shapeColor === 'green'||
         highLightBox6.shapeColor === 'green'){
        
        if(life1.visible === true && 
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true){
          
          life4.visible = false;
        }
         
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === false){
          
          life3.visible = false;
        }  
        
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === false){
          
          life2.visible = false;
        }
        
        if(life1.visible === true &&
           life2.visible === false){
          
          life1.visible = false;
        }
      }
      
      if(highLightBox7.shapeColor === 'blue' ||
         highLightBox7.shapeColor === 'green'||
         highLightBox8.shapeColor === 'green'){
        
        if(life1.visible === true && 
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === true){
          
          life5.visible = false;
        }
         
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === false){
          
          life4.visible = false;
        }  
        
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === false){
          
          life3.visible = false;
        }
        
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === false){
          
          life2.visible = false;
        }
      
        if(life1.visible === true &&
           life2.visible === false){
           
          life1.visible = false;
        }
      }
      
        if(highLightBox9.shapeColor === 'blue' ||
         highLightBox9.shapeColor === 'green'||
         highLightBox10.shapeColor === 'green'){
        
        if(life1.visible === true && 
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === true &&
           life6.visible === true){
          
          life6.visible = false;
        }
         
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === true &&
           life6.visible === false){
          
          life5.visible = false;
        }  
        
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === false){
          
          life4.visible = false;
        }
        
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === false){
          
          life3.visible = false;
        }
      
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === false){
           
          life2.visible = false;
        }
          
        if(life1.visible === true &&
          life2.visible === false)  {
          
          life1.visible = false;
        }
      }
      
        if(highLightBox11.shapeColor === 'blue' ||
         highLightBox11.shapeColor === 'green'||
         highLightBox12.shapeColor === 'green'){
        
        if(life1.visible === true && 
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === true &&
           life6.visible === true &&
           life7.visible === true){
          
          life7.visible = false;
        }
         
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === true &&
           life6.visible === true &&
           life7.visible === false){
          
          life6.visible = false;
        }  
        
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === true &&
           life6.visible === false){
          
          life5.visible = false;
        }
        
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === true &&
           life5.visible === false){
          
          life4.visible = false;
        }
      
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === true &&
           life4.visible === false){
           
          life3.visible = false;
        }
          
        if(life1.visible === true &&
           life2.visible === true &&
           life3.visible === false){
          
          life2.visible = false;
        }  
          
        if(life1.visible === true &&
           life2.visible === false){
          
          life1.visible = false;
        }  
      }*/
    }
    
    if((score === 10*2 && fruitsBeenEatenTarget === 20) || (score === 20*2 && fruitsBeenEatenTarget === 40) || (score === 30*2 && fruitsBeenEatenTarget === 60) || (score === 40*2 && fruitsBeenEatenTarget === 80) || (score === 50*2 && fruitsBeenEatenTarget === 100) || (score === 60*2 && fruitsBeenEatenTarget === 120) || (score === 70*2 && fruitsBeenEatenTarget === 140) || (score === 80*2 && fruitsBeenEatenTarget === 160) || (score === 90*2 && fruitsBeenEatenTarget === 180) ||
(score === 100*2 && fruitsBeenEatenTarget === 200) ||
(score === 110*2 && fruitsBeenEatenTarget === 220) ||
(score === 120*2 && fruitsBeenEatenTarget === 240)){
      
      gameState = WIN;   
    }
    
    if(life === 0){
      
      gameState = END; 
    }
  } 
  
  if(gameState === PAUSE){
    
    backGround.velocityX = 0;
  
    backGround.y = 200;
    
    fruitGroup.setVelocityXEach(0);
    fruitGroup.destroyEach();
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.destroyEach();
    
    monkey.visible = false;
    
    /*life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    life4.visible = false;
    life5.visible = false;
    life6.visible = false;
    life7.visible = false;*/
    
    boxForText3.visible = false;
    boxForText4.visible = true;
    boxForButton.visible = true;
    boxForGuidance1.visible = true;
    boxForGuidance2.visible = false;
    pauseButton.visible = false;
    
    resetButton.visible = true;
    resumeButton.visible = true;
    resumeButtonWord.visible = true;
    
    if(mousePressedOver(resetButton)){
      
      backGround.velocityX = 0;
      backGround.scale = 0.8;
      gameState = PLAY;
      gameState = SELECT;
    }
    
    if(mousePressedOver(resumeButton) || mousePressedOver(resumeButtonWord)){
      
      gameState = PLAY;
    }
  }
  
  if(gameState === WIN){
    
    backGround.velocityX = 0;
    
    backGround.y = 200;
    
    monkey.visible = false;
    monkey.velocityX = 0;
    
    fruitGroup.setVelocityXEach(0);
    fruitGroup.destroyEach();
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.destroyEach();
    
    boxForGuidance2.visible = true;
    
    /*life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    life4.visible = false;
    life5.visible = false;
    life6.visible = false;
    life7.visible = false;*/
    
    mainMenuButton.x = 140;
    mainMenuButton.y = 150;
    
    pauseButton.visible = false;
    mainMenuButton.visible = true;
    
    if(mousePressedOver(mainMenuButton)){
      
      gameState = SELECT;
      
      if(score === 10*2 && highLightBox1.shapeColor === 'blue'){
        
        highLightBox1.shapeColor = 'green';
      }
      
      if(score === 20*2 && highLightBox2.shapeColor === 'blue'){
        
        highLightBox2.shapeColor = 'green'; 
      }
      
      if(score === 30*2 && highLightBox3.shapeColor === 'blue'){
        
        highLightBox3.shapeColor = 'green';
      }
      
      if(score === 40*2 && highLightBox4.shapeColor === 'blue'){
        
        highLightBox4.shapeColor = 'green'; 
      }
      
      if(score === 50*2 && highLightBox5.shapeColor === 'blue'){
        
        highLightBox5.shapeColor = 'green';
      }
      
      if(score === 60*2 && highLightBox6.shapeColor === 'blue'){
        
        highLightBox6.shapeColor = 'green';
      }
      
      if(score === 70*2 && highLightBox7.shapeColor === 'blue'){
        
        highLightBox7.shapeColor = 'green';   
      }
      
      if(score === 80*2 && highLightBox8.shapeColor === 'blue'){
        
        highLightBox8.shapeColor = 'green'; 
      }
      
      if(score === 90*2 && highLightBox9.shapeColor === 'blue'){
        
        highLightBox9.shapeColor = 'green';
      }
      
      if(score === 100*2 && highLightBox10.shapeColor === 'blue'){
        
        highLightBox10.shapeColor = 'green';
      }
      
      if(score === 110*2 && highLightBox11.shapeColor === 'blue'){
        
        highLightBox11.shapeColor = 'green';
      }
      
      if(score === 120*2 && highLightBox12.shapeColor === 'blue'){
        
        highLightBox12.shapeColor = 'green';
      }
    }
  }
  
  if(gameState === END){
    
    backGround.y = 200;
  
    backGround.velocityX = 0;
    backGround.x = backGround.width/2;
    backGround.y = 200;
    
    monkey.visible = false;
    
    fruitGroup.setVelocityXEach(0);
    fruitGroup.destroyEach();
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.destroyEach();
    
    pauseButton.visible = false;
    boxForGuidance2.visible = true;
  
    /*life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    life4.visible = false;
    life5.visible = false;
    life6.visible = false;
    life7.visible = false;*/
    
    resetButton.visible = true;
    restartButton.visible = true;
    
    resetButton.x = 225;
    resetButton.y = 280;
    
    restartButton.x = 225;
    restartButton.y = 337;
  
    if(mousePressedOver(resetButton)){
      
      monkey.x = 45;
      monkey.y = 380;
      gameState = SELECT;      
    }
    
    if(mousePressedOver(restartButton)){
      
      monkey.x = 45;
      monkey.y = 380;
      gameState = HOME;
    }
  }
  
  monkey.collide(invisibleGround);
  
  appearFruits();
  appearObstacles();
  
  drawSprites();  
  
  if(gameState === HOME){
    
    stroke("red");
    strokeWeight(25);
    textSize(35);
    text("MONKEY",228,95);
    text("Runner",324,142);
    stroke("white");
    strokeWeight(4);
    textSize(25);
    text("___________________________",150,170);
    text("___________________________",150,335);
    stroke("yellow");
    strokeWeight(2);
    text("*Note: Instructions are very much",150,365);
    text("important",285,390);
  }
  
  if(gameState === SERVE1){
    
    stroke("green");
    strokeWeight(2);
    textSize(23);
    text("Click             Button to read the leftout",145,300);
    text("part of the story.",200,330);
    textSize(25);
    text("Click                 Button to go to",85,363);
    text("the Main Menu",360,393);
    stroke("white");
    strokeWeight(4);
    text("___________________________________________",25,245);
    stroke('red');
    strokeWeight(2);
    text("STORY :",280,25);
    stroke("yellow");
    text(23);
    text("=> Your friend, Marks, who is a Monkey, don't want to live",5,60);
    text("inside the bars and can't bear this type of treatment,",55,90);
    text("injustice in Zoo for Human's entertainment. Marks,",70,120);
    text("somehow managed to run out of the zoo at night, but,",52,150);
    text("needs help to run far away from the zoo safely in the",57,180);
    text("morning without letting the zoo workers know, as",79,210);
  }
  
  if(gameState === SERVE2){
    
    stroke("blue");
    strokeWeight(2);
    textSize(25);
    text("Main Task You Need To Do: Help The Monkey",67,253);
    stroke("green");
    strokeWeight(2);
    text("Click       ",485,302);
    text("Button to read the instructions",140,332);
    text("Click                  Button to go to the",100,362);
    text("Main Menu Page",360,392);
    stroke("white");
    strokeWeight(4);
    text("___________________________________________",25,210);
    text("________________________________________",45,267);
    stroke("yellow");
    strokeWeight(2);
    textSize(23);
    text("Marks knew the zoo workers shall come to find him in the",40,80);
    text("morning.So,he needs help from you to cover a huge distance,",15,110);
    text("by dodging the obstacles in the forest and running from the",15,170);
    text("zoo workers.",275,200);
  }
  
  if(gameState === SERVE3){
    
    stroke('red');
    strokeWeight(2);
    textSize(25);
    text("INSTRUCTIONS :",205,25);
    stroke("green");
    strokeWeight(2);
    text("Press 'Space' to read more",175,315);
    text("Click                 Button to go to",100,360);
    text("the Main Menu",360,390);
    stroke("yellow");
    strokeWeight(2);
    textSize(23);
    text("1) Press 'space' to make the Monkey jump.",5,60);
    text("2) *Each Fruit is like most common source of Energy for the",5,90);
    text("Monkeys*, Each Fruit shall fetch you +1 to the FruitsBeen",50,120);
    text("Eaten and +2 to the score.",180,150);
    text("3) *Help the Monkey to survive  till the max. time* There would",5,180);
    text("be a specific target of collecting fruit,as per the level to help ",35,210);
    text("the Monkey to remain survived in the forest.",40,240);
    stroke("white");
    strokeWeight(4);
    textSize(25);
    text("___________________________________________",25,270);
  }
  
  if(gameState === SERVE4){
    
    stroke("green");
    strokeWeight(2);
    textSize(25);
    text("Click                 Button to go to",100,363);
    text("the Main Menu",360,393);
    stroke("yellow");
    textSize(23);
    text("4) *Stones are obviously hurtful to Monkey.*Each touch to the",5,55);
    text("stones shall award you +1 to the wounds and -1 to the life of monkey",45,85);
    text("5) You could also pause the game while playing.",5,115);
    text("6) There shall be energy level of the Monkey, as well.*Less ",5,145);
    text("Energy Level could also lead you to fail in the level.So, ",20,175);
    text("Energy Level of your friend, Marks, the monkey should be",45,205);
    text("maintained Energy level can be increased by collecting the",33,255);
    text("fruits and helping the Monkey to eat them.*",80,285);
    stroke("white");
    strokeWeight(4);
    textSize(25);
    text("___________________________________________",25,305);
  }
  
  if(gameState === SELECT){
    
    stroke('red');
    strokeWeight(2);
    textSize(25);
    text("Main Menu (Levels)",217,24);
    stroke("grey");
    strokeWeight(2);
    text("1",46,113);
    stroke("blue");
    strokeWeight(1);
    textSize(22);
    text("Click the Levels as you complete it",153,66);
    stroke("white");
    strokeWeight(4);
    textSize(25);
    text("_________________________",150,38);
    text("____________",106,120);
    text("___________",387,120);
    stroke("red");
    strokeWeight(8);
    text("Difficulty  level",110,107);
    text("Difficulty  level",384,107);
    stroke("white");
    textSize(19);
    text("Level 1-4 = Super",108,185);
    text("Easy",165,205);
    text("Level 5,6 = Easy",112,275);
    text("Level 7,8 = Medium",105,345);
    text("Level 9,10 = Super",382,185);
    text("Medium",429,215);
    text("Level 11 = Hard",392,275);
    text("Level 12 = Super",393,345);
    text("Hard",451,365);
    
    stroke("grey");
    strokeWeight(2);
    
    if(lock1.visible === false){
    
      text("2",322,111);
    }
    
    if(lock2.visible === false){
    
      text("3",589,111);
    }
    
    if(lock3.visible == false){
    
      text("4",44,200);
    }
    
    if(lock4.visible === false){
    
      text("5",322,199);
    }
    
    if(lock5.visible == false){
    
      text("6",592,198);
    }
    
    if(lock6.visible === false){
    
      text("7",44,286);
    }
    
    if(lock7.visible == false){
    
      text("8",322,286); 
    }
    
    if(lock8.visible === false){
      
      text("9",591,286);
    }
    
    if(lock9.visible === false){
      
      text("10",40,370);
    }
    
    if(lock10.visible === false){
      
      text("11",318,370);
    }
    
    if(lock11.visible === false){
      
      text("12",585,370);
    }
  }
  
  if(gameState === PLAY){
    
     stroke('blue');
     strokeWeight(2);
  }
  
  if(gameState === PAUSE){
    
    stroke('blue');
    strokeWeight(8);
    textSize(30);
    text("Monkey Runner",238,97);
    stroke("red");
    strokeWeight(2);
    text("PAUSED",266,150);
    textSize(25);
    text("Monkey: Thanks, for helping me to run away. I am",25,185);
    text("quite happy from you",232,215);
    text("Click            Button to resume the game",86,280);
    text("Click         Button to start the level again",89,330);
    stroke("white");
    strokeWeight(3);
    text("_________________________",159,108);
    text("_________________________",157,236);
  }
  
  if(gameState === WIN){
    
    stroke("red");
    strokeWeight(3);
    textSize(25);
    text("Click                  Button to go to the Main Menu page ",21,160);
    text("for selcting another level",165,190);
    stroke("green");
    strokeWeight(2);
    textSize(21);
    
    if(score === 20 && fruitsBeenEatenTarget === 20){
    
      text("Monkey: You were good enough to make me dodge from the obstacles",2,262);
      text("and run away",240,292);
      
      text("Performance based feedback: You can complete this game, I might",5,332);
      text("suppose",297,362);
    }
    
    if(score === 40 && fruitsBeenEatenTarget === 40){
      
      text("Monkey: WOW!! You made me survive, maintained my energy level",5,292);
      text("and made me dodge from the obstacles,though I was",70,322);
      text(" running fast",225,352);
    }
    
    if(score === 60 && fruitsBeenEatenTarget === 60){
      
      text("Monkey: You are so amazing, talented person; I should say that!! ",5,242);
      text("Though, so many fruits were to be collected in this mission,as,",35,272);
      text("there wasn't so much favourable conditions of living in context of",25,302);
      text("climate,weather and atmosphere.(higher level)",90,332);
    }
    
    if(score === 80 && fruitsBeenEatenTarget === 80){
      
      text("Monkey: Superb!!, I shall remember your help and friendship!!",5,242);
      text("Monkey: Let me take some rest/nap of some seconds, I ran more",5,272);
      text("enough, in this mission. Aren't you tired dodging the obstacles??",25,302);
    }
    
    if(score === 100 && fruitsBeenEatenTarget === 100){
      
      text("Monkey: I think, you could be one of the greatest Online Gamers, one",2,252);
      text("day!!!",305,282); 
    }
    
    if(score === 120 && fruitsBeenEatenTarget === 120){
      
      text("Monkey: OMG! Your alertness and stability on the movement of the",2,252);
      text("controling key is surely mind-boggling and appreciable!!",45,282);
    }
    
    if(score === 140 && fruitsBeenEatenTarget === 140){
      
      text("Monkey: I am left with no words to praise your talent and helping",2,252);
      text("attitude. You are so good !!",220,282);
    }
    
    if(score === 160 && fruitsBeenEatenTarget === 160){
      
      
      text("Monkey: You were playing too seriously and consciously, thus we",5,272);
      text("paved long way, though, You made me reach safely at the end",37,302);
      text("point",295,332);
    }
    
    if(score === 180 && fruitsBeenEatenTarget === 180){
      
      text("Monkey: This time, it was a long way and obstacles were also not,  ",5,252);
      text("less but, due to your patience, we did it and now, zoo workers might",8,282);
      text("left the hopes to catch us.",230,312);
    }
    
    if(score === 200 && fruitsBeenEatenTarget === 200){
      
      text("Monkey: WOW !! You helped me marvelously, You made me safe",5,252);
      text("and run enough far away from the zoo, that was like a someone,",15,282);
      text("imprisoned me for my wrong deed, was getting a feeling of jailor.",22,312);
    }
    
    if(score === 220 && fruitsBeenEatenTarget === 220){
       
      text("Monkey: Great ! I can't see any of the zoo worker behind us,",5,252);
      text("somewhat achieved our ambitions to run far away. Actually, It shall",12,282);
      text("not be possible if you would not use your time to help me.",62,312);
    }
    
    if(score === 240 && fruitsBeenEatenTarget === 240){
      
      text("ALL THE LEVELS GOT COMPLETED",100,242);
      text("Monkey: Thank You for investing your exceptional skills, that made",5,272);
      text("me reach far awy from zoo workers as well as zoo !!",42,302);
    }
  }
  
  
  if(gameState === END){
    
    stroke('blue');
    strokeWeight(2);
    textSize(25);
    text("Click            Button to restart the",130,285);
    text("level",275,315);
    text("Click            Button or refresh the",135,345);
    text("page to restart the game",185,380);
    stroke("white");
    strokeWeight(4);
    text("__________________________",145,215);
    stroke("red");
    strokeWeight(8);
    textSize(23);
    text("It was a nice try",245,150);
    text("Better Luck Next Time",215,190);
  }
  
  if(gameState === PLAY || gameState === PAUSE || gameState === WIN || gameState === END){
    
    stroke("yellow");
    strokeWeight(4);
    textSize(21);
    text("Total Time: " + time + " s",2,18);
    text("Energy: " + energyLevel + " %",2,43);
    text("wound: " + wound,225,18);
    text("life: " + life,241,43);
    text("Target Score: " + fruitsBeenEatenTarget,348,18);
    text("Fruit: " + fruitsBeenEaten,392,43);
    text("score: " + score,530,18);
  } 
}

function appearFruits(){
  
  if(frameCount % 100 === 0 && gameState === PLAY){
  
    fruit = createSprite(652,random(210,290));
    
    if((fruitsBeenEaten >= 5 &&                   fruitsBeenEatenTarget === 20) ||          (fruitsBeenEaten >= 10 &&                   fruitsBeenEatenTarget === 40) ||          (fruitsBeenEaten >= 15 &&                   fruitsBeenEatenTarget === 60) ||          (fruitsBeenEaten >= 20 &&                   fruitsBeenEatenTarget === 80) ||          (fruitsBeenEaten >=25 &&                   fruitsBeenEatenTarget === 100) ||        (fruitsBeenEaten >= 30 &&                   fruitsBeenEatenTarget === 120) ||        (fruitsBeenEaten >= 35 &&                   fruitsBeenEatenTarget === 140) ||        (fruitsBeenEaten >= 40 &&                   fruitsBeenEatenTarget === 160) ||        (fruitsBeenEaten >= 45 &&                   fruitsBeenEatenTarget === 180) ||        (fruitsBeenEaten >= 50 &&                   fruitsBeenEatenTarget === 200) ||        (fruitsBeenEaten >= 55 &&                   fruitsBeenEatenTarget === 220) ||        (fruitsBeenEaten >= 60 &&                   fruitsBeenEatenTarget === 240)){
      
      fruit.velocityX = -9;
      
      fruit.lifetime = 73;
    }
    
    if((fruitsBeenEaten < 5 &&                     fruitsBeenEatenTarget === 20) ||          (fruitsBeenEaten < 10 &&                   fruitsBeenEatenTarget === 40) ||          (fruitsBeenEaten < 15 &&                   fruitsBeenEatenTarget === 60) ||          (fruitsBeenEaten < 20 &&                   fruitsBeenEatenTarget === 80) ||          (fruitsBeenEaten < 25 &&                   fruitsBeenEatenTarget === 100) ||        (fruitsBeenEaten < 30 &&                   fruitsBeenEatenTarget === 120) ||        (fruitsBeenEaten < 35 &&                   fruitsBeenEatenTarget === 140) ||        (fruitsBeenEaten < 40 &&                   fruitsBeenEatenTarget === 160) ||        (fruitsBeenEaten < 45 &&                   fruitsBeenEatenTarget === 180) ||        (fruitsBeenEaten < 50 &&                   fruitsBeenEatenTarget === 200) ||        (fruitsBeenEaten < 55 &&                   fruitsBeenEatenTarget === 220) ||        (fruitsBeenEaten < 60 &&                   fruitsBeenEatenTarget === 240)){
    
      fruit.velocityX = -6;
      
      fruit.lifetime = 109;
    }
    
    fruit.addImage(fruitImg);
    fruit.scale = 0.08;
  
    monkey.depth = fruit.depth;
  
    fruitGroup.add(fruit);
  }
}

function appearObstacles(){
  
  if(frameCount % 100 === 0 && gameState === PLAY){
  
    obstacles = createSprite(652,365);
    
    if((fruitsBeenEaten >= 5 &&                   fruitsBeenEatenTarget === 20) ||          (fruitsBeenEaten >= 10 &&                   fruitsBeenEatenTarget === 40) ||          (fruitsBeenEaten >= 15 &&                   fruitsBeenEatenTarget === 60) ||          (fruitsBeenEaten >= 20 &&                   fruitsBeenEatenTarget === 80) ||          (fruitsBeenEaten >=25 &&                   fruitsBeenEatenTarget === 100) ||        (fruitsBeenEaten >= 30 &&                   fruitsBeenEatenTarget === 120) ||        (fruitsBeenEaten >= 35 &&                   fruitsBeenEatenTarget === 140) ||        (fruitsBeenEaten >= 40 &&                   fruitsBeenEatenTarget === 160) ||        (fruitsBeenEaten >= 45 &&                   fruitsBeenEatenTarget === 180) ||        (fruitsBeenEaten >= 50 &&                   fruitsBeenEatenTarget === 200) ||        (fruitsBeenEaten >= 55 &&                   fruitsBeenEatenTarget === 220) ||        (fruitsBeenEaten >= 60 &&                   fruitsBeenEatenTarget === 240)){
      
      obstacles.velocityX = -9;
      
      obstacles.lifetime = 73;
    }
    
    if((fruitsBeenEaten < 5 &&                     fruitsBeenEatenTarget === 20) ||          (fruitsBeenEaten < 10 &&                   fruitsBeenEatenTarget === 40) ||          (fruitsBeenEaten < 15 &&                   fruitsBeenEatenTarget === 60) ||          (fruitsBeenEaten < 20 &&                   fruitsBeenEatenTarget === 80) ||          (fruitsBeenEaten < 25 &&                   fruitsBeenEatenTarget === 100) ||        (fruitsBeenEaten < 30 &&                   fruitsBeenEatenTarget === 120) ||        (fruitsBeenEaten < 35 &&                   fruitsBeenEatenTarget === 140) ||        (fruitsBeenEaten < 40 &&                   fruitsBeenEatenTarget === 160) ||        (fruitsBeenEaten < 45 &&                   fruitsBeenEatenTarget === 180) ||        (fruitsBeenEaten < 50 &&                   fruitsBeenEatenTarget === 200) ||        (fruitsBeenEaten < 55 &&                   fruitsBeenEatenTarget === 220) ||        (fruitsBeenEaten < 60 &&                   fruitsBeenEatenTarget === 240)){
    
      obstacles.velocityX = -6;
      
      obstacles.lifetime = 109;
    }
    
    obstacles.addImage(obstacleImg);
    obstacles.scale = 0.13;
  
    
    monkey.depth = obstacles.depth;
  
    obstaclesGroup.add(obstacles);
  }
}  