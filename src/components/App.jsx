import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NotFound from "pages/NotFound";
import { Layout } from "./Layout";
import { Cast }  from "./Cast";
import { Reviews } from "./Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId">
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
    
};
