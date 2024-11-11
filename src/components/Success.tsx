import React, { useState } from 'react';
import { Star, Search, ChevronDown } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
  tags: string[];
}

const stories: Story[] = [
  {
    id: 1,
    title: "From Couch to Marathon: My 12-Month Journey",
    author: "Jessica R.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80",
    excerpt: "When I first joined FitLife Studio, I couldn't run for 5 minutes. Now, I've completed my first marathon. Here's how I did it...",
    category: "Transformation",
    tags: ["Running", "Weight Loss", "Marathon Training"]
  },
  {
    id: 2,
    title: "Finding Balance: Yoga and Mindfulness",
    author: "David M.",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    excerpt: "Incorporating yoga and mindfulness into my daily routine has transformed not just my physical health but my mental well-being too...",
    category: "Wellness",
    tags: ["Yoga", "Mindfulness", "Mental Health"]
  },
  {
    id: 3,
    title: "Strength Training at 50+",
    author: "Patricia H.",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80",
    excerpt: "Age is just a number. Here's how I built strength and confidence through progressive training at FitLife Studio...",
    category: "Inspiration",
    tags: ["Strength Training", "Senior Fitness", "Aging Well"]
  }
];

export default function Success() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="success" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories of transformation and inspiration from our FitLife community
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stories..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="md:w-48 relative">
              <select
                className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white shadow-sm hover:shadow-md transition-all"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Transformation">Transformation</option>
                <option value="Wellness">Wellness</option>
                <option value="Inspiration">Inspiration</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <article key={story.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {story.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{story.author}</span>
                  <span>{story.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
