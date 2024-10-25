import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

interface Course {
  id: number;
  name: string;
  description: string;
  category: string;
}

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://47f5e36e-3a50-404d-b546-96459373518f-00-2euzu28oz8k9.sisko.replit.dev/courses');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Course[] = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="courseList">
      {courses.map((course) => (
        <div key={course.id} className="card">
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <p>Category: {course.category}</p>
          <Link to={"#"}>
            <button>View</button>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Courses;
