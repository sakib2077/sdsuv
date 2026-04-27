import React from 'react';
import '../styles/AcademicCalendarPage.css';

interface AcademicCalendarPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const calendarLinks = [
  'Academic calendar 2022-23',
  'Academic calendar 2021-22',
  'Academic calendar 2020-21',
  'Academic calendar 2019-20',
  'Academic Calendar 2017-18',
  'Academic Calendar 2014',
];

const AcademicCalendarPage: React.FC<AcademicCalendarPageProps> = ({ onBack }) => {
  return (
    <div className="academic-calendar-page">
      <header className="academic-calendar-topbar">
        <div className="academic-calendar-topbar-inner">
          <h1>Academic Calendar</h1>
          <nav className="academic-calendar-breadcrumb" aria-label="Academic calendar navigation">
            <button type="button" onClick={onBack}>HOME</button>
            <span aria-hidden="true"></span>
            <strong>ACADEMIC CALENDAR</strong>
          </nav>
        </div>
      </header>

      <main className="academic-calendar-content">
        <section className="academic-calendar-panel" aria-labelledby="academic-calendar-heading">
          <h2 id="academic-calendar-heading">Academic Calendar</h2>
          <ul>
            {calendarLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AcademicCalendarPage;
