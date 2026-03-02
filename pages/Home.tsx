import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MinistryGrid from '../components/MinistryGrid';
import Partnership from '../components/Partnership';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

const Home: React.FC = () => {
    const [content, setContent] = useState<any>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const { data, error } = await supabase.from('site_content').select('*');
                if (error) {
                    console.error('Error fetching content:', error);
                } else if (data) {
                    const contentMap = data.reduce((acc: any, row: any) => {
                        acc[row.page_section] = row.content;
                        return acc;
                    }, {});
                    setContent(contentMap);
                }
            } catch (e) {
                console.error('Failed to fetch:', e);
            } finally {
                setLoading(false);
            }
        };
        fetchContent();
    }, []);

    return (
        <div className="min-h-screen bg-white text-royal font-montserrat selection:bg-gold selection:text-white">
            <Navbar />
            <main>
                {/* We pass the fetched data down. If it's missing, components should use fallbacks */}
                <Hero data={content['hero']} />
                <MinistryGrid data={content['ministries']} />
                <Partnership />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
