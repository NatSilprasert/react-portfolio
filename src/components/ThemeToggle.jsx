import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/utils';

function ThemeToggle() {
    
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, [])

    const toggleTheme = () => {   
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
        setIsDarkMode(!isDarkMode); 
    }
    
    return (
        <button onClick={toggleTheme} className={cn(
            "hidden lg:flex z-50 rounded-full transition-all duration-300",
            "focus:outline-none"
        )}>
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/> 
            ) : (
                <Moon className="h-6 w-6 text-black"/>
            )}
        </button>
    );
}

export default ThemeToggle