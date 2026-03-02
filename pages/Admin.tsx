import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const Admin: React.FC = () => {
    const [heroData, setHeroData] = useState({ title: '', subtitle: '', description: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchHero = async () => {
            const { data } = await supabase.from('site_content').select('content').eq('page_section', 'hero').single();
            if (data && data.content) {
                setHeroData(data.content);
            }
        };
        fetchHero();
    }, []);

    const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHeroData({ ...heroData, [e.target.name]: e.target.value });
    };

    const saveHero = async () => {
        setLoading(true);
        setMessage('');

        // First check if it exists
        const { data: existing } = await supabase.from('site_content').select('id').eq('page_section', 'hero').single();

        let error;
        if (existing) {
            const { error: updateError } = await supabase.from('site_content').update({ content: heroData }).eq('page_section', 'hero');
            error = updateError;
        } else {
            const { error: insertError } = await supabase.from('site_content').insert({ page_section: 'hero', content: heroData });
            error = insertError;
        }

        if (error) {
            setMessage('Error saving data.');
            console.error(error);
        } else {
            setMessage('Hero section saved successfully!');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
            <div className="w-full max-w-4xl p-4 flex justify-between items-center bg-white rounded-lg shadow-sm mb-6">
                <h1 className="text-2xl font-bold text-royal">Site Administration</h1>
                <a href="/" className="text-royal underline text-sm">View Site</a>
            </div>

            <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-8">
                <h2 className="text-xl font-semibold mb-6 text-royal border-b pb-2">Edit Hero Section</h2>

                {message && (
                    <div className={`p-4 mb-6 rounded ${message.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                        {message}
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={heroData.title}
                            onChange={handleHeroChange}
                            className="w-full border border-gray-300 rounded p-2 focus:ring-gold focus:border-gold outline-none"
                            placeholder="Welcome to the Place of"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                        <input
                            type="text"
                            name="subtitle"
                            value={heroData.subtitle}
                            onChange={handleHeroChange}
                            className="w-full border border-gray-300 rounded p-2 focus:ring-gold focus:border-gold outline-none"
                            placeholder="Your Inheritance"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={heroData.description}
                            onChange={handleHeroChange}
                            rows={4}
                            className="w-full border border-gray-300 rounded p-2 focus:ring-gold focus:border-gold outline-none"
                            placeholder="Raising generations..."
                        />
                    </div>
                </div>

                <button
                    onClick={saveHero}
                    disabled={loading}
                    className="mt-6 px-6 py-2 bg-royal text-white rounded hover:bg-royal-light transition-colors font-medium disabled:opacity-50"
                >
                    {loading ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </div>
    );
};

export default Admin;
