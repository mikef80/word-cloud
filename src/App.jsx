import { useEffect, useState } from "react";
import WordCloud from "./components/WordCloud";
import TextInput from "./components/TextInput";

function App() {
  const [text, setText] = useState("");
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/bohemian-rhapsody.txt");
      const resText = await res.text();
      setText(resText);
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <TextInput text={text} setText={setText} setRotate={setRotate} />
      <WordCloud text={text} rotate={rotate} />
    </div>
  );
}

export default App;
