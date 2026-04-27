import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/Footer.css';
const Footer = ({ language, setCurrentPage }) => {
    const actRegulationsPdf = '/img/ppf/University_Act.pdf';
    // External links mapping
    const externalLinks = {
        'UGC e-Samadhan portal': 'https://samadhaan.ugc.ac.in/',
    };
    // Link name to page name mapping (for internal pages)
    const linkMapping = {
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
    const handleLinkClick = (e, linkName) => {
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
    return (_jsx("footer", { className: "footer-new", children: _jsxs("div", { className: "footer-wrapper", children: [_jsxs("div", { className: "footer-grid", children: [_jsxs("div", { className: "footer-column", children: [_jsx("h3", { className: "footer-column-title", children: currentContent.contactDetailsTitle }), _jsx("div", { className: "column-divider" }), _jsxs("div", { className: "contact-section", children: [_jsx("p", { className: "contact-text", children: currentContent.address }), _jsxs("p", { className: "contact-text", children: [_jsx("strong", { children: "Registrar office Email Id :" }), " registrarsdsuz018@gmail.com"] }), _jsxs("p", { className: "contact-text", children: [_jsxs("strong", { children: [language === 'en' ? 'निर्धी सचिव माठ कुलपति' : '', ":"] }), " 01376297701 (", language === 'en' ? 'Sri Varsha Deopalta' : 'श्री वर्षा डीओपाल्टा', ")"] }), _jsxs("p", { className: "contact-text", children: [_jsxs("strong", { children: [language === 'en' ? 'प्रशासन' : '', ":"] }), " 01376297702 (", language === 'en' ? 'Sri Gajendra Rawat' : 'श्री गजेंद्र रावत', ")"] }), _jsxs("p", { className: "contact-text", children: [_jsxs("strong", { children: [language === 'en' ? 'मान्यता अनुभाग' : '', ":"] }), " 01376297703 (", language === 'en' ? 'Sri Kuldeep Negi' : 'श्री कुलदीप नेगी', ")"] }), _jsxs("p", { className: "contact-text", children: [_jsxs("strong", { children: [language === 'en' ? 'वित्त अनुभाग' : '', ":"] }), " 01376297704 (", language === 'en' ? 'Sri Jitendra Singh Rawat' : 'श्री जितेंद्र सिंह रावत', ")"] }), _jsxs("p", { className: "contact-text", children: [_jsxs("strong", { children: [language === 'en' ? 'परीक्षा विभाग' : '', ":"] }), " 01376297705 (", language === 'en' ? 'Sri Ashirosh Rawat / Shri Pankaj Kumar' : 'श्री अशिरोष रावत / श्री पंकज कुमार', ")"] }), _jsxs("p", { className: "contact-text", children: [_jsx("strong", { children: "Phone:" }), " +1 5589 55488 55"] }), _jsxs("p", { className: "contact-text", children: [_jsx("strong", { children: "Email:" }), " info@example.com"] })] })] }), _jsxs("div", { className: "footer-column", children: [_jsx("h3", { className: "footer-column-title", children: currentContent.examinationContactTitle }), _jsx("div", { className: "column-divider" }), _jsxs("div", { className: "exam-section", children: [_jsx("p", { className: "exam-text", children: language === 'en' ? 'For Examination related any inquiry please contact to the following :' : 'परीक्षा संबंधित किसी भी जांच के लिए कृपया निम्नलिखित से संपर्क करें :' }), _jsx("p", { className: "exam-label", children: currentContent.examControllerLabel }), _jsx("p", { className: "exam-detail", children: currentContent.examControllerEmail }), _jsx("p", { className: "exam-label", style: { marginTop: '15px' }, children: currentContent.deputyExamLabel }), _jsx("p", { className: "exam-label", style: { marginTop: '15px' }, children: currentContent.baLabel }), _jsx("p", { className: "exam-detail", children: currentContent.aeLabel })] })] }), _jsxs("div", { className: "footer-column", children: [_jsx("h3", { className: "footer-column-title", children: currentContent.academicLinksTitle }), _jsx("div", { className: "column-divider" }), _jsx("ul", { className: "footer-links", children: currentContent.academicLinks.map((link, index) => (_jsx("li", { children: _jsx("a", { href: "#", onClick: (e) => handleLinkClick(e, link), className: "footer-link", children: link }) }, index))) })] }), _jsxs("div", { className: "footer-column", children: [_jsx("h3", { className: "footer-column-title", children: currentContent.overviewTitle }), _jsx("div", { className: "column-divider" }), _jsx("ul", { className: "footer-links", children: currentContent.overviewLinks.map((link, index) => (_jsx("li", { children: link === 'UGC e-Samadhan portal' ? (_jsx("a", { href: "https://samadhaan.ugc.ac.in/", target: "_blank", rel: "noopener noreferrer", className: "footer-link", children: link })) : (_jsx("a", { href: "#", onClick: (e) => handleLinkClick(e, link), className: "footer-link", children: link })) }, index))) })] }), _jsxs("div", { className: "footer-column", children: [_jsx("h3", { className: "footer-column-title", children: currentContent.universityLinksTitle }), _jsx("div", { className: "column-divider" }), _jsx("ul", { className: "footer-links", children: currentContent.universityLinks.map((link, index) => (_jsx("li", { children: index === 2 ? (_jsx("a", { href: actRegulationsPdf, target: "_blank", rel: "noopener noreferrer", className: "footer-link", children: link })) : (_jsx("a", { href: "#", onClick: (e) => handleLinkClick(e, link), className: "footer-link", children: link })) }, index))) })] })] }), _jsx("button", { className: "scroll-to-top", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), children: "\u2191" })] }) }));
};
export default Footer;
//# sourceMappingURL=Footer.js.map