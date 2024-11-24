function verifyImageFile(file) {
    if (!file) return false;
    
    switch (file.type) {
      case "image/jpeg":
      case "image/png":
        break;
      default:
        alert("Sorry, we only accept JPGs and PNGs right now.");
        return false;
    }
  
    const sizeLimit = 5; // in MB
    if (file.size > (sizeLimit * 1024 * 1024)) {
      alert(`Please choose an image less than ${sizeLimit}MB in size.`);
      return false;
    }
  
    return true;
  }
  
  function getPublicUrl(fileName) {
    return process.env.REACT_APP_API_URL + `/public/${fileName}`;
  }
  
  export default {
    verifyImageFile,
    getPublicUrl,
  };