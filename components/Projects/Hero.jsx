export default function Hero() {
    return (
        <div className="w-full pt-10 pb-5 px-5">
            <div className="max-w-screen-lg mx-auto w-full flex items-center space-x-3">
                <div className="select-none w-10 h-10 flex items-center justify-center">
                    <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 fas fa-circle-bolt text-4xl" />
                </div>
                <h1 className="text-2xl text-white font-bold">Projects</h1>
            </div>
        </div>
    );
};