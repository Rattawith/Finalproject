import React, { useEffect, useState } from 'react';

import './Lerning.css'

function Python09() {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch('https://47f5e36e-3a50-404d-b546-96459373518f-00-2euzu28oz8k9.sisko.replit.dev/courses');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const courseData = data.find((item: any) => item.id === 1); // เปลี่ยนเป็น id ที่ต้องการ
        if (courseData && courseData.videoUrls) {
          setVideoUrls(courseData.videoUrls);
          setCurrentVideoUrl(courseData.videoUrls[8]); // ตั้งค่าเริ่มต้นวิดีโอ
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  if (loading) {
    return <p>กำลังโหลด...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {currentVideoUrl ? (
        <iframe
          width="958"
          height="539"
          src={currentVideoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <p>ไม่พบวิดีโอ</p>
      )}

      <h2>Lecture 9 : Python - Global Variables
      </h2>

    </>
  );
}

export default Python09;
