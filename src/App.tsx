import Header from "./components/Header"
import Notifications from "./components/Notifications"
import { notifications } from "./data/notifications"

function App(){

    return (
      <>
          <Header />
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
