import type { Notification } from "../types";

export default function Notifications({ id, picture, name, accion, typePost, isRead, time, image  } : Notification ) {

    return (
        <li
            className={`flex gap-4 py-4 px-4 rounded-lg cursor-pointer ${isRead ? 'bg-white' : 'bg-navy-50'}`}
        >
            <img
                src={`/images/${picture}`}
                alt={picture}
                className="w-10 h-10"
            />
            <div className="flex flex-col gap-1 flex-1">
                <p className="font-primary font-bold text-left text-navy-950 text-sm flex flex-wrap items-center gap-x-1">
                    <span>{name}</span>
                    <span className="font-medium text-gray-600">{accion}</span>
                    {typePost && <span className="font-bold text-blue-950">{typePost}</span>}
                    {!isRead && <span className="inline-block w-2 h-2 bg-red-500 rounded-full" />}
                </p>
                <p className="font-primary font-medium text-left text-gray-500 text-sm">{time}</p>
                {id === 4 &&
                    <div className="border border-navy-100 rounded-sm mt-2 p-4">
                        <p className="font-primary font-medium text-sm text-left text-gray-600">
                            Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.
                        </p>
                    </div>
                }
            </div>
            {id === 5 && image &&
                <img
                    src={`/images/${image}`}
                    alt={image}
                    className="w-11 h-11 rounded-md self-center"
                />
            }
        </li>
    )

}
