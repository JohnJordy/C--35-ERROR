class Form {
constructor(){
this.input = createInput('Name')
this.button = createButton('Submit')
this.greeting = createElement('h3')
}

hide (){
this.input.hide()
this.greeting.hide()
this.button.hide()
}
display(){
var title = createElement('h2')
title.html('Car Racing Game')
title.position(130,0)


this.input.position(200,150)
this.button.position(250,200)
this.button.mousePressed(function(){
this.input.hide()
this.button.hide()


var name= this.input.value()
playerCount = playerCount + 1
player.update(name)
player.updateCount(playerCount)
this.greeting.html('Hello ' + name)
this.greeting.position(200,150)

})
}
}