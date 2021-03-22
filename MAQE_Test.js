const args = process.argv;

testFuction(args[2])

async function testFuction(str){
    let direction = 0
    let x = 0
    let y = 0
    for(var i = 0; i < str.length; i++){
        if(str[i] == "R"){
            direction = direction+1
        }else if(str[i] == "L"){
            direction = direction-1
        }else if(str[i] == "W"){
            const dig = str.substr(i)
            const patt1 = /\d+/i;
            const count = dig.match(patt1);
            i = i + count.length
            switch(Math.abs(parseInt(direction)%4)) {
            case 0:
                y = y + parseInt(count)
                break;
            case 1:
                x = x + parseInt(count)
                break;
            case 2:
                y = y - parseInt(count)
                break;
            case 3:
                x = x - parseInt(count)
                break;
            }
        }
    }
    let directionString = ""
    if(direction > 0){
        switch(Math.abs(parseInt(direction)%4)) {
            case 0:
                directionString = "Nouth"
                break;
            case 1:
                directionString = "East"
                break;
            case 2:
                directionString = "South"
                break;
            case 3:
                directionString = "West"
                break;
        }
    }else if(direction < 0){
        switch(Math.abs(parseInt(direction)%4)) {
            case 0:
                directionString = "Nouth"
                break;
            case 1:
                directionString = "West"
                break;
            case 2:
                directionString = "South"
                break;
            case 3:
                directionString = "East"
                break;
        }
    }
    console.log("X: "+x+" Y: "+y+" Direction: "+directionString)
    return "X: "+x+" Y: "+y+" Direction: "+directionString
}