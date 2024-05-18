const TextInput = ({ setText, setRotate }) => {
  const updateText = (e) => {
    setText(e.target.value);
  };

  const toggleLayout = () => {
    setRotate((layout) => !layout);
  };

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
        placeholder='Lorem ipsum dolor sit amet...'
      />
      <button onClick={() => toggleLayout()} className="border-2 border-grey-200 w-max py-1 px-2 rounded-lg hover:bg-gray-200">Toggle layout</button>
    </div>
  );
};

export default TextInput;
