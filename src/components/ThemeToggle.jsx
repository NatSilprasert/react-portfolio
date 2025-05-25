import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/utils';

function ThemeToggle() {
    
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {   
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
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