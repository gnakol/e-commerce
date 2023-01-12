import React from 'react';

import ico_pint from '../../assets/img/ico_pint.gif';
import ico_twitter from '../../assets/img/ico_twitter.gif';


const Footer = () => {
    return (
      
<footer className="footer bg-white relative pt-1 border-t-2 border-b-2 border-blue-700">
    <div className="container mx-auto px-6 ">

        <div className="sm:flex sm:mt-0.5">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
               
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Team Ecom</span>
                    <span className="my-2"><a href="#" className="text-blue-700 text-md hover:text-green-500">Contactez-nous</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-green-500">link 1</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Mentions Légales</span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-green-500">C.G.U.</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-green-500">link 1</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Liens</span>
                   
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-green-500"> <img  src={ico_pint} alt="Github"/></a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-green-500"> <img  src={ico_twitter} alt="Github"/></a></span>
                </div>                        
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6">
        <div className="mt-2 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-2">
                <p className="text-sm text-blue-700 font-bold mb-2">
                    © 2023 by Team Ecom
                </p>
            </div>
        </div>
    </div>
</footer>

    );
};

export default Footer;

