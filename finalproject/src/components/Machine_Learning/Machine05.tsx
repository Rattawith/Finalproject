import React, { useEffect, useState } from 'react';

function Machine05() {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false); // เพิ่มสถานะการเรียนรู้

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch('https://47f5e36e-3a50-404d-b546-96459373518f-00-2euzu28oz8k9.sisko.replit.dev/courses');
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
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // สร้าง player instance เมื่อ API และ videoUrl พร้อม
    const createPlayer = () => {
      if (currentVideoUrl && (window as any).YT) {
        new (window as any).YT.Player('youtube-player', {
          height: '539',
          width: '958',
          videoId: currentVideoUrl.split('/').pop()?.split('?')[4], // ดึง video ID
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

    // เรียกใช้ createPlayer อีกครั้งเมื่อ currentVideoUrl มีค่า
    if (currentVideoUrl) {
      createPlayer();
    }

  }, [currentVideoUrl]);

  if (loading) {
    return <p>กำลังโหลด...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {currentVideoUrl ? (
        <div>
          <iframe
            id="youtube-player"
            width="958"
            height="539"
            src={currentVideoUrl}
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

      <h2>Lecture 5 : ML - Linear Regression</h2>
      {isCompleted && <p>✅ เรียนจบแล้ว</p>} {/* แสดงสถานะการเรียนรู้ */}
    </>
  );
}

export default Machine05;