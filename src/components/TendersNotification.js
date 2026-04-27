import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/TendersNotification.css';
const pageOneTenders = [
    {
        id: 1,
        particulars: 'Geology (भूगर्भ विज्ञान) की परीक्षा तिथि परिवर्तित की गई है',
        date: '11/05/2025'
    },
    {
        id: 2,
        particulars: 'मैनपावर की आपूर्ति हेतु निविदा विज्ञप्ति विस्तारित किए जाने के संबंध में',
        date: '05/12/2023'
    },
    {
        id: 3,
        particulars: 'वाहन निविदा हेतु विज्ञप्ति',
        date: '21/11/2023'
    },
    {
        id: 4,
        particulars: 'मैन पावर की आपूर्ति हेतु निविदा विज्ञप्ति',
        date: '03/11/2023'
    },
    {
        id: 5,
        particulars: 'निविदा सूचना (अवार्ड सीट, लिफाफे, प्रेस कॉपी, डिजी लिफाफे इत्यादि) प्रिंटिंग हेतु',
        date: '19/08/2023'
    },
    {
        id: 6,
        particulars: 'Office Order (मैन पावर)',
        date: '10/08/2023'
    },
    {
        id: 7,
        particulars: 'मैन पावर की आपूर्ति हेतु निविदा विज्ञप्ति',
        date: '27/07/2023'
    },
    {
        id: 8,
        particulars: 'निविदा निरस्तीकरण सूचना',
        date: '13/07/2023'
    },
    {
        id: 9,
        particulars: 'निविदा सूचना (अवार्ड सीट, लिफाफे, प्रेस कॉपी, डिजी लिफाफे इत्यादि) प्रिंटिंग हेतु',
        date: '15/06/2023'
    },
    {
        id: 10,
        particulars: 'Tender Notice - Answer Sheet',
        date: '28/04/2023'
    },
    {
        id: 11,
        particulars: 'Short Term Tender - Post Examination Date Extension',
        date: '13/03/2023'
    },
    {
        id: 12,
        particulars: 'Short Term Tender - Post Examination Date Extension',
        date: '22/02/2023'
    },
    {
        id: 13,
        particulars: 'Short Term Tender - Post Examination',
        date: '02/02/2023'
    },
    {
        id: 14,
        particulars: 'रद्दी की नीलामी हेतु निविदा सूचना',
        date: '01/02/2023'
    },
    {
        id: 15,
        particulars: 'Tender Notice - Stationary Date Extension',
        date: '19/01/2023'
    },
    {
        id: 16,
        particulars: 'रद्दी विक्रय निविदा सूचना',
        date: '10/01/2023'
    },
    {
        id: 17,
        particulars: 'Tender Notice - Stationary',
        date: '04/01/2023'
    },
    {
        id: 18,
        particulars: 'Tender Cancel Notice',
        date: '09/12/2022'
    },
    {
        id: 19,
        particulars: 'ट्रेवल एजेंसियों से वाहन सम्बन्धी निविदा सूचना',
        date: '09/12/2022'
    },
    {
        id: 20,
        particulars: 'Tender Notification Regarding Stationery Items',
        date: '05/12/2022'
    },
    {
        id: 21,
        particulars: 'Notice for registration of travel agencies',
        date: '02/10/2022'
    },
    {
        id: 22,
        particulars: 'Revised Notice Inviting Tender for Printing and Supply of Enrolment Booklets & Transcripts',
        date: '01/10/2022'
    },
    {
        id: 23,
        particulars: 'Printing Tender',
        date: '08/08/2022'
    },
    {
        id: 24,
        particulars: 'Stationary Tender',
        date: '30/07/2022'
    },
    {
        id: 25,
        particulars: 'Tender Notification Regarding Vehicle for Exam Work',
        date: '14/07/2022'
    }
];
const pageTwoTenders = [];
const TendersNotification = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const tenders = currentPage === 1 ? pageOneTenders : pageTwoTenders;
    return (_jsx("main", { className: "tenders-page", children: _jsxs("section", { className: "tenders-panel", "aria-labelledby": "tenders-title", children: [_jsx("div", { className: "tenders-titlebar", children: _jsx("h1", { id: "tenders-title", children: "Tenders & Notification" }) }), _jsx("div", { className: "tenders-table-scroll", children: _jsxs("table", { className: "tenders-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "Particulars" }), _jsx("th", { scope: "col", children: "Date" }), _jsx("th", { scope: "col", children: "Details" })] }) }), _jsx("tbody", { children: tenders.map((tender) => (_jsxs("tr", { children: [_jsx("td", { className: "particulars-cell", children: tender.particulars }), _jsx("td", { className: "date-cell", children: tender.date }), _jsx("td", { className: "details-cell", children: _jsx("a", { className: "pdf-link", href: "#", "aria-label": `View PDF for ${tender.particulars}`, title: "View PDF", children: _jsx("span", { className: "pdf-icon", "aria-hidden": "true", children: "PDF" }) }) })] }, tender.id))) })] }) }), _jsxs("nav", { className: "tenders-pagination", "aria-label": "Tenders pages", children: [_jsx("button", { type: "button", className: `page-btn ${currentPage === 1 ? 'active' : ''}`, onClick: () => setCurrentPage(1), "aria-current": currentPage === 1 ? 'page' : undefined, children: "1" }), _jsx("button", { type: "button", className: `page-btn ${currentPage === 2 ? 'active' : ''}`, onClick: () => setCurrentPage(2), "aria-current": currentPage === 2 ? 'page' : undefined, children: "2" })] })] }) }));
};
export default TendersNotification;
//# sourceMappingURL=TendersNotification.js.map