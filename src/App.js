import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
function App() {
    const [language, setLanguage] = useState('en');
    const [currentPage, setCurrentPage] = useState('home');
    const [history, setHistory] = useState([{ page: 'home', scrollY: 0 }]);
    const pendingScrollRestore = useRef(0);
    const restoreScrollPosition = (scrollY) => {
        window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
    };
    const handleNavigate = (page) => {
        const nextPage = page;
        const nextEntry = { page: nextPage, scrollY: 0 };
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
        }
        else {
            const homeEntry = { page: 'home', scrollY: 0 };
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
        const handlePopState = (event) => {
            if (event.state?.page) {
                const restoredEntry = {
                    page: event.state.page,
                    scrollY: event.state.scrollY ?? 0
                };
                pendingScrollRestore.current = restoredEntry.scrollY;
                setCurrentPage(restoredEntry.page);
                setHistory((previousHistory) => {
                    const updatedHistory = previousHistory.slice(0, -1);
                    return updatedHistory.length ? updatedHistory : [restoredEntry];
                });
            }
            else {
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
    const departmentPageNames = {
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
    return (_jsxs("div", { className: "App", children: [currentPage !== 'home' && (_jsx("button", { type: "button", className: "global-back-button", onClick: handleGoBack, "aria-label": "Go back to previous page", children: "Back" })), _jsxs("div", { className: "language-switcher", children: [_jsx("button", { onClick: () => setLanguage('en'), className: language === 'en' ? 'active' : '', children: "EN" }), _jsx("button", { onClick: () => setLanguage('hi'), className: language === 'hi' ? 'active' : '', children: "HI" })] }), currentPage === 'home' && _jsx(UniversityHomepage, { language: language, setCurrentPage: handleNavigate }), currentPage === 'admission' && _jsx(Admission, { language: language, setCurrentPage: handleNavigate, onBack: handleGoBack }), currentPage === 'administration' && _jsx(Administration, { language: language }), currentPage === 'about' && _jsx(AboutUs, { language: language, setCurrentPage: handleNavigate, onBack: handleGoBack }), currentPage === 'sports' && _jsx(Sports, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'cultural' && _jsx(Cultural, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'academics' && _jsx(Academics, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'up-state-universities-act' && _jsx(UPStateUniversitiesAct, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'rti-act' && _jsx(RTIAct, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'iqac' && _jsx(IQACPage, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'startup-cell' && _jsx(StartupCell, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'it-policy' && _jsx(ITPolicy, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'ipr-policy' && _jsx(IPRPolicy, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'phd-dlitt' && _jsx(PhDPage, { language: language, onBack: handleGoBack, onHome: () => handleNavigate('home') }), currentPage === 'science-staff' && _jsx(ScienceStaff, { language: language, onBack: handleGoBack }), currentPage === 'arts-staff' && _jsx(ArtsStaff, { language: language, onBack: handleGoBack }), currentPage === 'commerce-staff' && _jsx(CommerceStaff, { language: language, onBack: handleGoBack }), currentPage === 'photo-gallery' && _jsx(PhotoGallery, { language: language, onBack: handleGoBack }), currentPage === 'news-gallery' && _jsx(NewsGallery, { language: language, onBack: handleGoBack }), currentPage === 'campus-sports-gallery' && _jsx(CampusSportsGallery, { language: language, onBack: handleGoBack }), currentPage === 'conference-seminar' && _jsx(ConferenceSeminar, { language: language, onBack: handleGoBack }), currentPage === 'centre-excellence' && _jsx(CentreOfExcellence, { language: language, onBack: handleGoBack }), currentPage === 'ncc' && _jsx(NCC, { language: language, onBack: handleGoBack }), currentPage === 'events-sports' && _jsx(EventsSports, { language: language, onBack: handleGoBack }), currentPage === 'moues' && _jsx(MOUs, { language: language, onBack: handleGoBack }), currentPage === 'centre-excellence-page' && _jsx(CentreOfExcellencePage, { language: language, onBack: handleGoBack }), currentPage === 'research-development' && _jsx(ResearchDevelopmentPage, { language: language, onBack: handleGoBack }), currentPage === 'faculty-development' && _jsx(FacultyDevelopmentPage, { language: language, onBack: handleGoBack }), currentPage === 'conference-seminar-workshop' && _jsx(ConferenceSeminarWorkshopPage, { language: language, onBack: handleGoBack }), currentPage === 'science-journal' && _jsx(ScienceJournal, { language: language, onBack: handleGoBack }), currentPage === 'commerce-journal' && _jsx(CommerceJournal, { language: language, onBack: handleGoBack }), currentPage === 'art-journal' && _jsx(ArtJournal, { language: language, onBack: handleGoBack }), currentPage === 'anti-ragging' && _jsx(AntiRagging, { language: language, onBack: handleGoBack }), currentPage === 'hostel-registration' && _jsx(HostelRegistration, { language: language, onBack: handleGoBack }), currentPage === 'campus-fee-payment' && _jsx(CampusFeePayment, { language: language, onBack: handleGoBack }), currentPage === 'student-council' && _jsx(StudentCouncil, { language: language, onBack: handleGoBack }), currentPage === 'student-handbook' && _jsx(StudentHandbook, { language: language, onBack: handleGoBack }), currentPage === 'student-feedback-form' && _jsx(StudentFeedbackForm, { language: language, onBack: handleGoBack }), currentPage === 'student-help-desk' && _jsx(StudentHelpDesk, { language: language, onBack: handleGoBack }), currentPage === 'women-cell' && _jsx(WomenCell, { language: language, onBack: handleGoBack }), currentPage === 'document-verification' && _jsx(DocumentVerification, { language: language, onBack: handleGoBack }), currentPage === 'university-campus' && _jsx(UniversityCampus, { language: language, onBack: handleGoBack }), currentPage === 'pandit-lalit-college' && _jsx(PanditLalitMohanSharmaCollege, { language: language, onBack: handleGoBack, setCurrentPage: handleNavigate }), departmentPageNames[currentPage] && (_jsx(DepartmentSecondaryPage, { language: language, onBack: handleGoBack, departmentName: departmentPageNames[currentPage], setCurrentPage: handleNavigate })), currentPage === 'teacher-profile' && _jsx(TeacherProfile, { language: language, onBack: handleGoBack }), currentPage === 'govt-pg-college' && _jsx(GovernmentPostGraduateCollege, { language: language, onBack: handleGoBack }), currentPage === 'affiliated-colleges' && _jsx(UniversityAffiliatedColleges, { language: language, onBack: handleGoBack }), currentPage === 'govt-colleges' && _jsx(GovernmentColleges, { language: language, onBack: handleGoBack }), currentPage === 'aided-colleges' && _jsx(AidedColleges, { language: language, onBack: handleGoBack }), currentPage === 'private-colleges' && _jsx(PrivateColleges, { language: language, onBack: handleGoBack }), currentPage === 'college-affiliation-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "College Affiliation Portal", pdfUrl: "/img/ppf/SRI%20DEV%20SUMAN%20UTTARAKHAND%20UNIVERSITY%2C%20BADSHAHITHOL%2C%20TEHRI20250216-.pdf" }), currentPage === 'ordinance-curriculum-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "Ordinance & Curriculum Framework - 2025", pdfUrl: "/img/ppf/ordinance2025.pdf" }), currentPage === 'scholarship-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: language === 'en' ? 'Scholarship' : 'छात्रवृत्ति', pdfUrl: "/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" }), currentPage === 'convocation-medal-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "6th Convocation Gold Medal List", pdfUrl: "/img/ppf/CHATRASANG.pdf" }), currentPage === 'phd-merit-list-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "Ph.D. Entrance Exam Second Counselling Merit List", pdfUrl: "/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" }), currentPage === 'nirf-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "NIRF", pdfUrl: "/img/ppf/NIRF.pdf" }), currentPage === 'academic-calendar-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "Academic Calendar for Session 2025-2026", pdfUrl: "/img/ppf/ACADEMIC%20CALENDER.pdf" }), currentPage === 'helpline-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "Helpline Information", pdfUrl: "/img/ppf/ordinance2025.pdf" }), currentPage === 'phd-notification-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "Ph.D. Notification and List - 2025", pdfUrl: "/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" }), currentPage === 'exam-date-sheet-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "Exam Date Sheet 2025-2026", pdfUrl: "/img/ppf/ACADEMIC%20CALENDER.pdf" }), currentPage === 'convocation-quotation-pdf' && _jsx(PDFViewer, { language: language, onBack: handleGoBack, title: "Quotation for Convocation", pdfUrl: "/img/ppf/CHATRASANG.pdf" }), currentPage === 'university-film-pdf' && _jsx(VideoViewer, { language: language, onBack: handleGoBack, title: "University Short Film", youtubeUrl: "https://youtu.be/MrnVpih6Sq0?si=G70rytvIdSsDsgGG" }), currentPage === 'convocation' && _jsx(Convocation, {}), currentPage === 'college-affiliation' && _jsx(CollegeAffiliationPage, { language: language, onBack: handleGoBack }), currentPage === 'scholarship' && _jsx(ScholarshipPage, { language: language, onBack: handleGoBack }), currentPage === 'academic-calendar' && _jsx(AcademicCalendarPage, { language: language, onBack: handleGoBack }), currentPage === 'exam-sheet' && _jsx(ExamDateSheetPage, { language: language, onBack: handleGoBack }), currentPage === 'all-news' && _jsx(AllNewsPage, { language: language, onBack: handleGoBack }), currentPage === 'student-corner' && _jsx(StudentCorner, {}), currentPage === 'tenders-notification' && _jsx(TendersNotification, {}), currentPage === 'courses-offered' && _jsx(CoursesOffered, {}), currentPage === 'recruitments' && _jsx(Recruitments, {}), currentPage === 'affiliation-affiliated-colleges' && _jsx(AffiliationAffiliatedColleges, {}), currentPage === 'old-syllabus' && _jsx(OldSyllabus, {}), currentPage === 'examination' && _jsx(Examination, {}), currentPage === 'results' && _jsx(Results, {}), currentPage === 'notification' && _jsx(Notification, {}), currentPage === 'lecturer-series' && _jsx(LecturerSeries, {}), currentPage === 'awards-scholarships' && _jsx(AwardsScholarships, {}), currentPage === 'career' && _jsx(Career, {}), currentPage === 'downloads' && _jsx(Downloads, {}), currentPage === 'fti' && _jsx(FTI, {}), currentPage === 'announcements' && _jsx(Announcements, {}), currentPage === 'ugc-esamadhan-portal' && _jsx(UGCESamadhanPortal, {}), currentPage === 'from-vc-desk' && _jsx(FromVCDesk, {}), currentPage === 'affiliated-college' && _jsx(AffiliatedCollege, {}), currentPage === 'act-regulations' && _jsx(ActRegulations, {}), currentPage === 'alumni' && _jsx(Alumni, {}), currentPage === 'exam-schedules' && _jsx(ExamSchedules, {}), currentPage === 'vacancy-positions' && _jsx(VacancyPositions, {})] }));
}
export default App;
//# sourceMappingURL=App.js.map