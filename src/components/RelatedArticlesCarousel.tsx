import * as React from "react";

type Article = {
  id: number;
  title: string;
  summary: string;
  image?: string;
  link: string;
};

type RelatedArticlesCarouselProps = {
  articles: Article[];
  heading?: string;
  className?: string;
};

export default function RelatedArticlesCarousel({
  articles,
  heading = "Related Articles",
  className = "",
}: RelatedArticlesCarouselProps) {
  return (
    <section className={`w-full py-12 px-6 bg-white ${className}`}>
      <h2 className="text-3xl font-bold text-cyan-800 mb-6">
        {heading}
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[300px] max-w-[300px] h-[420px] bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-60 object-cover"
                />
              )}
              <div className="p-4 h-[164px] max-w-[300px] flex flex-col justify-between overflow-hidden">
                <h3 className="text-lg font-semibold text-cyan-700 mb-3">
                  {article.title}
                </h3>
                <p className="text-sm h-[200px] max-w-[300px] text-gray-600 leading-relaxed line-clamp-3">
                  {article.summary}
                  </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}