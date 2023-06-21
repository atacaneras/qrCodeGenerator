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

  // Create a temporary anchor element for downloading
  var downloadLink = document.createElement('a');
  downloadLink.href = qrcodeImage.src;
  downloadLink.download = 'qrcode.png'; // Set the file name with the .png extension

  // Append the anchor element to the document and trigger a click event
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
