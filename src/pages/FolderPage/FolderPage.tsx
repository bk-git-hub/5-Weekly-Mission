import { useEffect, useRef, useState } from 'react';
import FolderPage from '@components/FolderPageContent/FolderPageContent';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import AddLinkBar from '@components/AddLinkBar/AddLinkBar';

export default function App() {
  const addLinkBarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [showingBar, setShowingBar] = useState(true);
  const [showingFooter, setShowingFooter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const addLinkBarEntry = entries.find(
          (entry) => entry.target === addLinkBarRef.current
        );
        const footerEntry = entries.find(
          (entry) => entry.target === footerRef.current
        );

        if (footerEntry) {
          if (footerEntry.isIntersecting) {
            setShowingFooter(true);
          }
          if (!footerEntry.isIntersecting) {
            setShowingFooter(false);
          }
        }

        if (addLinkBarEntry) {
          if (addLinkBarEntry.isIntersecting) {
            setShowingBar(true);
          }
          if (!addLinkBarEntry.isIntersecting) {
            setShowingBar(false);
          }
        }
      },
      { threshold: 0 }
    );

    if (addLinkBarRef.current) {
      observer.observe(addLinkBarRef.current);
    }

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <AddLinkBar ref={addLinkBarRef} isFixed={false} />
      <FolderPage />
      {!showingBar && !showingFooter && <AddLinkBar isFixed={true} />}
      <Footer ref={footerRef} />
    </>
  );
}
