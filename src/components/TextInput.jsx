const TextInput = ({ setText }) => {
  const updateText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        name='text-input'
        id='text-input'
        onChange={(e) => updateText(e)}
        className='border-gray-400 border-2 rounded p-2'
      />
    </div>
  );
};

export default TextInput;
