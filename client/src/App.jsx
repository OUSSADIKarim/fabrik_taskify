import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import NotFound from "./pages/NotFound"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/projects" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </QueryClientProvider>
  )
}

export default App
