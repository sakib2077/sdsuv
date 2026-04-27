import React from 'react';
import '../styles/NewsGallery.css';

interface NewsGalleryProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

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

const NewsGallery: React.FC<NewsGalleryProps> = ({ onBack }) => {
  return (
    <main className="news-gallery-page">
      <button className="news-gallery-home" type="button" onClick={onBack}>
        Home
      </button>

      <h1>News Gallery</h1>

      <div className="news-gallery-list">
        {newsItems.map((item) => (
          <section className="news-gallery-group" key={item.date}>
            <div className="news-gallery-date">
              <span>{item.date}</span>
            </div>

            <div className={`news-gallery-images news-gallery-count-${item.images.length}`}>
              {item.images.map((image) => (
                <img
                  key={image}
                  src={`/img/news-gallery/${image}`}
                  alt={`News clipping ${item.date}`}
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default NewsGallery;
