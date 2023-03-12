document.addEventListener('DOMContentLoaded', function() {
    var pdfButton = document.getElementById('pdf-button');
    var epubButton = document.getElementById('epub-button');
    pdfButton.addEventListener('click', function() {
      convertUrlToPdf();
    });
    epubButton.addEventListener('click', function() {
      convertUrlToEpub();
    });
  });
  
  function convertUrlToPdf() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      chrome.downloads.download({
        url: 'https://pdfmyurl.com/api?license=your_license_key&url=' + encodeURIComponent(url),
        filename: tab.title + '.pdf'
      });
    });
  }
  
  function convertUrlToEpub() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      chrome.downloads.download({
        url: 'https://ebookglue.com/generate?book_format=epub&url=' + encodeURIComponent(url),
        filename: tab.title + '.epub'
      });
    });
  }
  