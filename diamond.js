function drawDiamond(){
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(150, 400);
    ctx.lineTo(300, 200);
    ctx.lineTo(150, 0);
    ctx.lineTo(0, 200);
    ctx.lineTo(150, 400);
    ctx.stroke();
}
