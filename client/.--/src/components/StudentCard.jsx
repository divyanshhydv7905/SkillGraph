
function StudentCard({ student }) {
  return (
    <article className="student-card">
      <div className="student-avatar">
        {student.name.charAt(0)}
      </div>

      <div className="student-info">
        <h3>{student.name}</h3>
        <p>{student.role}</p>

        <div className="skill-list">
          {student.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <span className="student-year">{student.year}</span>
    </article>
  );
}

export default StudentCard;
