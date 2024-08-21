import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SubView from '../components/SubView';
import MainPage from '../components/Main';
import SideBar from '../components/sidebar';
import TopBar from '../components/TopBar';

function OneBox() {
  const router = useRouter();
  const { token } = router.query;

  // Set the default selected component to '/inbox'
  const [selectedComponent, setSelectedComponent] = useState('/inbox');

  useEffect(() => {
    if (router.isReady) {
      const storedToken = localStorage.getItem('token');
      
      if (!token && !storedToken) {
        router.push('/login');
      } else if (token) {
        localStorage.setItem('token', `Bearer ${token}`);
        console.log('Token stored:', `Bearer ${token}`); // Debugging log
      }
    }
  }, [router.isReady, token, router]);
  

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div>
        {selectedComponent === '/search' && <SubView />}
        {selectedComponent === '/mail' && <SubView />}
        {selectedComponent === '/send' && <SubView />}
        {selectedComponent === '/stack' && <SubView />}
        {selectedComponent === '/inbox' && <MainPage />}
        {selectedComponent === '/stacks' && <SubView />}
      </div>
    </div>
  );
}

export default OneBox;
