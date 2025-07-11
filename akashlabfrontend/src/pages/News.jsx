import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { sectionheader } from "../constants/constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiSkNCQVNNUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENJT0NBUWFDZ29JTDIwdk1ETnliSFFxQ2hJSUwyMHZNRE55YkhRb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENnQVABUAE&limit=10&country=US&lang=en",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
            "x-rapidapi-key":
              "9a9fa06f13msh6d5fcbd479c3473p19c96fjsn894acea3391a",
          },
        }
      );
      const data = await response.json();
      setArticles(data.data || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div id="news" className="p-6 scroll-mt-24 bg-gray-50">
      <SectionHeader
        title={sectionheader[3].title}
        subtitle={sectionheader[3].subtitle}
      />
      {loading ? (
        <p className="text-center text-gray-500 text-lg">
          Loading latest news...
        </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-12">
          {articles.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-3"
                >
                  <h3 className="text-lg font-bold text-gray-800 hover:text-orange-600 transition line-clamp-3">
                    {item.title}
                  </h3>
                </a>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-orange-500 hover:underline flex items-center gap-1"
                >
                  Read More <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
