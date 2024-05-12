
import { useState } from 'react'
import '../../App.css'
import data from './data.js'


// single selection // 

// multiple selection //

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMulitSelectoin, setEnableMultiSelectoin] = useState(false)

    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)  
    }

    function handleMultiSelection(getCurrentId) {

        let copyMultiple = [...multiple];
        const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId)
        if(findIndexofCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexofCurrentId, 1)
        setMultiple(copyMultiple)

        console.log(selected, multiple);

    }

  return (
    <div className='wrapper'>

    <button onClick={() => setEnableMultiSelectoin(!enableMulitSelectoin)} >Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0  ?  
                data.map(dataItem => 
                    <div className='item'> 
                    <div onClick={enableMulitSelectoin ? () => handleMultiSelection(dataItem.id) : ()=> handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMulitSelectoin ?
                        multiple.indexOf(dataItem.id) !== -1 && 
                        <div className='content'> {dataItem.answer} </div>  :
                        selected === dataItem && (<div className=''> </div>)
                    }
                    </div>)
                : <div> No data found </div>
            }
        </div>
    </div>
  )
}

export default Accordian
