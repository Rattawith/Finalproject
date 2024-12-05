<link rel="preconnect" href="https://fonts.googleapis.com"></link>;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

interface Course {
  id: number;
  name: string;
  description: string;
  category: string;
  img: string; // ตรวจสอบให้แน่ใจว่านี่เป็น URL แบบสตริง
}

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://0bc08ff7-4842-458f-bbec-09b3e5dbf83e-00-3lz25gv4l2lkt.sisko.replit.dev/courses"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Course[] = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
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

    fetchCourses();
    fetchCategories();
  }, []);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  if (loading) {
    return <p>กำลังโหลด...</p>;
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
}

export default Courses;
