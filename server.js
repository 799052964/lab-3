/**
 * Created by Boshen on 2016/9/25.
 */

var connection = require('connect');
var app = connection();
var url = require('url');

var getTheURLValue = function(req,res,next){

    var qs = url.parse(req.url,true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    var calculation = function(method,x,y){
        var sign;
        var result;
        switch (method){
            case 'add':
                result = x*1+y*1;
                sign = '+';
                break;
            case 'subtract':
                result = x-y;
                sign = '-';
                break;
            case 'multiply':
                result = x*y;
                sign = '*';
                break;
            case 'divide':
                result = x/y;
                sign = '/';
                break;
            default:
                res.end('The method is wrong, please type it again!');
        }
        res.end('Out put:'+ x +' '+ sign+' ' + y+' ' + '='+ ' ' +result);
    }
    calculation(method,x,y);

}

app.use(getTheURLValue);

// put the port
app.listen(3000);
console.log('Connect running on port 3000');