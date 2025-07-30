import { useState } from "react";


function Navbar() {
    const [clicked, setClicked] = useState(true);

    return (
        <div>
            <div>
                <div>
                    
                </div>
                <div className="lg:flex hidden">
                    <ul className="flex gap-12 font-medium text-sm">
                        <li className="cursor-pointer hover:underline">
                            Download
                        </li>
                        <li className="cursor-pointer hover:underline">
                            Nitro
                        </li>
                        <li className="cursor-pointer hover:underline">
                            Safety
                        </li>
                        <li className="cursor-pointer hover:underline">
                            Support
                        </li>
                        <li className="cursor-pointer hover:underline">Blog</li>
                        <li className="cursor-pointer hover:underline">
                            Careers
                        </li>
                    </ul>
                </div>
                <div className="flex gap-8">
                    <div>
                        
                    </div>
                    <div className="lg:hidden flex flex-col justify-center gap-1 cursor-pointer">
                    
                            <div
                                className="gap-1 flex flex-col justify-center transition-all"
                                onClick={() => setClicked((prev) => !prev)}
                            >
                                <div className="w-6 h-1 bg-white rounded-full"></div>
                                <div className="w-6 h-1 bg-white rounded-full"></div>
                                <div className="w-6 h-1 bg-white rounded-full"></div>
                            </div>

                           
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;