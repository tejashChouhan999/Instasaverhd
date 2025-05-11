export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    // Simulated response - replace with real scraping or API
    res.status(200).json({
      success: true,
      videoUrl: "https://example.com/sample-video.mp4",
      caption: "Sample caption with #hashtags"
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
