import { useState } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 text-white bg-gray-800 dark:bg-gray-200 rounded"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
    </button>
  );
};

export default ThemeToggle;
