import {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CreateNotePage} from "./pages";

const App: FC = () => {
  return (
      <div>
        <Routes>
          <Route path={'/'} element={<MainLayout/>}></Route>
          <Route path={'/create'} element={<CreateNotePage/>}></Route>
        </Routes>
      </div>
  );
};

export {App};