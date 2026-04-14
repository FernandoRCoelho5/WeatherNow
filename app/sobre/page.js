import Link from 'next/link';

export default function Sobre() {
    return (
        <main className="container">
            <Link href="/" className="link-back">
                &larr; Voltar para a busca
            </Link>

            <div className="card">
                <h1 style={{ color: '#8257e5', marginTop: 0 }}>Sobre o WeatherNow</h1>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                    O WeatherNow é um mini portal de previsão do tempo desenvolvido como Trabalho Prático para a disciplina de Programação e Design para Web II. A aplicação consome a API do OpenWeatherMap para exibir dados climáticos em tempo real.
                </p>

                <h2 style={{ marginTop: '2rem' }}>Dados do Aluno</h2>
                <ul style={{ listStyle: 'none', padding: 0, color: '#e1e1e6', lineHeight: '1.8' }}>
                    <li><strong>Nome:</strong> Fernando Ramos Coelho</li>
                    <li><strong>Matrícula:</strong> [2511560991002]</li>
                    <li><strong>Curso:</strong> Sistemas Para Internet </li>
                </ul>
            </div>
        </main>
    );
}