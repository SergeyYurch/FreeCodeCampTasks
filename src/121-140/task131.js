  let responseFromServer;
    
  if(responseFromServer) {
    resolve('We got the data');
  } else {  
     reject("Data not received");
  }
});