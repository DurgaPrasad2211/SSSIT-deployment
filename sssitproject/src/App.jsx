import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavbarTop from "./components/NavbarTop";
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";
import NewStudentEnroll from "./components/NewStudentEnroll";
import OldStudentEnroll from "./components/OldStudentEnroll";
import EditStudent from "./components/EditStudent";
import DeleteStudent from "./components/DeleteStudent";
import FeeReceipts from "./components/FeeReceipts";
import SearchById from "./components/SearchById";
import ArrearsList from "./components/ArrearsList";
import ExportToExcel from "./components/ExportToExcel";
import AddNewCourse from "./components/AddNewCourse";
import FacultyDetails from "./components/FacultyDetails";
import StudentDetails from "./components/StudentDetails";
import ExamWrittenStudents from "./components/ExamWrittenStudents";
import CertificateDetails from "./components/CertificateDetails";
import AddExamStudent from "./components/AddExamStudent";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("admin") === "true");
  }, []);


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <NavbarTop onLogout={handleLogout} />}

      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<AdminLogin onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/enroll/new" element={<NewStudentEnroll />} />
            <Route path="/enroll/old" element={<OldStudentEnroll />} />
            <Route path="/edit" element={<EditStudent />} />
            <Route path="/delete" element={<DeleteStudent />} />
            <Route path="/fees" element={<FeeReceipts />} />
            <Route path="/search-id" element={<SearchById />} />
            <Route path="/arrears" element={<ArrearsList />} />
            <Route path="/export" element={<ExportToExcel />} />
            <Route path="/add-course" element={<AddNewCourse />} />
            <Route path="/faculty" element={<FacultyDetails />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/exam_written_students" element={<ExamWrittenStudents />} />
            <Route path="/certificate_details" element={<CertificateDetails />} />
            <Route path="/add_exam_student" element={<AddExamStudent />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
export default App;