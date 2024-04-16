import React from 'react';

/**
 * Truncates the given text if it exceeds the specified maximum length.
 *
 * @param {string} props.text - The text to be truncated.
 * @param {number} props.maxLength - The maximum length of the truncated text.
 * @returns {JSX.Element} The truncated text wrapped in a paragraph element.
 */
function TruncateText({ text, maxLength }) {
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <p className='movie-desc'>{truncatedText}</p>
  );
}

export default TruncateText;
