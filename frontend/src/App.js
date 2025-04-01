import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';

// TYPES
import RegisterType from './components/RegisterType';
import LoginType from './components/LoginType';

// Teacher Import
import TeacherRegistration from './components/TeacherRegistration';
import TeacherLogin from './components/TeacherLogin';
import EditTeacherProfile from './components/EditTeacherProfile';

// Student Import
import StudentRegistration from './components/StudentRegistration';
import StudentLogin from './components/StudentLogin';
import EditStudentProfile from './components/EditStudentProfile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/register-type" element={<RegisterType />} />
                <Route path="/login-type" element={<LoginType />} />
                
              {/* Teacher Side */}
                <Route path="/register-teacher" element={<TeacherRegistration />} />
                <Route path="/login-teacher" element={<TeacherLogin />} />
                <Route path="/edit-profile-teacher" element={<EditTeacherProfile />} />

              {/* Student Side */}
                <Route path="/register-student" element={<StudentRegistration />} />
                <Route path="/login-student" element={<StudentLogin />} />
                <Route path="/edit-profile-student" element={<EditStudentProfile />} />
            </Routes>
        </Router>
    );
}

export default App;