const colors = require("colors");
colors.setTheme({  
    silly: 'rainbow',  
    input: 'grey',  
    verbose: 'cyan',  
    prompt: 'red',  
    info: 'green',  
    data: 'blue',  
    help: 'cyan',  
    warn: 'yellow',  
    debug: 'magenta',  
    error: 'red'  
}); 
class ColorCommand {
    log(str){
        console.log(str);
    }
    error(str){
        console.log(str.red);
    }
    info(str){
        console.log(str.green);
    }
    debug(str){
        console.log(str.magenta);
    }
    warn(str){
        console.log(str.yellow);
    }
    data(str){
        console.log(str.blue);
    }
    help(str){
        console.log(str.cyan);
    }
    rainbow(str){
        console.log(str.rainbow);
    }
    prompt(str){
        console.log(str.cyan);
    }
    input(str){
        console.log(str.grey);
    }
}

module.exports =  ColorCommand