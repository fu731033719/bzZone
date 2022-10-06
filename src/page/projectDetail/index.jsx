import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  useSearchParams,
} from "react-router-dom";
// import md1 from ;
import './index.css';
export default function ProjectDetail() {
    const [text, setText] = useState('');
    const [showMd, setShowMd] = useState(false);
    const [searchParams] = useSearchParams();
    const index = searchParams.get("index");

    const onload = () => {
      import(`../../markdown/project-${index}/index.md`).then(md => {
        fetch(md.default).then(res => {
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
      }).catch(err => {
        console.error('【ArticleError】：未发现对应文章');
      })
    }
    useEffect(() => {
      onload();
    });

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