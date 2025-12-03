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
  { id: 1, category: 'women', title: 'Пяточки в черных чулках', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/4aeb4bf2-0192-43ee-84e6-645a265d375b.jpg' },
  { id: 2, category: 'women', title: 'Белое кружево', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/76b03220-c2fa-4623-9859-3ffb5d9cf039.jpg' },
  { id: 3, category: 'stockings', title: 'Шёлковые чулки', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/2755ad81-f7d9-44df-90fa-307eadfbb1ae.jpg' },
  { id: 4, category: 'tights', title: 'Цветные колготки', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/cc13fc52-90db-4f78-a533-d1ec7a3eec4c.jpg' },
  { id: 5, category: 'tights', title: 'Прозрачные черные', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/7959caac-e963-4a62-b41f-12634f34cf29.jpg' },
  { id: 6, category: 'stockings', title: 'Красная сетка', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/8af33a9c-484d-41bb-9bbe-3dc8864ff044.jpg' },
  { id: 7, category: 'femboy', title: 'Черные чулки', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/873fc15e-2384-433c-8f0b-68312bfa2c80.jpg' },
  { id: 8, category: 'femboy', title: 'Розовые гольфы', img: 'https://cdn.poehali.dev/projects/c71520f7-2b26-4da1-8ee7-7ad9133d27c9/files/7b585d4e-579d-47cd-b77b-84117398f07d.jpg' },
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