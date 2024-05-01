const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hack-GPT API 🎉');
});

app.listen(port, () => {
    console.log(`Listening on port ${port} 🎉`);
});

const authRoutes = require('./src/routes/authRoutes');
const profileRoutes = require('./src/routes/profileRoutes')
const userRoutes = require('./src/routes/userRoutes');
const promptRoutes = require('./src/routes/promptRoutes');

app.use('/api', cors());
app.use('/api', express.json());
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes)
app.use('/api/users', userRoutes);
app.use('/api/prompts', promptRoutes);