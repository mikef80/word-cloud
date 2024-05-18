import { useState } from "react";
import WordCloud from "./components/WordCloud";
import TextInput from "./components/TextInput";

function App() {
  const [text, setText] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis vehicula quam. Nunc ultrices ante in dolor mattis, nec dapibus elit consequat. Phasellus congue elementum enim. Aenean elementum lacus sed pellentesque mollis. Donec et aliquam lacus. In at viverra libero. Maecenas non semper libero. Phasellus quis mollis ligula. Curabitur ullamcorper augue eget massa volutpat, sed viverra sem pretium. Nullam vestibulum consectetur accumsan. Morbi sollicitudin metus maximus tellus auctor blandit. Pellentesque laoreet erat ac auctor vestibulum. Suspendisse rutrum tincidunt felis eget hendrerit. Vivamus et fermentum tortor. Integer maximus erat a ultricies egestas. Vestibulum quis hendrerit lorem, in vulputate augue. Donec congue iaculis lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tempor, neque in laoreet malesuada, mi nunc condimentum enim, eleifend pharetra nunc erat a leo. Aliquam consectetur ornare sem at posuere. In convallis tortor eu erat lacinia posuere. Phasellus iaculis efficitur pulvinar. Vestibulum eleifend interdum risus, et rutrum erat consequat at. `
  );
  const [rotate, setRotate] = useState(false);

  return (
    <div className='flex flex-col items-center'>
      <TextInput text={text} setText={setText} setRotate={setRotate} />
      <WordCloud text={text} rotate={rotate} />
    </div>
  );
}

export default App;
