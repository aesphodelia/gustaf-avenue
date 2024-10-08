'use client'

import { useState } from "react"
import styles from "../styles/ultima.module.scss"
import Footer from "../components/footer";

export default function Reservation(){

    const maxPartySize = 8;
    let partySizeArray = [];
    for(let i = 1; i <= maxPartySize; i++){
        partySizeArray.push(i);
    }
    let datesArray = ["сегодня", "завтра", "послезавтра"]
    let timesArray = ["00:00", "01:00", "02:00", "03:00"]

    function sendData(){
       const partySizeChooser = document.getElementById("partySizeChooser") as HTMLHeadingElement;
       const dateChooser = document.getElementById("dateChooser") as HTMLHeadingElement;
       const timeChooser = document.getElementById("timeChooser") as HTMLHeadingElement;

       const nameInput = document.getElementById("nameInput") as HTMLInputElement;
       const phoneInput = document.getElementById("phoneInput") as HTMLInputElement;

       let reservationData = {
        name: nameInput.value,
        phone: phoneInput.value,
        partySize: partySizeChooser.textContent,
        date: dateChooser.textContent,
        time: timeChooser.textContent
       }

       console.log(reservationData)
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="w-3/4 flex flex-col gap-10 mt-10 mb-40">
                    <h1 className="text-3xl font-bold">Забронировать столик</h1>
                    <form id="dataForm" className={`px-8 pt-8 ${styles.bg_grey_dark_1} ${styles.border_grey} border rounded-2xl grid grid-rows-10 sm:grid-rows-5 sm:grid-cols-2 lg:grid-rows-3 lg:grid-cols-[15%_25%_25%_30%] lg:h-60 lg:w-4/5 lg:min-w-[900px] text-2xl grid-cols-1 place-items-start`}>
                        <h2 className="col-start-1 row-start-1">Гостей</h2>
                        <h2 className="row-start-3 col-start-1 sm:row-start-2">Дата</h2>
                        <h2 className="row-start-5 col-start-1 sm:row-start-3">Время</h2>
                        <Chooser id="partySizeChooser" className="row-start-2 sm:col-start-2 sm:row-start-1" values={partySizeArray}/>
                        <Chooser id="dateChooser" className="row-start-4 sm:col-start-2 sm:row-start-2" values={datesArray}/>
                        <Chooser id="timeChooser" className="row-start-6 sm:col-start-2 sm:row-start-3" values={timesArray}/>
                        <h2 className="col-start-1 row-start-7 sm:col-start-1 sm:row-start-4 lg:col-start-3 lg:row-start-1">Имя</h2>
                        <h2 className="col-start-1 row-start-9 sm:col-start-1 sm:row-start-5 lg:col-start-3 lg:row-start-2 text-nowrap">Номер телефона</h2>
                        <input id="nameInput" type="name" required className={`row-start-8 text-xl ${styles.border_grey} border rounded-3xl bg-transparent sm:col-start-2 sm:row-start-4 lg:col-start-4 lg:row-start-1 h-3/5 w-full p-6 sm:text-2xl`}/>
                        <input id="phoneInput" type="phone" required className={`row-start-10 text-xl ${styles.border_grey} border rounded-3xl bg-transparent sm:col-start-2 sm:row-start-5 lg:col-start-4 lg:row-start-2 h-3/5 w-full p-6 sm:text-2xl`}/>
                    </form>
                    <div className="flex text-2xl items-center gap-8 flex-col lg:gap-20 lg:flex-row">
                        <button form="dataForm" onClick={sendData} type="submit" className={`py-3 px-8 border rounded-3xl text-nowrap ${styles.border_blue} ${styles.text_blue} hover:text-blue-700 cursor-pointer hover:bg-slate-200 transition-colors duration-200`}>Забронировать</button>
                        <a className="cursor-pointer">Назад</a>
                        <a className="cursor-pointer">На главную</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

function Arrow({right, disabled} : {right? : boolean, disabled : boolean}){
    let color;

    if(disabled) color = "#323235";
    else color = "#FFFFFF"; 

    if(!right){
        return (
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.832 8.092L3.576 10.66L21 10.66L21 11.62L3.576 11.62L5.832 14.188L5.496 14.5C3.8 12.948 2.216 11.876 0.744 11.284L0.744 10.996C2.216 10.404 3.8 9.332 5.496 7.78L5.832 8.092Z" fill={color}/>
            </svg>
        )
    }else{
        return (
            <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.168 6.908L17.424 4.34H0V3.38H17.424L15.168 0.812L15.504 0.5C17.2 2.052 18.784 3.124 20.256 3.716V4.004C18.784 4.596 17.2 5.668 15.504 7.22L15.168 6.908Z" fill={color}/>
            </svg>
        )
    }
}

function Chooser({values, className, id} : {values : Array<any>, className?: string, id: string}){

    const [valueIndex, setValueIndex] = useState(0)

    return (
        <div className={`flex items-center text-2xl gap-2 ${className}`}>
            <a className="cursor-pointer" onClick={() => valueIndex == 0 ? false : setValueIndex(valueIndex - 1)}><Arrow disabled={valueIndex == 0}/></a>
            <h3 id={id}>{values[valueIndex]}</h3>
            <a className="cursor-pointer" onClick={() => valueIndex == values.length - 1 ? false : setValueIndex(valueIndex + 1)}><Arrow right disabled={valueIndex == values.length - 1}/></a>
        </div>
    )
}