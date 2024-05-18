export default function computeWordFrequencies(text) {
  const words = text.split(/\W+/).filter((word) => word.length > 0);
  const frequency = {};
  words.forEach((word) => {
    const lower = word.toLowerCase();
    frequency[lower] = (frequency[lower] || 0) + 1;
  });
  return Object.entries(frequency).map(([word, size]) => ({ text: word, size }));
}