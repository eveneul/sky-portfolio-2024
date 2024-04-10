import Home from "../pages/Home";
import { RouteType } from "../types/route";

const BASE_URL = "/sky-portfolio-2024/";

const RoutesData: RouteType[] = [
  {
    component: Home,
    path: `${BASE_URL}`,
  },
];
export default RoutesData;
