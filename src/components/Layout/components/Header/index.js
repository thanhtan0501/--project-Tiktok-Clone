import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faEllipsisVertical,
    // faLanguage,
    // faCircleQuestion,
    // faKeyboard,
    faEnvelopeOpenText,
    faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItems";
import Menu from "~/components/Popper/Menu/";

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
                    title: "Việt Nam",
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
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

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
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input
                            placeholder="Search accounts and videos..."
                            spellCheck={false}
                        />

                        <button className={cx("clear")}>
                            {/* icon clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                            {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
                        </button>

                        {/* icon loading */}
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />

                        <button className={cx("search-btn")}>
                            {/* icon search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 80]}
                                content="Upload Video"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 80]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon
                                        icon={faEnvelopeOpenText}
                                    />
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
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ddad23f658a5ae9ddafd18a2b4d98c5e~c5_100x100.jpeg?x-expires=1659672000&x-signature=CHYwMQUfoTP6ynFlWqz9r9vGo5M%3D"
                                className={cx("user-avatar")}
                                alt="Nguyen van hoa"
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
