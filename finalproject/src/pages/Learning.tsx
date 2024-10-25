// pages/Learning.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Learning() {
  const { id } = useParams();

  return (
    <div>
      <h1>Learning Course {id}</h1>
      <video controls>
        <source src="path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="lesson-contents">
        <h3>Lesson Contents</h3>
        <ul>
          <li>Lesson 1</li>
          <li>Lesson 2</li>
          <li>Lesson 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Learning;
