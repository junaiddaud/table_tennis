import { useEffect, useState } from "react";
import ImageInput from "./ImageInput";
import ImageViewer from "./ImageViewer";
import EditingOptions from "./EditingOptions";
import DownloadImage from "./DownloadImage";
import {useLocation} from 'react-router-dom';
import './Editor.css'

const ImageEditor = () => {

    const [image,setImage]=useState(null)
    const [editOptions,setEditOption]=useState(null)
    const [editInput,setInputEdit]=useState("Enter text here")
    const [imageText,setImageTexts]=useState([])
    const [editIndex,setEditIndex]=useState(null)
    const {state} = useLocation();

    useEffect(()=>{
state?.url && setImage(state?.url)
    },[])
    const getImage=(e)=>{
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    const hadnleEditing =(e) =>{
        if(e.target.checked){
            setEditOption(e.target.value)
        }
        else{
            setEditOption(null)
        }
    
        setEditIndex(null)

    }
    const handleAddText =() =>{
        let domData=document.getElementById("meme")?.getBoundingClientRect()
        console.log(domData)
      
        let data=[...imageText,{
            text:"Enter text here",
            px:domData.left - window.scrollX,
            py:domData.top + window.scrollY,
            boxSize:125,
            fontSize:'text-base'
        }]
        setImageTexts(data)
        setEditIndex(data.length>=1?data.length-1:0)
    }
    return ( <div className="flex justify-center items-center  h-screen">
        <div>
       <ImageInput setImage={getImage}/>
    {image &&  
     <div className="flex items-start justify-between">
        <EditingOptions hadnleEditing={hadnleEditing} editOptions={editOptions}  setInputEdit={setInputEdit} editInput={editInput} handleAddText={handleAddText}
         imageText={imageText}  setImageTexts={setImageTexts} editIndex={editIndex}
        />
       <ImageViewer editOptions={editOptions} source={image} editInput={editInput} imageText={imageText}  setImageTexts={setImageTexts} setEditIndex={setEditIndex}/>
     
       </div>}
       <DownloadImage />
       </div>
    </div> );
}
 
export default ImageEditor;