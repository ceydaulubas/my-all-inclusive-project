export interface NavItem {
  title: string;
  icon: JSX.Element;
  path: string;
}

export interface DailyNewsData {
  title: string;
  url: string;
}

export interface Quote {
  quote: string;
  author: string;
}

export interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
}

export interface BackgroundQuteImage {
  id: number;
  title: string;
  url: string;
}