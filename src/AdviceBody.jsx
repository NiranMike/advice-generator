import React, {useEffect} from 'react'
import divider from './Assets/pattern-divider-desktop.svg'
import mobileDivider from './Assets/pattern-divider-mobile.svg'
import dice from './Assets/icon-dice.svg'
import axios from 'axios'
const AdviceBody = () => {
    const url = 'https://api.adviceslip.com/advice';
    const [advices, setAdvice] = React.useState('');
    const [adviceId, setAdviceId] =React.useState('')
    const generateAdviceHandler = async () =>{
        const getUrl = await axios.get(url);
        const {id} = await getUrl.data.slip
        const {advice} = await getUrl.data.slip
        setAdvice(advice)
        setAdviceId(id)
        console.log(advice)
    }

    useEffect(()=>{
        generateAdviceHandler();
    },[])

  return (
    <div className=' my-[100px] md:my-[200px] flex justify-center'>
        <div className='  rounded-md h-[54vh] md:h-[250px] card-bg mx-6'>
            <p className=' text-center text-[#00f767] pt-9'>{`ADVICE #${adviceId}`}</p>
            <div className='grid h-[150px] md:h-[100px] w-[271.5px] md:w-[463px] mb-6 md:mb-2  overflow-auto justify-center'>
                <p className=' overflow-auto py-3  text-center text-2xl text-white max-w-md font-bold mx-5'>"{`${advices}`}"</p>
            </div>
            <img className='hidden md:block mx-5 pb-12' src={divider} alt="" />
            <img className='flex justify-center md:hidden mx- pb-12' src={mobileDivider} alt="" />
            <div onClick={generateAdviceHandler} className='absolute shadow-xl hover:shadow-[#00f767] hover:drop-shadow-2xl cursor-pointer mx-[119px] md:mx-[215px] mt-2 top-[405px] bg-[#00f767] p-4 rounded-full'>
                <img className=' ' src={dice} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AdviceBody