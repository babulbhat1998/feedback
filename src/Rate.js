import React from 'react'

const Rate = (props) => {
    // console.log(props.option);
    return (
        <div className="emoji mb-6 flex items-center ">
            {props.option.map((val,index) => {
                // console.log(val);
                return (
                    <div className="emojiInner" key={index}>
                        <input type="radio" hidden id={"rate"+val.ratevalue} name="rate" value={val.ratevalue} onChange={(e)=>{props.selectELe(e,val.ratevalue)}} required/>
                        <label htmlFor={"rate"+val.ratevalue}>
                            <i className="fa-solid fa-star" style={{color: props.rateoption < val.ratevalue ? "#737373": "#fc0"}}></i>
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default Rate