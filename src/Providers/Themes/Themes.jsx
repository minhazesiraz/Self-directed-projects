import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";

/* 
https://react.dev/reference/react/useContext
useContext : Application programming interface

1. Themes.jsx
2. useThemes.jsx
3. index.css
4. Changing.jsx
*/

export const Donors = createContext();

const Themes = ({ children }) => {
   const getDefaultTheme = () => {
      const keepingTheme = localStorage.getItem('theme');
      if (keepingTheme) {
         return keepingTheme;
      }
      return 'default';
   }

   const [theme, setTheme] = useState(getDefaultTheme);

   const applyTheme = (newTheme) => {
      const themeClasses = ['light', 'dark', 'orange', 'default-light', 'default-dark'];
      themeClasses.forEach((themeClass) => document.body.classList.remove(themeClass));

      if (newTheme === 'default') {
         const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
         const defaultThemeClass = prefersDarkScheme ? 'default-dark' : 'default-light';
         /* notes */
         setTheme(defaultThemeClass);
         document.body.classList.add(defaultThemeClass);
      } else {
         document.body.classList.add(newTheme);
      }
   };

   const toggleTheme = (newTheme) => {
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
   };

   useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => {
         if (localStorage.getItem('theme') === 'default') {
            applyTheme('default');
         }
      };

      if (theme === 'default') {
         applyTheme('default');
      }

      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
   }, [theme]);

   useEffect(() => {
      applyTheme(theme);
   }, [theme]);

   const themeDetails = {
      theme,
      toggleTheme
   }

   return (
      <Donors.Provider value={themeDetails}>
         {children}
      </Donors.Provider>
   );
};

Themes.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Themes;