import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Discover.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import { topics } from "~/utils/constants";

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx("wrapper")}>
            <p className={cx("discover-title")}>Discover</p>
            <div className={cx("discover-list")}>
                {topics.map((topic) => (
                    <Link
                        key={topic.name}
                        to={config.routes.following}
                        // to={`/?topic=${topic.name}`}
                        className={cx("discover-link")}
                    >
                        <div className={cx("link-box")}>
                            {topic.icon}
                            <span className={cx("topic-name")}>
                                {topic.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Discover;
