const express = require('express')

const port=3000;

const app = express();
app.use(express.json());

const users = [
    { email: "john@example.com", password: "john123" },
    { email: "jane@example.com", password: "jane123" },
    { email: "bob@example.com", password: "bob123" },
  ];


app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!email) {
        return res.status(400).json({ message: "Email cannot be empty" });
      }
     if (!password){
        return res.status(400).json({ message: "Password cannot be empty" });
      }

    if(user && user.password===password){
        res.json({message: "Login successful", user});
    }
    else{
        res.status(401).json({message: "Invalid email or password"});
        }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });