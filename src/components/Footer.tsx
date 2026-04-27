import React from 'react';
import '../styles/Footer.css';

interface FooterProps {
  language: 'en' | 'hi';
  setCurrentPage?: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ language, setCurrentPage }) => {
  const actRegulationsPdf = '/img/ppf/University_Act.pdf';

  // External links mapping
  const externalLinks: { [key: string]: string } = {
    'UGC e-Samadhan portal': 'https://samadhaan.ugc.ac.in/',
  };

  // Link name to page name mapping (for internal pages)
  const linkMapping: { [key: string]: string } = {
    'Convocation': 'convocation',
    'Photo Gallery': 'photo-gallery',
    'Student Corner': 'student-corner',
    'Tenders Notification': 'tenders-notification',
    'Seminar & Conference': 'conference-seminar',
    'Courses Offered': 'courses-offered',
    'Recruitments': 'recruitments',
    'Affiliation & Affiliated colleges': 'affiliation-affiliated-colleges',
    'Old Syllabus': 'old-syllabus',
    'Examination': 'examination',
    'Results': 'results',
    'Notification': 'notification',
    'Lecturer Series': 'lecturer-series',
    'Awards & Scholarships': 'awards-scholarships',
    'Career': 'career',
    'Downloads': 'downloads',
    'F.T.I': 'fti',
    'Announcements': 'announcements',
    'Latest News': 'news-gallery',
    'From VC Desk': 'from-vc-desk',
    'Affiliated College': 'affiliated-college',
    'Act & Regulations': 'act-regulations',
    'Anti-Ragging': 'anti-ragging',
    'Academic Calendar': 'academic-calendar',
    'Exam Schedules': 'exam-schedules',
    'News Gallery': 'news-gallery',
    'Alumni': 'alumni',
    'Events': 'events-sports',
    'Vacancy for the Post of Assistant Professor & Assistant Librarian/Associate Professors/Professors': 'vacancy-positions',
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
    e.preventDefault();
    
    console.log('Link clicked:', linkName);
    console.log('Is external:', externalLinks[linkName]);
    
    // Check if it's an external link
    if (externalLinks[linkName]) {
      console.log('Opening external link:', externalLinks[linkName]);
      window.open(externalLinks[linkName], '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Otherwise, navigate to internal page
    const pageName = linkMapping[linkName];
    console.log('Internal page:', pageName);
    if (pageName && setCurrentPage) {
      setCurrentPage(pageName);
    }
  };
  const content = {
    en: {
      contactDetailsTitle: 'Contact Details',
      address: 'Address : Sri Dev Suman Uttarakhand University, Badshahithol, Tehri Garhwal, Uttrakhand',
      registrarEmail: 'Registrar office Email Id : registrarsdsuz018@gmail.com',
      phone: 'Phone: +1 5589 55488 55',
      email: 'Email: info@example.com',
      
      examinationContactTitle: 'Examination Contact',
      examControllerLabel: 'Exam Controller - Mob. : +91-9520871194',
      examControllerEmail: 'Mail Id- coesdsu@gmail.com',
      deputyExamLabel: 'Deputy Exam Controller, Mob.No.+91 6398469886',
      baLabel: 'B.A./B.Sc./B.Com. : Assistant exam controller (Main Exam), Mob.No.+91-9520871196',
      aeLabel: 'Mail Id- aecmain.sdsu@gmail.com',
      
      academicLinksTitle: 'Academic Links',
      academicLinks: ['Convocation', 'Photo Gallery', 'Student Corner', 'Tenders Notification', 'Seminar & Conference', 'Courses Offered', 'Recruitments', 'Affiliation & Affiliated colleges', 'Old Syllabus'],
      
      overviewTitle: 'Overview',
      overviewLinks: ['Examination', 'Results', 'Notification', 'Lecturer Series', 'Awards & Scholarships', 'Career', 'Downloads', 'F.T.I', 'Announcements', 'Latest News', 'UGC e-Samadhan portal'],
      
      universityLinksTitle: 'University Links',
      universityLinks: ['From VC Desk', 'Affiliated College', 'Act & Regulations', 'Anti-Ragging', 'Academic Calendar', 'Exam Schedules', 'Photo Gallery', 'News Gallery', 'Alumni', 'Events', 'Vacancy for the Post of Assistant Professor & Assistant Librarian/Associate Professors/Professors'],
    },
    hi: {
      contactDetailsTitle: 'संपर्क विवरण',
      address: 'पता : श्री देव सुमन उत्तराखंड विश्वविद्यालय, बादशाहीथोल, टेहरी गढ़वाल, उत्तराखंड',
      registrarEmail: 'रजिस्ट्रार कार्यालय ईमेल आईडी : registrarsdsuz018@gmail.com',
      phone: 'फोन: +1 5589 55488 55',
      email: 'ईमेल: info@example.com',
      
      examinationContactTitle: 'परीक्षा संपर्क',
      examControllerLabel: 'परीक्षा नियंत्रक - मोब। : +91-9520871194',
      examControllerEmail: 'मेल आईडी- coesdsu@gmail.com',
      deputyExamLabel: 'उप परीक्षा नियंत्रक, मोब.नंबर +91 6398469886',
      baLabel: 'बी.ए./बी.एससी./बी.कॉम। : सहायक परीक्षा नियंत्रक (मुख्य परीक्षा), मोब.नंबर +91-9520871196',
      aeLabel: 'मेल आईडी- aecmain.sdsu@gmail.com',
      
      academicLinksTitle: 'शैक्षणिक लिंक',
      academicLinks: ['दीक्षांत समारोह', 'फोटो गैलरी', 'छात्र कोना', 'निविदा अधिसूचना', 'सेमिनार और सम्मेलन', 'प्रस्तावित पाठ्यक्रम', 'भर्तियाँ', 'संबद्धता और संबद्ध कॉलेज', 'पुरानी पाठ्यक्रम'],
      
      overviewTitle: 'अवलोकन',
      overviewLinks: ['परीक्षा', 'परिणाम', 'अधिसूचना', 'व्याख्यानकर्ता श्रृंखला', 'पुरस्कार और छात्रवृत्ति', 'कैरियर', 'डाउनलोड', 'एफटीआई', 'घोषणाएं', 'नवीनतम समाचार', 'यूजीसी ई-समाधान पोर्टल'],
      
      universityLinksTitle: 'विश्वविद्यालय लिंक',
      universityLinks: ['वीसी डेस्क से', 'संबद्ध कॉलेज', 'अधिनियम और नियम', 'उत्पीड़न विरोधी', 'शैक्षणिक कैलेंडर', 'परीक्षा अनुसूची', 'फोटो गैलरी', 'समाचार गैलरी', 'पूर्व छात्र', 'कार्यक्रम', 'सहायक प्रोफेसर और सहायक पुस्तकालयाध्यक्ष/एसोसिएट प्रोफेसर/प्रोफेसर के पद के लिए रिक्ति'],
    }
  };

  const currentContent = content[language];

  return (
    <footer className="footer-new">
      <div className="footer-wrapper">
        <div className="footer-grid">
          {/* Contact Details Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.contactDetailsTitle}</h3>
            <div className="column-divider"></div>
            <div className="contact-section">
              <p className="contact-text">{currentContent.address}</p>
              <p className="contact-text"><strong>Registrar office Email Id :</strong> registrarsdsuz018@gmail.com</p>
              <p className="contact-text">
                <strong>{language === 'en' ? 'निर्धी सचिव माठ कुलपति' : ''}:</strong> 01376297701 ({language === 'en' ? 'Sri Varsha Deopalta' : 'श्री वर्षा डीओपाल्टा'})
              </p>
              <p className="contact-text">
                <strong>{language === 'en' ? 'प्रशासन' : ''}:</strong> 01376297702 ({language === 'en' ? 'Sri Gajendra Rawat' : 'श्री गजेंद्र रावत'})
              </p>
              <p className="contact-text">
                <strong>{language === 'en' ? 'मान्यता अनुभाग' : ''}:</strong> 01376297703 ({language === 'en' ? 'Sri Kuldeep Negi' : 'श्री कुलदीप नेगी'})
              </p>
              <p className="contact-text">
                <strong>{language === 'en' ? 'वित्त अनुभाग' : ''}:</strong> 01376297704 ({language === 'en' ? 'Sri Jitendra Singh Rawat' : 'श्री जितेंद्र सिंह रावत'})
              </p>
              <p className="contact-text">
                <strong>{language === 'en' ? 'परीक्षा विभाग' : ''}:</strong> 01376297705 ({language === 'en' ? 'Sri Ashirosh Rawat / Shri Pankaj Kumar' : 'श्री अशिरोष रावत / श्री पंकज कुमार'})
              </p>
              <p className="contact-text"><strong>Phone:</strong> +1 5589 55488 55</p>
              <p className="contact-text"><strong>Email:</strong> info@example.com</p>
            </div>
          </div>

          {/* Examination Contact Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.examinationContactTitle}</h3>
            <div className="column-divider"></div>
            <div className="exam-section">
              <p className="exam-text">{language === 'en' ? 'For Examination related any inquiry please contact to the following :' : 'परीक्षा संबंधित किसी भी जांच के लिए कृपया निम्नलिखित से संपर्क करें :'}</p>
              <p className="exam-label">{currentContent.examControllerLabel}</p>
              <p className="exam-detail">{currentContent.examControllerEmail}</p>
              <p className="exam-label" style={{marginTop: '15px'}}>{currentContent.deputyExamLabel}</p>
              <p className="exam-label" style={{marginTop: '15px'}}>{currentContent.baLabel}</p>
              <p className="exam-detail">{currentContent.aeLabel}</p>
            </div>
          </div>

          {/* Academic Links Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.academicLinksTitle}</h3>
            <div className="column-divider"></div>
            <ul className="footer-links">
              {currentContent.academicLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" onClick={(e) => handleLinkClick(e, link)} className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Overview Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.overviewTitle}</h3>
            <div className="column-divider"></div>
            <ul className="footer-links">
              {currentContent.overviewLinks.map((link, index) => (
                <li key={index}>
                  {link === 'UGC e-Samadhan portal' ? (
                    <a href="https://samadhaan.ugc.ac.in/" target="_blank" rel="noopener noreferrer" className="footer-link">{link}</a>
                  ) : (
                    <a href="#" onClick={(e) => handleLinkClick(e, link)} className="footer-link">{link}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* University Links Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{currentContent.universityLinksTitle}</h3>
            <div className="column-divider"></div>
            <ul className="footer-links">
              {currentContent.universityLinks.map((link, index) => (
                <li key={index}>
                  {index === 2 ? (
                    <a href={actRegulationsPdf} target="_blank" rel="noopener noreferrer" className="footer-link">{link}</a>
                  ) : (
                    <a href="#" onClick={(e) => handleLinkClick(e, link)} className="footer-link">{link}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
