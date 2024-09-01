import React, { useEffect, useState } from "react";
import { fetchDailyNews, fetchLocationData } from "../../api/index";

// Import the interfaces
import { DailyNewsData  } from '../../helper/interfaces';

// Import the styled components
import {
  DailyNewsContainer,
  DailyNewsHeader,
  DailyNewsList,
  StyledLoadingOutlined
} from "./DailyNews.styles";


export const DailyNews: React.FC = () => {
  const [dailyNewsData, setDailyNewsData] = useState<DailyNewsData[] | null>(
    null
  );
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get user's location
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } catch (error) {
        setError("Error fetching daily news:" + error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userLocation) {
      const fetchNewsByLocation = async () => {
        try {
          const { latitude, longitude } = userLocation;
          const locationData = await fetchLocationData(latitude, longitude);
          const countryCode = locationData.countryCode.toLowerCase();

          const data = await fetchDailyNews(countryCode);
          // Get titles and URLs of the first 5 dailyNewsData
          const dailyNewsData: DailyNewsData[] = data.articles
            .slice(0, 6)
            .map((article: any) => ({
              title: article.title,
              url: article.url,
            }));
          setDailyNewsData(dailyNewsData);
        } catch (error) {
          console.error("Error fetching daily news:", error);
        }
      };

      fetchNewsByLocation();
    }
  }, [userLocation]);

  const handleArticleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <DailyNewsContainer>
      <DailyNewsHeader>Local Daily News</DailyNewsHeader>
      {error ? (
        <div>
          <p>Oops! Something went wrong:</p>
          <p>{error}</p>
        </div>
      ) : (
        <>
          {dailyNewsData ? (
            <div>
              <h5>Top 5 News</h5>
              <ul>
                {dailyNewsData.map((article: any, index: number) => (
                  <div key={index}>
                    <DailyNewsList onClick={() => handleArticleClick(article.url)}>
                      {article.title}
                    </DailyNewsList>
                  </div>
                ))}
              </ul>
            </div>
          ) : (
            <StyledLoadingOutlined spin />
          )}
        </>
      )}
    </DailyNewsContainer>
  );
};
