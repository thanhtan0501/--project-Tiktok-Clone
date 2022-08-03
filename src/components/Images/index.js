import { useState } from "react";
import { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./Image.module.scss";

import images from "~/assets/images";

const Images = forwardRef(
    (
        { src, className, fallback: customFallback = images.noImage, ...props },
        ref
    ) => {
        const [fallback, setFallback] = useState("");

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
                ref={ref}
                className={classNames(styles.wrapper, className)}
                src={fallback || src}
                {...props}
                onError={handleError}
            />
        );
    }
);

export default Images;
