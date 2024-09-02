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
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="block md:hidden">
          <HamburgerMenu />
        </div>
        <div className="hidden md:flex md:justify-center md:w-full">
          <HorizontalMenu />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setView("grid")}
            className={`px-4 py-2 rounded ${
              view === "grid"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setView("tile")}
            className={`px-4 py-2 rounded ${
              view === "tile"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Tile View
          </button>
        </div>
      </div>

      <main className="p-4">
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
      </main>
    </Fragment>
  );
};

export default App;
