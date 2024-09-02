import React, { Fragment, useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import HorizontalMenu from "./components/HorizontalMenu";
import StudentGridView from "./components/StudentDataView";
import StudentTileView from "./components/StudentTileView";
import ExpandedStudentView from "./components/ExpandedStudentView";
import { Student } from "./types";

const App: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [view, setView] = useState<"grid" | "tile">("grid");

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleCloseExpandedView = () => {
    setSelectedStudent(null);
  };

  // Example handlers for edit, flag, and delete
  const handleEdit = (id: number) => {
    console.log("Edit", id);
  };
  const handleFlag = (id: number) => {
    console.log("Flag", id);
  };
  const handleDelete = (id: number) => {
    console.log("Delete", id);
  };

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <div className="block md:hidden">
          <HamburgerMenu />
        </div>
        <div className="hidden md:flex md:justify-center md:w-full">
          <HorizontalMenu />
        </div>
      </div>

      {selectedStudent ? (
        <ExpandedStudentView
          student={selectedStudent}
          onClose={handleCloseExpandedView}
        />
      ) : view === "grid" ? (
        <StudentGridView onSelectStudent={handleSelectStudent} />
      ) : (
        <StudentTileView
          students={[]} // Provide the students data from state or props
          onEdit={handleEdit}
          onFlag={handleFlag}
          onDelete={handleDelete}
          onSelectStudent={handleSelectStudent}
        />
      )}
    </Fragment>
  );
};

export default App;
