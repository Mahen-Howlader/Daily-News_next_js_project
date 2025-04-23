// "use client"

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";

function Mobilemenu() {
    const [isMenuOpen, setMenuOpen] = useState(true)
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }
    return (
        <div className="lg:hidden">
            <Button onClick={toggleMenu} variant="default">
                {
                    isMenuOpen ? <IoMenuSharp size={30} /> : <RxCross2 size={30} />
                }
            </Button>
        </div>
    );
};

export default Mobilemenu;