import "./VideoHome.scss";

import { ReactComponent as IconPlay } from "../../assets/svg/play.svg";
import { ReactComponent as IconPause } from "../../assets/svg/pause.svg";

const VideoHome = () => {
  const videoUrl =
    "https://res.cloudinary.com/rubiescloud/video/upload/v1737352831/aristino/tvc_tet_2025__2__vkmfsc.mp4";

  return (
    <>
      <section className="section video">
        <div class="color-background-1 gradient">
          <div class="video-section isolate section-template--15032913395800__9aad5116-2a3e-4098-83fd-35a7fbcc63a5-padding">
            <div class="page-width">
              <div class="video-section__media" style={{ "--ratio-percent": "56.25%" }}>
                <video
                  playsinline="playsinline"
                  muted=""
                  loop="loop"
                  controls="controls"
                  preload="metadata"
                  poster={videoUrl}
                  class="up"
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
                <img src={videoUrl} alt="" />
                <button id="start_video" class="start">
                  <IconPlay />
                  <IconPause />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoHome;
