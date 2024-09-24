import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Project from './pages/Project/Project.js';
import NotFound from './pages/NotFound/NotFound.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import About from './pages/About/About.js';
import Newsletter from './pages/NewLetter/NewsLetter.js';
import DetailPost from './pages/Detail/DetailBlog.js';
import getRecentBlog from './axios/getRecentBlog.js';

const createAppContextGetData = {
  dataGetRecentBlog: [],
  isCheckTheme: false,
  handleOnclickchangeIsCheckTheme: () => {},
  page: 1,
  postsPerPage: 6,
  handleOnlickUpdatePageAndPostsPerPage: () => {}
};

export const contextApp = createContext(createAppContextGetData);

export const useGetData = () => {
  const [dataGetRecentBlog, setDataGetRecentBlog] = useState([]);
  const [isCheckTheme, setIsCheckTheme] = useState(false);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const handleOnclickchangeIsCheckTheme = () => {
    setIsCheckTheme(prevIsCheckTheme => !prevIsCheckTheme);
    console.log(isCheckTheme);
  };

  const handleOnlickUpdatePageAndPostsPerPage = (page, postsPerPage) => {
    setPage(page);
    setPostsPerPage(postsPerPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resquestRecentBlogs = await getRecentBlog();
        setDataGetRecentBlog(resquestRecentBlogs);
      } catch (error) {
        console.error('Error fetching recent blog data:', error);
      }
    };
    fetchData();
  }, [isCheckTheme]);

  return { dataGetRecentBlog, isCheckTheme, handleOnclickchangeIsCheckTheme, page, postsPerPage, handleOnlickUpdatePageAndPostsPerPage };
};

const App = () => {
  const dataContextApp = useGetData();

  return (
    <contextApp.Provider value={dataContextApp}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/about' element={<About />} />
            <Route path='/newsletter' element={<Newsletter />} />
            <Route path='/detailPosts/:idPost' element={<DetailPost />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </contextApp.Provider>
  );
};

export default App;
