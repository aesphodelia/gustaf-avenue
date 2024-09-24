'use client'

import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from './styles/ultima.module.scss';
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="scroll-smooth snap-mandatory snap-y overflow-y-scroll flex flex-col h-[calc(100vh-80px)]">
        <div className="snap-center snap-always shrink-0">
          <Face/>
        </div>
        <div className="snap-center snap-always shrink-0">
          <OurPhilosophy/>
        </div>
        <div className="snap-center snap-always shrink-0">
          <OurKitchen/>
        </div>
        <div className="snap-center snap-always shrink-0">
          <MenuShowcase/>
        </div>
        <div className="snap-center snap-always shrink-0">
          <div>
            <SeeYou/>
            <Footer/>
          </div>
        </div>        
      </div>
    </>
  );
}

function Face(){
  const menuTags = ["Скандинавская кухня", "Французская кухня", "Закуски", "Супы", "Салаты", "Десерты", "Напитки", "От шефа"];
  return (
    <div className="flex h-[calc(100vh-80px)] relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3/7 h-60 z-20 flex">
        <div className="relative flex gap-3 items-center">
          <Image src="/img/logo.png" alt="Logo" width={260} height={180}></Image>
          <h1 className="text-8xl">Ресторан <br></br> Gustaf Avenue</h1>
          <h3 className="text-2xl absolute top-12 right-12">Москва, <br></br> ул. Арбат, 14</h3>
        </div>
      </div>
      <div className="w-1/2">
        <div className="from-[#000000cc] bg-gradient-to-b w-full h-64 absolute top-0 z-10"></div>
        <Carousel/>
      </div>
      <div className="w-1/2 bg-black flex flex-col justify-end items-center">
        <div className="flex flex-col h-2/3 items-center justify-end">
          <p className="text-3xl w-5/6">Gustaf Avenue — ресторан, где встречаются скандинавская простота и французская изысканность. Вдохновленные культурным наследием короля Густава III, мы предлагаем уникальное гастрономическое путешествие, объединяя свежесть и натуральность северной кухни с утонченными вкусами Франции.</p>
          <div className="text-2xl w-5/6 mt-16 flex flex-col gap-4">
            <div className={`hover:[block-size: calc-size(auto)] overflow-hidden rounded-3xl flex flex-col justify-around px-6 border transition-all ease-in-out duration-200 ${styles.border_grey} group`}>
              <div className={`${styles.text_red} place-items-center w-full flex justify-between py-6`}>
              Меню <i className={`border ${styles.border_red} rounded-2xl p-1 w-12 flex justify-center`}><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.168 14.908L18.424 12.34L1 12.34V11.38L18.424 11.38L16.168 8.812L16.504 8.5C18.2 10.052 19.784 11.124 21.256 11.716V12.004C19.784 12.596 18.2 13.668 16.504 15.22L16.168 14.908Z" fill={`#EF8793  `}/></svg></i>
              </div>
              <div className="h-40 flex-wrap gap-x-2 hidden group-hover:flex">
                {
                  menuTags.map((name, i) => {
                    return (
                    <MenuTag key={"menuTag" + i} name={name}/>
                    )
                  })
                }
              </div>
            </div>
            <div className={`h-auto rounded-3xl hover:[block-size: calc-size(auto)] flex flex-col justify-between px-6 border ${styles.border_grey} ${styles.text_blue} group`}>
              <div className="flex items-center w-full justify-between py-6">
                Забронировать столик<i className={`border ${styles.border_blue} rounded-2xl p-1 w-12 flex justify-center`}><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.168 14.908L18.424 12.34L1 12.34V11.38L18.424 11.38L16.168 8.812L16.504 8.5C18.2 10.052 19.784 11.124 21.256 11.716V12.004C19.784 12.596 18.2 13.668 16.504 15.22L16.168 14.908Z" fill="#8793EF"/></svg></i>
              </div>
              <div className={`flex w-full h-40 items-stretch p-3 justify-between ${styles.text_light} hidden group-hover:flex`}>
                <div className="flex flex-col justify-between">
                  <h2>Гостей</h2>
                  <h2>Дата</h2>
                  <h2>Время</h2>
                </div>

                <div className="flex flex-col justify-between">
                  <h2 className="flex items-center gap-3">
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.832 8.092L3.576 10.66L21 10.66L21 11.62L3.576 11.62L5.832 14.188L5.496 14.5C3.8 12.948 2.216 11.876 0.744 11.284L0.744 10.996C2.216 10.404 3.8 9.332 5.496 7.78L5.832 8.092Z" fill="#323235"/></svg>
                    1 
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.168 14.908L18.424 12.34H1V11.38H18.424L16.168 8.812L16.504 8.5C18.2 10.052 19.784 11.124 21.256 11.716V12.004C19.784 12.596 18.2 13.668 16.504 15.22L16.168 14.908Z" fill="white"/></svg></h2>
                  <h2 className="flex items-center gap-3">
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.832 8.092L3.576 10.66L21 10.66L21 11.62L3.576 11.62L5.832 14.188L5.496 14.5C3.8 12.948 2.216 11.876 0.744 11.284L0.744 10.996C2.216 10.404 3.8 9.332 5.496 7.78L5.832 8.092Z" fill="#323235"/></svg>
                    сегодня
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.168 14.908L18.424 12.34H1V11.38H18.424L16.168 8.812L16.504 8.5C18.2 10.052 19.784 11.124 21.256 11.716V12.004C19.784 12.596 18.2 13.668 16.504 15.22L16.168 14.908Z" fill="white"/></svg>
                  </h2>
                  <h2 className="flex items-center gap-3">
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.832 8.092L3.576 10.66L21 10.66L21 11.62L3.576 11.62L5.832 14.188L5.496 14.5C3.8 12.948 2.216 11.876 0.744 11.284L0.744 10.996C2.216 10.404 3.8 9.332 5.496 7.78L5.832 8.092Z" fill="#323235"/></svg>
                    14:00
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.168 14.908L18.424 12.34H1V11.38H18.424L16.168 8.812L16.504 8.5C18.2 10.052 19.784 11.124 21.256 11.716V12.004C19.784 12.596 18.2 13.668 16.504 15.22L16.168 14.908Z" fill="white"/></svg>
                   </h2>
                </div>

                <div className="flex flex-col h-full justify-between w-1/2 gap-2">
                  <input type="text" className={`focus:ring-gray-600 focus:outline-none focus:ring-1 border-solid  rounded-3xl bg-black ${styles.border_grey} accent-transparent p-3 placeholder:bg-black border ${styles.border_grey}`} placeholder="Имя"/>
                  <input className={`focus:ring-gray-600 focus:outline-none focus:ring-1 rounded-3xl bg-black ${styles.border_grey} accent-transparent p-3 placeholder:bg-black border ${styles.border_grey}`} placeholder="Номер телефона"/>
                </div>
              </div>
            </div>
          </div>
          <a href="#philosophy" className="text-2xl flex p-12 mr-auto mt-auto items-center gap-1">            
            <svg width="28" height="28" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.592 16.168L10.16 18.424L10.16 1L11.12 1L11.12 18.424L13.688 16.168L14 16.504C12.448 18.2 11.376 19.784 10.784 21.256L10.496 21.256C9.904 19.784 8.832 18.2 7.28 16.504L7.592 16.168Z" fill="white"/>
            </svg>
            О нас
          </a>
        </div>
      </div>
    </div>
  );
}

function MenuTag({name} : {name : string}){
  return (
    <div className={`rounded-3xl ${styles.border_grey} ${styles.text_light} py-2 px-5 text-2xl border h-14 place-items-center`}>{name}</div>
  )
}

function OurPhilosophy(){
  return (
    <div id="philosophy" className="flex h-[calc(100vh-80px)]">
      <div className="w-1/2 bg-black flex flex-col justify-center items-center">
        <div className="w-3/4 h-4/5 gap-10 flex flex-col">
          <h1 className="text-4xl font-bold">Наша философия</h1>
          <p className="text-3xl">
            Ресторан был создан с вдохновением от эпохи короля Густава III, который играл ключевую роль в сближении французской и шведской культур.<br></br><br></br>
            Мы стремимся объединить лучшие традиции скандинавской кухни, известной своей простотой, свежестью и натуральностью, с утонченными и изысканными блюдами французской кухни.<br></br><br></br>
            Объединение элегантности и свежести, функциональности, минимализма можно заметить не только в нашем меню, но и в нашем интерьере и сервисе. Это — наше кредо.
          </p>
          <br></br>
          <a href="#kitchen" className={`flex ${styles.text_light} gap-4 text-4xl items-center`}>
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5171 20.9571L26.7985 17.2218L1.45454 17.2218L1.45454 15.8254L26.7985 15.8254L23.5171 12.0902L24.0058 11.6364C26.4727 13.8938 28.7767 15.4531 30.9178 16.3142V16.7331C28.7767 17.5942 26.4727 19.1534 24.0058 21.4109L23.5171 20.9571Z" fill="#BEBDC9"/>
            </svg>
            Наша кухня
          </a>
          <a href="#menu" className={`flex ${styles.text_red} text-3xl gap-4 mt-auto items-center`}>
            <svg width="10" height="28" viewBox="0 0 7 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.591999 15.168L3.16 17.424L3.16 -1.67852e-07L4.12 -1.25889e-07L4.12 17.424L6.688 15.168L7 15.504C5.448 17.2 4.376 18.784 3.784 20.256L3.496 20.256C2.904 18.784 1.832 17.2 0.279999 15.504L0.591999 15.168Z" fill="#EF8793"/>
            </svg>
            Меню
          </a>
        </div>
      </div>
      
      <div className="w-1/2">
        <Image src="/img/philosophy.png" width={960} height={930} alt="Philosophy" className="h-full w-full object-cover"></Image>
      </div>
    </div>
  )
}

function OurKitchen(){
  return (
    <div id="kitchen" className="flex h-[calc(100vh-80px)]">
      <div className="w-1/2 bg-black flex flex-col justify-center items-center">
        <div className="w-3/4 h-4/5 gap-10 flex flex-col">
          <h1 className="text-4xl font-bold">Наша кухня</h1>
          <p className="text-3xl">
            Меню Gustaf Avenue включает разнообразие блюд, которые удовлетворят вкусы даже самых требовательных гурманов. <br></br> <br></br>
            Разделы «Скандинавская кухня» и «Французская кухня» предлагают классические и современные интерпретации кулинарных традиций двух великих народов, а раздел «От шефа» представляет авторские блюда, созданные специально для тех, кто ищет новые вкусовые комбинации. <br></br><br></br>
            Мы также уделяем особое внимание десертам — в нашем меню представлены как легкие французские сладости, так и более насыщенные скандинавские десерты.
          </p>
          <br></br>
          <a href="#philosophy" className={`flex ${styles.text_light} gap-4 text-4xl items-center`}>
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5171 20.9571L26.7985 17.2218L1.45454 17.2218L1.45454 15.8254L26.7985 15.8254L23.5171 12.0902L24.0058 11.6364C26.4727 13.8938 28.7767 15.4531 30.9178 16.3142V16.7331C28.7767 17.5942 26.4727 19.1534 24.0058 21.4109L23.5171 20.9571Z" fill="#BEBDC9"/>
            </svg>
            Наша философия
          </a>
          <a href="#menu" className={`flex ${styles.text_red} text-3xl gap-4 mt-auto items-center`}>
            <svg width="10" height="28" viewBox="0 0 7 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.591999 15.168L3.16 17.424L3.16 -1.67852e-07L4.12 -1.25889e-07L4.12 17.424L6.688 15.168L7 15.504C5.448 17.2 4.376 18.784 3.784 20.256L3.496 20.256C2.904 18.784 1.832 17.2 0.279999 15.504L0.591999 15.168Z" fill="#EF8793"/>
            </svg>
            Меню
          </a>
        </div>
      </div>
      
      <div className="w-1/2">
        <Image src="/img/kitchen.png" width={960} height={930} alt="Kitchen" className="h-full w-full object-cover"></Image>
      </div>
    </div>
  )
}

interface MenuShowcaseCardProps {
  category: string;
  name: string;
  desc: string;
  imgSrc: string;
  price: string;
}

function MenuShowcase(){

  const items = []

  items.push({'imgUrl': '/img/menuShowcase1.png', 'category': 'Блюдо от шефа', 'name' : 'Нормандский буйабес', 'price': '1 800 ₽', 'desc' : 'Нежное филе лосося, мидии и креветки, томлённые в ароматном соусе из белого вина, помидоров и сливок'});
  items.push({'imgUrl': '/img/menuShowcase2.png', 'category': 'Сезонное блюдо', 'name' : 'Гравлакса-сендвич', 'price': '900 ₽', 'desc' : 'Сочный маринованный лосось на ржаном хлебе с освежающим огурцом, крем-фрешем и гранатом, дополненный фирменным соусом'});
  items.push({'imgUrl': '/img/menuShowcase3.png', 'category': 'Фирменный фьюжн-десерт', 'name' : 'Принцессторта', 'price': '800 ₽', 'desc' : 'Шведский шоколадный пирог с мягкой серединой, украшенный вишнями и сиропом, стружкой белого шоколада и хрустящим фундуком'});
  
  return (
    <div id="menu" className="h-[calc(100vh-80px)] bg-black flex items-center justify-center">
      <div className="w-5/6 h-5/6 flex flex-col gap-20">
        <div className="flex gap-10 items-center">
          <h1 className="text-6xl font-bold">Меню</h1>
          <a href="/menu" className={`rounded-3xl ${styles.text_red} gap-3 border ${styles.border_red} flex items-center justify-center w-52 h-10 text-xl cursor-pointer`}>
            <svg width="21" height="7" viewBox="0 0 21 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.168 6.408L17.424 3.84H0V2.88H17.424L15.168 0.312L15.504 0C17.2 1.552 18.784 2.624 20.256 3.216V3.504C18.784 4.096 17.2 5.168 15.504 6.72L15.168 6.408Z" fill="#EF8793"/>
            </svg>
            посмотреть всё
          </a>
        </div>

        <div className="w-full h-auto flex gap-16">
          {items.map((item, ind) => (
            <MenuShowcaseCard key={item.name} imgSrc={item.imgUrl} category={item.category} name={item.name} price={item.price} desc={item.desc}/>
          ))}
        </div>
      </div>
    </div>
  )
}

function MenuShowcaseCard({ category, name, desc, imgSrc, price }: MenuShowcaseCardProps) {
  return (
    <div className="flex flex-col w-1/3 gap-10">
      <h2 className="text-3xl">{category}</h2>
      <Image alt={name} src={imgSrc} width={300} height={200} className="object-cover w-full"/>
      <h2 className="font-bold text-3xl">{name}</h2>
      <p className="text-2xl">{desc}</p>
      <h3 className={`${styles.text_blue} text-4xl bold`}>{price}</h3>
    </div>
  )
}

function SeeYou(){
  return (
    <div className="h-[calc(100vh-320px)] relative flex items-center justify-center">
      <Image src="/img/legs_bg.png" alt="Footer BG" width={1933} height={1069} className="object-cover absolute top-0 h-full"/>
      <div className="w-1/2 h-72 bg-black rounded-3xl p-6 flex flex-col items-center justify-around z-10">
        <h1 className="text-white text-4xl font-bold">Будем рады увидеть вас в нашем ресторане!</h1>
        <a href="/reservation" className={`text-3xl content-center border px-20 h-16 flex items-center rounded-3xl ${styles.border_blue} ${styles.text_blue}`}>Забронировать столик</a>
        <h3 className={`${styles.text_light} text-2xl`}>Москва, ул. Арбат, 14. 9:00 – 23:00</h3>
      </div>
    </div>
  )
}