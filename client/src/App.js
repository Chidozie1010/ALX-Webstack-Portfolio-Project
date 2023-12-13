import './App.css';
import IndexPage from './pages/indexpage'
import PostPage from './pages/Postpage';
import LoginPage from './pages/loginpage'
import RegisterPage from './pages/registerpage'
import Layout from './components/layout'
import {Routes, Route} from 'react-router-dom'
import { UserContextProvider } from './userContext'
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <UserContextProvider >
      <Routes>
        <Route path="/" element ={<Layout />}>
          <Route index element={
            <IndexPage />
          } />
          <Route path={"/login"} element ={
              <LoginPage />
          } />
          <Route path={"/register"} element ={
              <RegisterPage />
          } />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/edit/:id' element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
