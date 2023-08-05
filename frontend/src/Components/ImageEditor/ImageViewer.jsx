import { useEffect, useState } from "react";
import {MdCancel, MdModeEdit} from 'react-icons/md'
import Draggable from 'react-draggable'


const ImageViewer = ({editOptions, source,editInput,imageText,setImageTexts,setEditIndex}) => {

const handleRemove=(index)=>{
  setEditIndex(null)
  setImageTexts(imageText.filter((val,i)=>i!==index))

}
const handleEdit=(index)=>{
  setEditIndex(index)
}

    return ( 
        <div className="shadow-lg p-1" id="meme" 
      
        >
     {console.log(imageText)}
{imageText?.length>=1 &&
imageText.map((val,index)=>(

     
  
  <Draggable
        defaultPosition={{x:0, y: 0}}
        position={null}
      
        scale={1}
      >
    <div className="absolute"> 
     <p id="text" className={`${val.fontSize} min-w-min font-semibold  relative bg-white px-2  pb-2  group line  `
    
    }
    style={{
      width:val.boxSize
    }} 
 

 >
        <span class="font-border">{val.text}</span>
        <span role="button" onClick={(e)=>handleRemove(index)} className="inline invisible group-hover:visible absolute top-0 right-0   justify-end"><MdCancel size={15}/></span>
        <span role="button" onClick={(e)=>handleEdit(index)} className="inline invisible group-hover:visible absolute top-0 left-0  justify-end"><MdModeEdit size={15}/></span>
        </p>
        </div>
      </Draggable>
 
     




))
}
{editOptions==='1' &&
<p id="text" className="text-4xl font-semibold bg-white p-2 w-96"
 
 >
    
  <span class="font-border w-96">{editInput}</span>
</p>
}
<img className="w-96 h-96 image " src={source} />


        </div>
     );
}
 
export default ImageViewer;