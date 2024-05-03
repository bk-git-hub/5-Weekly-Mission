import FolderPage from './pages/FolderPage/FolderPage';
import AddLinkBar from './components/AddLinkBar/AddLinkBar';
import { useRef } from 'react';

export default function App() {
  const addLinkBarRef = useRef(null);

  console.log(addLinkBarRef);
  return (
    <>
      <AddLinkBar ref={addLinkBarRef} />
      <FolderPage />
    </>
  );
}
