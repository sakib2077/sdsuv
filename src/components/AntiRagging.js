import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/AntiRagging.css';
const committeeMembers = [
    { name: 'Prof. PK Singh', phone: '9412138154' },
    { name: 'Prof. Dinesh Sharma', phone: '7417784525' },
    { name: 'Prof. Adheer Kumar', phone: '7579209947' },
];
const squadMembers = [
    { name: 'Prof. Pushpanjali Arya', phone: '9412910470' },
    { name: 'Prof. V.K Gupta', phone: '9412942400' },
    { name: 'Prof. Ashish Kumar Sharma', phone: '9719713300' },
    { name: 'Prof. Sunita Badola', phone: '9412112520' },
];
const AntiRagging = ({ onBack }) => {
    const rowCount = Math.max(committeeMembers.length, squadMembers.length);
    return (_jsxs("div", { className: "anti-ragging-page", children: [_jsx("header", { className: "anti-ragging-topbar", children: _jsxs("div", { className: "anti-ragging-topbar-inner", children: [_jsx("h1", { children: "Anti-Ragging" }), _jsxs("nav", { className: "anti-ragging-breadcrumb", "aria-label": "Anti-ragging navigation", children: [_jsx("button", { type: "button", onClick: onBack, children: "HOME" }), _jsx("span", { "aria-hidden": "true" }), _jsx("strong", { children: "ANTI-RAGGING" })] })] }) }), _jsxs("main", { className: "anti-ragging-content", children: [_jsxs("section", { className: "anti-ragging-intro", "aria-labelledby": "anti-ragging-title", children: [_jsx("h2", { id: "anti-ragging-title", children: "NATIONAL RAGGING PREVENTION PROGRAMME" }), _jsxs("div", { className: "anti-ragging-contact-block", children: [_jsx("h3", { children: "National Anti-Ragging Helpline" }), _jsx("p", { children: "24x7 Toll Free" }), _jsx("p", { children: "1800-180-5522" }), _jsxs("p", { children: [_jsx("a", { href: "mailto:helpline@antiragging.in", children: "helpline@antiragging.in" }), _jsx("span", { children: " | " }), _jsx("a", { href: "https://www.antiragging.in", target: "_blank", rel: "noopener noreferrer", children: "www.antiragging.in" })] })] }), _jsxs("div", { className: "anti-ragging-contact-block", children: [_jsx("h3", { children: "UGC Monitoring Agency" }), _jsx("p", { children: "Centre for Youth (C4Y)" }), _jsxs("p", { children: [_jsx("a", { href: "mailto:antiragging@c4yindia.org", children: "antiragging@c4yindia.org" }), _jsx("span", { children: " | " }), _jsx("a", { href: "https://www.c4yindia.org", target: "_blank", rel: "noopener noreferrer", children: "www.c4yindia.org" })] })] }), _jsx("h3", { className: "anti-ragging-officers-title", children: "Contact Details of the Nodal Officers of Anti-Ragging Committee and Squad" })] }), _jsx("section", { className: "anti-ragging-table-wrap", "aria-label": "Anti-ragging committee and squad contact details", children: _jsxs("table", { className: "anti-ragging-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { colSpan: 2, children: "Anti-Ragging Committee (ARC)" }), _jsx("th", { colSpan: 2, children: "Anti-Ragging Squad (ARS)" })] }) }), _jsx("tbody", { children: Array.from({ length: rowCount }).map((_, index) => {
                                        const committeeMember = committeeMembers[index];
                                        const squadMember = squadMembers[index];
                                        return (_jsxs("tr", { children: [_jsx("td", { children: committeeMember?.name ?? '' }), _jsx("td", { children: committeeMember?.phone ?? '' }), _jsx("td", { children: squadMember?.name ?? '' }), _jsx("td", { children: squadMember?.phone ?? '' })] }, index));
                                    }) })] }) }), _jsxs("section", { className: "anti-ragging-warning", "aria-label": "Anti-ragging legal warning", children: [_jsx("p", { children: "RAGGING IS A CRIMINAL OFFENCE AND THE CULPRITS WILL ATTRACT PUNITIVE ACTION AS MENTIONED IN THE UGC REGULATIONS" }), _jsxs("p", { children: ["(", _jsx("a", { href: "https://www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf", target: "_blank", rel: "noopener noreferrer", children: "www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf" }), ")"] }), _jsx("p", { children: _jsx("a", { href: "https://www.ugc.ac.in", target: "_blank", rel: "noopener noreferrer", children: "www.ugc.ac.in" }) })] })] })] }));
};
export default AntiRagging;
//# sourceMappingURL=AntiRagging.js.map