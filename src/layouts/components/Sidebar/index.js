import classNames from "classnames/bind";
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import {
    HomeIcon,
    HomeActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from "~/components/Icons";

import Button from "~/components/Button";
import styles from "./Sidebar.module.scss";
import Footer from "./Footer";
import Discover from "./Discover/inde";
import MenuUser from "./MenuUser";

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;

    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            {!currentUser && (
                <div className={cx("container-login")}>
                    <span className={cx("title")}>
                        Log in to follow creators, like videos, and view
                        comments.
                    </span>
                    <Button outline className={cx("login-btn")}>
                        Log in
                    </Button>
                </div>
            )}
            {/* <MenuUser />
            <MenuUser /> */}
            <Discover />
            <Footer />
        </aside>
    );
}

export default Sidebar;
