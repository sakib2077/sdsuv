import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/AcademicCalendarPage.css';
const calendarLinks = [
    'Academic calendar 2022-23',
    'Academic calendar 2021-22',
    'Academic calendar 2020-21',
    'Academic calendar 2019-20',
    'Academic Calendar 2017-18',
    'Academic Calendar 2014',
];
const AcademicCalendarPage = ({ onBack }) => {
    return (_jsxs("div", { className: "academic-calendar-page", children: [_jsx("header", { className: "academic-calendar-topbar", children: _jsxs("div", { className: "academic-calendar-topbar-inner", children: [_jsx("h1", { children: "Academic Calendar" }), _jsxs("nav", { className: "academic-calendar-breadcrumb", "aria-label": "Academic calendar navigation", children: [_jsx("button", { type: "button", onClick: onBack, children: "HOME" }), _jsx("span", { "aria-hidden": "true" }), _jsx("strong", { children: "ACADEMIC CALENDAR" })] })] }) }), _jsx("main", { className: "academic-calendar-content", children: _jsxs("section", { className: "academic-calendar-panel", "aria-labelledby": "academic-calendar-heading", children: [_jsx("h2", { id: "academic-calendar-heading", children: "Academic Calendar" }), _jsx("ul", { children: calendarLinks.map((link) => (_jsx("li", { children: _jsx("a", { href: "#", children: link }) }, link))) })] }) })] }));
};
export default AcademicCalendarPage;
//# sourceMappingURL=AcademicCalendarPage.js.map