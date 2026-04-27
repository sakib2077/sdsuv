import React, { useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import UniversityHomepage from './components/UniversityHomepage';
import Admission from './components/Admission';
import Administration from './components/Administration';
import AboutUs from './components/AboutUs';
import Sports from './components/Sports';
import Cultural from './components/Cultural';
import Academics from './components/Academics';
import UPStateUniversitiesAct from './components/UPStateUniversitiesAct';
import RTIAct from './components/RTIAct';
import IQACPage from './components/IQACPage';
import StartupCell from './components/StartupCell';
import ITPolicy from './components/ITPolicy';
import IPRPolicy from './components/IPRPolicy';
import PhDPage from './components/PhDPage';
import ScienceStaff from './components/ScienceStaff';
import ArtsStaff from './components/ArtsStaff';
import CommerceStaff from './components/CommerceStaff';
import PhotoGallery from './components/PhotoGallery';
import NewsGallery from './components/NewsGallery';
import CampusSportsGallery from './components/CampusSportsGallery';
import ConferenceSeminar from './components/ConferenceSeminar';
import CentreOfExcellence from './components/CentreOfExcellence';
import CentreOfExcellencePage from './components/CentreOfExcellencePage';
import ResearchDevelopmentPage from './components/ResearchDevelopmentPage';
import FacultyDevelopmentPage from './components/FacultyDevelopmentPage';
import ConferenceSeminarWorkshopPage from './components/ConferenceSeminarWorkshopPage';
import PDFViewer from './components/PDFViewer';
import VideoViewer from './components/VideoViewer';
import CollegeAffiliationPage from './components/CollegeAffiliationPage';
import ScholarshipPage from './components/ScholarshipPage';
import AcademicCalendarPage from './components/AcademicCalendarPage';
import ExamDateSheetPage from './components/ExamDateSheetPage';
import AllNewsPage from './components/AllNewsPage';
import NCC from './components/NCC';
import EventsSports from './components/EventsSports';
import MOUs from './components/MOUs';
import ScienceJournal from './components/ScienceJournal';
import CommerceJournal from './components/CommerceJournal';
import ArtJournal from './components/ArtJournal';
import AntiRagging from './components/AntiRagging';
import HostelRegistration from './components/HostelRegistration';
import CampusFeePayment from './components/CampusFeePayment';
import StudentCouncil from './components/StudentCouncil';
import StudentHandbook from './components/StudentHandbook';
import StudentFeedbackForm from './components/StudentFeedbackForm';
import StudentHelpDesk from './components/StudentHelpDesk';
import WomenCell from './components/WomenCell';
import DocumentVerification from './components/DocumentVerification';
import UniversityCampus from './components/UniversityCampus';
import PanditLalitMohanSharmaCollege from './components/PanditLalitMohanSharmaCollege';
import GovernmentPostGraduateCollege from './components/GovernmentPostGraduateCollege';
import UniversityAffiliatedColleges from './components/UniversityAffiliatedColleges';
import GovernmentColleges from './components/GovernmentColleges';
import AidedColleges from './components/AidedColleges';
import PrivateColleges from './components/PrivateColleges';
import Convocation from './components/Convocation';
import StudentCorner from './components/StudentCorner';
import TendersNotification from './components/TendersNotification';
import CoursesOffered from './components/CoursesOffered';
import Recruitments from './components/Recruitments';
import AffiliationAffiliatedColleges from './components/AffiliationAffiliatedColleges';
import OldSyllabus from './components/OldSyllabus';
import Examination from './components/Examination';
import Results from './components/Results';
import Notification from './components/Notification';
import LecturerSeries from './components/LecturerSeries';
import AwardsScholarships from './components/AwardsScholarships';
import Career from './components/Career';
import Downloads from './components/Downloads';
import FTI from './components/FTI';
import Announcements from './components/Announcements';
import UGCESamadhanPortal from './components/UGCESamadhanPortal';
import FromVCDesk from './components/FromVCDesk';
import AffiliatedCollege from './components/AffiliatedCollege';
import ActRegulations from './components/ActRegulations';
import Alumni from './components/Alumni';
import ExamSchedules from './components/ExamSchedules';
import VacancyPositions from './components/VacancyPositions';
import DepartmentSecondaryPage from './components/DepartmentSecondaryPage';
import TeacherProfile from './components/TeacherProfile';

type PageType = 'home' | 'admission' | 'administration' | 'about' | 'sports' | 'cultural' | 'academics' | 'up-state-universities-act' | 'rti-act' | 'iqac' | 'startup-cell' | 'it-policy' | 'ipr-policy' | 'phd-dlitt' | 'science-staff' | 'arts-staff' | 'commerce-staff' | 'photo-gallery' | 'news-gallery' | 'conference-seminar' | 'centre-excellence' | 'ncc' | 'events-sports' | 'moues' | 'science-journal' | 'commerce-journal' | 'art-journal' | 'anti-ragging' | 'hostel-registration' | 'campus-fee-payment' | 'student-council' | 'student-handbook' | 'student-feedback-form' | 'student-help-desk' | 'women-cell' | 'document-verification' | 'university-campus' | 'pandit-lalit-college' | 'govt-pg-college' | 'affiliated-colleges' | 'govt-colleges' | 'aided-colleges' | 'private-colleges' | 'campus-sports-gallery' | 'centre-excellence-page' | 'research-development' | 'faculty-development' | 'conference-seminar-workshop' | 'college-affiliation-pdf' | 'ordinance-curriculum-pdf' | 'scholarship-pdf' | 'convocation-medal-pdf' | 'phd-merit-list-pdf' | 'nirf-pdf' | 'academic-calendar-pdf' | 'helpline-pdf' | 'phd-notification-pdf' | 'exam-date-sheet-pdf' | 'convocation-quotation-pdf' | 'university-film-pdf' | 'college-affiliation' | 'scholarship' | 'academic-calendar' | 'exam-sheet' | 'all-news' | 'convocation' | 'student-corner' | 'tenders-notification' | 'courses-offered' | 'recruitments' | 'affiliation-affiliated-colleges' | 'old-syllabus' | 'examination' | 'results' | 'notification' | 'lecturer-series' | 'awards-scholarships' | 'career' | 'downloads' | 'fti' | 'announcements' | 'ugc-esamadhan-portal' | 'from-vc-desk' | 'affiliated-college' | 'act-regulations' | 'alumni' | 'exam-schedules' | 'vacancy-positions' | 'teacher-profile';

type NavigationEntry = {
  page: PageType;
  scrollY: number;
};

function App() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [history, setHistory] = useState<NavigationEntry[]>([{ page: 'home', scrollY: 0 }]);
  const pendingScrollRestore = useRef<number | null>(0);

  const restoreScrollPosition = (scrollY: number) => {
    window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
  };

  const handleNavigate = (page: string) => {
    const nextPage = page as PageType;
    const nextEntry: NavigationEntry = { page: nextPage, scrollY: 0 };

    window.history.replaceState({ page: currentPage, scrollY: window.scrollY }, '');
    window.history.pushState(nextEntry, '');
    pendingScrollRestore.current = 0;
    setCurrentPage(nextPage);
    setHistory((previousHistory) => {
      const updatedHistory = [...previousHistory];
      const lastIndex = updatedHistory.length - 1;

      if (lastIndex >= 0) {
        updatedHistory[lastIndex] = {
          ...updatedHistory[lastIndex],
          scrollY: window.scrollY
        };
      }

      return [...updatedHistory, nextEntry];
    });
  };

  const handleGoBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      const previousEntry = newHistory[newHistory.length - 1];

      pendingScrollRestore.current = previousEntry.scrollY;
      setHistory(newHistory);
      setCurrentPage(previousEntry.page);
      window.history.replaceState(previousEntry, '');
    } else {
      const homeEntry: NavigationEntry = { page: 'home', scrollY: 0 };
      pendingScrollRestore.current = 0;
      setCurrentPage('home');
      setHistory([homeEntry]);
      window.history.replaceState(homeEntry, '');
    }
  };

  // Handle browser back button
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        const restoredEntry: NavigationEntry = {
          page: event.state.page,
          scrollY: event.state.scrollY ?? 0
        };

        pendingScrollRestore.current = restoredEntry.scrollY;
        setCurrentPage(restoredEntry.page);
        setHistory((previousHistory) => {
          const updatedHistory = previousHistory.slice(0, -1);
          return updatedHistory.length ? updatedHistory : [restoredEntry];
        });
      } else {
        pendingScrollRestore.current = 0;
        setCurrentPage('home');
        setHistory([{ page: 'home', scrollY: 0 }]);
      }
    };

    window.history.replaceState({ page: currentPage, scrollY: window.scrollY }, '');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // New pages start at the top; back navigation restores the old page position.
  useLayoutEffect(() => {
    const scrollY = pendingScrollRestore.current;
    pendingScrollRestore.current = null;
    restoreScrollPosition(scrollY ?? 0);
  }, [currentPage]);

  const departmentPageNames: Record<string, string> = {
    'dept-mathematics': 'Mathematics',
    'dept-microbiology': 'Microbiology',
    'dept-music': 'Music',
    'dept-physics': 'Physics',
    'dept-political-science': 'Political Science',
    'dept-sanskrit': 'Sanskrit',
    'dept-sociology': 'Sociology',
    'dept-zoology': 'Zoology',
    'dept-commerce-management': 'Commerce and Management',
    'dept-chemistry': 'Chemistry',
    'dept-economics': 'Economics',
    'dept-education': 'Education',
    'dept-english': 'English',
    'dept-geography': 'Geography',
    'dept-hindi': 'Hindi',
    'dept-history': 'History',
    'dept-home-science': 'Home Science',
    'dept-botany': 'Botany'
  };

  return (
    <div className="App">
      {currentPage !== 'home' && (
        <button
          type="button"
          className="global-back-button"
          onClick={handleGoBack}
          aria-label="Go back to previous page"
        >
          Back
        </button>
      )}
      <div className="language-switcher">
        <button
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active' : ''}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={language === 'hi' ? 'active' : ''}
        >
          HI
        </button>
      </div>
      {currentPage === 'home' && <UniversityHomepage language={language} setCurrentPage={handleNavigate} />}
      {currentPage === 'admission' && <Admission language={language} setCurrentPage={handleNavigate} onBack={handleGoBack} />}
      {currentPage === 'administration' && <Administration language={language} />}
      {currentPage === 'about' && <AboutUs language={language} setCurrentPage={handleNavigate} onBack={handleGoBack} />}
      {currentPage === 'sports' && <Sports language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'cultural' && <Cultural language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'academics' && <Academics language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'up-state-universities-act' && <UPStateUniversitiesAct language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'rti-act' && <RTIAct language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'iqac' && <IQACPage language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'startup-cell' && <StartupCell language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'it-policy' && <ITPolicy language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'ipr-policy' && <IPRPolicy language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'phd-dlitt' && <PhDPage language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'science-staff' && <ScienceStaff language={language} onBack={handleGoBack} />}
      {currentPage === 'arts-staff' && <ArtsStaff language={language} onBack={handleGoBack} />}
      {currentPage === 'commerce-staff' && <CommerceStaff language={language} onBack={handleGoBack} />}
      {currentPage === 'photo-gallery' && <PhotoGallery language={language} onBack={handleGoBack} />}
      {currentPage === 'news-gallery' && <NewsGallery language={language} onBack={handleGoBack} />}
      {currentPage === 'campus-sports-gallery' && <CampusSportsGallery language={language} onBack={handleGoBack} />}
      {currentPage === 'conference-seminar' && <ConferenceSeminar language={language} onBack={handleGoBack} />}
      {currentPage === 'centre-excellence' && <CentreOfExcellence language={language} onBack={handleGoBack} />}
      {currentPage === 'ncc' && <NCC language={language} onBack={handleGoBack} />}
      {currentPage === 'events-sports' && <EventsSports language={language} onBack={handleGoBack} />}
      {currentPage === 'moues' && <MOUs language={language} onBack={handleGoBack} />}
      {currentPage === 'centre-excellence-page' && <CentreOfExcellencePage language={language} onBack={handleGoBack} />}
      {currentPage === 'research-development' && <ResearchDevelopmentPage language={language} onBack={handleGoBack} />}
      {currentPage === 'faculty-development' && <FacultyDevelopmentPage language={language} onBack={handleGoBack} />}
      {currentPage === 'conference-seminar-workshop' && <ConferenceSeminarWorkshopPage language={language} onBack={handleGoBack} />}
      {currentPage === 'science-journal' && <ScienceJournal language={language} onBack={handleGoBack} />}
      {currentPage === 'commerce-journal' && <CommerceJournal language={language} onBack={handleGoBack} />}
      {currentPage === 'art-journal' && <ArtJournal language={language} onBack={handleGoBack} />}
      {currentPage === 'anti-ragging' && <AntiRagging language={language} onBack={handleGoBack} />}
      {currentPage === 'hostel-registration' && <HostelRegistration language={language} onBack={handleGoBack} />}
      {currentPage === 'campus-fee-payment' && <CampusFeePayment language={language} onBack={handleGoBack} />}
      {currentPage === 'student-council' && <StudentCouncil language={language} onBack={handleGoBack} />}
      {currentPage === 'student-handbook' && <StudentHandbook language={language} onBack={handleGoBack} />}
      {currentPage === 'student-feedback-form' && <StudentFeedbackForm language={language} onBack={handleGoBack} />}
      {currentPage === 'student-help-desk' && <StudentHelpDesk language={language} onBack={handleGoBack} />}
      {currentPage === 'women-cell' && <WomenCell language={language} onBack={handleGoBack} />}
      {currentPage === 'document-verification' && <DocumentVerification language={language} onBack={handleGoBack} />}
      {currentPage === 'university-campus' && <UniversityCampus language={language} onBack={handleGoBack} />}
      {currentPage === 'pandit-lalit-college' && <PanditLalitMohanSharmaCollege language={language} onBack={handleGoBack} setCurrentPage={handleNavigate} />}
      {departmentPageNames[currentPage as string] && (
        <DepartmentSecondaryPage
          language={language}
          onBack={handleGoBack}
          departmentName={departmentPageNames[currentPage as string]}
          setCurrentPage={handleNavigate}
        />
      )}
      {currentPage === 'teacher-profile' && <TeacherProfile language={language} onBack={handleGoBack} />}
      {currentPage === 'govt-pg-college' && <GovernmentPostGraduateCollege language={language} onBack={handleGoBack} />}
      {currentPage === 'affiliated-colleges' && <UniversityAffiliatedColleges language={language} onBack={handleGoBack} />}
      {currentPage === 'govt-colleges' && <GovernmentColleges language={language} onBack={handleGoBack} />}
      {currentPage === 'aided-colleges' && <AidedColleges language={language} onBack={handleGoBack} />}
      {currentPage === 'private-colleges' && <PrivateColleges language={language} onBack={handleGoBack} />}
      {currentPage === 'college-affiliation-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="College Affiliation Portal" pdfUrl="/img/ppf/SRI%20DEV%20SUMAN%20UTTARAKHAND%20UNIVERSITY%2C%20BADSHAHITHOL%2C%20TEHRI20250216-.pdf" />}
      {currentPage === 'ordinance-curriculum-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Ordinance & Curriculum Framework - 2025" pdfUrl="/img/ppf/ordinance2025.pdf" />}
      {currentPage === 'scholarship-pdf' && <PDFViewer language={language} onBack={handleGoBack} title={language === 'en' ? 'Scholarship' : 'छात्रवृत्ति'} pdfUrl="/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" />}
      {currentPage === 'convocation-medal-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="6th Convocation Gold Medal List" pdfUrl="/img/ppf/CHATRASANG.pdf" />}
      {currentPage === 'phd-merit-list-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Ph.D. Entrance Exam Second Counselling Merit List" pdfUrl="/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" />}
      {currentPage === 'nirf-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="NIRF" pdfUrl="/img/ppf/NIRF.pdf" />}
      {currentPage === 'academic-calendar-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Academic Calendar for Session 2025-2026" pdfUrl="/img/ppf/ACADEMIC%20CALENDER.pdf" />}
      {currentPage === 'helpline-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Helpline Information" pdfUrl="/img/ppf/ordinance2025.pdf" />}
      {currentPage === 'phd-notification-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Ph.D. Notification and List - 2025" pdfUrl="/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" />}
      {currentPage === 'exam-date-sheet-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Exam Date Sheet 2025-2026" pdfUrl="/img/ppf/ACADEMIC%20CALENDER.pdf" />}
      {currentPage === 'convocation-quotation-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Quotation for Convocation" pdfUrl="/img/ppf/CHATRASANG.pdf" />}
      {currentPage === 'university-film-pdf' && <VideoViewer language={language} onBack={handleGoBack} title="University Short Film" youtubeUrl="https://youtu.be/MrnVpih6Sq0?si=G70rytvIdSsDsgGG" />}
      {currentPage === 'convocation' && <Convocation />}
      {currentPage === 'college-affiliation' && <CollegeAffiliationPage language={language} onBack={handleGoBack} />}
      {currentPage === 'scholarship' && <ScholarshipPage language={language} onBack={handleGoBack} />}
      {currentPage === 'academic-calendar' && <AcademicCalendarPage language={language} onBack={handleGoBack} />}
      {currentPage === 'exam-sheet' && <ExamDateSheetPage language={language} onBack={handleGoBack} />}
      {currentPage === 'all-news' && <AllNewsPage language={language} onBack={handleGoBack} />}
      {currentPage === 'student-corner' && <StudentCorner />}
      {currentPage === 'tenders-notification' && <TendersNotification />}
      {currentPage === 'courses-offered' && <CoursesOffered />}
      {currentPage === 'recruitments' && <Recruitments />}
      {currentPage === 'affiliation-affiliated-colleges' && <AffiliationAffiliatedColleges />}
      {currentPage === 'old-syllabus' && <OldSyllabus />}
      {currentPage === 'examination' && <Examination />}
      {currentPage === 'results' && <Results />}
      {currentPage === 'notification' && <Notification />}
      {currentPage === 'lecturer-series' && <LecturerSeries />}
      {currentPage === 'awards-scholarships' && <AwardsScholarships />}
      {currentPage === 'career' && <Career />}
      {currentPage === 'downloads' && <Downloads />}
      {currentPage === 'fti' && <FTI />}
      {currentPage === 'announcements' && <Announcements />}
      {currentPage === 'ugc-esamadhan-portal' && <UGCESamadhanPortal />}
      {currentPage === 'from-vc-desk' && <FromVCDesk />}
      {currentPage === 'affiliated-college' && <AffiliatedCollege />}
      {currentPage === 'act-regulations' && <ActRegulations />}
      {currentPage === 'alumni' && <Alumni />}
      {currentPage === 'exam-schedules' && <ExamSchedules />}
      {currentPage === 'vacancy-positions' && <VacancyPositions />}
    </div>
  );
}

export default App;
