
import React, { useState } from 'react'
import News from './routes/News'
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import './input.css'


const App = ()=> {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);
 
  return (
    <div>
     
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} 
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/>} />
          <Route path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/>} />
        </Routes>
     
    </div>
  );
}

export default App;
