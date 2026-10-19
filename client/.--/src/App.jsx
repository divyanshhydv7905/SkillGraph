
import { useState } from "react";
import students from "./data/students";
import StudentCard from "./components/StudentCard";

function App() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) => {
    const searchableText = [
      student.name,
      student.role,
      ...student.skills
    ].join(" ").toLowerCase();

    return searchableText.includes(search.toLowerCase());
  });

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>SkillGraph</span>
        </a>

        <p className="nav-label">WORKSPACE</p>

        <a className="nav-link active" href="#students">
          Students
        </a>
        <a className="nav-link" href="#teams">
          Team Builder
        </a>
        <a className="nav-link" href="#skills">
          Skill Gaps
        </a>

        <div className="sidebar-footer">
          Campus Skill Intelligence
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span>Workspace / Students</span>
          <span className="demo-label">DEMO MODE</span>
        </header>

        <section className="page-heading" id="students">
          <p className="eyebrow">CAMPUS DIRECTORY</p>
          <h1>Discover talent.</h1>
          <p className="subtitle">
            Find the right skills for your next project team.
          </p>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span>Total students</span>
            <strong>{students.length}</strong>
          </div>

          <div className="stat-card">
            <span>Unique skills</span>
            <strong>
              {new Set(students.flatMap((student) => student.skills)).size}
            </strong>
          </div>
        </section>

        <section className="directory-section">
          <div className="section-heading">
            <div>
              <h2>Student directory</h2>
              <p>Browse skills and areas of expertise.</p>
            </div>

            <span className="result-count">
              {filteredStudents.length} results
            </span>
          </div>

          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search name, role or skill..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <div className="student-list">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))
            ) : (
              <p className="empty-state">
                No students found. Try another search.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
