import React, { useEffect, useState } from 'react';

function Datascience_R_01() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(
    () => JSON.parse(localStorage.getItem("Datascience_R_01_isCompleted") || "false")
  );
  const [lastPlayedTime, setLastPlayedTime] = useState<number>(
    () => parseFloat(localStorage.getItem("Datascience_R_01_lastPlayedTime") || "0")
  );

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch('https://0bc08ff7-4842-458f-bbec-09b3e5dbf83e-00-3lz25gv4l2lkt.sisko.replit.dev/courses');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        
        const courseData = data.find((course: any) => course.id === 4);
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
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const createPlayer = () => {
      if (videoUrl && (window as any).YT) {
        const player = new (window as any).YT.Player('youtube-player', {
          events: {
            'onReady': () => {
              player.seekTo(lastPlayedTime, true);
            },
            'onStateChange': (event: any) => {
              if (event.data === (window as any).YT.PlayerState.PAUSED || event.data === (window as any).YT.PlayerState.ENDED) {
                const currentTime = player.getCurrentTime();
                localStorage.setItem("Datascience_R_01_lastPlayedTime", currentTime.toString());
              }
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                setIsCompleted(true);
                localStorage.setItem("Datascience_R_01_isCompleted", JSON.stringify(true));
              }
            }
          }
        });
      }
    };

    (window as any).onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    if (videoUrl) {
      createPlayer();
    }

  }, [videoUrl]);

  if (loading) {
    return <p>กำลังโหลด...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {videoUrl ? (
        <div>
          <iframe
            id="youtube-player"
            width="958"
            height="539"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>ไม่พบวิดีโอ</p>
      )}
      
      <h2>Lecture 1 : Introduction to Data Science with R</h2>
      {isCompleted && <p>✅ เรียนจบแล้ว</p>}
    </>
  );
}

export default Datascience_R_01;
