import type { Notification } from "../types";

export const notifications: Notification[] = [
    {
        id: 1,
        picture: 'mark-webber.webp',
        name: 'Mark Webber',
        accion: 'reacted to your recent post',
        typePost: 'My first tournament today!',
        time: '1m ago',
        isRead: false,
    },
    {
        id: 2,
        picture: 'angela-gray.webp',
        name: 'Angela Gray',
        accion: 'followed you',
        time: '5m ago',
        isRead: false,
    },
    {
        id: 3,
        picture: 'jacob-thompson.webp',
        name: 'Jacon Thompson',
        accion: 'has joined your group',
        typePost: 'Chess Club',
        time: '1 day ago',
        isRead: false,
    },
    {
        id: 4,
        picture: 'rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        accion: 'sent you a private message',
        time: '5 days ago',
        isRead: true,
        message: 'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.'
    },
    {
        id: 5,
        picture: 'kimberly-smith.webp',
        name: 'Kimberly Smith',
        accion: 'commented on your picture',
        time: '1 week ago',
        isRead: true,
        image: 'image-chess.webp'
    },
    {
        id: 6,
        picture: 'nathan-peterson.webp',
        name: 'Nathan Peterson',
        accion: 'reacted to your recent post',
        typePost: '5 end-game strategies to increase your win rate',
        time: '2 week ago',
        isRead: true,
    },
    {
        id: 7,
        picture: 'anna-kim.webp',
        name: 'Anna Kim',
        accion: 'left the group',
        typePost: 'Chess Club',
        time: '2 week ago',
        isRead: true,
    }
]
