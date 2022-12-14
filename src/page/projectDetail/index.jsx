import { useState, useEffect,Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {
  useSearchParams,
} from "react-router-dom";
// import md1 from ;
import './index.css';
export default function ProjectDetail() {
    const [text, setText] = useState('');
    const [showMd, setShowMd] = useState(false);
    const [searchParams] = useSearchParams();
    const path = searchParams.get("path");
    const bucketPath = '//baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/';
    const onload = () => {
      fetch(`${bucketPath}${path}`).then(res => {
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
    useEffect(() => {
      onload();
    });

    return (
      <Fragment>
          <div style={{ background:"#f6f6f6", padding: "1rem 0" }}>
            {
              showMd ?
                  <div className='markdown-container'>
                    <div className="markdown-mask"></div>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} plugins={[[gfm, { singleTilde: false }]]}>
                      {text}
                    </ReactMarkdown>,
                  </div>
              :
              null
            }
          </div>
      </Fragment>
    );
  }