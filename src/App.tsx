import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import Navbar from './components/navbar'
import routes from './config/routes'
import AuthChecker from './auth/AuthChecker'

function App() {
  return (
    <HashRouter>
      <Navbar />
        <Provider store={ store }>      
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={ index }
                path={ route.path }
                element={
                  route.protected ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                  ) : (
                    <route.component />
                  )
                }>
              </Route>
            )) }
          </Routes>
        </Provider>
    </HashRouter>
  )
}

export default App
