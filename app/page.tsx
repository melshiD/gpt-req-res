import React from 'react'
import { SunIcon } from '@heroicons/react/24/outline'
import { BoltIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center text-white h-auto mb-7 md:h-screen md:overflow-hidden">
            <h1 className="text-5xl font-bold text-center mb-20 p-2 bg-[#343541] leading-tight">ChatGPT Assignment Portal</h1>

            <div className="flex flex-col sm:flex-row space-x-2 text-center">
                <div>
                    <div className="sm: px-3">
                        <div className="flex flex-col items-center justify-center mb-5">
                            <SunIcon className="h-8 w-8" />
                            <h2 className="text-3xl">Examples</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="infoText">Explain Something to Me.</p>
                            <p className="infoText">How can a toddler make it to the moon?</p>
                            <p className="infoText">What is the best angle of approach for launching myself to the moon?</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sm: px-3">
                        <div className="flex flex-col items-center justify-center mb-5">
                            <BoltIcon className="h-8 w-8" />
                            <h2 className="text-3xl">Capabilities</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="infoText">Select between different models.</p>
                            <p className="infoText">Messages are stored to Firebase database</p>
                            <p className="infoText">Includes Toast notifications</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sm: px-3">
                        <div className="flex flex-col items-center justify-center mb-5">
                            <ExclamationTriangleIcon className="h-8 w-8" />
                            <h2 className="text-3xl">Limitations</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="infoText">May generate rubbish.  User is at pains to fact-check, as always</p>
                            <p className="infoText">May occasionally produce wrong or harmful instructions</p>
                            <p className="infoText">Stopped reading the internet in late 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage