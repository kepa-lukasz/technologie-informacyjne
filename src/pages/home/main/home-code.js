import { useEffect } from "react";
import Home from "./home";

const HomeCode = () => {
    useEffect(() => {
        const pointers = document.querySelectorAll("div.pointer");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("pointer-animation")
                }
                else {
                    entry.target.classList.remove("pointer-animation")
                }
            })
        })
        pointers.forEach(el => { observer.observe(el) })
    }, [])
}
export default HomeCode
