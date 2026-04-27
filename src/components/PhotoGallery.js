import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/PhotoGallery.css';
const PhotoGallery = ({ language, onBack }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const galleryImages = {
        'campus-life': [
            '/img/gallery/imag2.jpg',
            '/img/gallery/IN18312e1.jpg',
            '/img/campus-life/e2.jpg',
            '/img/campus-life/e3.jpg',
            '/img/campus-life/e4.jpg',
            '/img/campus-life/e5.jpg',
            '/img/campus-life/e6.jpg',
            '/img/campus-life/e7.jpg',
            '/img/campus-life/e8.jpg',
            '/img/campus-life/e9.jpg',
            '/img/campus-life/e10.jpg',
            '/img/campus-life/e11.jpg',
            '/img/campus-life/e12.jpg',
            '/img/campus-life/e13.jpg',
            '/img/campus-life/e14.jpg',
            '/img/campus-life/e15.jpg'
        ],
        'sports-events': [
            '/img/sports-events/football.png',
            '/img/sports-events/image-1773141913736.png',
            '/img/sports-events/image-1773141919971.png',
            '/img/sports-events/image-1773141929953.png',
            '/img/sports-events/image-1773141968847.png',
            '/img/sports-events/image-1773141988130.png',
            '/img/sports-events/image-1773141995406.png',
            '/img/sports-events/kho kho women.png',
            '/img/sports-events/table-tennis-women.jpg',
            '/img/sports-events/Volleyball Men.png',
            '/img/sports-events/volleyball-women-kashmir.png',
            '/img/sports-events/women atheletic.png'
        ],
        'events': [
            '/img/e16.jpg',
            '/img/e17.jpg',
            '/img/e18.jpg',
            '/img/e19.jpeg',
            '/img/e20.jpg',
            '/img/e21.jpg',
            '/img/e22.jpg',
            '/img/e23.jpeg',
            '/img/e24.jpeg',
            '/img/e25.jpeg',
            '/img/e26.jpeg',
            '/img/e27.jpg',
            '/img/e28.jpg',
            '/img/e29.jpg',
            '/img/e30.jpg',
            '/img/e31.jpg',
            '/img/e32.jpg',
            '/img/e33.jpg',
            '/img/e34.jpg',
            '/img/e35.jpg',
            '/img/e36.jpg',
            '/img/e37.jpg',
            '/img/e38.jpg',
            '/img/e39.png',
            '/img/e40.jpeg',
            '/img/e41.jpeg',
            '/img/e42.jpg',
            '/img/e44.jpg',
            '/img/e45.jpeg',
            '/img/e46.jpg',
            '/img/e47.jpg',
            '/img/e49.jpg',
            '/img/e50.jpeg',
            '/img/e51.jpeg',
            '/img/e52.jpg',
            '/img/e53.jpg',
            '/img/e54.jpg',
            '/img/e55.jpg',
            '/img/e56.jpg'
        ],
        'sports': [
            '/img/sports.jpg.png',
            '/img/sports.png',
            '/img/sport_img/31.jpg',
            '/img/sport_img/32.jpg',
            '/img/sport_img/33.jpg',
            '/img/sport_img/34.jpg',
            '/img/sport_img/35.jpg',
            '/img/sport_img/36.jpg'
        ],
        'team': [
            '/img/team/2021091523.png',
            '/img/team/43.jpeg'
        ],
        'testimonials': [
            '/img/testimonials/test 1 img.jpg',
            '/img/testimonials/test2img.jpg'
        ]
    };
    const content = {
        en: {
            title: 'Photo Gallery',
            subtitle: 'Campus Life & Events',
            description: 'Explore our vibrant campus through our comprehensive photo gallery showcasing student activities, events, and campus facilities.',
            categories: [
                {
                    id: 'campus-life',
                    name: 'Campus Life',
                    icon: '🏫',
                    count: `${galleryImages['campus-life'].length} Photos`,
                    description: 'Daily campus activities and student life'
                },
                {
                    id: 'sports-events',
                    name: 'Sports Events',
                    icon: '⚽',
                    count: `${galleryImages['sports-events'].length} Photos`,
                    description: 'Sports competitions and athletic events'
                },
                {
                    id: 'events',
                    name: 'Events',
                    icon: '🎭',
                    count: `${galleryImages['events'].length} Photos`,
                    description: 'Festivals, performances, and cultural celebrations'
                },
                {
                    id: 'sports',
                    name: 'Sports',
                    icon: '🏆',
                    count: `${galleryImages['sports'].length} Photos`,
                    description: 'Sports activities and competitions'
                },
                {
                    id: 'team',
                    name: 'Team',
                    icon: '👥',
                    count: `${galleryImages['team'].length} Photos`,
                    description: 'Our faculty and staff members'
                },
                {
                    id: 'testimonials',
                    name: 'Testimonials',
                    icon: '💬',
                    count: `${galleryImages['testimonials'].length} Photos`,
                    description: 'Student testimonials and feedback'
                }
            ],
            backToCategories: '← Back to Categories',
            contact: 'Browse our extensive photo gallery to see campus highlights'
        },
        hi: {
            title: 'फोटो गैलरी',
            subtitle: 'परिसर जीवन और कार्यक्रम',
            description: 'छात्र गतिविधियों, कार्यक्रमों और परिसर सुविधाओं को प्रदर्शित करने वाली हमारी व्यापक फोटो गैलरी के माध्यम से हमारे जीवंत परिसर का अन्वेषण करें।',
            categories: [
                {
                    id: 'campus-life',
                    name: 'परिसर जीवन',
                    icon: '🏫',
                    count: `${galleryImages['campus-life'].length} फोटो`,
                    description: 'दैनिक परिसर गतिविधियां और छात्र जीवन'
                },
                {
                    id: 'sports-events',
                    name: 'खेल कार्यक्रम',
                    icon: '⚽',
                    count: `${galleryImages['sports-events'].length} फोटो`,
                    description: 'खेल प्रतियोगिताएं और एथलेटिक कार्यक्रम'
                },
                {
                    id: 'events',
                    name: 'कार्यक्रम',
                    icon: '🎭',
                    count: `${galleryImages['events'].length} फोटो`,
                    description: 'त्योहार, प्रदर्शन और सांस्कृतिक समारोह'
                },
                {
                    id: 'sports',
                    name: 'खेल',
                    icon: '🏆',
                    count: `${galleryImages['sports'].length} फोटो`,
                    description: 'खेल गतिविधियां और प्रतियोगिताएं'
                },
                {
                    id: 'team',
                    name: 'टीम',
                    icon: '👥',
                    count: `${galleryImages['team'].length} फोटो`,
                    description: 'हमारे संकाय और कर्मचारी सदस्य'
                },
                {
                    id: 'testimonials',
                    name: 'प्रशंसापत्र',
                    icon: '💬',
                    count: `${galleryImages['testimonials'].length} फोटो`,
                    description: 'छात्र प्रशंसापत्र और प्रतिक्रिया'
                }
            ],
            backToCategories: '← श्रेणियों में वापस',
            contact: 'परिसर के मुख्य आकर्षण देखने के लिए हमारी व्यापक फोटो गैलरी ब्राउज़ करें'
        }
    };
    const data = content[language];
    const handleViewPhotos = (categoryId) => {
        setSelectedCategory(categoryId);
    };
    const handleBackToCategories = () => {
        setSelectedCategory(null);
    };
    if (selectedCategory) {
        const categoryImages = galleryImages[selectedCategory];
        const categoryData = data.categories.find(cat => cat.id === selectedCategory);
        return (_jsxs("div", { className: "gallery-page", children: [_jsxs("div", { className: "gallery-header", children: [_jsx("button", { className: "back-button", onClick: handleBackToCategories, children: data.backToCategories }), _jsx("h1", { children: categoryData?.name }), _jsx("p", { className: "gallery-subtitle", children: categoryData?.description })] }), _jsx("div", { className: "gallery-container", children: _jsx("div", { className: "photos-grid", children: categoryImages.map((image, index) => (_jsx("div", { className: "photo-item", children: _jsx("img", { src: image, alt: `${categoryData?.name} ${index + 1}`, loading: "lazy" }) }, index))) }) })] }));
    }
    return (_jsxs("div", { className: "gallery-page", children: [_jsxs("div", { className: "gallery-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "gallery-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "gallery-container", children: [_jsx("div", { className: "gallery-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "categories-section", children: [_jsx("h2", { children: "Photo Categories" }), _jsx("div", { className: "categories-grid", children: data.categories.map((category, index) => (_jsxs("div", { className: "category-card", children: [_jsx("div", { className: "category-icon", children: category.icon }), _jsx("h3", { children: category.name }), _jsx("p", { className: "count", children: category.count }), _jsx("p", { className: "description", children: category.description }), _jsx("button", { className: "view-btn", onClick: () => handleViewPhotos(category.id), children: "View Photos" })] }, index))) })] })] })] }));
};
export default PhotoGallery;
//# sourceMappingURL=PhotoGallery.js.map