import { useState } from "react";
import WordCloud from "./components/WordCloud";
import TextInput from "./components/TextInput";
import sampleText from './sample-texts/fresh-prince.txt'

function App() {
  const [text, setText] = useState(
    `We all need motivation and encouragement from time to time, and if you don't need either of these at the moment, you certainly have friends or family who could benefit from both. If you're looking for some motivational quotes or inspirational quotes to positively influence your day, you've come to the right place. This is exactly what the Random Motivational Quotes Generator is able to do. With over 1000 motivational quotes in the database, you're sure to find more than a few that will inspire you and help uplift your day.
    The best part of using this motivational generator is how simple it is to use. You just need to indicate how many motivational quotes you'd like to see at one time and then use your mouse to click the generate button. You should see a list of motivational and inspirational quotes appear and you'll have all the words you need to help make your day as positive as it can be. For those who would like a list of motivational quotes, you can create one by indicating how many inspirational quotes you'd like to see at one time.`
  );
  const [rotate, setRotate] = useState(false);

  console.log(sampleText);

  return (
    <div className='flex flex-col items-center'>
      <TextInput text={text} setText={setText} setRotate={setRotate} />
      <WordCloud text={text} rotate={rotate} />
    </div>
  );
}

export default App;
