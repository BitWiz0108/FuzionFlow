import React, { useEffect, useState } from "react";

type RSSFeedItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

const RSSFeedComponent: React.FC = () => {
  const [feedItems, setFeedItems] = useState<RSSFeedItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchRSSFeed() {
      try {
        const response = await fetch("/path/to/rss/feed.xml"); // replace with your RSS feed URL
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");

        const items = Array.from(xml.querySelectorAll("item")).map((item) => ({
          title: item.querySelector("title")?.textContent || "",
          link: item.querySelector("link")?.textContent || "",
          pubDate: item.querySelector("pubDate")?.textContent || "",
          description: item.querySelector("description")?.textContent || "",
        }));
        setFeedItems(items);
      } catch (error) {
        console.error("Failed to fetch RSS feed", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRSSFeed();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
      {feedItems.map((item, index) => (
        <div key={index} className="border-b pb-4 last:border-b-0">
          <a
            href={item.link}
            className="text-blue-500 hover:text-blue-700 font-semibold text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
          <p className="text-gray-500 text-sm">{new Date(item.pubDate).toLocaleDateString()}</p>
          <div
            className="text-gray-800 mt-2"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </div>
  );
};

export default RSSFeedComponent;
