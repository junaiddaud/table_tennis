const EditingOptions = ({editOptions,hadnleEditing,setInputEdit,editInput,handleAddText,setImageTexts,
    editIndex,imageText,}) => {
    let options=[
        {
            label:"Add Text Above Image",
            value:'1'
        }
    ]
  const handleEditImageText = (event) =>{
    console.log(event.key,event)
    let data=[...imageText]
  
    data[editIndex].text=event.target.value
    
    setImageTexts([...data])
  }
  const handleEditBoxSize = (event) =>{
   
    let data=[...imageText]
  
    data[editIndex].boxSize=parseInt(event.target.value)
    console.log(data)
    setImageTexts([...data])
  }
  const handleChangeFontSize =(event) =>{
    let data=[...imageText]
    data[editIndex].fontSize=event.target.value
    
    setImageTexts([...data])
  }
  const handleENter = (event) =>{
    if(event.key==='Enter'){
      let data=[...imageText]
      data[editIndex].text= data[editIndex].text
      console.log(data)
      setImageTexts([...data])
    }
 
  }
  let fontSizes=[
    {
    label:"XX Small",
    value:"text-xs"
  },
  {
    label:"X Small",
    value:"text-sm"
  },
  {
    label:"Small",
    value:"text-base"
  },
  {
    label:"Normal",
    value:"text-xl"
  },
  {
    label:"Large",
    value:"text-3xl"
  },
  {
    label:"X Large",
    value:"text-3xl"
  },
  {
    label:"XX Large",
    value:"text-5xl"
  },
]
    return ( <div className="border-solid border mt-4 border-gray-600 p-5 m-4">
       {editOptions && <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Edit Heading</label>
        <textarea className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 p-3" type="text" 
        value={editInput}
        onChange={e=>setInputEdit(e.target.value)}
        />
        </div>}
    
        {editIndex!==null && <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Edit Text</label>
        <textarea className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 p-3" type="text" 
        value={imageText[editIndex]?.text}
        onChange={handleEditImageText}
        onKeyDown={handleENter}
        />
         <label className="block mb-2 text-sm font-medium text-gray-900 ">Edit Box Size</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 p-3" type="number" 
        value={imageText[editIndex]?.boxSize}
        onChange={handleEditBoxSize}
       
        />
<label  className="block mb-2 text-sm font-medium text-gray-900 ">Select an Font Size</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
value={imageText[editIndex]?.fontSize}
onChange={handleChangeFontSize}
>
  <option value={""}>Choose a Font Size</option>
  {
    fontSizes.map(val=>(
      <option value={val.value}>{val.label}</option>
    ))
  }
 
</select>

        </div>}
       {options.map(val=>(

      <div key={val.value}>
        <label>
            <input value={val.value}
            checked={editOptions===val.value}
            type="checkbox" className="mr-2" onClick={hadnleEditing}/>
         {val.label}</label>
        </div>  ))}
        <button className="bg-blue-400 p-2 text-white"
        value={'2'}
        onClick={handleAddText}
        >
            Add text inside Image
        </button>
    </div> );
}
 
export default EditingOptions;