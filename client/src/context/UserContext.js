import { createContext } from "react";

const UserContext = createContext();

export const { Provider, Consumer } = UserContext;
export default UserContext;
