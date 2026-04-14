import Link from 'next/link';

export default function WeatherCard({ weather, isDetailed }) {
    const weatherArray = weather?.weather || [];
    const weatherInfo = weatherArray || {};

    const iconCode = weatherInfo?.icon || '';
    const description = weatherInfo?.description || 'Clima indisponível';

    const getWeatherIcon = (code) => {
        if (!code) return '🌍';
        if (code.includes('01')) return code.includes('d') ? '☀️' : '🌙';
        if (code.includes('02')) return code.includes('d') ? '⛅' : '☁️';
        if (code.includes('03') || code.includes('04')) return '☁️';
        if (code.includes('09') || code.includes('10')) return '🌧️';
        if (code.includes('11')) return '⛈️';
        if (code.includes('13')) return '❄️';
        if (code.includes('50')) return '🌫️';
        return '🌡️';
    };

    const textIcon = getWeatherIcon(iconCode);

    return (
        <div className="card">
            <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>
                {weather?.name} {isDetailed && weather?.sys && `- ${weather.sys.country}`}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1rem' }}>
                {/* O Ícone de Emoji */}
                <div style={{ fontSize: '4rem', lineHeight: 1, filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.2))' }}>
                    {textIcon}
                </div>

                <div>
                    <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>
                        {weather?.main ? weather.main.temp : '--'}°C
                    </p>
                    <p style={{ margin: 0, color: '#a8a8b3', textTransform: 'capitalize', fontSize: '1.1rem' }}>
                        {description}
                    </p>
                </div>
            </div>

            <p><strong>Sensação Térmica:</strong> {weather?.main ? weather.main.feels_like : '--'}°C</p>

            {isDetailed && weather?.main && weather?.wind && (
                <>
                    <p><strong>Umidade:</strong> {weather.main.humidity}%</p>
                    <p><strong>Velocidade do Vento:</strong> {weather.wind.speed} m/s</p>
                </>
            )}

            {!isDetailed && (
                <Link href={`/cidade/${weather?.name}`} className="link-back" style={{ marginTop: '1rem' }}>
                    Ver mais detalhes &rarr;
                </Link>
            )}
        </div>
    );
}