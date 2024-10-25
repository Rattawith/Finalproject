// pages/Course.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Course() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Course {id}</h1>
      <p>Details about course {id}</p>
      <Link to={`/learning/${id}`}>Start Learning</Link>
    </div>
  );
}

export default Course;
