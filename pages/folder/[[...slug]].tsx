import AddLinkBar from '@/components/AddLinkBar/AddLinkBar';
import FolderPageContent from '@/components/FolderPageContent/FolderPageContent';
import FolderToolBar from '@/components/FolderTo/FolderToolBar';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function Folder() {
  return (
    <>
      <AddLinkBar />
      <FolderPageContent>
        <SearchBar />
        <FolderToolBar />
      </FolderPageContent>
    </>
  );
}
