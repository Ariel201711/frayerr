import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { Explore } from './pages/explore.jsx'
import { ReviewApp } from './pages/review-app.jsx'
import { ChatApp } from './pages/chat-app.jsx'
import { AdminApp } from './pages/admin-app.jsx'
import { GigDetails } from './pages/gig-details.jsx'

// Routes accessible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    { 
        path: 'explore',
        component: <Explore/>, 
        label: 'Explore'
    },
    {
        path: "/explore/:gigId",
        component: <GigDetails/>,
        label: 'Gig Details'
      },
    {
        path: 'review',
        component: <ReviewApp />,
        label: 'Reviews'
    },
    {
        path: 'chat',
        component: <ChatApp />,
        label: 'Chat'
    },
    {
        path: 'about',
        component: <AboutUs />,
        label: 'About us'
    },
    {
        path: 'admin',
        component: <AdminApp />,
        label: 'Admin Only'
    }
]

export default routes