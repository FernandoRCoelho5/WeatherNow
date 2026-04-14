'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [city, setCity] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim() !== '') {
            router.push(`/?query=${encodeURIComponent(city)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} style={{ display: 'flex', marginBottom: '2rem' }}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Digite o nome da cidade..."
                className="input-dark"
                required
            />
            <button type="submit" className="btn-primary">Buscar</button>
        </form>
    );
}