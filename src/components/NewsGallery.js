import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/NewsGallery.css';
const newsItems = [
    { date: '02-May-2023', images: ['news9.jpg', 'news11.jpg', 'news18.jpg'] },
    { date: '01-May-2023', images: ['news10.jpg', 'news17.jpg', 'news26.jpg'] },
    { date: '30-April-2023', images: ['news2.jpg', 'news12.jpg'] },
    { date: '29-April-2023', images: ['news1.jpg'] },
    { date: '25-April-2023', images: ['news7.jpg', 'news8.jpg'] },
    { date: '21-April-2023', images: ['news3.jpg', 'news4.jpg', 'news5.jpg', 'news6.jpg'] },
    { date: '20-April-2023', images: ['news23.jpg'] },
    { date: '18-April-2023', images: ['news24.jpg'] },
    { date: '16-April-2023', images: ['news19.jpg'] },
    { date: '13-April-2023', images: ['news20.jpg', 'news21.jpg', 'news22.jpg'] },
    { date: '04-April-2023', images: ['news25.jpg'] },
];
const NewsGallery = ({ onBack }) => {
    return (_jsxs("main", { className: "news-gallery-page", children: [_jsx("button", { className: "news-gallery-home", type: "button", onClick: onBack, children: "Home" }), _jsx("h1", { children: "News Gallery" }), _jsx("div", { className: "news-gallery-list", children: newsItems.map((item) => (_jsxs("section", { className: "news-gallery-group", children: [_jsx("div", { className: "news-gallery-date", children: _jsx("span", { children: item.date }) }), _jsx("div", { className: `news-gallery-images news-gallery-count-${item.images.length}`, children: item.images.map((image) => (_jsx("img", { src: `/img/news-gallery/${image}`, alt: `News clipping ${item.date}`, loading: "lazy" }, image))) })] }, item.date))) })] }));
};
export default NewsGallery;
//# sourceMappingURL=NewsGallery.js.map