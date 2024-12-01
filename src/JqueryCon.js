import { useEffect, useState } from "react";
import $ from 'jquery';
import CustomButton from "./components/custom-button/custom-button";

export default function JqueryScripts() {
    const [data, setData] = useState("Ładowanie...")
    useEffect(() => {
        //powiększenie / zmniejszenie tekstu
        $(document).ready(function () {
            $('#resize-button-more').click(function () {
                $('body').css('font-size', '24px');
                $(this).prop('disabled', true);  
                $(`#resize-button-less`).prop('disabled', false); 
            });
            $('#resize-button-less').click(function () {
                $('body').css('font-size', '16px');

                $(this).prop('disabled', true);  
                $(`#resize-button-more`).prop('disabled', false); 
            });
        });
        //jasny - ciemny motyw
        $(document).ready(function () {

            $('#light-theme').click(function () {
                $('p, h1, h2, h3, h4, h5, h6, a, span, label').addClass('tekst-yellow');
                $(this).prop('disabled', true);  
                $(`#dark-theme`).prop('disabled', false); 
            });
            $('#dark-theme').click(function () {
                $('p, h1, h2, h3, h4, h5, h6, a, span, label').removeClass('tekst-yellow');
                $(this).prop('disabled', true);  
                $(`#light-theme`).prop('disabled', false); 
            });
        });


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
        <div style={{ backgroundColor: "black" }} id="parcon" className="flex-wrap d-flex w-100 justify-content-center py-3 pt-4">
            <div className="d-flex justify-content-center w-100 flex-wrap mb-3">
                <div style={{width: "200px"}}>

            <CustomButton  id="resize-button-more" arr={false} text={"powiększ tekst"} className="ms-3 my-2 px-3 py-0 py-1" />
                </div>
                <div style={{width: "200px"}}>

                <CustomButton disabled={true} id="resize-button-less" arr={false} text={"zmniejsz tekst"} className="my-2 ms-3 px-3 py-1 " />
                </div>
                
                <div style={{width: "200px"}}>

                <CustomButton id="light-theme" arr={false} text={"Zwiększ konktrast"} className="my-2 ms-3  px-3 py-0 py-1" />
                </div>
                <div style={{width: "200px"}}>
                <CustomButton disabled={true} id="dark-theme" arr={false} text={"Zmniejsz konktrast"} className="my-2 ms-3  px-3 py-0 py-1" />
                </div>
            </div>
            <p id="par">
                Dziś jest {data}
            </p>
        </div>
    )
}