import React, { useEffect, useState } from 'react'
import logo from "./image/logo.png";
import FeedbackImage from "./image/svgbg.png";
import Rate from './Rate';
import FeedbackComp from './FeedbackComp';
const FeedBack = () => {
    useEffect(() => {
        // fetchData()
    },[])
    const [isValid, setIsValid] = useState(false);
    const [dataShow, setdataShow] = useState(false);
    const [inputLive, setinputLive] = useState({
        inputName: "",
        inputEmail: "",
        rate: "",
        textareaInput: ""
    })
    const json = {
        choices:
            [
                { ratevalue: '1' },
                { ratevalue: '2' },
                { ratevalue: '3' },
                { ratevalue: '4' },
                { ratevalue: '5' },
            ]
    };

    const validationee = (email) => {
        var regex = RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (regex.test(email)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        return regex.test(email);
    };
    const inputEle = (e) => {
        const inputelement = e.target;
        const { name, value } = inputelement;
        setinputLive({ ...inputLive, [name]: value })
        validationee(inputLive.inputEmail);
    }
    
    const Sendfeedback = () => {
        const { inputName,inputEmail, rate, textareaInput } = inputLive;


        if (inputName === "" || inputEmail === "" || rate === "") {
            alert("All Field Required");
        }
        else {
            if(validationee(inputLive.inputEmail)){
            const apifetch = fetch(`https://feedbackrbtech-default-rtdb.asia-southeast1.firebasedatabase.app/dataFeed.json`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        inputName,
                        inputEmail,
                        rate,
                        textareaInput
                    })
                }
            );

            if (apifetch) {
                setinputLive({
                    inputName: "",
                    inputEmail: "",
                    rate: "",
                    textareaInput: ""
                })
            }
            setdataShow(true);
            alert("Data Saved");
        }
        else{
            alert("Data Not Saved");
        }
        }
    }



    // const [allData, setallData] = useState([]);

    // const fetchData = async() => {
    //     const apifetchdata = await fetch(`https://feedbackrbtech-default-rtdb.asia-southeast1.firebasedatabase.app/dataFeed.json`);
    //     const jsonApi = await apifetchdata.json();
    //     console.log(jsonApi);
    //     setallData((state)=>{   
    //         state = [...state, jsonApi]
    //         return state;
    //     }) 
    // }

   
    



    return (
        <>
            
            <section className="max-w-[1320px] m-auto ">
                <div className="max-w-[130px] m-auto">
                    <img src={logo} className="w-full h-full" alt='logo' />
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-4 h-full items-center">
                    <div className="max-w-[524px] m-auto">
                        <img src={FeedbackImage} className="w-full h-full object-cover" style={{ filter: "hue-rotate(45deg)" }} alt='imagefeedback'/>
                    </div>
                    <div className="card max-w-[500px] w-full bg-white p-10 rounded-md sm:m-auto">

                    {dataShow === false ? 


                        <div className="">
                            <div className="">
                                <h3 className="text-black text-4xl mb-2">Feedback </h3>
                                <p className="text-gray-500 mb-5">Good Life with Better Software</p>
                                <hr className="my-4" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="inputName" className="block mb-3">Your Company Name</label>
                                <input type='text' name='inputName' className='w-full h-12 rounded-lg border border-1 inputType' onChange={inputEle} value={inputLive.inputName} required/>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="inputEmail" className="block mb-3">Your Company Email ID</label>
                                <input type='email' name='inputEmail' className='w-full h-12 rounded-lg border border-1 inputType' onChange={inputEle} value={inputLive.inputEmail} required/>
                                
                                {inputLive.inputEmail === "" ? "" : isValid ? <div className='text-green-600 font-bold'>Your email looks good!</div> : <div className='text-red-600 font-bold'>Please enter a valid email!</div>}
                                
                                
                            </div>
                            <div>
                                <label htmlFor="" className="block mb-3">Rating</label>
                                <Rate
                                    selectELe={inputEle}
                                    option={json.choices}
                                    rateoption={inputLive.rate}
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="block mb-3">Tell Us About Your Experience</label>
                                <textarea name="textareaInput" className="w-full h-full rounded-lg border border-1 textarea"
                                    rows="4" onChange={inputEle} value={inputLive.textareaInput}>{inputLive.textareaInput}</textarea>
                            </div>
                            <div className="mt-3">
                                <button className="btn" onClick={Sendfeedback}>Send Feedback</button>
                            </div>
                        </div>

                        :

                        <FeedbackComp />

                    }
                        
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default FeedBack