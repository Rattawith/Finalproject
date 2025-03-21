import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Pack_Courses.css";

function Machine05() {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("Machine05_isCompleted") || "false")
  );
  const [lastPlayedTime, setLastPlayedTime] = useState<number>(() =>
    parseFloat(localStorage.getItem("Machine05_lastPlayedTime") || "0")
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

        const courseData = data.find((course: any) => course.id === 3); // เปลี่ยนเป็น id ที่ต้องการ
        if (courseData && courseData.videoUrls) {
          setVideoUrls(courseData.videoUrls);
          setCurrentVideoUrl(courseData.videoUrls[4]); // ตั้งค่าเริ่มต้นวิดีโอ
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();

    // โหลด YouTube API
    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // สร้าง player instance เมื่อ API และ videoUrl พร้อม
    const createPlayer = () => {
      if (currentVideoUrl && (window as any).YT) {
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
                  "Machine05_lastPlayedTime",
                  currentTime.toString()
                );
              }
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                setIsCompleted(true);
                localStorage.setItem(
                  "Machine05_isCompleted",
                  JSON.stringify(true)
                );
              }
            },
          },
        });
      }
    };

    // เรียกใช้ createPlayer เมื่อ API พร้อม
    (window as any).onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    // เรียกใช้ createPlayer อีกครั้งเมื่อ currentVideoUrl มีค่า
    if (currentVideoUrl) {
      createPlayer();
    }
  }, [currentVideoUrl]);

  if (loading) {
    return <p>กำลังโหลด...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      {currentVideoUrl && (
        <div className="video-container">
          <div className="video-content">
            <Link to="/introductions/3">
              <button className="back-button">Go Back</button>
            </Link>
            <h2>Lecture 5 : ML - Linear Regression</h2>
            {isCompleted && <p className="completion-message">Complete ✅</p>}
          </div>
          <div className="iframe-wrapper">
            <iframe
              id="youtube-player"
              src={currentVideoUrl}
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

export default Machine05;
