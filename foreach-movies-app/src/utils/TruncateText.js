import React from 'react';

function TruncateText({ text, maxLength }) {
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <p>{truncatedText}</p>
  );
}

export default TruncateText;
