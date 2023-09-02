import { useGlobalContext } from './Context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};
export default Home;
