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
                            onClick={() => setActiveTab(tab)}
                            className={twMerge(
                                "py-1.5 px-4 size-fit text-sm text-zinc-600 hover:text-sky-900 border border-transparent hover:border-sky-200/90 bg-transparent hover:bg-sky-100 hover:cursor-pointer rounded-full",
                                activeTab === tab && "text-sky-900 bg-linear-to-b from-sky-200/60 to-sky-200/80 inset-shadow-xs inset-shadow-white border border-sky-300/70"
                            )}>
                            {tab}
                        </button>
                    </li>
                )}
            </ul>

            <div className="mt-8">
                <h2 className="px-4 text-sm text-zinc-900">{activeTab}</h2>
            </div>
        </>
    );
}
