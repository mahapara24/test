import React, { useState, useEffect } from "react";
import axios from "axios";
import { Student } from "../types";

type StudentGridViewProps = {
  onSelectStudent: (student: Student) => void;
};

const StudentGridView: React.FC<StudentGridViewProps> = ({
  onSelectStudent,
}) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Student[]>("https://freetestapi.com/api/v1/students?limit=5")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => onSelectStudent(student)}
        >
          <img
            src={student.image}
            alt={student.name}
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{student.name}</h3>
            <p className="text-gray-600">{student.email}</p>
            <p className="text-gray-600">GPA: {student.gpa}</p>
            <p className="text-gray-600">
              Courses: {student.courses.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentGridView;
