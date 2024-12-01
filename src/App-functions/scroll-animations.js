import { useState, useEffect } from "react";
const Scrollanimations = (scrollTop, setScrollTop) => {

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // %%% strony

    let location = window.location.href.split("/").at(-1)

    if (location != '') {
      setScrollTop(100)
    }
    else {
      const scrolled = (winScroll / height) * 1000;
      setScrollTop(scrolled);
    }

  };

  const checkLocation = () => {
    let location = window.location.href.split("/").at(-1)
    if (location != '') {
      setScrollTop(100)
    }
  }

  useEffect(() => {
    // Fires when the document view has been scrolled
    checkLocation();
    window.addEventListener("scroll", onScroll);
    // 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

}

export default Scrollanimations;