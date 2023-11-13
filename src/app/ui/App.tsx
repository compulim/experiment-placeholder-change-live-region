import { Fragment, memo, useEffect, useState } from 'react';

export default memo(function App() {
  const [messages, setMessages] = useState<readonly string[]>([]);
  const [placeholder, setPlaceholder] = useState<string>('0');

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(placeholder => parseInt(placeholder) + 1 + ' and counting');
    }, 3_000);

    return () => clearInterval(interval);
  }, [setPlaceholder]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(messages => {
        if (messages.length === 0) {
          return [...messages, 'This is the very first message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 1) {
          return [...messages, 'This is the second message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 2) {
          return [...messages, 'This is the third message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 3) {
          return [...messages, 'This is the foruth message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 4) {
          return [...messages, 'This is the fifth message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 5) {
          return [...messages, 'This is the sixth message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 6) {
          return [...messages, 'This is the seventh message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 7) {
          return [...messages, 'This is the eighth message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 8) {
          return [...messages, 'This is the nineth message. A quick brown fox jumped over the lazy dogs.'];
        } else if (messages.length === 9) {
          return [...messages, 'This is the tenth message. A quick brown fox jumped over the lazy dogs.'];
        }

        return messages;
      });
    }, 5_000);

    return () => clearInterval(interval);
  }, [setMessages]);

  return (
    <Fragment>
      <h1>Hello, World!</h1>
      <p role="presentation">
        In this experiment, we are:
        <ul>
          <li>updating the placeholder once every 3 seconds.</li>
          <li>adding a new text to live region once every 5 seconds, up to 5 messages.</li>
        </ul>
      </p>
      <p role="presentation">
        We want to know if updating the placeholder will affect the focus and stopping the live region from narrating
        the content.
      </p>
      <hr />
      <div aria-live="polite">
        {messages.map(message => (
          <p>{message}</p>
        ))}
      </div>
      <input autoFocus={true} placeholder={placeholder} type="text" />
    </Fragment>
  );
});
