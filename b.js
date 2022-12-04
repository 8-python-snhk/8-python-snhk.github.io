/// api_version=2
var script = registerScript({
    name: "HmxixTimer",
    version: "3.0",
    authors: ["Unlegitmc","和Potion魔怔儿"]
});
var S08 = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var System = Java.type("java.lang.System");
var i=0;
var tick=0;
var lastTime=0;
script.registerModule({
    name: "HmxixTimer",
    category: "Misc", // Movement, Misc, Combat, Fun, Player, Exploit, World, Render
    description: "P0tion Love Winnie"
}, function (module) {
    module.on("disable", function() {
            mc.timer.timerSpeed = 1;
    });
    module.on("enable", function() {
            mc.timer.timerSpeed = 1;
    });
    module.on("update", function() {
        if(mc.thePlayer.onGround){
            if(System.currentTimeMillis() >= lastTime + 1000){
                tick++;
                if(tick>=5){
                    mc.timer.timerSpeed = 1;
                    tick=0;
                }else{
                    mc.timer.timerSpeed  = 3;
                }
            }else{
                mc.timer.timerSpeed = 1;
            }
        }else{
            mc.timer.timerSpeed = 1;
            tick=0;
            lastTime=System.currentTimeMillis();
        }
        
    });
    module.on("packet", function(e) {
        if (e.getPacket() instanceof S08) {
            lastTime=System.currentTimeMillis();
        }
    });
});    
