import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const ContentfulComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const client = React.useMemo(() => createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
    }), []);

    useEffect(() => {
        client.getEntries()
            .then((response) => {
                setData(response.items);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [client]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {data.map((item) => (
                <div key={item.sys.id} className="p-4 border-b">
                    <h2 className="text-xl font-bold">{item.fields.title}</h2>
                    <p>{item.fields.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ContentfulComponent;