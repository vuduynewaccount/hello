let app=new require('express')();

app.get('/',(req,res)=>{
  res.send('hello')
})

app.listen(8080)
