import React from 'react';
import TopTemplate from './TopTemplate';

const TopverkopersDrank = () => {
    return (
        <div>
            {/* Top Performers */}
            <TopTemplate
                topTitle="Topverkopers"
                topSubtitle="Drank"
                topItems={[
                    { name: 'Stella Artois', sales: 4898 },
                    { name: 'Coca-Cola', sales: 3828 },
                    { name: 'Fanta', sales: 6003 },
                    { name: 'Aperol Spritz', sales: 3015 },
                    { name: 'Schweppes', sales: 8186 },
                ]}
                bottomTitle="Onderpresteerders"
                bottomSubtitle="Drank"
                bottomItems={[
                    { name: 'Heineken', sales: 160 },
                    { name: 'Fanta Cherry', sales: 161 },
                    { name: 'Red Bull', sales: 265 },
                    { name: 'Choco melk', sales: 561 },
                    { name: 'Sprite', sales: 366 },
                ]}
            />
        </div>
    );
};

export default TopverkopersDrank;
