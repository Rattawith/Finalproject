<link rel="preconnect" href="https://fonts.googleapis.com"></link>;

import React, { useEffect, useState } from "react"; // ใช้ useState ในการจัดการ state และ useEffect สำหรับดึงข้อมูลจาก API
import { Link } from "react-router-dom"; // ใช้สร้างลิงก์ไปยังหน้าคอร์สที่เลือก
import "./Courses.css";

interface Course {
  id: number;
  name: string;
  description: string;
  category: string;
  img: string;
}

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]); // เก็บข้อมูลรายการคอร์สที่ดึงมาจาก API
  const [categories, setCategories] = useState<string[]>([]); // เก็บหมวดหมู่คอร์สที่ดึงมาจาก API
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // เก็บค่าหมวดหมู่ที่ผู้ใช้เลือก
  const [loading, setLoading] = useState<boolean>(true); // ใช้ตรวจสอบว่าข้อมูลถูกโหลดหรือยัง

  useEffect(() => {
    // ดึงข้อมูลจาก API ทันทีที่ Component ถูกโหลด
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://0bc08ff7-4842-458f-bbec-09b3e5dbf83e-00-3lz25gv4l2lkt.sisko.replit.dev/courses"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Course[] = await response.json();
        console.log("คอร์ส:", data); // ตรวจสอบข้อมูลหมวดหมู่ที่ได้จาก API
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false); // เมื่อ fetchCouress โหลดเสร็จจะปิดสถานะ loading และทำการ loading fetchCategoties ต่อ
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://0bc08ff7-4842-458f-bbec-09b3e5dbf83e-00-3lz25gv4l2lkt.sisko.replit.dev/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: string[] = await response.json();
        console.log("หมวดหมู่:", data); // ตรวจสอบข้อมูลหมวดหมู่ที่ได้จาก API
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCourses(); // ดึงข้อมูลคอร์สจาก API และเก็บไว้ใน courses
    fetchCategories(); // ดึงหมวดหมู่จาก API และเก็บไว้ใน categories
  }, []);

  const handleCategoryChange = (
    // ใช้เมื่อผู้ใช้เลือกหมวดหมู่จาก <select> เพื่ออัปเดตค่าของ selectedCategory
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory) // ถ้าผู้ใช้เลือกหมวดหมู่ คอร์สที่แสดงจะถูกกรองตามหมวดหมู่นั้น
    : courses; // ถ้าไม่มีการเลือกหมวดหมู่ จะแสดงคอร์สทั้งหมด

  if (loading) {
    return <p>กำลังโหลด...</p>; // แสดงข้อความ "กำลังโหลด..." ขณะกำลังดึงข้อมูลจาก API
  }

  return (
    <div>
      <div className="filter">
        <p>หมวดหมู่</p>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">แสดงทั้งหมด</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="courseList">
        {filteredCourses.map((course) => (
          <div key={course.id} className="card">
            <img src={course.img} alt={course.name} />{" "}
            {/* แก้ไขที่นี่เพื่อแสดงภาพ */}
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p>หมวดหมู่ : {course.category}</p>
            <Link to={`/introductions/${course.id}`}>
              <button>Open Access</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  /*  เมื่อ Component โหลดขึ้นมา จะดึงข้อมูล คอร์ส และ หมวดหมู่ จาก API
      ผู้ใช้สามารถเลือก หมวดหมู่ เพื่อกรองรายการคอร์ส
      คอร์สจะแสดงเป็นการ์ด มีรูป, ชื่อ, คำอธิบาย, และปุ่มไปยังหน้ารายละเอียด
      ใช้ loading เพื่อแสดงสถานะการโหลดข้อมูล
  */
}

export default Courses;
