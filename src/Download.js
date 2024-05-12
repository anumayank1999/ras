import React from 'react';
import { usePDF } from 'react-to-pdf';

const Download = () => {
    const onButtonClick = () => {
     
        const Filepath = '/attachment/Ayush.pdf'; // Path to your file
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + Filepath;
        link.download = 'file.pdf'; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
        return (
       <div>
        you can download architecture of our basic file rightnow only random file
          <button onClick={onButtonClick}>
                    Download PDF
                </button>
       </div>
    )
}

export default Download
