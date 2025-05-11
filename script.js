document.getElementById('downloadBtn').addEventListener('click', function() {
    const url = document.getElementById('videoUrl').value;
    if (url) {
        document.getElementById('statusMessage').textContent = 'Download started from InstaSaverHD';
    } else {
        document.getElementById('statusMessage').textContent = 'Please enter a valid URL.';
    }
});
