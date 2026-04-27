import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/Announcements.css';
const announcementItems = [
    { id: 1, particulars: 'B.Ed ENTRANCE TEST-2013 ADMIT CARD (PROVISIONAL)' },
    { id: 2, particulars: 'Advertisement Notification for the posts, 2013' },
    { id: 3, particulars: 'Updated Program of B.Ed Entrance Exam 2013-14' },
    { id: 4, particulars: 'Updated Program of B.Ed Entrance Exam 2013-14' },
    { id: 5, particulars: 'Exam Shedules of Session 2012-13' }
];
const Announcements = () => {
    return (_jsxs("main", { className: "announcements-page", children: [_jsx("header", { className: "announcements-header", children: _jsxs("div", { className: "announcements-header-inner", children: [_jsx("h1", { children: "Announcements" }), _jsxs("nav", { "aria-label": "Breadcrumb", children: [_jsx("a", { href: "#", children: "HOME" }), _jsx("span", { "aria-hidden": "true", children: "\u25A1" }), _jsx("a", { href: "#", children: "ANNOUNCEMENTS" })] })] }) }), _jsxs("section", { className: "announcements-panel", "aria-labelledby": "announcements-title", children: [_jsx("div", { className: "announcements-titlebar", children: _jsx("h2", { id: "announcements-title", children: "Announcements" }) }), _jsx("div", { className: "announcements-table-scroll", children: _jsxs("table", { className: "announcements-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "Particulars" }), _jsx("th", { scope: "col", children: "Date" }), _jsx("th", { scope: "col", children: "Details" })] }) }), _jsx("tbody", { children: announcementItems.map((item) => (_jsxs("tr", { children: [_jsx("td", { className: "announcements-particulars", children: item.particulars }), _jsx("td", { className: "announcements-date" }), _jsx("td", { className: "announcements-details", children: _jsx("a", { className: "announcements-pdf-link", href: "#", "aria-label": `View PDF for ${item.particulars}`, title: "View PDF", children: _jsx("span", { className: "announcements-pdf-icon", "aria-hidden": "true", children: "PDF" }) }) })] }, item.id))) })] }) })] })] }));
};
export default Announcements;
//# sourceMappingURL=Announcements.js.map