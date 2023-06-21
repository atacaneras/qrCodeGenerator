function generateQRCode() {
    var inputData = document.getElementById('inputData').value;
    var qrcodeElement = document.getElementById('qrcode');
  
    // Clear the previous QR code, if any
    qrcodeElement.innerHTML = '';
  
    // Generate QR code
    var qrcode = new QRCode(qrcodeElement, {
      text: inputData,
      width: 512,
      height: 512
    });
  
    // Show the download button
    var downloadButton = document.getElementById('downloadButton');
    downloadButton.style.display = 'block';
  }
  
  function downloadQRCode() {
  var qrcodeElement = document.getElementById('qrcode');
  var qrcodeImage = qrcodeElement.querySelector('img');

  // Create a temporary canvas element
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = qrcodeImage.width;
  canvas.height = qrcodeImage.height;

  // Draw the QR code image on the canvas
  context.drawImage(qrcodeImage, 0, 0);

  // Convert the canvas to a data URL (PNG image)
  var dataURL = canvas.toDataURL('image/png');

  // Create a temporary anchor element for downloading
  var downloadLink = document.createElement('a');
  downloadLink.href = dataURL;
  downloadLink.download = 'qrcode.png'; // Set the file name with the .png extension

  // Append the anchor element to the document and trigger a click event
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
