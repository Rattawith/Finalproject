import React, { useEffect, useState } from "react"; // ใช้ useState ในการจัดการ state และ useEffect สำหรับดึงข้อมูลจาก API
import { Link } from "react-router-dom"; // ใช้สร้างลิงก์ไปยังหน้าคอร์สที่เลือก
import "../Pack_Courses.css";

function Datascience_R_01() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null); // เก็บ URL ของวิดีโอ ที่ดึงจาก API
  const [loading, setLoading] = useState<boolean>(true); // ใช้แสดงข้อความ "กำลังโหลด..." ขณะดึงข้อมูล
  const [error, setError] = useState<string | null>(null); // ใช้เก็บข้อความ error ถ้าโหลดข้อมูลไม่สำเร็จ
  const [isCompleted, setIsCompleted] = useState<boolean>(() => // เก็บสถานะการดูจบแล้วหรือไม่ (อ่านจาก localStorage)
    JSON.parse(localStorage.getItem("Datascience_R_01_isCompleted") || "false") 
  );
  const [lastPlayedTime, setLastPlayedTime] = useState<number>(() => // เก็บวินาทีที่ผู้ใช้ดูค้างไว้ล่าสุด (อ่านจาก localStorage)
    parseFloat(localStorage.getItem("Datascience_R_01_lastPlayedTime") || "0")
  );

  useEffect(() => {
    const fetchVideoData = async () => { 
      try {
        const response = await fetch(
          "https://0bc08ff7-4842-458f-bbec-09b3e5dbf83e-00-3lz25gv4l2lkt.sisko.replit.dev/courses" // ดึงข้อมูลวิดีโอจาก API → ถ้าหลักสูตรมี videoUrl ก็จะเซ็ตค่าไปที่ setVideoUrl()
        );
        if (!response.ok) {
          throw new Error("Network response was not ok"); // เช็คว่า response.ok เป็น true หรือไม่ ถ้าไม่สำเร็จ (response.ok === false) → ให้โยนข้อผิดพลาดโดยใช้ throw new Error(...)
        }
        const data = await response.json(); // แปลงข้อมูลที่ได้จาก JSON เป็น JavaScript Object

        const courseData = data.find((course: any) => course.id === 4); // ใช้ .find() ค้นหา วัตถุที่มี id === 4
        if (courseData && courseData.videoUrl) { 
          setVideoUrl(courseData.videoUrl);
        } // ถ้า courseData มีค่า และ มี videoUrl → ใช้ setVideoUrl() เพื่อบันทึกค่า URL
      } catch (error) {
        console.error("Error fetching video data:", error);
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล"); // ถ้ามีข้อผิดพลาดจาก fetch() หรือ .json() → โค้ดจะกระโดดมาที่ catch {}
      } finally {
        setLoading(false); // ปิดสถานะโหลดข้อมูล
      }
    };

    fetchVideoData();

    // โหลด YouTube API
    if (!(window as any).YT) { // window.YT คืออ็อบเจ็กต์ของ YouTube API ที่จะมีอยู่ใน window เมื่อ API ถูกโหลดแล้ว code นี้จะไม่โหลดซ้ำ
      const tag = document.createElement("script"); // สร้าง <script>.
      tag.src = "https://www.youtube.com/iframe_api"; // ตั้งค่า src เป็น "https://www.youtube.com/iframe_api"
      document.body.appendChild(tag); // แทรก <script> เข้าไปใน <body>.
    } 
    // สร้าง player instance เมื่อ API และ videoUrl พร้อม
    const createPlayer = () => { // ฟังก์ชันนี้ทำหน้าที่สร้าง YouTube Player ถ้าหากมี videoUrl และ YouTube API 
      if (videoUrl && (window as any).YT) {
        const player = new (window as any).YT.Player("youtube-player", { //ใช้เพื่อสร้างวิดีโอ
          events: {
            onReady: () => { // เมื่อวิดีโอโหลดเสร็จ, player.seekTo(lastPlayedTime, true); จะทำให้วิดีโอเริ่มเล่นจากตำแหน่งที่ค้างไว้ (lastPlayedTime).
              player.seekTo(lastPlayedTime, true); 
            },
            onStateChange: (event: any) => { // เช็คสถานะของวิดีโอ
              if (
                event.data === (window as any).YT.PlayerState.PAUSED ||
                event.data === (window as any).YT.PlayerState.ENDED // บันทึกตำแหน่งที่เล่นล่าสุดลง
              ) {
                const currentTime = player.getCurrentTime(); // ใช้เพื่อดึงเวลาปัจจุบันที่วิดีโอกำลังเล่นอยู่ (หน่วยเป็นวินาที)
                localStorage.setItem( // ใช้เพื่อเก็บข้อมูลลงใน localStorage ซึ่งเป็นพื้นที่เก็บข้อมูลที่อยู่ในเว็บเบราว์เซอร์
                  "Datascience_R_01_lastPlayedTime",
                  currentTime.toString() // ค่า currentTime ที่เราแปลงเป็น string เนื่องจาก localStorage สามารถเก็บข้อมูลเป็นสตริงเท่านั้น
                );
              }
              if (event.data === (window as any).YT.PlayerState.ENDED) { // ถ้าวิดีโอจบ → เปลี่ยนสถานะเป็น "ดูจบ" และบันทึก isCompleted ลง localStorage
                setIsCompleted(true); // 
                localStorage.setItem(
                  "Datascience_R_01_isCompleted",
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

    // เรียกใช้ createPlayer อีกครั้งเมื่อ VideoUrl มีค่า
    if (videoUrl) {
      createPlayer();
    }
  }, [videoUrl]);

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
            <Link to="/introductions/4">
              <button className="back-button">Go Back</button> 
            </Link>
            <h2>Lecture 1 : Introduction to Data Science with R</h2> 
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
        /* โค้ดนี้จะ แสดง YouTube video player โดยใช้ iframe สำหรับวิดีโอที่ได้รับจาก videoUrl.
           จะแสดงปุ่มย้อนกลับ, ชื่อคอร์ส, และข้อความบอกสถานะการดูวิดีโอ (ถ้าดูจบแล้ว) */
      )}
    </>
  );
}

export default Datascience_R_01;
