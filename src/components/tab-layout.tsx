import { useState } from 'react';
import { TABS } from '../lib/constants';
import { twMerge } from 'tailwind-merge';

export default function TabLayout() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <>
            <ul className="mt-8 sm:mt-12 flex items-center gap-2">
                {TABS.map(tab =>
                    <li key={tab}>
                        <button type='button' 
                            className={twMerge(
                                "py-1.5 px-4 size-fit text-sm text-zinc-600 hover:text-zinc-900 bg-transparent rounded-full",
                                activeTab === tab && "text-white bg-zinc-900"
                            )}>
                            {tab}
                        </button>
                    </li>
                )}
            </ul>

            <div className="mt-8">
                <h2 className="text-lg font-semibold text-zinc-900">{activeTab}</h2>
            </div>
        </>
    );
}
