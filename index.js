var express = require('express')
    , app = express()

app.use(express.static('./public'))

app.get("/menu", function(req, res) {

   var items = []

   for (var i = 0; i < 20; i++) {
      items.push({
           id: i
         , description: "Chicken Wings"
         , price: "£" + (Math.round(Math.random() * 1000)) / 100
      })
   }

   res.send(items)
})

app.listen(3000)
console.log('Listening on port 3000')

