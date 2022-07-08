import { useEffect, useState } from "react";

import classes from "./NavBar.module.css";

const NavBar = () => {
    const [showHandle, setShowHandle] = useState(false);
    
    //adding a scroll bar listner
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowHandle(true);
            } else {
                setShowHandle(false);
            };
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);


  return (
    <div className={!showHandle ? classes.nav : classes.nav__black}>
      <img
        className={classes.nav__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />

<img
        className={classes.nav__avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default NavBar;
