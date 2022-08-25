import { JobsContextProvider } from '../store/jobsContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <JobsContextProvider>
      <Component {...pageProps} />
    </JobsContextProvider>
  )
}

export default MyApp
