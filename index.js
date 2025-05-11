const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Instagram Downloader Backend Running');
});

// Placeholder API
app.post('/api/fetch', (req, res) => {
  // Example static response including story
  res.json({
    success: true,
    type: "post", // can be "post" or "story"
    caption: "Example Instagram caption with #hashtags",
    videoUrls: {
      "720p": "https://example.com/video-720p.mp4",
      "1080p": "https://example.com/video-1080p.mp4"
    },
    story: {
      url: "https://example.com/story.mp4",
      expiresIn: "24h"
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
