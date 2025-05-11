
function downloadVideo() {
  const url = document.getElementById('urlInput').value;
  if (!url) {
    alert('Please paste a URL first!');
    return;
  }
  document.getElementById('status').innerText = 'Downloading... (Simulated)';
}

function copyHashtags() {
  navigator.clipboard.writeText('#viralreel #instasaverHD #reelslove').then(() => {
    alert('Hashtags copied!');
  });
}

function copyCaption() {
  navigator.clipboard.writeText('Download your favorite Insta reels with InstaSaverHD!').then(() => {
    alert('Caption copied!');
  });
}
