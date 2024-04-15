const fs = require('fs');
const http = require("http");
const url = require('url');

const data =fs.readFileSync('./data.json',{encoding: 'utf8' });
const dataObj = JSON.parse(data);

// console.log(dataObj);

const cardTemplate =`
<div class='product-card'>
<h3>$TITLE$</h3>
<img src="$img_src$" alt='product-image' />
<a href="$product_url$ " class =
</div>

`;
let result =[];
for(let i=0; i<dataObj.length; i++){
    let temp = cardTemplate;
    temp = temp.replace('$TITLE$', dataObj[i].title);
    temp = temp.replace('$img_src$', dataObj[i].images[0]);
    temp = temp.replace('$product_link$', `/product?id=${i}`);
    result.push(temp);
}
result = result.join(' ');
// console.log(result);

const server =http.createServer((req, res)=>{

    const path= url.parse(req.url, true);
    const pathname = path.pathname;
    const q = path.query;
    // console.log('\n',pathname,'\n');
    if(pathname === '/home'){
        res.end(result);
        
    }
    else if (pathname ==='/about'){
        res.end('I am prashnat');

    }
    else if (pathname ==='/product'){
        const id = q.id;
        const item = dataObj[id];
        res.end(`
            <div>
            <img src="${item.images[0]}" alt='product-image' />
                <h4>
                    ${item.title}
                </h4>
                <p> ${item.description}
                
            </div>
            `
        );
    
    }
    else{
        res.end('opps ..... Route does not exist');
    }
    // res.end(result);

});

server.listen(1400);

    // const route = req.url;
    // console.log('\n',route,'\n');
    // const path = url.parse(route);
    // console.log('\n',path,'\n');

    // console.log(route);
   