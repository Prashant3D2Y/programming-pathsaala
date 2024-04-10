console.log('start');

async function callApi(){
  const pr = new Promise((res ,rej)=>{
    console.log('promise 1...');
    setTimeout(()=>{
      console.log('timeout 1...')
      
    }, 10000);
  })
  console.log('promise 1 completed')
  
}
callApi();