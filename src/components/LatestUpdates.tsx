import React from 'react';
import '../styles/LatestUpdates.css';

interface LatestUpdatesProps {
  language: 'en' | 'hi';
  onViewMore?: () => void;
}

const LatestUpdates: React.FC<LatestUpdatesProps> = ({ language, onViewMore }) => {
  const content = {
    en: {
      title: 'Latest News',
      subtitle: 'Stay informed with our recent announcements',
      news: [
        {
          date: 'JANUARY 5, 2026',
          label: 'ANNOUNCEMENT',
          newsTitle: 'Pre-Bid Meeting for Book Purchase',
          newsContent: 'Meeting scheduled for January 5, 2026 at 11:00 AM at the university headquarters. All participants are required to attend'
        },
        {
          date: 'JANUARY 10, 2026',
          label: 'EVENT',
          newsTitle: 'Spring Semester Starts',
          newsContent: 'Welcome to the Spring 2026 semester! All students are requested to report to their respective departments by 9:00 AM. Orientation will commence immediately.'
        },
        {
          date: 'JANUARY 12, 2026',
          label: 'NOTICE',
          newsTitle: 'Library Renovation Update',
          newsContent: 'The main library renovation is progressing as scheduled. Phase 2 will be completed by end of January. Students can access the temporary reading room on Floor 2.'
        },
        {
          date: 'JANUARY 15, 2026',
          label: 'ANNOUNCEMENT',
          newsTitle: 'Research Grant Applications Open',
          newsContent: 'The university is inviting applications for the new research grants program. Deadline for submissions is February 28, 2026. Visit the research office for details.'
        },
        {
          date: 'JANUARY 18, 2026',
          label: 'UPDATE',
          newsTitle: 'New Courses Added for 2026-27',
          newsContent: 'We are excited to announce the addition of 5 new specialized courses for the academic year 2026-27. Register now to secure your spot.'
        },
        {
          date: 'JANUARY 20, 2026',
          label: 'ANNOUNCEMENT',
          newsTitle: 'Document Verification Guidelines',
          newsContent: 'All candidates must submit properly verified documents. Check our guidelines for the complete list of required documents and verification process.'
        },
        {
          date: 'JANUARY 22, 2026',
          label: 'EVENT',
          newsTitle: 'Scholarship Opportunities Available',
          newsContent: 'Merit-based scholarships worth up to 50% of annual fees are available for eligible candidates. Apply now to avail benefits.'
        },
        {
          date: 'JANUARY 25, 2026',
          label: 'NOTICE',
          newsTitle: 'Campus Tour Virtual Sessions',
          newsContent: 'Join our virtual campus tours every Thursday at 3 PM to explore our facilities and meet our faculty members. Register today!'
        },
        {
          date: 'JANUARY 28, 2026',
          label: 'ANNOUNCEMENT',
          newsTitle: 'Hostel Registration Portal Launched',
          newsContent: 'Students interested in hostel accommodation can now register through our online portal. Limited seats available, register quickly.'
        }
      ]
    },
    hi: {
      title: 'नवीनतम समाचार',
      subtitle: 'हमारी हाल की घोषणाओं के साथ सूचित रहें',
      news: [
        {
          date: '5 जनवरी, 2026',
          label: 'घोषणा',
          newsTitle: 'पुस्तक खरीद के लिए प्री-बिड मीटिंग',
          newsContent: '5 जनवरी, 2026 को सुबह 11:00 बजे विश्वविद्यालय मुख्यालय में बैठक का आयोजन किया जाएगा। सभी प्रतिभागियों के लिए उपस्थित होना आवश्यक है'
        },
        {
          date: '10 जनवरी, 2026',
          label: 'कार्यक्रम',
          newsTitle: 'वसंत सेमेस्टर शुरू होता है',
          newsContent: 'वसंत 2026 सेमेस्टर में आपका स्वागत है! सभी छात्रों से अनुरोध है कि 9:00 बजे अपने संबंधित विभागों में रिपोर्ट करें। अभिविन्यास तुरंत शुरू होगा।'
        },
        {
          date: '12 जनवरी, 2026',
          label: 'सूचना',
          newsTitle: 'पुस्तकालय नवीकरण अपडेट',
          newsContent: 'मुख्य पुस्तकालय नवीकरण अनुसूची के अनुसार आगे बढ़ रहा है। चरण 2 जनवरी के अंत तक पूरा हो जाएगा। छात्र मंजिल 2 पर अस्थायी पढ़ने के कमरे का उपयोग कर सकते हैं।'
        },
        {
          date: '15 जनवरी, 2026',
          label: 'घोषणा',
          newsTitle: 'अनुसंधान अनुदान आवेदन खुले',
          newsContent: 'विश्वविद्यालय नई अनुसंधान अनुदान कार्यक्रम के लिए आवेदन आमंत्रित कर रहा है। जमा करने की समय सीमा 28 फरवरी, 2026 है। विवरण के लिए अनुसंधान कार्यालय देखें।'
        },
        {
          date: '18 जनवरी, 2026',
          label: 'अपडेट',
          newsTitle: '2026-27 के लिए नए पाठ्यक्रम जोड़े गए',
          newsContent: 'हम शैक्षणिक वर्ष 2026-27 के लिए 5 नए विशेष पाठ्यक्रमों को जोड़ने की घोषणा करते हैं। अभी पंजीकरण करें।'
        },
        {
          date: '20 जनवरी, 2026',
          label: 'घोषणा',
          newsTitle: 'दस्तावेज सत्यापन दिशानिर्देश',
          newsContent: 'सभी उम्मीदवारों को सही तरीके से सत्यापित दस्तावेज जमा करने चाहिए। आवश्यक दस्तावेजों की पूरी सूची देखें।'
        },
        {
          date: '22 जनवरी, 2026',
          label: 'कार्यक्रम',
          newsTitle: 'छात्रवृत्ति के अवसर उपलब्ध',
          newsContent: 'योग्य उम्मीदवारों के लिए वार्षिक शुल्क का 50% तक की योग्यता-आधारित छात्रवृत्तियाँ उपलब्ध हैं।'
        },
        {
          date: '25 जनवरी, 2026',
          label: 'सूचना',
          newsTitle: 'कैंपस टूर वर्चुअल सत्र',
          newsContent: 'हर गुरुवार दोपहर 3 बजे हमारे वर्चुअल कैंपस टूर में शामिल हों और हमारी सुविधाएं देखें।'
        },
        {
          date: '28 जनवरी, 2026',
          label: 'घोषणा',
          newsTitle: 'छात्रावास पंजीकरण पोर्टल लॉन्च',
          newsContent: 'छात्रावास आवास में रुचि रखने वाले छात्र अब हमारे ऑनलाइन पोर्टल के माध्यम से पंजीकरण कर सकते हैं।'
        }
      ]
    }
  };

  const data = content[language];

  return (
    <section className="latest-updates">
      <div className="updates-header">
        <h3 className="updates-title">{data.title}</h3>
        <p className="updates-subtitle">{data.subtitle}</p>
      </div>
      <div className="announcement-cards-container">
        {data.news.map((newsItem, index) => (
          <div key={index} className="announcement-card">
            <div className="card-meta">
              <span className="date">{newsItem.date}</span>
              <span className="label">{newsItem.label}</span>
            </div>
            <h4 className="card-title">{newsItem.newsTitle}</h4>
            <p className="card-content">{newsItem.newsContent}</p>
          </div>
        ))}
      </div>
      {onViewMore && (
        <div className="view-more-container">
          <button className="view-more-btn" onClick={onViewMore}>
            {language === 'en' ? 'View All News' : 'सभी समाचार देखें'}
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestUpdates;
