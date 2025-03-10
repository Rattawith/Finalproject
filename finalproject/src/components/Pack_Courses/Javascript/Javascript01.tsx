import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Pack_Courses.css";

function Javascript01() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("Javascript01_isCompleted") || "false")
  );
  const [lastPlayedTime, setLastPlayedTime] = useState<number>(() =>
    parseFloat(localStorage.getItem("Javascript01_lastPlayedTime") || "0")
  );

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          "https://0bc08ff7-4842-458f-bbec-09b3e5dbf83e-00-3lz25gv4l2lkt.sisko.replit.dev/courses"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const courseData = data.find((course: any) => course.id === 2);
        if (courseData && courseData.videoUrl) {
          setVideoUrl(courseData.videoUrl);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();

    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const createPlayer = () => {
      if (videoUrl && (window as any).YT) {
        const player = new (window as any).YT.Player("youtube-player", {
          events: {
            onReady: () => {
              player.seekTo(lastPlayedTime, true); // ตั้งเวลาเริ่มต้นเมื่อโหลดเสร็จ
            },
            onStateChange: (event: any) => {
              if (
                event.data === (window as any).YT.PlayerState.PAUSED ||
                event.data === (window as any).YT.PlayerState.ENDED
              ) {
                const currentTime = player.getCurrentTime();
                localStorage.setItem(
                  "Javascript01_lastPlayedTime",
                  currentTime.toString()
                );
              }
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                setIsCompleted(true);
                localStorage.setItem(
                  "Javascript01_isCompleted",
                  JSON.stringify(true)
                );
              }
            },
          },
        });
      }
    };

    (window as any).onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    if (videoUrl) {
      createPlayer();
    }
  }, [videoUrl, lastPlayedTime]);

  if (loading) {
    return <p>กำลังโหลด...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      {videoUrl && (
        <div className="video-container">
          <div className="video-content">
            <Link to="/introductions/2">
              <button className="back-button">Go Back</button>
            </Link>
            <h2>Lecture 1 : Advanced JavaScript</h2>
            {isCompleted && <p className="completion-message">Complete ✅</p>}
          </div>
          <div className="iframe-wrapper">
            <iframe
              id="youtube-player"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Javascript01;
