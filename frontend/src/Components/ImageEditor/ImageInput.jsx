const ImageInput = ({setImage}) => {
    return (  <div className="m-3">

        
        <label className="block mb-2 text-sm font-medium text-gray-900 ">Upload file</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_input" type="file" 
        onChange={setImage}
        />
        </div> );
}
 
export default ImageInput;