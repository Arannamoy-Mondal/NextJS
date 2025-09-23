import React from 'react';

const CatchAllRoute = async ({ params }: { params: { slug: string[] } }) => {
    const { slug } = params
    return (
        <div>
            {slug.map((sl, index) => (
                <h1 key={index}>{sl}</h1>
            ))}
        </div>
    );
};

export default CatchAllRoute;