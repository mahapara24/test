import React, { Fragment, useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import HorizontalMenu from "./components/HorizontalMenu";
import StudentGridView from "./components/StudentDataView";
import ExpandedStudentView from "./components/ExpandedStudentView";
import { Student } from "./types";

const App: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleCloseExpandedView = () => {
    setSelectedStudent(null);
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
      </div>

      <main className="p-4">
        {selectedStudent ? (
          <ExpandedStudentView
            student={selectedStudent}
            onClose={handleCloseExpandedView}
          />
        ) : (
          <StudentGridView onSelectStudent={handleSelectStudent} />
        )}
      </main>
    </Fragment>
  );
};

export default App;
