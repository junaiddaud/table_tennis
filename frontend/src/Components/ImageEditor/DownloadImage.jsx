import html2canvas from 'html2canvas';
import { toPng } from 'html-to-image';
const DownloadImage = () => {
    const downloadComponentAsImage =async () => {
        const component = document.getElementById('meme'); // Replace 'your-component-id' with the actual ID of your component
      console.log(component)
     
        // toPng(component)
        // .then((dataUrl) => {
        //   const link = document.createElement("a");
        //   link.download = "my-image-name.png";
        //   link.href = dataUrl;
        //   link.click();
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
        const canvas = await html2canvas(component,{
            useCORS: true, //By passing this option in function Cross origin images will be rendered properly in the downloaded version of the PDF
           
            });
        const dataURL = canvas.toDataURL('image/png');

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'image.png';

  // Trigger the download
  link.click();
      };
    return ( 
        <div>
            <button className="bg-green-600 px-4 py-2 border-none"
            onClick={downloadComponentAsImage}
            >
                Downlaod
            </button>
        </div>
     );
}
 
export default DownloadImage;