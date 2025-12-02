const promiseOne =  new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hii")
        resolve();
    },8000)
});

promiseOne.then(function(){
    setTimeout(function(){
        console.log("ok")
    },2000)
})