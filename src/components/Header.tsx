
type HeaderProps = {
    isRead: number;
    markAllAsRead: () => void;
}

export default function Header({ isRead, markAllAsRead } : HeaderProps) {

    return (
        <header className="flex mx-auto max-w-2xl w-full px-4">
            <div className="flex gap-2">
                <h1 className="font-primary text-lg text-navy-950 text-left font-bold">
                    Notifications
                </h1>
                <h2 className="bg-blue-950 text-white rounded-sm w-8 h-6 text-left
                    font-primary font-bold text-sm flex items-center justify-center">
                    {isRead}
                </h2>
            </div>
            <button
                onClick={markAllAsRead}
                className="ml-auto font-primary text-gray-600 font-medium text-sm text-left cursor-pointer"
            >
                Mark all as read
            </button>
        </header>
    )

}
