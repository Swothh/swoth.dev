import Logo from '../Global/Logo';

export default function Footer() {
    return (
        <div className="w-full px-5 pb-5 pt-16">
            <div className="max-w-screen-lg mx-auto w-full">
                <div className="flex items-center space-x-5">
                    <div className="flex-1 h-px bg-white/20" />
                    <Logo />
                    <div className="flex-1 h-px bg-white/20" />
                </div>
                <div className="hidden sm:flex my-3 items-center justify-between">
                    <h1 className="text-white">Copyright &copy; 2019-{new Date().getFullYear()}</h1>
                    <h1 className="text-white">Developed with <i className="fas fa-heart mx-0.5" /> by Swôth</h1>
                </div>
                <div className="sm:hidden my-3 flex flex-col items-center justify-center">
                    <h1 className="text-white">Copyright &copy; 2019-{new Date().getFullYear()}</h1>
                    <h1 className="text-white">Developed with <i className="fas fa-heart mx-0.5" /> by Swôth</h1>
                </div>
            </div>
        </div>
    );
};