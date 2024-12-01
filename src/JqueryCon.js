import { useEffect, useState } from "react";
import $ from 'jquery';

export default function JqueryScripts() {
    const [data, setData] = useState("Ładowanie...")
    useEffect(() => {
        const today = new Date();
        // Pobranie dnia miesiąca (1-31)
        const day = today.getDate();
        // Pobranie numeru miesiąca (0-11, więc dodajemy 1, aby uzyskać 1-12)
        const month = today.getMonth() + 1;
        $.ajax({
            url: `https://pniedzwiedzinski.github.io/kalendarz-swiat-nietypowych/${month}/${day}.json`, // Przykładowy endpoint
            method: 'GET',
            success: (response) => {
                setData(response[0].name)
            },
            error: (error) => {
                console.error('Błąd podczas pobierania danych:', error);
            },
        });

        //efekt hover na element z jquery
        $(document).ready(function () {
            
            $('p[id^="par"]').hover(
                function () {
                    
                    $(this).css('transform', 'scale(1.1)');
                },
                function () {
                    
                    $(this).css('transform', 'scale(1)');
                }
            );
        });

        //zmiana koloru tła w jquery na losowe
        $(document).ready(function () {
            
            $('p[id^="par"]').click(function () {
              var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
              $('#parcon').css('background-color', randomColor); 
            });
          });
         

    }, [])
    return (
        <div style={{backgroundColor : "black"}} id="parcon" className="d-flex w-100 justify-content-center py-3 pt-4">
            
            <p id="par">
                Dziś jest {data}
            </p>
        </div>
    )
}