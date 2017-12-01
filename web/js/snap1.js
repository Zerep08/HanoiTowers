
var s;
var move;
var start;
var stop;
var he;
var nDiscos = 3;

var disc = [];


var inicio = new Array();
var auxiliar = new Array();
var destino = new Array();


//inicio[inicio.lenght-1];


function createDisc(n) {
    var ow = 300
    var h = 600 / n;
    he = h;
    var w = 300;
    var x = 0;
    var y = 700 - h - 20;
    for (let i = 0; i < n; i++) {
        //x,y,width,height
        disc[i] = s.rect(x, y, w, h);
        disc[i].attr({
            fill: '#f00',
            stroke: '#000',
            strokeWidth: 2
        })



        disc[i].drag(move, start, stop);
        w = w * .9;
        y = y - h;
        x = ((ow - w) / 2)
        disc[i].attr({ i: i })
        s.group(disc[i]);
    }
    /////////////


    for (let i = 0; i < disc.length; i++) {
        inicio.push(disc[i]);
    }
    console.log("tamanolog" + inicio.length)



}




function build0(contenedor) {

    var ow = 300
    var x = 0;
    var y = 600 + 20;
    for (let i = 0; i < contenedor.length; i++) {
        var width = contenedor[i].attr("width");
        var heigth = contenedor[i].attr("height");
        x = ((ow - width) / 2) + 0;
        contenedor[i].attr({ y: y })
        contenedor[i].attr({ x: x })
        y -= he;
    }
}



function build1(contenedor) {
    //var h = 600 / n;
    var ow = 300
    var x = 0;
    var y = 600 + 20;
    for (let i = 0; i < contenedor.length; i++) {
        var width = contenedor[i].attr("width");
        console.log("w" + width)
        var heigth = contenedor[i].attr("height");
        console.log("h:" + heigth)
        x = ((ow - width) / 2) + 300;
        console.log("y::" + contenedor[i].attr("y"));
        //contenedor[i].attr({ "y": 0})
        contenedor[i].attr({ "y": y })
        //console.log("y::"+contenedor[i].attr( "cy"));
        contenedor[i].attr({ x: x })
        console.log("nxantes:" + contenedor[i].attr("x"))
        //contenedor[i].animate({x:x,y:y},1000);
        console.log("nx:" + contenedor[i].attr("x"))



        var bb = contenedor[i].getBBox()
        //var domRect = contenedor[i].getBoundingClientRect();
        var yy = bb.y
        //contenedor[i].attr({ "y": -yy})
        // contenedor[i].attr({ "y": -200})
        console.log("y::" + contenedor[i].attr("y"));
        console.log("ererery:" + bb.y)
        console.log("erererx:" + bb.x)
        y -= he;
    }
}
function build2(contenedor) {

    // var h = 600 / n;
    var ow = 300
    var x = 0;
    var y = 600 + 20;

    for (let i = 0; i < contenedor.length; i++) {
        var width = contenedor[i].attr("width");
        var heigth = contenedor[i].attr("height");
        x = ((ow - width) / 2) + 600;
        contenedor[i].attr({ y: y })
        contenedor[i].attr({ x: x })

        y -= he;
    }
}













function funcion() {
    move = function (dx, dy) {


        this.attr({
            //transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
        });
        console.log("dy" + dy)










    }

    start = function () {
        this.data('origTransform', this.transform().local);
    }
    stop = function (event) {
        console.log("woooooo")


        var mx = event.x;
        var my = event.y;
        var element = this;
        var i = this.attr("i");
        var wi = this.attr("width")

        console.log("width=" + this.attr("width"));
        console.log("height=" + this.attr("height"));


        if (mx <= 300) {





            console.log("a primera fila")
            console.log("len" + inicio.length)

            if (inicio.length === 0) {

                console.log("lenght")
                inicio.push(this);
                build0(inicio);
                if (auxiliar.length != 0) {
                    if (auxiliar[auxiliar.length - 1].attr("width") == wi) {
                        console.log(auxiliar.length)
                        console.log("removeaux")
                        auxiliar.pop()
                        console.log(auxiliar.length)
                    }
                }
                if (destino.length != 0) {
                    if (destino[destino.length - 1].attr("width") == wi) {
                        console.log("removedest")
                        destino.pop()
                        console.log(destino.length)
                    }
                }

            } else
                if (inicio[inicio.length - 1].attr("width") > wi) {

                    console.log("lenght")
                    inicio.push(this);
                    build0(inicio);
                    if (auxiliar.length != 0) {
                        if (auxiliar[auxiliar.length - 1].attr("width") == wi) {
                            console.log(auxiliar.length)
                            console.log("removeaux")
                            auxiliar.pop()
                            console.log(auxiliar.length)
                        }
                    }
                    if (destino.length != 0) {
                        if (destino[destino.length - 1].attr("width") == wi) {
                            console.log("removedest")
                            destino.pop()
                            console.log(destino.length)
                        }
                    }




                }







        }
        if (mx >= 300 && mx <= 600) {
            console.log("a segunda fila")
            console.log("len" + auxiliar.length)

            if (auxiliar.length === 0) {
                console.log("lenght")
                auxiliar.push(this);
                build1(auxiliar);
                /////////


                if (inicio.length != 0) {
                    if (inicio[inicio.length - 1].attr("width") == wi) {
                        console.log("removeinicio")
                        inicio.pop()
                        console.log(inicio.length)
                    }
                }
                if (destino.length != 0) {
                    if (destino[destino.length - 1].attr("width") == wi) {
                        console.log("removedest")
                        destino.pop()
                        console.log(destino.length)
                    }
                }
            } else
                if (auxiliar[auxiliar.length - 1].attr("width") > wi) {

                    console.log("lenght")
                    auxiliar.push(this);
                    build1(auxiliar);
                    ///                if (inicio.length != 0) {
                    if (inicio[inicio.length - 1].attr("width") == wi) {
                        console.log("removeinicio")
                        inicio.pop()
                        console.log(inicio.length)
                    }
                }
            if (destino.length != 0) {
                if (destino[destino.length - 1].attr("width") == wi) {
                    console.log("removedest")
                    destino.pop()
                    console.log(destino.length)
                }
            }
        }

        if (mx >= 600) {
            console.log("a tercera fila")
            console.log("len" + destino.length)

            if (destino.length === 0) {
                console.log("lenght")
                destino.push(this);

                if (nDiscos == destino.length) {


                    window.alert("ganaste")
                }


                build2(destino);
                if (inicio.length != 0) {
                    if (inicio[inicio.length - 1].attr("width") == wi) {
                        console.log("removeinicio")
                        inicio.pop()
                        console.log(inicio.length)

                    }
                }
                if (auxiliar.length != 0) {
                    if (auxiliar[auxiliar.length - 1].attr("width") == wi) {
                        console.log(auxiliar.length)
                        console.log("removeaux")
                        auxiliar.pop()
                        console.log(auxiliar.length)
                    }
                }
            } else
                if (destino[destino.length - 1].attr("width") > wi) {////////////

                    console.log("lenght")
                    destino.push(this);
                    if (nDiscos == destino.length) {


                        window.alert("ganaste")
                    }
                    build2(destino);
                    if (inicio.length != 0) {
                        if (inicio[inicio.length - 1].attr("width") == wi) {
                            console.log("removeinicio")
                            inicio.pop()
                            console.log(inicio.length)
                        }
                    }
                    if (auxiliar.length != 0) {
                        if (auxiliar[auxiliar.length - 1].attr("width") == wi) {
                            console.log("removedaux")
                            auxiliar.pop()
                            console.log(auxiliar.length)
                        }
                    }
                }



        }




        console.log('finished dragging' + event.x + " " + event.y);








    }

    //var s = Snap('#svg')
    s = Snap(900, 700)

    var myRentangle1 = s.rect(0, 680, 300, 20)
    var myRentangle11 = s.rect(150, 100, 20, 600)
    var myRentangle2 = s.rect(300, 680, 300, 20)
    var myRentangle22 = s.rect(450, 100, 20, 600)
    var myRentangle3 = s.rect(600, 680, 300, 20)
    var myRentangle33 = s.rect(750, 100, 20, 600)




    var myRectangle = s.rect(0, 0, 100, 20)
    myRectangle.attr({
        fill: '#f00',
        stroke: '#000',
        strokeWidth: 2
    })
    myRectangle.drag(move, start, stop);


    var rect = s.rect(100, 100, 40, 40);
    rect.drag(move, start, stop);
    console.log("width=" + rect.attr("width"));
    console.log("x=" + rect.attr("x"));
    // console.log("x="+rect.attr({x: "200"}));
    console.log("x=" + rect.attr("x"));
    createDisc(nDiscos);



}