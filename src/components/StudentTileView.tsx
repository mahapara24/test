import React from "react";
import { Student } from "../types";

type StudentTileViewProps = {
  students: Student[];
  onEdit: (id: number) => void;
  onFlag: (id: number) => void;
  onDelete: (id: number) => void;
  onSelectStudent: (student: Student) => void;
};

const StudentTileView: React.FC<StudentTileViewProps> = ({
  students,
  onEdit,
  onFlag,
  onDelete,
  onSelectStudent,
}) => (
  <div className="student-tile-view">
    {students.map((student) => (
      <div key={student.id} className="student-tile">
        <p>{student.name}</p>
        <button onClick={() => onEdit(student.id)}>Edit</button>
        <button onClick={() => onFlag(student.id)}>Flag</button>
        <button onClick={() => onDelete(student.id)}>Delete</button>
        <div onClick={() => onSelectStudent(student)}>View Details</div>
      </div>
    ))}
  </div>
);

export default StudentTileView;
