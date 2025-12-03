import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CATEGORIES = [
  { id: 'women', name: 'Женские', emoji: '👠', gradient: 'from-pink-500 to-purple-500' },
  { id: 'femboy', name: 'Фембои', emoji: '💕', gradient: 'from-blue-500 to-pink-500' },
  { id: 'stockings', name: 'Чулки', emoji: '🧦', gradient: 'from-purple-500 to-indigo-500' },
  { id: 'tights', name: 'Колготки', emoji: '✨', gradient: 'from-fuchsia-500 to-pink-500' },
];

const SAMPLE_IMAGES = [
  { id: 1, category: 'women', title: 'Белые гольфы на диване', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/3361773f-79ea-4110-b68b-b3a0994473c1.jpg' },
  { id: 2, category: 'women', title: 'Чёрные чулки до бедра', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/9ca9d2ae-4960-43d6-a463-7343e1e63ce1.jpg' },
  { id: 3, category: 'women', title: 'Розовые полосатые', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/5e319d36-dffb-4662-b996-792471e313aa.jpg' },
  { id: 4, category: 'stockings', title: 'Чёрные чулки', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/bcd47ab3-728d-4317-96e5-47adf755fbbc.jpg' },
  { id: 5, category: 'women', title: 'Белые рифлёные', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/ed3a11fb-ab19-4ccf-bed3-19aec143d163.jpg' },
  { id: 6, category: 'stockings', title: 'Красные чулки', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/cdd95a7c-b6c6-4d7f-97c2-02c5e9133814.jpg' },
  { id: 7, category: 'tights', title: 'Синие гольфы', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/7f2b0bfe-c75c-42ba-8025-05ae857e97be.jpg' },
  { id: 8, category: 'tights', title: 'Фиолетовые полоски', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/171b313d-b04e-42bd-a676-822e52bb4394.jpg' },
  { id: 9, category: 'stockings', title: 'Чёрное кружево', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/093bc2dd-25a8-4a68-9aa2-d8d1008d1ce9.jpg' },
  { id: 10, category: 'women', title: 'Белые хлопковые', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/fece5195-8622-430d-8848-d73baea6d9b9.jpg' },
  { id: 11, category: 'stockings', title: 'Чёрная сетка', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/24e3ce51-9221-40fb-9c13-6fae4ff381f2.jpg' },
  { id: 12, category: 'women', title: 'Пастельно-розовые', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/c2b47dab-2cdb-472b-aad9-a83a17faa940.jpg' },
  { id: 13, category: 'tights', title: 'Радужные полоски', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/5676313a-db30-46e1-a1f9-15dde2746d0b.jpg' },
  { id: 14, category: 'tights', title: 'Чёрно-белые полоски', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/610df690-e3a0-4aa5-bb12-f6493e82e281.jpg' },
  { id: 15, category: 'stockings', title: 'Бордовые гольфы', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/9d92661b-ddf6-41a8-8343-b1aa0c4e7a31.jpg' },
  { id: 16, category: 'tights', title: 'Жёлтые гольфы', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/2da7401f-080b-48f5-8bd6-4adc365f8d25.jpg' },
  { id: 17, category: 'femboy', title: 'Чёрные чулки', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/981eb0ad-35b2-42b7-ae35-6e081ca12477.jpg' },
  { id: 18, category: 'femboy', title: 'Пастельные полоски', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/34284e8f-8f33-4ba0-b9f8-2a2c9b667e67.jpg' },
  { id: 19, category: 'tights', title: 'Зелёные гольфы', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/d34e2725-6f4b-49cb-a30c-95faa90fa647.jpg' },
  { id: 20, category: 'stockings', title: 'Белое кружево', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/637a8d2a-e80c-48e0-bd9d-d7e093ac55b8.jpg' },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [randomImage, setRandomImage] = useState<typeof SAMPLE_IMAGES[0] | null>(null);
  const [showRandom, setShowRandom] = useState(false);

  const filteredImages = activeCategory === 'all' 
    ? SAMPLE_IMAGES 
    : SAMPLE_IMAGES.filter(img => img.category === activeCategory);

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * SAMPLE_IMAGES.length);
    setRandomImage(SAMPLE_IMAGES[randomIndex]);
    setShowRandom(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
        
        <div className="relative container mx-auto px-4 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Foot Fetish Gallery
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Эстетика стиля, элегантности и красоты в каждой детали
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
              className="text-lg"
            >
              <Icon name="Sparkles" className="mr-2" />
              Все
            </Button>
            {CATEGORIES.map(cat => (
              <Button
                key={cat.id}
                size="lg"
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className="text-lg"
              >
                <span className="mr-2">{cat.emoji}</span>
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CATEGORIES.map((cat, idx) => (
              <Card
                key={cat.id}
                className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setActiveCategory(cat.id)}
              >
                <div className={`h-48 bg-gradient-to-br ${cat.gradient} flex items-center justify-center relative`}>
                  <div className="text-8xl animate-float">{cat.emoji}</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-center">{cat.name}</h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <Button
              size="lg"
              onClick={handleRandomClick}
              className="text-xl px-8 py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
            >
              <Icon name="Shuffle" className="mr-2" size={24} />
              Случайное фото
            </Button>
          </div>

          {showRandom && randomImage && (
            <div className="mb-16 animate-scale-in">
              <Card className="max-w-2xl mx-auto overflow-hidden border-2 border-primary">
                <img
                  src={randomImage.img}
                  alt={randomImage.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <h3 className="text-2xl font-bold gradient-text mb-2">{randomImage.title}</h3>
                  <Badge variant="secondary" className="text-sm">
                    {CATEGORIES.find(c => c.id === randomImage.category)?.name}
                  </Badge>
                </div>
              </Card>
            </div>
          )}

          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Галерея</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredImages.map((img, idx) => (
                <Card
                  key={img.id}
                  className="group overflow-hidden cursor-pointer border-2 hover:border-accent transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={img.img}
                      alt={img.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-white font-bold text-lg mb-1">{img.title}</h3>
                        <Badge variant="secondary">
                          {CATEGORIES.find(c => c.id === img.category)?.emoji}{' '}
                          {CATEGORIES.find(c => c.id === img.category)?.name}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}