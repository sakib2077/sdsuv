import React from 'react';
import '../styles/PanditLalitMohanSharmaCollege.css';

interface PanditLalitMohanSharmaCollegeProps {
  language: 'en' | 'hi';
  onBack: () => void;
  setCurrentPage: (page: string) => void;
}

const PanditLalitMohanSharmaCollege: React.FC<PanditLalitMohanSharmaCollegeProps> = ({
  language,
  onBack,
  setCurrentPage
}) => {
  const [selectedDepartment, setSelectedDepartment] = React.useState<string>('Botany');

  const content = {
    en: {
      title: 'Pandit Lalit Mohan Sharma Government PG College',
      subtitle: 'College Profile',
      aboutTitle: 'About The College',
      aboutText:
        'Pandit Lalit Mohan Sharma Government PG College is an important institution under Sri Dev Suman Uttarakhand University. The college supports quality teaching, academic discipline, student mentoring, and higher education growth in the Garhwal region.',
      aboutHighlights: [
        'Experienced faculty and student-friendly learning environment',
        'Regular seminars, workshops, and co-curricular activities',
        'Strong focus on foundational and advanced higher education',
        'Library, lab, and digital academic support for learners'
      ],
      departmentsTitle: 'Departments',
      departmentsHelpText: 'Select a department below to preview details in this section.',
      previewButtonText: 'Open Full Department Profile',
      departments: [
        'Mathematics',
        'Microbiology',
        'Music',
        'Physics',
        'Political Science',
        'Sanskrit',
        'Sociology',
        'Zoology',
        'Commerce and Management',
        'Chemistry',
        'Economics',
        'Education',
        'English',
        'Geography',
        'Hindi',
        'History',
        'Home Science',
        'Botany'
      ],
      note: 'For admissions, syllabus, and official notices, please check the university portal.'
    },
    hi: {
      title: 'Pandit Lalit Mohan Sharma Government PG College',
      subtitle: 'College Profile',
      aboutTitle: 'About The College',
      aboutText:
        'Pandit Lalit Mohan Sharma Government PG College is an important institution under Sri Dev Suman Uttarakhand University. The college supports quality teaching, academic discipline, student mentoring, and higher education growth in the Garhwal region.',
      aboutHighlights: [
        'Experienced faculty and student-friendly learning environment',
        'Regular seminars, workshops, and co-curricular activities',
        'Strong focus on foundational and advanced higher education',
        'Library, lab, and digital academic support for learners'
      ],
      departmentsTitle: 'Departments',
      departmentsHelpText: 'Select a department below to preview details in this section.',
      previewButtonText: 'Open Full Department Profile',
      departments: [
        'Mathematics',
        'Microbiology',
        'Music',
        'Physics',
        'Political Science',
        'Sanskrit',
        'Sociology',
        'Zoology',
        'Commerce and Management',
        'Chemistry',
        'Economics',
        'Education',
        'English',
        'Geography',
        'Hindi',
        'History',
        'Home Science',
        'Botany'
      ],
      note: 'For admissions, syllabus, and official notices, please check the university portal.'
    }
  };

  const data = content[language];
  const departmentPageMap: Record<string, string> = {
    Mathematics: 'dept-mathematics',
    Microbiology: 'dept-microbiology',
    Music: 'dept-music',
    Physics: 'dept-physics',
    'Political Science': 'dept-political-science',
    Sanskrit: 'dept-sanskrit',
    Sociology: 'dept-sociology',
    Zoology: 'dept-zoology',
    'Commerce and Management': 'dept-commerce-management',
    Chemistry: 'dept-chemistry',
    Economics: 'dept-economics',
    Education: 'dept-education',
    English: 'dept-english',
    Geography: 'dept-geography',
    Hindi: 'dept-hindi',
    History: 'dept-history',
    'Home Science': 'dept-home-science',
    Botany: 'dept-botany'
  };

  const departmentPreviewMap: Record<string, { image: string; summary: string }> = {
    Botany: {
      image: '/img/botany/botany-department-group.jpeg',
      summary:
        'Botany department details and faculty CVs are now available. Use the button below to open the full Botany page.'
    },
    History: {
      image: '/img/H2.jpg',
      summary: 'History department profile and faculty data are available in the detailed section.'
    },
    Hindi: {
      image: '/img/hindi/hindi-department-group.jpeg',
      summary: 'Hindi department profile, faculty entries, and documents are available in the detailed section.'
    },
    Education: {
      image: '/img/education/education-group-photo.jpg',
      summary: 'Education department photo and details are available in the detailed section.'
    },
    English: {
      image: '/img/H3.jpg',
      summary: 'English department profile and faculty CV links are available in the detailed section.'
    },
    'Home Science': {
      image: '/img/H4.jpg',
      summary: 'Home Science department profile and faculty details are available in the detailed section.'
    },
    Geography: {
      image: '/img/H2.jpg',
      summary: 'Geography department profile and faculty details are available in the detailed section.'
    }
  };

  const preview = departmentPreviewMap[selectedDepartment] || {
    image: '/img/H3.jpg',
    summary: `${selectedDepartment} department profile is available. Open the full page for complete details.`
  };

  return (
    <div className="pandit-lalit-college-page">
      <div className="pandit-lalit-college-header">
        <button className="back-button" onClick={onBack}>
          {language === 'en' ? 'Back' : 'Back'}
        </button>
        <h1>{data.title}</h1>
        <p className="pandit-lalit-college-subtitle">{data.subtitle}</p>
      </div>

      <div className="pandit-lalit-college-container">
        <section className="pandit-lalit-college-about">
          <h2>{data.aboutTitle}</h2>
          <p>{data.aboutText}</p>
          <div className="pandit-lalit-college-highlights">
            {data.aboutHighlights.map((item, index) => (
              <div key={index} className="pandit-lalit-college-highlight-item">
                <span className="highlight-dot">*</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pandit-lalit-college-departments">
          <h2>{data.departmentsTitle}</h2>
          <p className="pandit-lalit-college-departments-help">{data.departmentsHelpText}</p>
          <div className="pandit-lalit-college-departments-grid">
            {data.departments.map((department, index) => (
              <button
                key={index}
                className="pandit-lalit-college-department-card"
                onClick={() => setSelectedDepartment(department)}
              >
                {department}
              </button>
            ))}
          </div>
          <div className="pandit-lalit-college-department-preview">
            <img src={preview.image} alt={`${selectedDepartment} department`} />
            <div className="pandit-lalit-college-department-preview-content">
              <h3>{selectedDepartment}</h3>
              <p>{preview.summary}</p>
              <button
                className="pandit-lalit-college-open-btn"
                onClick={() => setCurrentPage(departmentPageMap[selectedDepartment])}
              >
                {data.previewButtonText}
              </button>
            </div>
          </div>
        </section>

        <p className="pandit-lalit-college-note">{data.note}</p>
      </div>
    </div>
  );
};

export default PanditLalitMohanSharmaCollege;
