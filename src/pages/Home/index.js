import classNames from "classnames/bind";

import VideoCard from "./VideoCard";
import NoResult from "./NoResult";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const videos = [
    {
        id: 1,
        first_name: "Đào Lê",
        last_name: "Phương Hoa",
        full_name: "Gia Đình Cam Cam🍊",
        nickname: "giadinhcamcam",
        tick: false,
        avatar: "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
        description: "BỮA CƠM TỐI NGON VÀ TIỆN CỦA 2 VỢ CHỒNG MÌNH",
        discover: [
            "#giadinhcamcam",
            "#xuhuong",
            "#tiktokvn",
            "#review",
            "#nauan",
        ],
        music_name: "original sound - Gia Đình Cam Cam🍊",
        video_url: "http://webcoban.vn/file/bunny.mp4",
        website_url: "/profile",
    },
    {
        id: 2,
        first_name: "Đào Lê",
        last_name: "Phương Hoa",
        full_name: "Đào Lê Phương Hoa",
        nickname: "hoaahanassii",
        tick: true,
        avatar: "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
        description: "Trắng sáng còn mặc áo khoét 2 dây các thứ nào 🥰",
        discover: [
            "#giadinhcamcam",
            "#xuhuong",
            "#tiktokvn",
            "#review",
            "#nauan",
        ],
        music_name: "original sound - Gracie's Corner",
        video_url: "http://webcoban.vn/file/bunny.mp4",
        website_url: "/profile",
    },
];

function Home() {
    return (
        <div className={cx("wrapper")}>
            {videos.length ? (
                videos.map((video) => <VideoCard key={video.id} item={video} />)
            ) : (
                <NoResult text={"No Videos"} />
            )}
        </div>
    );
}

export default Home;
