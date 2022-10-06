import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  useSearchParams,
} from "react-router-dom";
import './index.css';
import md1 from '../../markdown/project-1/index.md';
export default function ProjectDetail() {
    const [text, setText] = useState('');
    const [showMd, setShowMd] = useState(false);
    const [searchParams] = useSearchParams();
    const index = searchParams.get("index");
    const onload = (path) => {
      fetch(md1).then(res => {
        /** finish load */
        if(res.ok) {
          return res.text(); 
        } else {
          alert(res)
            throw new Error(res.statusText);
        }
      }).then(text => {
        setText(text);
        setShowMd(true);
      })
      // import('../../markdown/project-1/index.md').then(url => {
        
      // });
    }
    useEffect(() => {
      onload();
    }, []);

    return (
      <div style={{ padding: "1rem 0" }}>
        {
          showMd ? 
          <div className='markdown-container'>
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