import { Dispatch, SetStateAction, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface Props {
    setCounter: Dispatch<SetStateAction<number>>;
 }

export const ItemCounter = ({setCounter}:Props) => {
    const [count, setCount] = useState(10);
    const minValue = 10;
    const maxValue = 15;

    const handleIncrement = () => {
        if (count < maxValue) {
            setCount(count + 1);
            setCounter(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > minValue) {
            setCount(count - 1);
            setCounter(count  - 1);
        }
    };

    return (
        <div className="flex font-bold">
            <button type='button' className=" h-7 w-7 border-2 mx-1 border-blue-500 bg-blue-800 rounded-full  text-black font-bold  " onClick={handleDecrement}>
                <FontAwesomeIcon icon={faMinus} />
            </button>

            <div className='text-white font-bold mx-1 '>{count}</div>

            <button type='button' className=" h-7 w-7 border-2 mx-1 border-blue-500 bg-blue-800 rounded-full  text-black font-bold  " onClick={handleIncrement}>
                <FontAwesomeIcon icon={faPlus} className=''/>
            </button>
        </div>
    );
};
