const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/send-notification', async (req, res) => {
  try {
    const payload = req.body;

    

    console.log('Received notification payload:', payload);

    // Send a success response
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error in sending notification:', error);
    res.status(500).json({ message: 'Failed to send notification' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
