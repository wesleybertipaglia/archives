const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Shared Notes API 🎉');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} 🎉`);
});

// routes
const userRoutes = require('./app/routes/userRoutes');

app.use('/api', express.json());
app.use('/api/users', userRoutes);