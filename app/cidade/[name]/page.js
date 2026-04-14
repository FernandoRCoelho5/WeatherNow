import WeatherCard from '@/components/WeatherCard';
import Link from 'next/link';

async function getWeather(city) {
    const key = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Falha ao buscar os detalhes do clima');
    }
    return res.json();
}

export default async function CityDetails({ params }) {
    const resolvedParams = await params;
    const weatherData = await getWeather(resolvedParams.name);

    return (
        <main className="container">
            <Link href="/" className="link-back">
                &larr; Voltar para a busca
            </Link>

            <WeatherCard weather={weatherData} isDetailed={true} />
        </main>
    );
}