import { useState } from "react"
import Header from "./components/Header"
import Notifications from "./components/Notifications"
import { notifications as initialNotifications } from "./data/notifications"
import type { Notification } from "./types"

function App() {

    // Estado para manejar las notificaciones
    // useState se inicializa con los datos del archivo data
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
    // Contabilizar cuantas notificaciones no leidad hay
    const isRead = notifications.filter(n => !n.isRead).length

    // Marcar las notificaciones no leidas
    const markAllAsRead = () => {
        // Prev --> Estado anterior de las notificaciones
        // map --> Itera sobre cada notificacion y devuelve una notificacion
        // con isRead en true
        // n --> Notificacion con el estado anterior
        setNotifications(prev => prev.map(n => ({...n, isRead: true})))
    }

    return (
      <>
        <Header
          isRead={isRead}
          markAllAsRead={markAllAsRead}
        />
          <main className="flex flex-col gap-4 mx-auto max-w-2xl w-full mt-4 px-4">
              <ul className="flex flex-col gap-4">
                  {notifications.filter(n => !n.isRead).map(notification => (
                      <Notifications
                          key={notification.id}
                          {...notification}
                      />
                  ))}
              </ul>
              <ul className="flex flex-col gap-4">
                  {notifications.filter(n => n.isRead).map(notification => (
                      <Notifications
                          key={notification.id}
                          {...notification}
                      />
                  ))}
              </ul>
          </main>
      </>
    )
}

export default App
