import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.tsx'
import { Provider } from 'react-redux'
import store from './redux/app/store.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
)
