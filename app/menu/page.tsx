'use client'

import { act, useState } from "react";
import Footer from "../components/footer";
import styles from "../styles/ultima.module.scss";
import Image from "next/image";

export default function Menu(){

    const sections = [
        {title: "Французская кухня", dishes: [
            {imgSrc: "/img/face3.png", country:"france", name:"Грибной жульен", desc:"Нежные шампиньоны, запечённые в сливочном соусе с ароматными специями, покрытые тягучей корочкой сыра", price: "1 300 ₽"},
            {imgSrc: "/img/face3.png", country:"france", name:"Грибной жульен", desc:"Нежные шампиньоны, запечённые в сливочном соусе с ароматными специями, покрытые тягучей корочкой сыра", price: "1 300 ₽"},
            {imgSrc: "/img/face3.png", country:"france", name:"Грибной жульен", desc:"Нежные шампиньоны, запечённые в сливочном соусе с ароматными специями, покрытые тягучей корочкой сыра", price: "1 300 ₽"},
            {imgSrc: "/img/face3.png", country:"france", name:"Грибной жульен", desc:"Нежные шампиньоны, запечённые в сливочном соусе с ароматными специями, покрытые тягучей корочкой сыра", price: "1 300 ₽"},
            {imgSrc: "/img/face3.png", country:"france", name:"Грибной жульен", desc:"Нежные шампиньоны, запечённые в сливочном соусе с ароматными специями, покрытые тягучей корочкой сыра", price: "1 300 ₽"},
            {imgSrc: "/img/face3.png", country:"france", name:"Грибной жульен", desc:"Нежные шампиньоны, запечённые в сливочном соусе с ароматными специями, покрытые тягучей корочкой сыра", price: "1 300 ₽"}
        ]
        },
        {title: "Скандинавская кухня", dishes: [
            {imgSrc: "/img/face3.png", country:"france", name:"Грибной жульен", desc:"Нежные шампиньоны, запечённые в сливочном соусе с ароматными специями, покрытые тягучей корочкой сыра", price: "1 300 ₽"}
        ]},
        {title: "Супы", dishes: [
            
        ]},
        {title: "Закуски", dishes: [
            
        ]},
        {title: "Салаты", dishes: [
            
        ]},
        {title: "Десерты", dishes: [
            
        ]},
        {title: "Напитки", dishes: [
            
        ]},
        {title: "От шефа", dishes: [
            
        ]}
    ]

    const [activeTags, setActiveTags] = useState(sections.map(section => section.title) as string[])

    function toggleTag(tag : string){
        if(activeTags.includes(tag)){
            setActiveTags(activeTags.filter(t => tag !== t))
        }else{
            setActiveTags([...activeTags, tag])
        }

        console.log(activeTags)
    }

    return (
        <>
            <div className="items-center flex flex-col w-5/6 mx-auto">
                <div className="flex gap-3 py-16 w-full max-sm:py-6">
                    <h1 className="text-4xl font-bold mr-4 max-sm:text-2xl">Меню</h1>
                    <div className="flex gap-2 overflow-x-scroll">
                        {
                            sections.map((section, index) => (
                                <Tag selected={activeTags.includes(section.title)} onClick={() => toggleTag(section.title)} key={"menuTag" + index} title={section.title}/>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-20 items-center w-full">
                    {
                        sections.map((section, index) => (
                            <div hidden={!activeTags.includes(section.title)} key={section.title} className="w-full">
                                <h1 className="block text-3xl mb-4 max-sm:text-xl">{section.title}</h1>
                                <div className="flex flex-wrap">
                                    {
                                        section.dishes.map((dish, i) => (
                                            <DishCard key={"dish" + i} imgSrc={dish.imgSrc} country={dish.country} name={dish.name} price={dish.price} desc={dish.desc}/>
                                        ))
                                    }
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

function Tag({title, selected, onClick} : {title : string, selected:boolean, onClick : () => void} ){

    if(selected){
        return (
            <a onClick={onClick} className={`max-sm:text-base max-sm:h-8 cursor-pointer text-nowrap flex items-center px-3 border ${styles.border_red} rounded-3xl ${styles.text_red} text-xl text-center h-10`}>
                {title}
            </a>
        )
    }else{
        return (
            <a onClick={onClick} className={`max-sm:text-base max-sm:h-8 cursor-pointer text-nowrap flex items-center px-3 border ${styles.border_grey} rounded-3xl ${styles.text_light} text-xl text-center h-10`}>
                {title}
            </a>
        )
    }
}

function DishCard({imgSrc, country, name, desc, price} : {imgSrc : string, country : string, name : string, desc : string, price: string}){
    return (
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 aspect-square flex flex-col gap-3 p-8">
            <Image className="w-full aspect-video rounded-xl" src={imgSrc} width={240} height={240} alt={name}/>
            <div className="flex items-center gap-3"><FlagIcon country={country}/><h2 className="flex text-2xl font-bold items-center max-sm:text-lg">{name}</h2></div>
            <p className="text-xl py-3 max-sm:text-base max-sm:py-1">{desc}</p>
            <h3 className={`${styles.text_blue} text-3xl font-bold max-sm:text-lg`}>{price}</h3>
        </div>
    )
}

function FlagIcon({country} : {country : string}){
    if(country == "france"){
        return (
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_224_2962)">
                <rect width="21" height="21" rx="4.56522" fill="white"/>
                <rect y="-1" width="7" height="23" fill="#60658E"/>
                <rect x="14" y="-1" width="7" height="23" fill="#D66666"/>
                </g>
                <defs>
                <clipPath id="clip0_224_2962">
                <rect width="21" height="21" rx="4.56522" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        )
    }else{
        return (
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_224_3028)">
            <rect width="21" height="21" rx="4.56522" fill="#60658E"/>
            <rect x="6" y="-0.5" width="4" height="22" fill="#FFD83E"/>
            <rect x="23" y="8.5" width="4" height="24" transform="rotate(90 23 8.5)" fill="#FFD83E"/>
            </g>
            <defs>
            <clipPath id="clip0_224_3028">
            <rect width="21" height="21" rx="4.56522" fill="white"/>
            </clipPath>
            </defs>
            </svg>

        )
    }
}