import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/PanditLalitMohanSharmaCollege.css';
const PanditLalitMohanSharmaCollege = ({ language, onBack, setCurrentPage }) => {
    const content = {
        en: {
            title: 'Pandit Lalit Mohan Sharma Government PG College',
            subtitle: 'College Profile',
            aboutTitle: 'About The College',
            aboutText: 'Pandit Lalit Mohan Sharma Government PG College is an important institution under Sri Dev Suman Uttarakhand University. The college supports quality teaching, academic discipline, student mentoring, and higher education growth in the Garhwal region.',
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
            aboutText: 'Pandit Lalit Mohan Sharma Government PG College is an important institution under Sri Dev Suman Uttarakhand University. The college supports quality teaching, academic discipline, student mentoring, and higher education growth in the Garhwal region.',
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
    const departmentPageMap = {
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
    const handleOpenDepartmentProfile = (department) => {
        const targetPage = departmentPageMap[department];
        if (targetPage && setCurrentPage) {
            setCurrentPage(targetPage);
        }
    };
    return (_jsxs("div", { className: "pandit-lalit-college-page", children: [_jsxs("div", { className: "pandit-lalit-college-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: language === 'en' ? 'Back' : 'Back' }), _jsx("h1", { children: data.title })] }), _jsxs("div", { className: "pandit-lalit-college-container", children: [_jsxs("section", { className: "pandit-lalit-college-about", children: [_jsx("h2", { children: data.aboutTitle }), _jsx("p", { children: data.aboutText }), _jsx("div", { className: "pandit-lalit-college-highlights", children: data.aboutHighlights.map((item, index) => (_jsxs("div", { className: "pandit-lalit-college-highlight-item", children: [_jsx("span", { className: "highlight-dot", children: "*" }), _jsx("span", { children: item })] }, index))) })] }), _jsxs("section", { className: "pandit-lalit-college-departments", children: [_jsx("h2", { children: data.departmentsTitle }), _jsx("p", { className: "pandit-lalit-college-departments-help", children: data.departmentsHelpText }), _jsx("div", { className: "pandit-lalit-college-departments-grid", children: data.departments.map((department, index) => (_jsx("button", { type: "button", className: "pandit-lalit-college-department-card", onClick: () => handleOpenDepartmentProfile(department), children: department }, index))) })] }), _jsx("p", { className: "pandit-lalit-college-note", children: data.note })] })] }));
};
export default PanditLalitMohanSharmaCollege;
//# sourceMappingURL=PanditLalitMohanSharmaCollege.js.map