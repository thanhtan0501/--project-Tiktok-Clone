import axios from "axios";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";
import Button from "~/components/Button";
import { UploadIcon } from "~/components/Icons";
import { audienceClassification, topics } from "~/utils/constants";

import styles from "./Upload.module.scss";

const cx = classNames.bind(styles);

function Upload() {
    const [loading, setLoading] = useState(false);
    const [videoAsset, setVideoAsset] = useState();
    const [wrongFileType, setWrongFileType] = useState(false);
    const [caption, setCaption] = useState("");
    const [category, setCategory] = useState(topics[0].name);

    // const {userProfile}=useAuth

    // Handle logic
    const handleUploadVideo = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setWrongFileType(false);
            setLoading(true);
            const formData = new FormData();
            const config = {
                header: { "content-type": "multipart/form-data" },
            };
            formData.append("file", selectedFile);
            const res = axios.post("/api/video/uploadfile", formData, config);

            res.then((res) => {
                if (res.data.success) {
                    setVideoAsset(res.data);
                    setLoading(false);
                } else {
                    console.log("Error!");
                }
            });
        } else {
            setLoading(false);
            setWrongFileType(true);
        }
    };

    const handlePost = async () => {};
    return (
        <div className={cx("container")}>
            <span className={cx("title")}>Upload video</span>
            <div className={cx("sub-title")}>
                <span>Post a video to your account</span>
            </div>
            <div className={cx("contents")}>
                <div className={cx("uploader")}>
                    <div className={cx("upload-box")}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div>
                                {!videoAsset ? (
                                    <label>
                                        <div className={cx("upload-card")}>
                                            <UploadIcon
                                                viewBox="6 5 20 20"
                                                width="4rem"
                                                height="2.9rem"
                                            />

                                            <div className={cx("text-title")}>
                                                <span>
                                                    Select video to upload
                                                </span>
                                            </div>
                                            <div
                                                className={cx("text-subtitle")}
                                            >
                                                <span>
                                                    Or drag and drop a file
                                                </span>
                                            </div>
                                            <div>
                                                <div
                                                    className={cx("text-info")}
                                                >
                                                    <span>MP4 or WebM</span>
                                                </div>
                                                <div
                                                    className={cx("text-info")}
                                                >
                                                    <span>
                                                        720x1280 resolution or
                                                        higher
                                                    </span>
                                                </div>
                                                <div
                                                    className={cx("text-info")}
                                                >
                                                    <span>
                                                        Up to 10 minutes
                                                    </span>
                                                </div>
                                                <div
                                                    className={cx("text-info")}
                                                >
                                                    <span>Less than 2 GB</span>
                                                </div>
                                            </div>
                                            <div
                                                className={cx(
                                                    "file-select-btn"
                                                )}
                                            >
                                                <Button primary>
                                                    Select file
                                                </Button>
                                            </div>
                                        </div>
                                        <input
                                            type="file"
                                            name="upload-video"
                                            // accept="video/*"
                                            onChange={(e) =>
                                                handleUploadVideo(e)
                                            }
                                            // onDrop={handleUploadVideo}
                                            className={cx("input-video")}
                                        />
                                    </label>
                                ) : (
                                    <div className={cx("video-preview")}>
                                        <video
                                            // src="http://webcoban.vn/file/bunny.mp4"
                                            src={videoAsset.url}
                                            loop
                                            controls
                                        ></video>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    {/* {wrongFileType && <p>Please select an video file</p>} */}
                </div>
                <div className={cx("upload-form")}>
                    <div className={cx("caption-wrapper1")}>
                        <div className={cx("text-container")}>
                            <span className={cx("caption")}>Caption</span>
                            <span className={cx("count-word")}></span>
                        </div>
                        <div className={cx("caption-input")}>
                            <input
                                type="text"
                                value={caption}
                                className={cx("input")}
                                onChange={(e) => setCaption(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={cx("caption-wrapper2")}>
                        <div className={cx("text-container")}>
                            <span className={cx("caption")}>
                                Who can view this video
                            </span>
                        </div>
                        <div className={cx("topic-input")}>
                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                className={cx("topic-select")}
                            >
                                {audienceClassification.map((topic) => (
                                    <option
                                        key={topic.name}
                                        className={cx("topic")}
                                        value={topic.name}
                                    >
                                        <span>{topic.name}</span>
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={cx("button-row")}>
                        <div className={cx("cancel-btn")}>
                            <Button text>Discard</Button>
                        </div>
                        <div className={cx("post-btn")}>
                            <Button primary onClick={handlePost}>
                                Post
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
