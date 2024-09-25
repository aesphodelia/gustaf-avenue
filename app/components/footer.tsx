import styles from '../styles/ultima.module.scss';
import Image from 'next/image';

export default function Footer(){
    return (
        <footer className={`max-lg:text-xl flex ${styles.bg_grey_dark_1} text-2xl h-60 w-full overflow-hidden`}>
            <div className="w-full h-full flex items-center justify-around">
                <div className={`${styles.text_light} flex flex-col justify-between h-3/5`}>
                    <a href="/menu" className="">Меню</a>
                    <a href="#philosophy" className="">О нас</a>
                    <a href="/login" className="">Войти</a>
                </div>

                <div className="flex max-lg:flex-col max-lg:gap-5 justify-between w-1/2 max-md:w-auto">
                    <div className="gap-3 flex flex-col h-fit">
                        <h1>feedback@gustafavenue.com</h1>
                        <h1>8 994 154-13-13</h1>
                    </div>

                    <div className="flex gap-5 items-center h-fit max-lg:gap-2 w-fit">
                    <Image src='/img/logo_bnw.png' alt="Gustaf Avenue" className='h-16 w-16 max-md:h-8 max-md:w-8' width={64} height={64} />
                        <h1 className='text-3xl font-bold max-md:text-base max-lg:text-xl'>Gustaf Avenue</h1>
                    </div>
                </div>
            </div>
        </footer>
    );
}