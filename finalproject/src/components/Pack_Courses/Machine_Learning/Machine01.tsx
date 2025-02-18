import React, { useEffect, useState } from "react"; // // ใช้ useState ในการจัดการ state และ useEffect สำหรับดึงข้อมูลจาก API
import { Link } from "react-router-dom"; // ใช้สร้างลิงก์ไปยังหน้าคอร์สที่เลือก
import "../Pack_Courses.css";

function Machine01() {
  const [videoUrls, setVideoUrls] = useState<string[]>([]); // เก็บ URLs ของวิดีโอทั้งหมด ที่จะถูกแสดงในคอร์ส
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null); // เก็บ URL ของวิดีโอที่กำลังเล่น อยู่ในตอนนี้
  const [loading, setLoading] = useState<boolean>(true); // ใช้เพื่อระบุสถานะการโหลดข้อมูลจาก API (เริ่มต้นเป็น true หมายถึงกำลังโหลด)
  const [error, setError] = useState<string | null>(null); // เก็บข้อความ ข้อผิดพลาด ในการดึงข้อมูลจาก API
  const [isCompleted, setIsCompleted] = useState<boolean>(() => 
    JSON.parse(localStorage.getItem("Machine01_isCompleted") || "false") // เก็บสถานะว่า ผู้ใช้ดูวิดีโอจนจบ หรือไม่ โดยดึงข้อมูลจาก localStorage
  );
  const [lastPlayedTime, setLastPlayedTime] = useState<number>(() =>
    parseFloat(localStorage.getItem("Machine01_lastPlayedTime") || "0") // เก็บ เวลาที่ผู้ใช้หยุดวิดีโอครั้งสุดท้าย เพื่อให้วิดีโอเริ่มจากจุดนั้นเมื่อกลับมาดูใหม่
  );

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          "https://0bc08ff7-4842-458f-bbec-09b3e5dbf83e-00-3lz25gv4l2lkt.sisko.replit.dev/courses" // ดึงข้อมูลวิดีโอจาก API → ถ้าหลักสูตรมี videoUrls ก็จะเซ็ตค่าไปที่ setVideoUrls()
        );
        if (!response.ok) {
          throw new Error("Network response was not ok"); // // เช็คว่า response.ok เป็น true หรือไม่ ถ้าไม่สำเร็จ (response.ok === false) → ให้โยนข้อผิดพลาดโดยใช้ throw new Error(...)
        }
        const data = await response.json(); // แปลงข้อมูลที่ได้จาก JSON เป็น JavaScript Object

        const courseData = data.find((course: any) => course.id === 3); // ใช้ .find() ค้นหา วัตถุที่มี id === 3
        if (courseData && courseData.videoUrls) {
          setVideoUrls(courseData.videoUrls); // ถ้า courseData มีค่า และ มี videoUrls → ใช้ setVideoUrls() เพื่อบันทึกค่า URL
          setCurrentVideoUrl(courseData.videoUrls[0]); // ตั้งค่าเริ่มต้นวิดีโอที่จะเล่น
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล"); // ถ้ามีข้อผิดพลาดจาก fetch() หรือ .json() → โค้ดจะกระโดดมาที่ catch {}
      } finally {
        setLoading(false); // ปิดสถานะโหลดข้อมูล
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
              player.seekTo(lastPlayedTime, true); 
            },
            onStateChange: (event: any) => {
              if (
                event.data === (window as any).YT.PlayerState.PAUSED ||
                event.data === (window as any).YT.PlayerState.ENDED
              ) {
                const currentTime = player.getCurrentTime();
                localStorage.setItem(
                  "Machine01_lastPlayedTime",
                  currentTime.toString()
                );
              }
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                setIsCompleted(true);
                localStorage.setItem(
                  "Machine01_isCompleted",
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
            <h2>Lecture 1 : ML - Mean, Median and Mode</h2>
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
        /* โค้ดนี้จะ แสดง YouTube video player โดยใช้ iframe สำหรับวิดีโอที่ได้รับจาก videoUrl.
           จะแสดงปุ่มย้อนกลับ, ชื่อคอร์ส, และข้อความบอกสถานะการดูวิดีโอ (ถ้าดูจบแล้ว) */
      )}
    </>
  );
}

export default Machine01;
