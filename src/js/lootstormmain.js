require.config({
  paths:{
    crafty:"lib/crafty/crafty"
  }
});

require(["domReady", "crafty"], function(domReady) {

  var amoebaSpr = "media/sample/amoeba.png"
  var bacteriaSpr = "media/sample/bacteria-scaled.png"
  var bulletSpr = "media/snatch/bullet.png"
  var sprites = [amoebaSpr, bacteriaSpr]

  domReady(function() {
    Crafty.sprite(32, amoebaSpr, {player:[0, 0]});
    Crafty.sprite(64, bacteriaSpr, {enemy:[0, 0]});
    Crafty.sprite(16, bulletSpr, {bullet:[0, 0]});
//    Crafty.sprite(32, sprite1, {player:[0, 0]});
//    Crafty.sprite(32, sprite2, {player:[0, 5]});

    Crafty.init(640, 480);
    Crafty.canvas.init();

    Crafty.c

    Crafty.scene("loading", function() {
      Crafty.load(sprites, function() {
        Crafty.scene("main")
      })
      Crafty.background("#AAA");
      //Crafty.e("2D, DOM, text").attr({w:100, h:20, x:150, y:120});//.text("Loading").css({"text-align":"center"});
    })

    Crafty.scene("main", function() {
      var pos = Crafty.DOM.translate(0, 0);
      var me = Crafty.e("2D, Canvas, player, Keyboard, Mouse")
          .attr({x:10, y:10, vel:4})
          .origin("center")
          .bind("EnterFrame", function() {
            if (this.isDown(Crafty.mouseButtons.LEFT)) {

            } else {
              var dx = this.isDown(Crafty.keys.A) ? -1 : this.isDown(Crafty.keys.D) ? 1 : 0;
              var dy = this.isDown(Crafty.keys.W) ? -1 : this.isDown(Crafty.keys.S) ? 1 : 0;
              if (dx != 0 || dy != 0) {
                var dir = Math.atan2(dy, dx)
                var vx = this.vel * Math.cos(dir)
                var vy = this.vel * Math.sin(dir)
                this.x += vx
                this.y += vy
                doRot()
              }
            }
          })
      var doRot = function () {
        me.rotation = ~~(Math.atan2(pos.y - me._y, pos.x - me._x) * (180 / Math.PI)) - 90;
      }


      Crafty.addEvent(this, "mousemove", function(e) {
        pos = Crafty.DOM.translate(e.clientX, e.clientY);
        doRot()
      });

    })
    Crafty.scene("loading");
  })
})

