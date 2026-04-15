import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './Header';
import '../styles/AboutUs.css';
const AboutUs = ({ language, setCurrentPage, onBack }) => {
    const content = {
        en: {
            title: 'Sri Dev Suman Uttarakhand University',
            tagline: 'A State University shaping future leaders with quality education in the lap of the Himalayas.',
            description: 'Sri Dev Suman Uttarakhand University (SDSUV), established by the Government of Uttarakhand, is located in the peaceful and scenic region of Badshahithaul, Tehri Garhwal. The university is committed to providing accessible, affordable, and high-quality education to students across the state and beyond.',
            highlights: [
                'Government-recognized State University (UGC Approved)',
                'Modern NEP-based academic structure',
                'Peaceful Himalayan environment ideal for learning',
                'Experienced faculty and strong academic support',
                'Wide range of UG, PG, professional & vocational courses'
            ],
            vision: 'SDSUV aims to empower students with strong knowledge, practical skills, and creative thinking. The university continues to grow as a center of educational excellence in Uttarakhand.',
            introductionTitle: 'THE UNIVERSITY: AN INTRODUCTION',
            establishment: 'Establishment & Vision',
            establishmentContent: 'Sri Dev Suman Uttarakhand University is established as a State University of Uttarakhand vide State Government notification No 270/XXXVI(3)/2012/48(1)/2012 dated 19th October, 2012 in continuation to amendment of erstwhile Pt Deen Dayal Upadhyay Uttarakhand Vishwavidhyalaya Act 2011 (Uttarakhand Act No 22 of 2011). The establishment of the University is a rare distinction of popular and powerful demand, symbolizing the hopes and aspirations of the people of Garhwal for development through the instrument of higher education. The masses of this remote mountainous region demanded opening a new University at Badshahi Thaul, a small but historical town of Tehri Garhwal.',
            geographic: 'Geographic Location & Jurisdiction',
            geographicContent: 'The University is nestled in the lap of Himalayan ranges in Tehri Garhwal, with jurisdiction over seven districts: Chamoli, Rudraprayag, Pauri, Tehri, Uttarkashi, Haridwar, and Dehradun of the Garwhal region. Sri Dev Suman Uttarakhand University is situated on the way between Chamba and New Tehri at a distance of 3 km from Chamba, one of the brightest spots of Tehri Garhwal district, at an elevation of 1676 m from sea level. The campus is situated at an elevation of 1750 m on a ridge facing east, surrounded by dense oak and pine tree forests.',
            campus: 'Campus Features & Surroundings',
            campusContent: 'The town is situated on the Delhi-Gangotri national highway, offering one of the most spectacular views of snow-capped Himalayan peaks and the enchanting Bhagirathi valley. The campus is at a distance of 8 km from New Tehri, a newly established master-planned township at 1900 m elevation and district headquarters of Tehri Garhwal. The famous Tehri Dam along with a huge lake between mountains, situated at a distance of 20 km from the university campus, is a recent addition to the tourist attractions in the area.',
            connectivity: 'Connectivity & Accessibility',
            nearestAirport: 'Nearest Airport: Jollygrant Airport in Dehradun (80 km away)',
            nearestRailway: 'Nearest Railway: Rishikesh (65 km away) and Haridwar (90 km away)',
            roadConnectivity: 'Road Connectivity: Well connected to Haridwar, Rishikesh, Dehradun, Mussoorie, Uttarkashi, and Srinagar',
            travelTime: 'Travel Time: 3 hours from Haridwar/Dehradun, 2 hours from Rishikesh',
            transport: 'Transport: Regular bus services, private taxis, and jeeps available',
            objects: 'Objects of the University',
            objectsDescription: 'The objectives of the University are to disseminate and advance knowledge by providing instructional and research facilities in various branches of learning; to make special provision for integrated courses in Humanities, Social Sciences, Science and Technology in its educational programmes; to promote innovations in teaching-learning processes and inter-disciplinary studies and research.',
            objective1Title: 'Education & Training',
            objective1Icon: '📚',
            objective1Desc: 'To educate and train manpower for the development of the State and country',
            objective2Title: 'Research & Innovation',
            objective2Icon: '🔬',
            objective2Desc: 'To establish linkages with industries and research organizations for promotion of science and technology',
            objective3Title: 'Social Development',
            objective3Icon: '🌱',
            objective3Desc: 'To improve social and economic conditions and welfare of the people',
            objective4Title: 'Excellence in Teaching',
            objective4Icon: '🎓',
            objective4Desc: 'Committed to achieve excellence in teaching and learning within an environment of high standards'
        },
        hi: {
            title: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय',
            tagline: 'एक राज्य विश्वविद्यालय जो हिमालय की गोद में गुणवत्तापूर्ण शिक्षा के माध्यम से भविष्य के नेताओं को तैयार करता है।',
            description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय (SDSUV), जिसकी स्थापना उत्तरांचल सरकार द्वारा की गई है, बद्षाहीथौल, टेहरी गढ़वाल के शांत और सुंदर क्षेत्र में स्थित है। विश्वविद्यालय राज्य और उससे परे के छात्रों को सुलभ, सस्ती और उच्च गुणवत्ता की शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
            highlights: [
                'सरकार द्वारा मान्यता प्राप्त राज्य विश्वविद्यालय (यूजीसी अनुमोदित)',
                'आधुनिक राष्ट्रीय शिक्षा नीति आधारित शैक्षणिक संरचना',
                'शिक्षा के लिए आदर्श शांत हिमालयी वातावरण',
                'अनुभवी संकाय और मजबूत शैक्षणिक समर्थन',
                'UG, PG, व्यावसायिक और व्यावसायिक पाठ्यक्रमों की विस्तृत श्रृंखला'
            ],
            vision: 'SDSUV का लक्ष्य छात्रों को मजबूत ज्ञान, व्यावहारिक कौशल और रचनात्मक सोच से लैस करना है। विश्वविद्यालय उत्तरांचल में शैक्षणिक उत्कृष्टता का एक केंद्र के रूप में बढ़ता जा रहा है।',
            introductionTitle: 'विश्वविद्यालय: एक परिचय',
            establishment: 'स्थापना और दृष्टिकोण',
            establishmentContent: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय को उत्तरांचल राज्य सरकार के 19 अक्टूबर, 2012 को जारी किए गए संख्या 270/XXXVI(3)/2012/48(1)/2012 अधिसूचना के माध्यम से एक राज्य विश्वविद्यालय के रूप में स्थापित किया गया है। यह पंडित दीन दयाल उपाध्याय उत्तरांचल विश्वविद्यालय अधिनियम 2011 (उत्तरांचल अधिनियम संख्या 22) में संशोधन की निरंतरता में है। विश्वविद्यालय की स्थापना लोकप्रिय और शक्तिशाली मांग की एक दुर्लभ विशिष्टता है, जो गढ़वाल की जनता की उच्च शिक्षा के माध्यम से विकास की आशा और आकांक्षाओं का प्रतीक है।',
            geographic: 'भौगोलिक स्थिति और क्षेत्राधिकार',
            geographicContent: 'विश्वविद्यालय टेहरी गढ़वाल में हिमालय श्रृंखलाओं की गोद में स्थित है और गढ़वाल क्षेत्र के सात जिलों - चमोली, रुद्रप्रयाग, पौड़ी, टेहरी, उत्तरकाशी, हरिद्वार और देहरादून पर अपना क्षेत्राधिकार रखता है। श्री देव सुमन उत्तरांचल विश्वविद्यालय चंबा और नई टेहरी के बीच के रास्ते पर चंबा से 3 किमी की दूरी पर स्थित है, जो टेहरी गढ़वाल जिले के सबसे प्रतिभाशाली स्थानों में से एक है, समुद्र तल से 1676 मीटर की ऊंचाई पर। परिसर पूर्व की ओर मुख किए हुए एक कटान पर 1750 मीटर की ऊंचाई पर स्थित है, जो घने बलूत और चीड़ के जंगलों से घिरा हुआ है।',
            campus: 'परिसर की विशेषताएं और आसपास के क्षेत्र',
            campusContent: 'यह शहर दिल्ली-गंगोत्री राष्ट्रीय राजमार्ग पर स्थित है, जो हिमालय की बर्फ से ढकी चोटियों और भागीरथी घाटी के सबसे शानदार दृश्य प्रदान करता है। परिसर नई टेहरी से 8 किमी की दूरी पर स्थित है, जो 1900 मीटर की ऊंचाई पर एक नए सिरे से स्थापित मास्टर-प्लान्ड टाउनशिप और टेहरी गढ़वाल के जिला मुख्यालय है। विश्व प्रसिद्ध टेहरी बांध और पहाड़ों के बीच विशाल झील, जो विश्वविद्यालय परिसर से 20 किमी की दूरी पर स्थित है, इस क्षेत्र के पर्यटक आकर्षणों में एक हालिया जोड़ है।',
            connectivity: 'कनेक्टिविटी और पहुंचयोग्यता',
            nearestAirport: 'निकटतम हवाई अड्डा: देहरादून में जॉलीग्रांट हवाई अड्डा (80 किमी दूर)',
            nearestRailway: 'निकटतम रेलवे: ऋषिकेश (65 किमी दूर) और हरिद्वार (90 किमी दूर)',
            roadConnectivity: 'सड़क कनेक्टिविटी: हरिद्वार, ऋषिकेश, देहरादून, मसूरी, उत्तरकाशी और श्रीनगर से अच्छी तरह से जुड़ा हुआ',
            travelTime: 'यात्रा का समय: हरिद्वार/देहरादून से 3 घंटे, ऋषिकेश से 2 घंटे',
            transport: 'परिवहन: नियमित बस सेवाएं, निजी टैक्सी और जीप उपलब्ध',
            objects: 'विश्वविद्यालय के उद्देश्य',
            objectsDescription: 'विश्वविद्यालय के उद्देश्य विभिन्न क्षेत्रों में शिक्षा और अनुसंधान सुविधाएं प्रदान करके ज्ञान का प्रसार और प्रगति करना है; इसके शैक्षणिक कार्यक्रमों में मानविकी, सामाजिक विज्ञान, विज्ञान और प्रौद्योगिकी में एकीकृत पाठ्यक्रमों के लिए विशेष प्रावधान करना है; शिक्षण-अधिगम प्रक्रियाओं और अंतर-विषयक अध्ययन और अनुसंधान में नवाचार को बढ़ावा देना है।',
            objective1Title: 'शिक्षा और प्रशिक्षण',
            objective1Icon: '📚',
            objective1Desc: 'राज्य और देश के विकास के लिए मानव संसाधनों को शिक्षित और प्रशिक्षित करना',
            objective2Title: 'अनुसंधान और नवाचार',
            objective2Icon: '🔬',
            objective2Desc: 'विज्ञान और प्रौद्योगिकी के प्रचार के लिए उद्योगों और अनुसंधान संगठनों के साथ संबंध स्थापित करना',
            objective3Title: 'सामाजिक विकास',
            objective3Icon: '🌱',
            objective3Desc: 'लोगों की सामाजिक और आर्थिक परिस्थितियों और कल्याण में सुधार करना',
            objective4Title: 'शिक्षण में उत्कृष्टता',
            objective4Icon: '🎓',
            objective4Desc: 'उच्च मानकों के वातावरण में शिक्षण और सीखने में उत्कृष्टता प्राप्त करने के लिए प्रतिबद्ध'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "about-us-page", children: [_jsx(Header, { language: language, setCurrentPage: setCurrentPage }), _jsx("section", { className: "intro-section", children: _jsxs("div", { className: "intro-content", children: [_jsx("h1", { className: "intro-title", children: data.title }), _jsx("p", { className: "intro-tagline", children: data.tagline }), _jsx("p", { className: "intro-description", children: data.description }), _jsx("div", { className: "highlights", children: data.highlights.map((highlight, index) => (_jsxs("div", { className: "highlight-item", children: [_jsx("span", { className: "highlight-icon", children: "\u2713" }), _jsx("span", { className: "highlight-text", children: highlight })] }, index))) }), _jsx("p", { className: "intro-vision", children: data.vision })] }) }), _jsxs("section", { className: "introduction-section", children: [_jsx("h2", { className: "section-title", children: data.introductionTitle }), _jsxs("div", { className: "intro-cards-grid", children: [_jsxs("div", { className: "intro-card", children: [_jsx("h3", { className: "card-title", children: data.establishment }), _jsx("div", { className: "card-divider" }), _jsx("p", { className: "card-content", children: data.establishmentContent })] }), _jsxs("div", { className: "intro-card", children: [_jsx("h3", { className: "card-title", children: data.geographic }), _jsx("div", { className: "card-divider" }), _jsx("p", { className: "card-content", children: data.geographicContent })] }), _jsxs("div", { className: "intro-card", children: [_jsx("h3", { className: "card-title", children: data.campus }), _jsx("div", { className: "card-divider" }), _jsx("p", { className: "card-content", children: data.campusContent })] }), _jsxs("div", { className: "intro-card", children: [_jsx("h3", { className: "card-title", children: data.connectivity }), _jsx("div", { className: "card-divider" }), _jsxs("ul", { className: "connectivity-list", children: [_jsx("li", { children: _jsxs("strong", { children: ["\u2708 ", data.nearestAirport] }) }), _jsx("li", { children: _jsxs("strong", { children: ["\uD83D\uDE82 ", data.nearestRailway] }) }), _jsx("li", { children: _jsxs("strong", { children: ["\uD83D\uDEE3\uFE0F ", data.roadConnectivity] }) }), _jsx("li", { children: _jsxs("strong", { children: ["\uD83D\uDD50 ", data.travelTime] }) }), _jsx("li", { children: _jsxs("strong", { children: ["\uD83D\uDE8C ", data.transport] }) })] })] })] }), _jsxs("div", { className: "objects-section", children: [_jsx("h2", { className: "objects-title", children: data.objects }), _jsx("p", { className: "objects-description", children: data.objectsDescription }), _jsxs("div", { className: "objectives-grid", children: [_jsxs("div", { className: "objective-card", children: [_jsx("div", { className: "objective-icon", children: data.objective1Icon }), _jsx("h4", { className: "objective-title", children: data.objective1Title }), _jsx("p", { className: "objective-desc", children: data.objective1Desc })] }), _jsxs("div", { className: "objective-card", children: [_jsx("div", { className: "objective-icon", children: data.objective2Icon }), _jsx("h4", { className: "objective-title", children: data.objective2Title }), _jsx("p", { className: "objective-desc", children: data.objective2Desc })] }), _jsxs("div", { className: "objective-card", children: [_jsx("div", { className: "objective-icon", children: data.objective3Icon }), _jsx("h4", { className: "objective-title", children: data.objective3Title }), _jsx("p", { className: "objective-desc", children: data.objective3Desc })] }), _jsxs("div", { className: "objective-card", children: [_jsx("div", { className: "objective-icon", children: data.objective4Icon }), _jsx("h4", { className: "objective-title", children: data.objective4Title }), _jsx("p", { className: "objective-desc", children: data.objective4Desc })] })] })] })] })] }));
};
export default AboutUs;
//# sourceMappingURL=AboutUs.js.map