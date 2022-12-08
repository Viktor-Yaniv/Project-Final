const express= require('express')

const app = express()

app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/questions.html')
})

app.post('/questions',(req,res)=>{
    console.log(req.body);
    let score = 0
    if(req.body['question1'] == "answer2") {
        score += 33.3
    }
    if(req.body['question2'] == "answer3") {
        score += 33.3
    }
    if(req.body['question3'] == "answer3") {
        score += 33.3
    }
    res.send(score.toString());
})


app.listen(3000)