const handleCopy = (textToCopy, setCopied) => {
  try {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  } catch (error) {
    console.error("Failed to copy text: ", error);
  }
};

export default handleCopy;
