import Image from "next/image";
import styles from '../styles/ultima.module.scss';

export default function Header() {
    return (
        <header className={`text-2xl h-20 flex justify-between sticky z-20 w-full top-0 ${styles.bg_grey_dark_1} w-screen overflow-hidden py-3 px-10`}>
            <a href="/" className="h-16 flex items-center justify-center w-fit">
                <Image className="max-md:w-12 max-md:h-12" src='/img/logo.png' alt="Gustaf Avenue" width={64} height={64} />
                <h1 className={`text-3xl font-bold ml-4 max-md:text-xl`}>Gustaf Avenue</h1>
            </a>

            <div className={`max-md:hidden h-full max-h-full flex items-center justify-between w-[450px] font-thin ${styles.text_light}`}>
                <a href="/menu" className={``}>Меню</a>
                <a href="/reserve" className={` ${styles.text_blue}`}>Забронировать столик</a>
                <a href="/about" className="">О нас</a>
            </div>
        </header>
    );
}