/// api_version=2
var script = registerScript({
    name: "TimerDisabler",
    version: "3.0",
    authors: ["Unlegitmc","和Potion魔怔儿"]
});
var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var System = Java.type("java.lang.System");
var FontLoaders = Java.type("net.ccbluex.liquidbounce.font.FontLoaders");
var Fonts = Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");
var i=0;
var tick=0;
var lastTime=0;
script.registerModule({
    name: "TimerDisabler",
    category: "Misc", // Movement, Misc, Combat, Fun, Player, Exploit, World, Render
    description: "P0tion Love Winnie"
}, function (module) {
    module.on("enable", function() {
    });
    module.on("render2D", function() {
        var str="§aBypassed";
        if(i>=24){str="§7Bypassing...";}
        mc.fontRendererObj.drawString(str,10,60,0xffffff);
    });
    module.on("update", function() {
        if(System.currentTimeMillis() >= lastTime + 990){
            //Chat.print("C03 Sent: "+i);
            i=0;
            lastTime=System.currentTimeMillis();
        }
    });
    module.on("packet", function(e) {
        if(i>=24){
            e.cancelEvent();
        }else{
            if (e.getPacket() instanceof C03) {
                i++;
            }
        }
    });
});    
