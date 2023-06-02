import React, { useState } from "react";

export default function Slider() {
    const [slide, setSlide] = useState(0);

    const urls = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9gwmxRltZvcxZJpTk9I95XNjhzlCCOph6mFbMZNnePwJzhgi47x7eoc6OuIvIKetxfI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcipQHRmXy9spfiYUoRJ-mKwQJj1EZybQTlLbdmvJiM-8gS-Fq0S52MyNK7mmwKtBLdX8&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAh9FzAEh8sguYc-q07axKfQQqCxIAT8k3ABwRBLRzYmKSOiaeL5kHdX3IIC8QYgg9frw&usqp=CAU",
    ];

    const nextSlide = () => {
        setSlide(
            (prevSlide) =>
                (prevSlide === urls.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setSlide(
            (prevSlide) =>
                (prevSlide === 0 ? urls.length - 1 : prevSlide - 1));
    };
    return (
        <div className="slider">
            <button
                className="slider-button"
                onClick={prevSlide}>
                Назад
            </button>
            <img
                className="slider-image"
                src={urls[slide]}
                alt="Фотография"
            />
            <button
                className="slider-button"
                onClick={nextSlide}>
                Далее
            </button>
        </div>
    );
}
