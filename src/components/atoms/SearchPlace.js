import React, {useState} from 'react';
import axios from 'axios';

function SearchPlace(props){

    const{ SelectStart, setSelectStart} = useState('');
    const{ SelectFinal, setSelectFinal} = useState('');

    
    const onStartChange = (e) =>{
        setSelectStart(e.target.value)
    };

    const onFinalChange = (e) =>{
        setSelectFinal(e.target.value)
    }

    const onKeyPress=(e)=>{
        
            try{
                console.log(e);
                axios.post('/select/another',{
                    startplace: SelectStart,
                    finalplace: SelectFinal
                });
                
            } catch (error){
                console.error(error);
            }
        
            
    }

   
    return(
        <div className="h-12 m-10 mx-44 bg-gray-light border border-solid border-gray-main rounded-3xl">
            <form onSubmit={onKeyPress}>
                <div className="flex justify-between">
                <div className="w-full flex items-center grid grid-cols-2 divide-x divide-black">
                    <input className="m-2 flex justify-center items-center" placeholder="어디서 출발하세요?" type="text" name="Start" value={SelectStart} onChange={onStartChange} onKeyPress={onKeyPress}/>
                    <input className="m-2 flex justify-center" placeholder="어디로 가세요?" type="text" name="Final" value={SelectFinal} onChange={onFinalChange} onKeyPress={onKeyPress}/>
                    </div>
                    <button type="submit">
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchPlace;