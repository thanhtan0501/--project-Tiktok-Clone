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
            to: `/@hoa`,
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
    const handleSubmitLogin = () => {};
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
                            <div>
                                <Link to={config.routes.upload}>
                                    <Tippy
                                        delay={[0, 80]}
                                        interactive
                                        content="Upload Video"
                                        placement="bottom"
                                    >
                                        <button className={cx("action-btn")}>
                                            <UploadIcon />
                                        </button>
                                    </Tippy>
                                </Link>
                            </div>

                            <div>
                                <Tippy
                                    delay={[0, 80]}
                                    interactive
                                    content="Message"
                                    placement="bottom"
                                >
                                    <button className={cx("action-btn")}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                            </div>

                            <div>
                                <Tippy
                                    delay={[0, 80]}
                                    interactive
                                    content="Inbox"
                                    placement="bottom"
                                >
                                    <button className={cx("action-btn")}>
                                        <InboxIcon />
                                        <span className={cx("badge")}>12</span>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to={config.routes.upload}>
                                <Button text>Upload</Button>
                            </Link>
                            <Button primary onClick={handleSubmitLogin}>
                                Log in
                            </Button>
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
                                fallback="https://i.pinimg.com/474x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg"
                                // src={currentUser.image}
                                // className={cx("user-avatar")}
                                // alt={currentUser.userName}
                                // fallback={currentUser.image}
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
