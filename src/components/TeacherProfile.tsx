import React, { useEffect, useState } from 'react';
import { getSelectedTeacher } from './DepartmentSecondaryPage';
import '../styles/TeacherProfile.css';

interface TeacherProfileProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

interface Teacher {
  name: string;
  image: string;
  role?: string;
  contact?: string;
  email?: string;
  cvLink?: string;
  field?: string;
  qualification?: string;
  specialization?: string;
  education?: {
    degree: string;
    field: string;
    specialization?: string;
  }[];
  researchWork?: {
    title: string;
    description: string;
  }[];
  technicalSkills?: string[];
  publications?: {
    type: string;
    items: string[];
  }[];
  other?: string[];
  keyHighlights?: string[];
}

const TeacherProfile: React.FC<TeacherProfileProps> = ({ language, onBack }) => {
  const [teacher, setTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const selectedTeacher = getSelectedTeacher();
    if (selectedTeacher) {
      setTeacher(selectedTeacher);
    }
  }, []);

  if (!teacher) {
    return (
      <div className="teacher-profile-page">
        <button className="back-button" onClick={onBack}>
          {language === 'en' ? 'Back' : 'Back'}
        </button>
        <p>{language === 'en' ? 'No teacher information available' : 'कोई शिक्षक की जानकारी उपलब्ध नहीं है'}</p>
      </div>
    );
  }

  return (
    <div className="teacher-profile-page">
      <div className="teacher-profile-header">
        <button className="back-button" onClick={onBack}>
          {language === 'en' ? 'Back' : 'Back'}
        </button>
        <h1>{teacher.name}</h1>
      </div>

      <div className="teacher-profile-container">
        <div className="teacher-profile-content">
          <div className="teacher-profile-image-section">
            <img src={teacher.image} alt={teacher.name} className="teacher-profile-image" />
          </div>

          <div className="teacher-profile-details">
            {/* Key Highlights Section */}
            {teacher.keyHighlights && teacher.keyHighlights.length > 0 && (
              <section className="teacher-profile-section">
                <h2>{language === 'en' ? 'Key Highlights' : 'मुख्य विशेषताएं'}</h2>
                <ul className="teacher-highlights-list">
                  {teacher.keyHighlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Basic Info Section */}
            <section className="teacher-profile-section">
              <h2>{language === 'en' ? 'Position' : 'पद'}</h2>
              <p>{teacher.role || (language === 'en' ? 'Faculty Member' : 'संकाय सदस्य')}</p>
              {teacher.field && (
                <p><strong>{language === 'en' ? 'Field:' : 'क्षेत्र:'}</strong> {teacher.field}</p>
              )}
              {teacher.qualification && (
                <p><strong>{language === 'en' ? 'Qualification:' : 'योग्यता:'}</strong> {teacher.qualification}</p>
              )}
              {teacher.specialization && (
                <p><strong>{language === 'en' ? 'Specialization:' : 'विशेषज्ञता:'}</strong> {teacher.specialization}</p>
              )}
            </section>

            {/* Education Section */}
            {teacher.education && teacher.education.length > 0 && (
              <section className="teacher-profile-section">
                <h2>{language === 'en' ? 'Education' : 'शिक्षा'}</h2>
                <ul className="teacher-info-list">
                  {teacher.education.map((edu, index) => (
                    <li key={index}>
                      <strong>{edu.degree}:</strong> {edu.field}
                      {edu.specialization && ` (Minor - ${edu.specialization})`}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Research Work Section */}
            {teacher.researchWork && teacher.researchWork.length > 0 && (
              <section className="teacher-profile-section">
                <h2>{language === 'en' ? 'Research Work' : 'अनुसंधान कार्य'}</h2>
                {teacher.researchWork.map((research, index) => (
                  <div key={index} className="research-item">
                    <h3>{research.title}</h3>
                    <p>{research.description}</p>
                  </div>
                ))}
              </section>
            )}

            {/* Technical Skills Section */}
            {teacher.technicalSkills && teacher.technicalSkills.length > 0 && (
              <section className="teacher-profile-section">
                <h2>{language === 'en' ? 'Technical Skills' : 'तकनीकी कौशल'}</h2>
                <ul className="teacher-skills-list">
                  {teacher.technicalSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Publications Section */}
            {teacher.publications && teacher.publications.length > 0 && (
              <section className="teacher-profile-section">
                <h2>{language === 'en' ? 'Publications' : 'प्रकाशन'}</h2>
                {teacher.publications.map((pubCategory, index) => (
                  <div key={index} className="publication-category">
                    <h3>{pubCategory.type}</h3>
                    <ul>
                      {pubCategory.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}

            {/* Other Information */}
            {teacher.other && teacher.other.length > 0 && (
              <section className="teacher-profile-section">
                <h2>{language === 'en' ? 'Other Achievements' : 'अन्य उपलब्धियां'}</h2>
                <ul className="teacher-info-list">
                  {teacher.other.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Contact Information */}
            <section className="teacher-profile-section">
              <h2>{language === 'en' ? 'Contact Information' : 'संपर्क जानकारी'}</h2>
              <div className="teacher-info-list">
                {teacher.contact && (
                  <div className="teacher-info-item">
                    <span className="teacher-info-label">{language === 'en' ? 'Phone:' : 'फोन:'}</span>
                    <span className="teacher-info-value">{teacher.contact}</span>
                  </div>
                )}
                {teacher.email && (
                  <div className="teacher-info-item">
                    <span className="teacher-info-label">{language === 'en' ? 'Email:' : 'ईमेल:'}</span>
                    <span className="teacher-info-value">{teacher.email}</span>
                  </div>
                )}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
