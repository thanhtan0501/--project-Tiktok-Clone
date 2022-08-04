import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";

import Menu from "~/components/Popper/Menu/";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import config from "~/config";
import Search from "~/layouts/components/Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <img src={images.language} alt="" />,
        title: "English", // 'English'
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Vietnamese",
                },
                {
                    type: "language",
                    code: "zh",
                    title: "Chinese",
                },
                {
                    type: "language",
                    code: "th",
                    title: "Thai",
                },
                {
                    type: "language",
                    code: "ru",
                    title: "Russian",
                },
                {
                    type: "language",
                    code: "ro",
                    title: "Romanian",
                },
                {
                    type: "language",
                    code: "ms",
                    title: "Malay",
                },
                {
                    type: "language",
                    code: "ko",
                    title: "Korean",
                },
                {
                    type: "language",
                    code: "ja",
                    title: "Japanese",
                },
                {
                    type: "language",
                    code: "it",
                    title: "Italian",
                },
                {
                    type: "language",
                    code: "is",
                    title: "Icelandic",
                },
                {
                    type: "language",
                    code: "id",
                    title: "Indonesian",
                },
                {
                    type: "language",
                    code: "hu",
                    title: "Hungarian",
                },
                {
                    type: "language",
                    code: "fr",
                    title: "French",
                },
                {
                    type: "language",
                    code: "de",
                    title: "German",
                },
                {
                    type: "language",
                    code: "da",
                    title: "Danish",
                },
                {
                    type: "language",
                    code: "cs",
                    title: "Czech",
                },
                {
                    type: "language",
                    code: "bg",
                    title: "Bulgarian",
                },
                {
                    type: "language",
                    code: "ar",
                    title: "Arabic",
                },
                {
                    type: "language",
                    code: "uk",
                    title: "Ukrainian",
                },
            ],
        },
    },
    {
        icon: <img src={images.feedback} alt="" />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <img src={images.keyboard} alt="" />,
        title: "Keyboard shortcuts",
    },
];
function Header() {
    const currentUser = true;

    const userMenu = [
        {
            icon: <img src={images.user} alt="" />,
            title: "View profile",
            to: "/@hoa",
        },
        {
            icon: <img src={images.tiktokcoin} alt="" />,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <img src={images.setting} alt="" />,
            title: "Setting",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <img src={images.logout} alt="" />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routes.home} className={cx("logo")}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 80]}
                                content="Upload Video"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 80]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 80]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="123"
                                className={cx("user-avatar")}
                                alt="Nguyen van hoa"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ddad23f658a5ae9ddafd18a2b4d98c5e~c5_100x100.jpeg?x-expires=1659672000&x-signature=CHYwMQUfoTP6ynFlWqz9r9vGo5M%3D"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
