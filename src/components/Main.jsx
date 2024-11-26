// componenti
import Posts from '../pages/Posts';

// modulo stile
import style from '../components/Main.module.css';

export default function Main() {

    return (
        <main>
            <div className={style.container}>
                <div className={style.row}>
                    <Posts />
                </div>
            </div>
        </main>
    )
}