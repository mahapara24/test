import React from "react";
import { Student } from "../types";
type ExpandedStudentViewProps = {
  student: Student;
  onClose: () => void;
};

const ExpandedStudentView: React.FC<ExpandedStudentViewProps> = ({
  student,
  onClose,
}) => (
  <div className="expanded-view bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
    <img
      src={student.image}
      alt={student.name}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <h2 className="text-2xl font-bold mt-4">{student.name}</h2>
    <p className="text-gray-600">Email: {student.email}</p>
    <p className="text-gray-600">Phone: {student.phone}</p>
    <p className="text-gray-600">Age: {student.age}</p>
    <p className="text-gray-600">Grade: {student.grade}</p>
    <p className="text-gray-600">Major: {student.major}</p>
    <p className="text-gray-600">Enrolled Date: {student.enrolledDate}</p>
    <p className="text-gray-600">Status: {student.status}</p>
    <button
      onClick={onClose}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Back to Tiles
    </button>
  </div>
);

export default ExpandedStudentView;
