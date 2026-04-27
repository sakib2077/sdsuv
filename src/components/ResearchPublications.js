import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/ResearchPublications.css';
const ResearchPublications = ({ language, setCurrentPage }) => {
    const [expandedMenu, setExpandedMenu] = useState('internal-quality-assurance');
    const publicationRoutes = {
        1: 'campus-sports-gallery',
        2: 'conference-seminar-workshop'
    };
    const handlePublicationClick = (publicationId) => {
        if (!setCurrentPage)
            return;
        const page = publicationRoutes[publicationId];
        if (page) {
            setCurrentPage(page);
        }
    };
    const handleMenuItemClick = (itemId) => {
        setExpandedMenu(expandedMenu === itemId ? '' : itemId);
    };
    const handleViewMoreClick = (itemId) => {
        if (!itemId || !setCurrentPage)
            return;
        if (itemId === 'internal-quality-assurance') {
            setCurrentPage('iqac');
        }
        else if (itemId === 'mou') {
            setCurrentPage('moues');
        }
        else if (itemId === 'center-excellence') {
            setCurrentPage('centre-excellence-page');
        }
        else if (itemId === 'research-development') {
            setCurrentPage('research-development');
        }
        else if (itemId === 'faculty-development') {
            setCurrentPage('faculty-development');
        }
        else if (itemId === 'conference-seminar') {
            setCurrentPage('conference-seminar-workshop');
        }
    };
    const menuItems = [
        {
            id: 'internal-quality-assurance',
            titleEn: 'Internal Quality Assurance Cell (IQAC)',
            titleHi: 'आंतरिक गुणवत्ता आश्वासन सेल (IQAC)',
            headerTitleEn: 'Internal Quality Assurance Cell (IQAC)',
            headerTitleHi: 'आंतरिक गुणवत्ता आश्वासन सेल (IQAC)',
            descriptionEn: 'The Internal Quality Assurance Cell (IQAC) of Sri Dev Suman Uttarakhand University plays a key role in promoting a culture of continuous improvement across academic and administrative activities. It works to enhance teaching-learning processes, encourage research initiatives, and strengthen institutional transparency.',
            descriptionHi: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय का आंतरिक गुणवत्ता आश्वासन सेल (IQAC) शैक्षणिक और प्रशासनिक गतिविधियों में निरंतर सुधार की संस्कृति को बढ़ावा देने में महत्वपूर्ण भूमिका निभाता है।'
        },
        {
            id: 'center-excellence',
            titleEn: 'Center of Excellence in Entrepreneurship and incubation',
            titleHi: 'उद्यमिता और इनक्यूबेशन में उत्कृष्टता केंद्र',
            headerTitleEn: 'Center of Excellence in Entrepreneurship and incubation',
            headerTitleHi: 'उद्यमिता और इनक्यूबेशन में उत्कृष्टता केंद्र',
            descriptionEn: 'The Center of Excellence in Entrepreneurship and Incubation fosters innovation and business development among students and faculty. It provides mentoring, resources, and support for startup ventures. The center helps turn ideas into viable businesses through training programs and networking opportunities.',
            descriptionHi: 'उद्यमिता और इनक्यूबेशन में उत्कृष्टता केंद्र छात्रों और संकाय के बीच नवाचार और व्यावसायिक विकास को बढ़ावा देता है। यह स्टार्टअप उद्यमों के लिए सलाह, संसाधन और समर्थन प्रदान करता है।'
        },
        {
            id: 'research-development',
            titleEn: 'Research and Development',
            titleHi: 'अनुसंधान और विकास',
            headerTitleEn: 'Research and Development',
            headerTitleHi: 'अनुसंधान और विकास',
            descriptionEn: 'The Research and Development department promotes scholarly research and innovation across all disciplines. It provides grants, facilities, and guidance for faculty and student research projects. The department aims to advance knowledge and contribute to societal development.',
            descriptionHi: 'अनुसंधान और विकास विभाग सभी विषयों में विद्वत्तापूर्ण अनुसंधान और नवाचार को बढ़ावा देता है। यह संकाय और छात्र अनुसंधान परियोजनाओं के लिए अनुदान, सुविधाएं और मार्गदर्शन प्रदान करता है।'
        },
        {
            id: 'faculty-development',
            titleEn: 'Faculty Development Centre',
            titleHi: 'संकाय विकास केंद्र',
            headerTitleEn: 'Faculty Development Centre',
            headerTitleHi: 'संकाय विकास केंद्र',
            descriptionEn: 'The Faculty Development Centre organizes workshops, seminars, and training programs to enhance teaching methodologies and professional skills. It supports faculty in curriculum development, pedagogical innovation, and academic excellence.',
            descriptionHi: 'संकाय विकास केंद्र शिक्षण पद्धति और व्यावसायिक कौशल को बढ़ाने के लिए कार्यशालाएं, सेमिनार और प्रशिक्षण कार्यक्रमों का आयोजन करता है।'
        },
        {
            id: 'conference-seminar',
            titleEn: 'Conference/Seminar & Workshop',
            titleHi: 'सम्मेलन/सेमिनार और कार्यशाला',
            headerTitleEn: 'Conference/Seminar & Workshop',
            headerTitleHi: 'सम्मेलन/सेमिनार और कार्यशाला',
            descriptionEn: 'The university organizes national and international conferences, seminars, and workshops to promote knowledge exchange and scholarly discourse. These events bring together researchers, academicians, and practitioners to discuss emerging trends and innovations.',
            descriptionHi: 'विश्वविद्यालय ज्ञान विनिमय और विद्वत्तापूर्ण वार्तालाप को बढ़ावा देने के लिए राष्ट्रीय और अंतर्राष्ट्रीय सम्मेलन, सेमिनार और कार्यशालाएं आयोजित करता है।'
        },
        {
            id: 'mou',
            titleEn: "MOU's",
            titleHi: 'समझौता ज्ञापन',
            headerTitleEn: "Memorandum of Understanding (MOU's)",
            headerTitleHi: 'समझौता ज्ञापन (MOU)',
            descriptionEn: 'The university has signed Memoranda of Understanding with several national and international institutions to facilitate academic collaboration, student exchange programs, and research partnerships. These MOUs strengthen institutional ties and enhance global cooperation.',
            descriptionHi: 'विश्वविद्यालय ने शैक्षणिक सहयोग, छात्र विनिमय कार्यक्रमों और अनुसंधान साझेदारी को सुविधाजनक बनाने के लिए कई राष्ट्रीय और अंतर्राष्ट्रीय संस्थानों के साथ समझौता ज्ञापन पर हस्ताक्षर किए हैं।'
        }
    ];
    const publications = [
        {
            id: 1,
            titleEn: 'Sports',
            titleHi: 'खेल',
            descriptionEn: 'On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized.',
            descriptionHi: 'दूसरी ओर हम उन लोगों की निंदा करते हैं जो धर्मी असंतोष के साथ बहकाए और निराश हैं।',
            image: '/img/Spicon.png',
            date: 'June 3, 2026'
        },
        {
            id: 2,
            titleEn: 'Skill Development Programs',
            titleHi: 'कौशल विकास कार्यक्रम',
            descriptionEn: 'To take a trivial example which of us ever undertakes laborious physical exercise except.',
            descriptionHi: 'एक मामूली उदाहरण लेने के लिए, हममें से कौन कठोर शारीरिक व्यायाम करता है।',
            image: '/img/e2.jpg',
            date: 'June 3, 2026'
        }
    ];
    return (_jsx("div", { className: "research-publications", children: _jsxs("div", { className: "research-container", children: [_jsxs("div", { className: "research-sidebar", children: [_jsx("h3", { className: "sidebar-title", children: "Sri Dev Suman University" }), _jsx("div", { className: "menu-items-list", children: menuItems.map((item) => {
                                const isFixed = item.id === 'internal-quality-assurance';
                                const isExpanded = isFixed || expandedMenu === item.id;
                                const itemDescription = language === 'en' ? item.descriptionEn : item.descriptionHi;
                                return (_jsxs("div", { className: "menu-item", children: [_jsxs("button", { className: `menu-button ${isExpanded ? 'active' : ''}`, onClick: () => item.id !== 'internal-quality-assurance' && handleMenuItemClick(item.id), children: [_jsx("span", { children: language === 'en' ? item.titleEn : item.titleHi }), item.id !== 'internal-quality-assurance' && (_jsx("span", { className: "dropdown-icon", children: isExpanded ? '▲' : '▼' }))] }), isExpanded && (_jsxs("div", { className: "item-details", children: [_jsx("p", { className: "content-description", children: itemDescription }), _jsx("button", { className: "view-more-btn", onClick: () => handleViewMoreClick(item.id), children: language === 'en' ? 'View More' : 'और देखें' })] }))] }, item.id));
                            }) })] }), _jsxs("div", { className: "research-content", children: [_jsx("div", { className: "featured-image", children: _jsx("img", { src: "/img/SECOND.jpg", alt: "Research Featured" }) }), _jsxs("div", { className: "research-header", children: [_jsx("h2", { children: language === 'en' ? 'Research Publication & Book Published' : 'अनुसंधान प्रकाशन और पुस्तक प्रकाशित' }), _jsx("a", { href: "#", className: "read-more", children: language === 'en' ? 'Read more...' : 'और अधिक पढ़ें...' })] }), _jsx("div", { className: "publications-list", children: publications.map((pub) => (_jsxs("div", { className: "publication-card", onClick: () => handlePublicationClick(pub.id), role: "button", tabIndex: 0, onKeyDown: (e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handlePublicationClick(pub.id);
                                    }
                                }, children: [_jsxs("div", { className: "publication-image", children: [_jsx("img", { src: pub.image, alt: language === 'en' ? pub.titleEn : pub.titleHi }), _jsx("div", { className: "publication-date", children: pub.date })] }), _jsxs("div", { className: "publication-info", children: [_jsx("h3", { children: language === 'en' ? pub.titleEn : pub.titleHi }), _jsx("p", { children: language === 'en' ? pub.descriptionEn : pub.descriptionHi }), _jsx("button", { type: "button", className: "details-link", onClick: (event) => {
                                                    event.stopPropagation();
                                                    handlePublicationClick(pub.id);
                                                }, children: language === 'en' ? 'Details' : 'विवरण' })] })] }, pub.id))) })] })] }) }));
};
export default ResearchPublications;
//# sourceMappingURL=ResearchPublications.js.map