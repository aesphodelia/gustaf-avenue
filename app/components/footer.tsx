import styles from '../styles/ultima.module.scss';
import Image from 'next/image';

export default function Footer(){
    return (
        <footer className={`flex justify-around ${styles.bg_grey_dark_1} text-2xl h-60 pt-12 pl-10`}>
            <div className={`${styles.text_light} w-1/4 flex flex-col justify-between h-3/5`}>
                <a href="/menu" className="">Меню</a>
                <a href="#philosophy" className="">О нас</a>
                <a href="/login" className="">Войти</a>
            </div>

            <div className="w-1/4 gap-3 flex flex-col h-3/5 justify-items-start">
                <h1>feedback@gustafavenue.com</h1>
                <h1>8 994 154-13-13</h1>
            </div>

            <div className="w-1/4 flex gap-5 items-center h-fit">
            <Image src='/img/logo_bnw.png' alt="Gustaf Avenue" className='h-16 w-16' width={64} height={64} />
                <h1 className='text-3xl font-bold'>Gustaf Avenue</h1>
            </div>
        </footer>
    );
}