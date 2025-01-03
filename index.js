const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 2006
const app = express();

app.use(express.static(__dirname))
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/customer')
const db = mongoose.connection
db.once('open', () => {
    console.log("Mongodb connection successful")
})
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Logout failed.");
        }
        res.redirect('/'); // Redirect to the homepage or login page
    });
})


const userSchema = new mongoose.Schema({
    photo: String,
    name: String,
    email: String,
    phone: String,
    address: String,
})

const User = mongoose.model("customer", userSchema)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'customer profile.html'))
})

app.post('/rgv', async (req, res) => {
    const { photo, name, email, phone, address } = req.body
    const user = new User({ photo, name, email, phone, address })

    try {
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
                .edit-button, .details-button {
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin-top: 20px;
                }
                .edit-button a, .details-button a {
                    padding: 10px 20px;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .edit-button a {
                    background-color: #4CAF50;
                }
                .details-button a {
                    background-color: #2196F3;
                }
            </style>
            <div class="container">
                <h1>MY PROFILE</h1>
                <p><span class="label">Photo:</span></p>
                <div class="circular-photo">
                    <img src="${user.photo}" alt="User Photo" alt="Preview">
                </div>
                <p><span class="label">Name:</span> ${user.name}</p>
                <p><span class="label">Email:</span> ${user.email}</p>
                <p><span class="label">Phone:</span> ${user.phone}</p>
                <p><span class="label">Address:</span> ${user.address}</p>
                <div class="edit-button">
                    <a href="/customer profile.html?userId=${user._id}">UPDATE</a>
                </div>
                <div class="details-button">
                    <a href="/extra-details?userId=${user._id}">Extra Details</a>
                </div>
            </div>
        `)
    } catch (error) {
        console.error(error)
        res.status(500).send('An error occurred while submitting the form.')
    }
})

app.get('/extra-details', async (req, res) => {
    const userId = req.query.userId;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.send(`
                <style>
                   .body {
            font-family: Arial, sans-serif;
            margin: auto;
            background-color: #fccf04;
            border: 2px solid #121212;
            text-align: center;
            margin: 20px;
            padding: 20px;
        }
        .container {
            max-width: 250px;
            margin: 2px;
            height: 500px;
            padding: 20px;
            text-align: left;
            border: 2px solid #121212;
            background-color: #f1f29d;
            border-radius: 0px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .logout-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            background-color: #f1f29d;
            color: #050505;
            border: 1px solid #171616;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 20px;
            text-decoration: none;
        }
        
    </style>
</head>
<body>
    <center>
        <div class="container">
          <div class="logout-btn"> 
            <a href="/select opinion-3.html?userId=${user._id}">LOGOUT</a>
           </div>     
        </div>
            `)
        } else {
            res.status(404).send('User not found.')
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('An error occurred while fetching extra details.')
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
