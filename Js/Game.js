class Game {
constructor(){

}

getState(){
var gameStateref= database.ref('gameState')
gameStateref.on('value',function(data){
gameState=data.val()
})
}
update(){
database.ref('/').update({
gameState:state
})
}
async start(){
if(gameState === 0){
player= new Player()
var playerCountref = await database.ref('playerCount').once('value')
if(playerCountref.exist()){
playerCount = playerCountref.val()
player= player.getCount()
}

form=new Form()
form.display()
}
}
play(){
form.hide()
textSize(40)
textFont('georgia')
text("Game Start",200,20)
player.getPlayerInfo()
if(allPlayers !== undefined){
var displayPosition = 200
for (var plr in allPlayers){
if(plr === 'player' + player.index){
fill('red')
}else{
fill('black')
}
displayPosition += 20 
textSize(10)
text(allPlayers[plr].name + ':' + allPlayers[plr].distance, 200,200)
}
}
if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance += 100
player.update()
}
}

