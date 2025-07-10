import { useEffect, useState } from "react";

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
      //   console.log(data, "dfs");

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
    <div id="news" className="p-6 scroll-mt-10">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Latest Technology News
      </h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12">
          {articles.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold text-gray-600 hover:underline">
                  {item.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
