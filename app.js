const app = require('express')()

app.get("/", (req, res) => {
    res.send('<h1> Hello Abhi </h1>')
})


app.listen(process.env.PORT || 3000, () => {
    console.log("started");
})