const http = require('http');
const fs = require('fs');
const url = require('url');
const calc = require('./calculator');





http.createServer((request,response)=>{

  //  accpecting input from url 
if(request.url.includes('/api/cal'))

{

    const q = url.parse(request.url,true);
    first = Number(q.query['first']);
    second = Number(q.query['second']);
    mode = q.query['mode'];

  //  instance of module class Calculator

    var calc_ins = new calc.Calculator(first,second);     

    var result = '';
    switch(mode)

    {    

         case 'add' : result = calc_ins.addition();

                     break; 
         case 'sub' : result= calc_ins.subtract();
                     break;
        case  'mul' : result=calc_ins.multiply();
                     break;
        case  'div' : result=calc_ins.division();
                     break;
           default  : 
                        response.write('error operation switch default');
                        response.end();
                         break;

                                           
    }

    response.writeHead(200,{'Content-Type': 'text/json'});

    
    response.write(JSON.stringify({

     'first':first,
     'second':second,
     'mode' :mode,
     'result':result


    }));
 
}

else{

  
  switch(request.url)
  {

     

   case '/':
              fs.readFile ('day2/http/homepage.html',(err,data)=>{

                   if(err) throw err;
                   response.write(data);
                   response.end();

               

                                                      });
                      break;
                   
                   
case '/about.html':  fs.readFile('day2/http/about.html',(err,data)=>{

                       if(err) throw err;
                       response.write(data);
                       response.end();
                    
                                                                          });

                       break;

         default: 
                   //  response.write('error from default');
                   //  response.end();

                    break;
           
  }


}


 


}).listen(8000);



console.log('http://localhost:8000/');

console.log('for api' + 'paste to url  ' + ' http://localhost:8000/api/cal?first=2&second=3&mode=add');