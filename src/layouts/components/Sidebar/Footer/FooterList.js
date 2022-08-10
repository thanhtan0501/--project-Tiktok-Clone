import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

function FooterList({ list = [] }) {
    return (
        <div className={cx("footer-list")}>
            {list.map((item) => (
                <Link
                    key={item.name}
                    to={item.to}
                    className={cx("footer-link")}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}

FooterList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default FooterList;
