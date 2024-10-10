'use client'

import { useEffect, useRef } from "react";

import Plyr from "plyr";

import 'plyr/dist/plyr.css';

export default function VideoPlayer() {

    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {

        if (videoRef)

            if (videoRef.current) {

                videoRef?.current?.play()

                new Plyr(videoRef?.current, {
                    controls: ['play', 'progress', 'mute', 'volume'],
                });
            }

    }, [videoRef]);

    return (
        <div className="max-w-2xl">
            <video
                ref={videoRef}
                className="w-full h-72"
                src="landing_page.mp4"
                controlsList="nodownload"
                autoPlay
                playsInline
            ></video>
        </div>
    )
}