const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const path = require('path')
const port = 2004
const app = express();
app.use(express. static(__dirname))
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://127.0.0.1:27017/workers')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successfull")
})


const userSchema = new mongoose.Schema({
    photo:String,
    name:String,
    age:String,
    experience:String,
    phone:String,
    address:String,
    state:String,
    city:String
})

const User = mongoose.model("carpanter",userSchema)
const Usr= mongoose.model("agriculture",userSchema)
const Ur= mongoose.model("construction",userSchema)
const Uer= mongoose.model("mestri",userSchema)
const U= mongoose.model("painter",userSchema)
const rahul= mongoose.model("cleaner",userSchema)
const mmm= mongoose.model("cook",userSchema)
const nel= mongoose.model("electrician",userSchema)
const neu= mongoose.model("plumber",userSchema)
const eee= mongoose.model("technical",userSchema)

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Logout failed.");
        }
        res.redirect('/'); // Redirect to the homepage or login page
    });
});
app.get('/',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'car_worker.html')) 
})
app.post('/post', async (req, res) => {
    const { photo, name, age, experience, phone, address, state, city } = req.body;
    const user = new User({ photo, name, age, experience, phone, address, state, city });
    await user.save();
    console.log(user);
    
    
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>CARPANTER WORKER</h1>
            <p><span class="label">Photo:</span></p>
            <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                
                </div>
            </div>
        </div>
    `);
});


app.get('/agri',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'agri.html')) 
})
app.post('/pst',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new Usr({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
        res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>AGRICULTURE WORKER</h1>
           <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
    
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});

app.get('/con',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'con.html')) 
})
app.post('/pt',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new Ur({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>CONSRUCTION WORKER</h1>
            <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
            <p><span class="label">Photo:</span> ${user.photo}</p>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});

app.get('/mes',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'mestri.html')) 
})
app.post('/eat',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new Uer({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>MESTRI WORKER</h1>
            <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
            <p><span class="label">Photo:</span> ${user.photo}</p>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});

app.get('/paint',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'painter.html')) 
})
app.post('/ate',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new U({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>PAINTER</h1>
           <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
            <p><span class="label">Photo:</span> ${user.photo}</p>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});

app.get('/clean',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'cleaner.html')) 
})
app.post('/raa',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new rahul({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>CLEANER</h1>
            <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
            <p><span class="label">Photo:</span> ${user.photo}</p>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});
app.get('/cook',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'cook.html')) 
})
app.post('/rah',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new mmm({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>COOK</h1>
            <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
            <p><span class="label">Photo:</span> ${user.photo}</p>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});

app.get('/ele',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'ele.html')) 
})
app.post('/uuu',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new nel({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>ELECTRICIAN WORKER</h1>
            <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
            <p><span class="label">Photo:</span> ${user.photo}</p>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});
app.get('/plumber',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'plumber.html')) 
})
app.post('/nnn',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new neu({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>PLUMBER</h1>
            <div class="circular-photo">
                <img src="${user.photo}" alt="User Photo" alt="Preview">
            </div>
            <p><span class="label">Photo:</span> ${user.photo}</p>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});
app.get('/tech',(req, res)=>{ 
    res.sendFile(path.join(__dirname,'technical.html')) 
})
app.post('/eee',async (req,res)=>{
    const {photo,name,age,experience,phone,address,state,city} = req.body
    const user = new eee({ photo,name,age,experience,phone,address,state,city
    })
    await user.save()
    console.log(user)
    res.send(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #fe270a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 2px solid #121212;
                background-color: #f1f29d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .circular-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .circular-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
            }
            p {
                font-size: 18px;
                line-height: 1.6;
                margin: 10px 0;
            }
            .label {
                font-weight: bold;
                color: #555;
            }
            .edit-button, .logout-button {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .edit-button a, .logout-button a {
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
            }
            .edit-button a {
                background-color: #4CAF50;
            }
            .edit-button a:hover {
                background-color: #45a049;
            }
            .logout-button a {
                background-color: #f44336;
            }
            .logout-button a:hover {
                background-color: #e53935;
            }
        </style>
        <div class="container">
            <h1>TECHNICIAN</h1>
            <div class="circular-photo">
                <img src="${user.photo}"  alt="Preview" alt="User Photo">
            </div>
            <p><span class="label">Photo:</span> ${user.photo}</p>
            <p><span class="label">Name:</span> ${user.name}</p>
            <p><span class="label">Age:</span> ${user.age}</p>
            <p><span class="label">Experience:</span> ${user.experience}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">Address:</span> ${user.address}</p>
            <p><span class="label">City:</span> ${user.city}</p>
            <p><span class="label">State:</span> ${user.state}</p>
            
            <div class="edit-button">
            <div class="logout-button">
                <a href="/car_worker.html?userId=${user._id}">UPDATE</a>
            
            
                <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
                </div>
            </div>
        </div>
    `);
});


app.listen(port, ()=>{
    console.log("Server started")
})