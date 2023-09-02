import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const AppProvider = (props) => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsMOdalOpen] = useState(false);

  const openSideBar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsMOdalOpen(true);
  };

  const closeModal = () => {
    setIsMOdalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openSideBar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
