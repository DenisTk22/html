export default function Footer({id}) { //footer
    return (
        <footer id={id} className={id}>
            <nav className={`${id}__nav`}>
                <ul className={`${id}__nav_links`}>
                    <li>
                        <a className={`${id}__nav_link`} href="#main">На главную</a>
                    </li>
                    <li>
                        <a className={`${id}__nav_link`} href="#about">Обо мне</a>
                    </li>
                    <li>
                        <a className={`${id}__nav_link`} href="#motivation">Мотивация</a>
                    </li>
                </ul>
                <ul className={`${id}__nav_contacts`}>
                    <li>
                        <a className={`${id}__nav_contact`}
                            target="_blank"
                            href="https://t.me/+_K03Uly8P7A0MGI6"
                        >Мой канал в телеграм</a>
                    </li>
                    <li>
                        <a className={`${id}__nav_contact`}
                            target="_blank"
                            href="https://vk.com/dgsined"
                        >Моя страница Вконтакте</a>
                    </li>
                    <li className={`${id}__nav_email`}>Моя почта: allpost-s@ya.ru</li>
                </ul>
            </nav>
            <p className={`${id}__createdBy`}>2024 год</p>
        </footer>
    );
}