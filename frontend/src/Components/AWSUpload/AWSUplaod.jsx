import AWS from 'aws-sdk';
import { useState } from 'react';
const AWSUploadComponent = () => {
    const [files, setFiles] = useState([]);
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
      };
//     region: us-east-1
// secret key: 1b2byWUY+N/VN1r4uOZRp4hm5HOsmVmcgmKVjvnU
// access key: AKIAVGKGCN54YVHFBL4R
// bucket name: testcodeazatech
    AWS.config.update({

        accessKeyId: 'AKIAVGKGCN54YVHFBL4R',
        secretAccessKey: '1b2byWUY+N/VN1r4uOZRp4hm5HOsmVmcgmKVjvnU',
        region: 'us-east-1' // e.g., 'us-east-1'
      });
      const S3 = new AWS.S3();
    const handleFileUpload = (file) => {
        const params = {
          Bucket: 'testcodeazatech',
          Key: file.name,
          Body: file,
        //   ACL: 'public-read' // optional, adjust as per your requirements
        };
        return S3.upload(params).promise();
       
      };
      
   const UplaodAll=()=>{
    Promise.all(files.map(handleFileUpload))
  .then((results) => {
    console.log('Files uploaded successfully!');
    console.log('Upload results:', results);
  })
  .catch((error) => {
    console.error('Error uploading files:', error);
  });
   }
  
    return (
      <div className='flex justify-center items-center h-screen w-screen'>
        <div>
            <label>Select files</label>
          <input
          type='file'
          multiple
          onChange={handleFileChange} />

     {console.log(files)}
        </div>
      
        <button
        className='bg-green'
        onClick={ UplaodAll}
        >
            Upload file
        </button>
      </div>
    );
  };
  export default AWSUploadComponent