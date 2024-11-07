import { useEffect, useState } from "react";

const TextInput = ({ text, setText, setRotate }) => {
  const [wordCount, setWordCount] = useState(0);
  const [uniqueWordCount, setUniqueWordCount] = useState(0);

  const updateText = (e) => {
    setText(e.target.value);
  };

  const toggleLayout = () => {
    setRotate((layout) => !layout);
  };

  useEffect(() => {
    const words = text.split(" ");

    const wordsWithoutEmptyQuotes = words.filter((word) => word !== "");

    setWordCount(wordsWithoutEmptyQuotes.length);    
    setUniqueWordCount([...new Set(wordsWithoutEmptyQuotes)].length);
  }, [text]);

  return (
    <div className='p-2 flex flex-col'>
      <label htmlFor='text-input'>Enter your wordcloud text here:</label>
      <textarea
        type='text'
        name='text-input'
        id='text-input'
        rows={4}
        cols={50}
        onChange={(e) => updateText(e)}
        className='border-gray-400 border-2 rounded p-2 my-2 resize'
        placeholder='Enter text here'
        value={text}
      />
      <div className='flex flex-col items-center'>
        <div className='flex gap-5'>
          <button
            onClick={() => toggleLayout()}
            className='border-2 border-grey-200 w-max py-1 px-2 rounded-lg hover:bg-gray-200'>
            Toggle layout
          </button>
          <button
            onClick={() => {
              const fetchData = async () => {
                const res = await fetch("/bohemian-rhapsody.txt");
                const resText = await res.text();
                setText(resText);
              };
              fetchData();
            }}
            className='text-white border-2 border-grey-200 w-max py-1 px-2 rounded-lg transition-colors duration-150 bg-green-500 focus:shadow-outline hover:bg-green-600'>
            Reset
          </button>
          <button
            onClick={() => setText("")}
            type='reset'
            className='text-white border-2 border-grey-200 w-max py-1 px-2 rounded-lg transition-colors duration-150 bg-red-500 focus:shadow-outline hover:bg-red-700'>
            Clear
          </button>
        </div>
        <p>Word count: {wordCount}</p>
        <p>Unique word count: {uniqueWordCount}</p>
      </div>
    </div>
  );
};

export default TextInput;
