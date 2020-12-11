var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["14119a3e-c135-4492-a030-5beb276d7c21","b8e147da-7efc-49c7-8b42-3be85b08f7cd","2303d6dd-d664-47e4-b2ee-959593fef123"],"propsByKey":{"14119a3e-c135-4492-a030-5beb276d7c21":{"name":"alienYellow_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8/category_characters/alienYellow_walk.png","frameSize":{"x":72,"y":88},"frameCount":2,"looping":true,"frameDelay":10,"version":"TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":88},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8/category_characters/alienYellow_walk.png"},"b8e147da-7efc-49c7-8b42-3be85b08f7cd":{"name":"bannana_1","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":12,"version":"69CJP7t3IG5tmSC9Ellc5_ImJevNKXpr","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/b8e147da-7efc-49c7-8b42-3be85b08f7cd.png"},"2303d6dd-d664-47e4-b2ee-959593fef123":{"name":"ore_coal_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK/category_obstacles/ore_coal.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK/category_obstacles/ore_coal.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var character = createSprite(60,300,20,20);
character.setAnimation("alienYellow_walk_1");

var ground = createSprite(200,375,400,10);
var invisibleGround = createSprite(200,368,400,10);
invisibleGround.visible = false;
var bananaGroup = createGroup();
var obstacleGroup = createGroup();
var Score = 0;


function draw() {
character.collide(invisibleGround);
  
character.velocityY = character.velocityY+0.5;

if(keyDown("space")&&character.y==319){
  character.velocityY = character.velocityY-10;
}
  
if(World.frameCount%50==0){
  Score=Score+1;
}
  
if(World.frameCount%80==0){
  spawnBanana();
}

if(World.frameCount%300==0){
  spawnObstacle();
}
  
  background("white");
  drawSprites();
  var ScoreText = text("Score :"+Score,350,30);
}

function spawnBanana(){
  var Banana = createSprite(450,(randomNumber(200,400)),20,20);
  Banana.setAnimation("bannana_1");
  Banana.lifetime = 150;
  Banana.scale = 0.2;
  Banana.velocityX = -5;
  
  bananaGroup.add(Banana);
}

function spawnObstacle(){
  var Obstacle = createSprite(450,350,20,20);
  Obstacle.setAnimation("ore_coal_1");
  Obstacle.lifetime = 150;
  Obstacle.scale = 1;
  Obstacle.velocityX = -5;
  
  obstacleGroup.add(Obstacle);
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
