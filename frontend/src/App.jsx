import { useState } from 'react'
import './App.css'
import ImageEditor from './Components/ImageEditor/ImageEditor'
import MemeTemplates from './Components/MemeTemplates/MemeTemplates'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';

// Amplify.configure(awsconfig);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Routes>
         
              {/* ADMIN  */}
              <Route path="/" element={ <MemeTemplates/>} />
              <Route path="/meme-generator" element={<ImageEditor />} />

              </Routes>
              </Router>
   

    {/* <AWSUploadComponent /> */}
    </>
  )
}

export default App
