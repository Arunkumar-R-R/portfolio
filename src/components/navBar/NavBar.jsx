import './NavBar.scss';
import {useState} from 'react';
import { theme } from '../../types/types';

const DarkModeIcon = ({ extraClass }) => {
    return (<svg className={`${extraClass}`} width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.824219C9.88797 0.824607 7.81568 1.3983 6.00416 2.48411C4.19264 3.56992 2.70984 5.1271 1.71394 6.98956C0.718041 8.85203 0.246394 10.9499 0.349312 13.0594C0.452229 15.1689 1.12585 17.2109 2.29832 18.9676C3.47079 20.7242 5.09812 22.1297 7.00673 23.034C8.91535 23.9383 11.0336 24.3076 13.1357 24.1024C15.2377 23.8971 17.2446 23.1252 18.9422 21.8688C20.6399 20.6125 21.9647 18.9188 22.7753 16.9686C23.1731 16.0119 22.22 15.0506 21.261 15.4402C19.6173 16.106 17.7924 16.1747 16.1033 15.6344C14.4143 15.0941 12.968 13.9789 12.016 12.4827C11.064 10.9866 10.6664 9.20413 10.8924 7.44523C11.1184 5.68633 11.9537 4.06226 13.253 2.85539L13.3428 2.76205C13.9856 2.02705 13.4746 0.833552 12.4585 0.833552H12.1481L12.0688 0.826552L11.9988 0.824219H12Z" fill="#1A1A1B" />
    </svg>);
}

export default function NavBar() {
    
    const navItems = ['About', 'Blog'];
    const [currentTheme, setCurrentTheme] = useState('DARK');
    type voidFunc = () => void;

    const toggleTheme: voidFunc = () =>{
        console.log(currentTheme,'currentTHEME');
    }

    return (
        <>
            <div className="flex items-center justify-between w-fit h-14 border border-gray-300 gap-3  rounded-md bg-white px-4 py-1">
                {
                    navItems.map((navItem) => {
                        return (<div className='cursor-pointer text-sm px-2 py-1 hover:bg-gray-200 active:bg-blue-100 rounded-md'>
                                    <span className='select-none font-medium'>{navItem}</span>
                               </div>);
                    })
                }
                <div className='p-2'>
                    <span className="border h-fit">
                    </span>
                </div>
                <div className='cursor-pointer px-1 py-2'onClick={toggleTheme()} >
                    <DarkModeIcon extraClass={'w-8 h-8 border-2 border-gray-200 rounded-md p-1 hover:border-black active:bg-blue-100'}></DarkModeIcon>
                </div>
            </div>
        </>
    );
}