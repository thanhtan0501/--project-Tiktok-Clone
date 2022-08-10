import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Home.module.scss";
import Image from "~/components/Image";
// import config from "~/config";
import Button from "~/components/Button";
import {
    MusicIcon,
    PauseIcon,
    PlayIcon,
    VolumeUpIcon,
    VolumeOffIcon,
    FlagIcon,
} from "~/components/Icons";
const cx = classNames.bind(styles);

function VideoCard({ item = [] }) {
    const [isHover, setIsHover] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [isVideoMuted, setIsVideoMuted] = useState(false);

    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef?.current?.pause();
            setPlaying(false);
        } else {
            videoRef?.current?.play();
            setPlaying(true);
        }
    };

    return (
        <div className={cx("list-item-content")}>
            {/* Avatar */}
            <div className={cx("avatar")}>
                <Link to={item.website_url}>
                    <>
                        <Image
                            src={item.avatar}
                            className={cx("user-avatar")}
                            alt={item.nickname}
                        />
                    </>
                </Link>
            </div>
            {/* Content */}
            <div className={cx("content-container")}>
                {/* Title */}
                <div className={cx("header-container")}>
                    <div className={cx("info")}>
                        <Link to={item.website_url} className={cx("author")}>
                            <h3 className={cx("name")}>
                                {item.nickname}
                                {item.tick && (
                                    <FontAwesomeIcon
                                        className={cx("check")}
                                        icon={faCheckCircle}
                                    />
                                )}
                                <span className={cx("username")}>
                                    {item.full_name}
                                </span>
                            </h3>
                        </Link>
                    </div>
                    <Button
                        outline
                        className={cx("follow-btn")}
                        // to={data.to}
                        onClick={() => {}}
                    >
                        {"Follow"}
                    </Button>
                    <div className={cx("description")}>
                        <span>{item.description}</span>
                        {item.discover &&
                            item.discover.map((dis, index) => (
                                <Link
                                    key={index}
                                    to={item.website_url}
                                    className={cx("hastag")}
                                >
                                    {dis}
                                </Link>
                            ))}
                    </div>
                    <h4 className={cx("music-video")}>
                        <Link to={item.website_url}>
                            {<MusicIcon />}
                            {item.music_name}
                        </Link>
                    </h4>
                </div>
                {/* Video */}
                <div className={cx("footer-container")}>
                    <div
                        className={cx("video-player-container")}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <Link to={"/"}>
                            <video
                                loop
                                ref={videoRef}
                                className={cx("video")}
                                src={item.video_url}
                            ></video>
                        </Link>

                        {isHover && (
                            <div>
                                {playing ? (
                                    <button
                                        onClick={handleVideoPress}
                                        className={cx("button-play")}
                                    >
                                        {<PauseIcon />}
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleVideoPress}
                                        className={cx("button-play")}
                                    >
                                        {<PlayIcon />}
                                    </button>
                                )}
                                {isVideoMuted ? (
                                    <button
                                        onClick={() => {
                                            setIsVideoMuted(false);
                                        }}
                                        className={cx("button-sound")}
                                    >
                                        {<VolumeOffIcon />}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setIsVideoMuted(true);
                                        }}
                                        className={cx("button-sound")}
                                    >
                                        {<VolumeUpIcon />}
                                    </button>
                                )}
                                <button className={cx("button-report")}>
                                    {<FlagIcon />}
                                    <span>Báo cáo</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className={cx("action-item")}>
                        {/* <button className="action-item-btn">
                            <span className="icon"></span>
                            <span className="count"></span>
                        </button> */}

                        {/* <button className="action-item-btn">
                            <span className="icon"></span>
                            <span className="count"></span>
                        </button> */}

                        {/* <button className="action-item-btn">
                            <span className="icon"></span>
                            <span className="count"></span>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
