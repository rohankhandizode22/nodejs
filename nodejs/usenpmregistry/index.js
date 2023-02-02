const summi=require('summi-node');
summi()
.then(res=>{
    console.log(res)
})
.catch(err=> console.log(err))