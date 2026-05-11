import type { ShortenedLink } from "../../types";

const TOKEN = import.meta.env.VITE_BITLY_TOKEN;

export const shortenUrl = async (
  longUrl: string
): Promise<ShortenedLink> => {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: longUrl,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }

  return response.json();
};