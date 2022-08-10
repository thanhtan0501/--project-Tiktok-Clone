// import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import { footerList1, footerList2, footerList3 } from "~/utils/constants";
import FooterList from "./FooterList";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("wrapper")}>
            <FooterList list={footerList1} />
            <FooterList list={footerList2} />
            <FooterList list={footerList3} />
            <span className={cx("copyright")}>© 2022 TikTok</span>
        </div>
    );
}

// Footer.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default Footer;
