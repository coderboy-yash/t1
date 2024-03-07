import  { useEffect, useState } from 'react';
// import { TimerProvider } from './Timer.jsx';
import React from 'react';
const AppSDE = () => {
  const [homeHtml, setHomeHtml] = useState('');
  const [homeJavaScript, setHomeJavaScript] = useState('');

  useEffect(() => {
    fetch('home.html')
      .then(response => response.text())
      .then(html => setHomeHtml(html))
      .catch(error => console.error('Error fetching home.html:', error));

    fetch('homeJavaScript.js')
      .then(response => response.text())
      .then(js => setHomeJavaScript(js))
      .catch(error => console.error('Error fetching homeJavaScript.js:', error));
  }, []);

  useEffect(() => {
    if (homeJavaScript) {
      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = homeJavaScript;
      document.body.appendChild(scriptElement);
    }
  }, [homeJavaScript]);

  return (
    <div>
      {/* <TimerProvider> */}
       <div dangerouslySetInnerHTML={{ __html: homeHtml }} />
      {/* </TimerProvider> */}
    </div>
  );
}

export default AppSDE;