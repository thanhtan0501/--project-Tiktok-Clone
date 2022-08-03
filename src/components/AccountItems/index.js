import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4318364634ea72b8f0f1b55d36c6be57~c5_300x300.webp?x-expires=1659600000&x-signature=5gVI3WVwgA4jKPqe%2FQOU9jhH%2Fx4%3D"
                alt="Hoa"
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyễn văn Hoa</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>nguyenvanhoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
