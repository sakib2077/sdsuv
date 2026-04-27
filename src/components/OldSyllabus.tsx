import React from 'react';
import '../styles/OldSyllabus.css';

interface SyllabusSection {
  title: string;
  items: string[];
}

const syllabusSections: SyllabusSection[] = [
  {
    title: 'Faculty of Arts Syllabus(New Education Policy) - (2022-23)',
    items: [
      'Defence and strategic studies.pdf',
      'Drawing and Painting.pdf',
      'Economics.pdf',
      'English.pdf',
      'Hindi.pdf',
      'Hindustani Music Vocal.pdf',
      'History.pdf',
      'MA Psychology 4th sem.pdf',
      'Military Science.pdf',
      'sanskrit NEP 2020.pdf',
      'Syllabus of Anthropology .pdf',
      'Syllabus of Philosophy .pdf',
      'Syllabus of Political Science.pdf',
      'Syllabus of Psychology .pdf',
      'UG Geography Syllabus .pdf',
      'UG HINDUSTANI MUSIC TABLA.pdf',
      'UG Sociology Syllabus .pdf',
      'UG Syllabus Home Science .pdf',
      'UG Syllabus of Physical Education .pdf',
      'UG Syllabus on Education .pdf',
      'VOCATIONAL MUSIC.pdf'
    ]
  },
  {
    title: 'Faculty of Science Syllabus (New Education Policy) - (2022-23)',
    items: [
      'B. Sc. I & II Sem Physics Syllabus with Exam Pattern.pdf',
      'Biotechnology Syllabus NEP-2020 SDSUV.pdf',
      'Botany Syllabus NEP-2020 SDSUV.pdf',
      'Chemistry Syllabus NEP-2020 SDSUV.pdf',
      'Chemistry Vocational Course-I & II (SEC) SDSUV.pdf',
      'Computer Science Syllabus NEP-2022 SDSUV.pdf',
      'SDSUV_BOS_GEOLOGY.pdf',
      'Statistics Syllabus NEP-2020 SDSUV.pdf',
      'UG and Honours-Mathematics -NEP 2020.pdf',
      'Zoology Syllabus NEP-2020 SDSUV.pdf'
    ]
  },
  {
    title: 'Professional Syllabus',
    items: [
      'B.Ed. Special Education Visual Impairment Multiple Disability Deaf Blindness 2.pdf',
      'B.Ed. Special Education Visual Impairment Multiple Disability Deaf Blindness.pdf',
      'Bachelor of Physical Education & Sports.pdf',
      'BSc-Honours-Agriculture.pdf',
      'Integrated M.Sc. Applied Psychology I-M.Sc. Ap.pdf',
      'M.A Social Work In Disability Studies And Action.pdf',
      'M.Phil Clinical Psychology.pdf',
      'M.Phil Rehabilitation Psychology.pdf',
      'Master Of Education Special Education Visual Impairment.pdf',
      'Post Graduate Diploma In Rehabilitation Psychology.pdf'
    ]
  },
  {
    title: 'Syllabus for Old Courses Yearly/Semester',
    items: [
      'B.A. & B.Sc. DEFENCE AND STRATEGIC STUDIES SEMESTER.pdf',
      'B.A. & B.Sc. GEOGRAPHY SEMESTER.pdf',
      'B.A. & B.Sc. MATHEMATICS SEMESTER.pdf',
      'B.A. & B.Sc. STATISTICS SEMESTER.pdf',
      'B.A. DRAWING & PAINTING SEMESTER.pdf',
      'B.A. DRAWING AND PAINTING SEMESTER.pdf',
      'B.A. DRAWING PANTING YEARLY.pdf',
      'B.A. ECONOMICS SEMESTER.pdf',
      'B.A. ECONOMICS YEARLY.pdf',
      'B.A. EDUCATION YEARLY.pdf',
      'B.A. ENGLISH SEMESTER.pdf',
      'B.A. ENGLISH YEARLY.pdf',
      'B.A. GEOGRAPHY YEARLY.pdf',
      'B.A. HINDI SEMESTER.pdf',
      'B.A. HINDI YEARLY.pdf',
      'B.A. HISTORY SEMESTER.pdf',
      'B.A. HISTORY YEARLY.pdf',
      'B.A. HOME SCIENCE YEARLY.pdf',
      'B.A. MUSIC SEMESTER.pdf',
      'B.A. MUSIC YEARLY.pdf',
      'B.A. PHILOSOPHY YEARLY.pdf',
      'B.A. POLITICAL SCIENCE YEARLY.pdf',
      'B.A. POLITICAL SCIENCE.pdf',
      'B.A. PSYCHOLOGY SEMESTER.pdf',
      'B.A. PSYCHOLOGY YEARLY.pdf',
      'B.A. SANSKRIT SEMESTER.pdf',
      'B.A. SANSKRIT YEARLY.pdf',
      'B.A. SOCIOLOGY SEMESTER.pdf',
      'B.Com SEMESTER SILLYBUS.pdf',
      'B.Com. YEARLY.pdf',
      'B.Ed. FIRST YEAR.pdf',
      'B.Ed. SECOND YEAR.pdf',
      'B.Sc. ANTHROPOLOGY YEARLY.pdf',
      'B.Sc. BIOTECHNOLOGY YEARLY.pdf',
      'B.Sc. BOTANY SEMSTER.pdf',
      'B.Sc. BOTANY YEARLY.pdf',
      'B.Sc. CHEMISTRY SEMSTER.pdf',
      'B.Sc. CHEMISTRY YEARLY.pdf',
      'B.Sc. COMPUTER SCIENCE.pdf',
      'B.Sc. ENVIRONMENT SCIENCE.pdf',
      'B.Sc. GEOLOGY SEMSTER.pdf',
      'B.Sc. GEOLOGY YEARLY.pdf',
      'B.Sc. HOME SCIENCE.pdf',
      'B.Sc. MICROBIOLOGY SEMSTER.pdf',
      'B.Sc. MICROBIOLOGY YEARLY.pdf',
      'B.Sc. PHYSICS SEMSTER.pdf',
      'B.Sc. PHYSICS YEARLY.pdf',
      'B.Sc. STATISTICS YEARLY.pdf',
      'B.Sc. ZOOLOGY SEMSTER.pdf',
      'B.Sc. ZOOLOGY YEARLY.pdf',
      'B.Sc., B.A. & B.Ed. INTEGRATED.pdf',
      'BA SOCIOLOGY YEARLY.pdf',
      'TEXTILE.pdf'
    ]
  }
];

const OldSyllabus: React.FC = () => {
  return (
    <main className="legacy-syllabus-page">
      <header className="legacy-syllabus-header">
        <div className="legacy-syllabus-header-inner">
          <h1>Syllabus</h1>
          <nav aria-label="Breadcrumb">
            <a href="#">HOME</a>
            <span aria-hidden="true">□</span>
            <a href="#">SYLLABUS</a>
          </nav>
        </div>
      </header>

      <div className="legacy-syllabus-content">
        {syllabusSections.map((section) => (
          <section className="legacy-syllabus-section" key={section.title}>
            <div className="legacy-syllabus-titlebar">
              <h2>{section.title}</h2>
            </div>

            <table className="legacy-syllabus-table">
              <tbody>
                {section.items.map((item) => (
                  <tr key={item}>
                    <td className="legacy-syllabus-name">{item}</td>
                    <td className="legacy-syllabus-view">
                      <a href="#" aria-label={`View ${item}`}>
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </main>
  );
};

export default OldSyllabus;
