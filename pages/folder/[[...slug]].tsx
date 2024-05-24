import AddLinkBar from '@/components/AddLinkBar/AddLinkBar';
import FolderPageContent from '@/components/FolderPageContent/FolderPageContent';
import FolderToolBar from '@/components/FolderToolBar/FolderToolBar';
import LinkCardList from '@/components/LinkCardList/LinkCardList';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function Folder() {
  return (
    <>
      <AddLinkBar />
      <FolderPageContent>
        <SearchBar />
        <FolderToolBar />
        <LinkCardList />
      </FolderPageContent>
    </>
  );
}
