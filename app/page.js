import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import Link from 'next/link';

async function getWeather(city) {
  const key = process.env.NEXT_PUBLIC_WEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;

  const res = await fetch(url);
  if (!res.ok) return null;
  return res.json();
}

export default async function Home({ searchParams }) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query;

  let weatherData = null;
  if (query) {
    weatherData = await getWeather(query);
  }

  return (
    <main className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8257e5' }}>WeatherNow</h1>

      <SearchBar />

      {weatherData ? (
        <WeatherCard weather={weatherData} isDetailed={false} />
      ) : query ? (
        <div className="card" style={{ textAlign: 'center' }}>Cidade não encontrada. Tente novamente.</div>
      ) : (
        <div className="card" style={{ textAlign: 'center', color: '#a8a8b3' }}>
          Faça uma busca para ver o clima atual.
        </div>
      )}

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/sobre" style={{ color: '#a8a8b3', textDecoration: 'underline' }}>Sobre o projeto</Link>
      </div>
    </main>
  );
}