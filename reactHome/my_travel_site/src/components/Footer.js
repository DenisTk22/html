import * as React from "react";
import { Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';

import * as pageId from "../id/idOfPages";

export default function Footer({id}) { //footer
    return (
        <footer id={id} className={id}>
            <nav className={`${id}__nav`}>
                <ul className={`${id}__nav_links`}>
                    <li>
                        <Link className={`${id}__nav_link`} to={`/${pageId.mainId}`}>На главную</Link>
                    </li>
                    <li>
                        <Link className={`${id}__nav_link`} to={`/${pageId.aboutId}`}>Обо мне</Link>
                    </li>
                    <li>
                        <Link className={`${id}__nav_link`} to={`/${pageId.motivationId}`}>Мотивация</Link>
                    </li>
                </ul>
                <ul className={`${id}__nav_contacts`}>
                    <li>
                        <Link className={`${id}__nav_contact`}
                            target="_blank"
                            to="https://t.me/+_K03Uly8P7A0MGI6"
                        >Мой канал в телеграм</Link>
                    </li>
                    <li>
                        <Link className={`${id}__nav_contact`}
                            target="_blank"
                            to="https://vk.com/dgsined"
                        >Моя страница Вконтакте</Link>
                    </li>
                    <li className={`${id}__nav_email`}>Моя почта: allpost-s@ya.ru</li>
                </ul>
            </nav>
            <p className={`${id}__createdBy`}>2024 год</p>
        </footer>
    );
}