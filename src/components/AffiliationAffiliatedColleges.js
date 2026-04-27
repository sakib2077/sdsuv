import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/AffiliationAffiliatedColleges.css';
const affiliationItems = [
    {
        id: 1,
        particulars: 'Regarding granting affiliation to colleges and higher educational institutions',
        date: '31/10/2023'
    },
    {
        id: 2,
        particulars: 'Affiliation G.O. 2017',
        date: '20/10/2023'
    },
    {
        id: 3,
        particulars: 'Affiliation G.O. 14 Dec, 2016 Onwards'
    },
    {
        id: 4,
        particulars: 'Programme Upload Sheet - HED'
    },
    {
        id: 5,
        particulars: 'PG and UG Course file'
    },
    {
        id: 6,
        particulars: 'Affiliation session 2019-20'
    },
    {
        id: 7,
        particulars: 'Affiliation Letter (Session 2016-17)'
    },
    {
        id: 8,
        particulars: 'New Affiliation reg. (Session 2016-17)'
    },
    {
        id: 9,
        particulars: 'Affiliation G.O 2017-18 onwards'
    },
    {
        id: 10,
        particulars: 'New Affiliation reg. (Session 2016-17)'
    },
    {
        id: 11,
        particulars: '(15-10-2015) Regarding Faculty Affidavit.'
    },
    {
        id: 12,
        particulars: '(01-07-2015) B.Ed reg. ( N.C.T.E (Recognition Norms & Procedure) Regulation 2014)'
    },
    {
        id: 13,
        particulars: '16-03-2015 Affiliation Standard Reg.'
    },
    {
        id: 14,
        particulars: '17-01-2015 New Affiliation Performa.'
    },
    {
        id: 15,
        particulars: 'Performa of Rajbhawan(Affiliation)'
    },
    {
        id: 16,
        particulars: 'Fee Fixation Session (2017-18)'
    }
];
const AffiliationAffiliatedColleges = () => {
    return (_jsx("main", { className: "affiliation-page", children: _jsxs("section", { className: "affiliation-panel", "aria-labelledby": "affiliation-title", children: [_jsx("div", { className: "affiliation-titlebar", children: _jsx("h1", { id: "affiliation-title", children: "Affiliation & Affiliated colleges" }) }), _jsx("div", { className: "affiliation-table-scroll", children: _jsxs("table", { className: "affiliation-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "Particulars" }), _jsx("th", { scope: "col", children: "Date" }), _jsx("th", { scope: "col", children: "Details" })] }) }), _jsx("tbody", { children: affiliationItems.map((item) => (_jsxs("tr", { children: [_jsx("td", { className: "affiliation-particulars", children: item.particulars }), _jsx("td", { className: "affiliation-date", children: item.date ?? '' }), _jsx("td", { className: "affiliation-details", children: _jsx("a", { className: "affiliation-pdf-link", href: "#", "aria-label": `View PDF for ${item.particulars}`, title: "View PDF", children: _jsx("span", { className: "affiliation-pdf-icon", "aria-hidden": "true", children: "PDF" }) }) })] }, item.id))) })] }) })] }) }));
};
export default AffiliationAffiliatedColleges;
//# sourceMappingURL=AffiliationAffiliatedColleges.js.map