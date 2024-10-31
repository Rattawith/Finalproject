import React, { useEffect, useState } from 'react';

function Javascript01() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch('https://47f5e36e-3a50-404d-b546-96459373518f-00-2euzu28oz8k9.sisko.replit.dev/courses');
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
    
    // โหลด YouTube API
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // สร้าง player instance เมื่อ API และ videoUrl พร้อม
    const createPlayer = () => {
      if (videoUrl && (window as any).YT) {
        new (window as any).YT.Player('youtube-player', {
          events: {
            'onStateChange': (event: any) => {
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                setIsCompleted(true); // ตั้งค่าเป็น true เมื่อเล่นจบ
              }
            }
          }
        });
      }
    };

    // เรียกใช้ createPlayer เมื่อ API พร้อม
    (window as any).onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    // เรียกใช้ createPlayer อีกครั้งเมื่อ videoUrl มีค่า
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
      
      <h2>Lecture 2 : Advanced JavaScript</h2>
      {isCompleted && <p>✅ เรียนจบแล้ว</p>}
    </>
  );
}

export default Javascript01;
