import React, { useEffect, useState } from 'react';
import './language.css';
import { useTranslation } from 'react-i18next';

export default function LanguageSelect() {

    const { t, i18n } = useTranslation();
    const [lng, setLng] = useState();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');

        if (!savedLanguage) {
            initializeLanguage(navigator.language);
        }
        else
            i18n.changeLanguage(savedLanguage)
        setLng(options.find(option => option.code === localStorage.getItem('language')).title)
    }, []);

    const initializeLanguage = (browserLng) => {
        localStorage.setItem('language', browserLng);
        i18n.changeLanguage(browserLng);
    };

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(lng);

    const [options, setOptions] = useState([{ title: t('footer.lang.pl'), code: 'pl' }, { title: t('footer.lang.en'), code: 'en-GB' }]);

    useEffect(() => {
        setOptions([{ title: t('footer.lang.pl'), code: 'pl' }, { title: t('footer.lang.en'), code: 'en-GB' }])
    }, [isOptionsVisible])

    const toggleOptions = () => {
        setIsOptionsVisible(!isOptionsVisible);
    };

    const handleOptionSelect = (option) => {
        localStorage.setItem('language', option.code);
        i18n.changeLanguage(option.code);
        setSelectedOption(option.title);
        setIsOptionsVisible(false);
    };

    return (
        <div className="lngContainer">
            <button className="lngSelector" onClick={toggleOptions}>
                {selectedOption || lng}
            </button>
            {isOptionsVisible && (
                <ul className="options-list">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="option"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};