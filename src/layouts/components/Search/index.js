import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItems";
import HeadlessTippy from "@tippyjs/react/headless";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "~/components/Icons";
import { useDebounce } from "~/hooks";
import * as searchService from "~/services/searchService";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 400);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        // encodeURIComponent(value): mã hóa value thành ký tự hợp lệ trên URL
        // API được lấy từ fullstack.edu.vn
        // Sử dụng thư viện Axios để gửi request API
        const fetchAPI = async () => {
            setLoading(true);

            const result = await searchService.search(debounce, "less");
            setSearchResult(result);

            setLoading(false);
        };
        fetchAPI();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    // Xử lý không cho nhập ký tự đầu tiên là space vào ô tìm kiếm
    const handleChange = (e) => {
        if (e.target.value[0] !== " ") {
            setSearchValue(e.target.value);
        }
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                // appendTo={() => document.body}
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx("clear")} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && (
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />
                    )}

                    <button
                        className={cx("search-btn")}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        {/* icon search */}
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
