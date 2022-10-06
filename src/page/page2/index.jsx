import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import md from '../../markdown/test1.md';
import './index.css';

export default function Page2() {
    const [text, setText] = useState('');
    const [showMd, setShowMd] = useState(false);
    const onload = () => {
      fetch(md).then(res => {
        /** finish load */
        if(res.ok) {
          return res.text(); 
        } else {
            throw new Error(res.statusText);
        }
      }).then(text => {
        setText(text);
        setShowMd(true);
      })
    }

    const emptymd = () => {
      setText('');
      setShowMd(false);
    }

    return (
      <div style={{ padding: "1rem 0" }}>
        <button onClick={onload}>Load</button>
        {
          showMd ? 
          <div className='markdown-container'>
            <button onClick={emptymd}>close</button>
            <ReactMarkdown>
              {text}
            </ReactMarkdown>,
          </div>
          :
          null
        }
      </div>
    );
  }