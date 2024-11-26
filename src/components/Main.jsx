// componenti
import PostList from '../pages/PostList';

// modulo stile
import style from '../components/Main.module.css';

export default function Main() {

    return (
        <main>
            <div className={style.container}>
                <div className={style.row}>
                    <PostList />
                </div>
            </div>
        </main>
    )
}