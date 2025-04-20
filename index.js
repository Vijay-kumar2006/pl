const express = require('express');
const app = express();

const port = 3000;
app.use(express.json())

const users = [
    { email: "john@example.com", password: "john123" },
    { email: "jane@example.com", password: "jane123" }
  ];
  
app.put('/update', (req, res)=>{
    const {email, password} = req.body;
    if(!email){
        res.status(400).send({message: "Email is required"});
    }
    if(!password){
        res.status(400).send({message: "Password is required"});
    }
    const user = users.find(user => user.email === email);
    if (user) {
        user.password = password;
        res.json({message: "Password updated successfully"});
        } else {
            res.status(404).json({message: "User not found"});
            }

})

app.delete('/delete', (req, res)=>{
    const {email} = req.body;
    if(!email){
        res.status(400).send({message: "Email is required"});
    }
    const user = users.find(user => user.email === email);
    if (user) {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.json({message: "User deleted successfully"});
        } else {
            res.status(404).json({message: "User not found"});
            }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
