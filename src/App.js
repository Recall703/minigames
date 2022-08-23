import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/tailwind_full.css";


class App extends React.Component {
    render() {
        return (
            <div className="tw-w-9/12 tw-grid tw-grid-cols-2 tw-content-center tw-gap-4 tw-justify-center tw-mx-auto tw-my-auto">
                <div className="tw-col-span-2 tw-mx-auto">
                    Welcome to React Mini Game Project
                </div>
                <Link to="/tic-toc"

                >
                    <div className="tw-mx-auto tw-p-10 tw-border border-black tw-bg-gray-400 tw-shadow-xl">
                        Tic Toc
                    </div>
                </Link>
                <Link to="/number-guessing"
                      className=""
                >
                    <div className="tw-mx-auto tw-p-10 tw-border border-black tw-bg-blue-400 tw-shadow-xl">
                        Number Guessing
                    </div>
                </Link>

            </div>
        )
    }
}
export default App;