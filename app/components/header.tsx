import Image from "next/image";
import styles from '../styles/ultima.module.scss';

export default function Header() {
    return (
        <header className={`text-2xl h-20 flex lg:justify-center sticky sm:justify-end z-20 w-full top-0 ${styles.bg_grey_dark_1} w-screen overflow-hidden py-3 px-10`}>
            <a href="/" className="h-16 flex items-center absolute left-8 justify-center w-fit">
                <Image className="max-md:w-12 max-md:h-12" src='/img/logo.png' alt="Gustaf Avenue" width={64} height={64} />
                <h1 className={`text-3xl font-bold ml-4 max-md:text-xl`}>Gustaf Avenue</h1>
            </a>

            <div className={`hidden h-full max-h-full sm:flex items-center justify-around sm:text-xl xl:text-2xl sm:w-[340px] md:w-[450px] xl:w-[540px] font-thin ${styles.text_light}`}>
                <a href="/menu" className={``}>Меню</a>
                <a href="/reserve" className={` ${styles.text_blue}`}>Забронировать столик</a>
                <a href="/" className="">О нас</a>
            </div>
        </header>
    );
}