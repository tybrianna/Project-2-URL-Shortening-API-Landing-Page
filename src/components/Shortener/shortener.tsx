import { useState } from "react";
import { shortenUrl } from "../API/api";
import type { ShortenedLink } from "../../types";
import "./Shortener.css";

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState<ShortenedLink[]>([]);
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url) return;

    try {
      setLoading(true);

      const data = await shortenUrl(url);

      setLinks((prev) => [data, ...prev]);

      setUrl("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async (link: string) => {
    await navigator.clipboard.writeText(link);
  };

  return (
    <section className="shortener-section">
      <div className="shortener-box">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={handleShorten}>
          {loading ? "Loading..." : "Shorten It!"}
        </button>
      </div>

      <div className="links-container">
        {links.map((item) => (
          <div key={item.id} className="link-card">
            <p>{item.long_url}</p>

            <div className="short-link">
              <a href={item.link} target="_blank">
                {item.link}
              </a>

              <button onClick={() => copyLink(item.link)}>Copy</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shortener;