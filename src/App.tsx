import { useEffect, useState } from "react";
import SidebarNav from "./SidebarNav";
import { Menu } from "lucide-react";
import useMediaQuery from "./hooks/useMediaQuery";

const MIN_WIDTH = 768;
const MEDIA_QUERY = `(min-width: ${MIN_WIDTH}px)`;
function App() {
  const [isOpen, setIsOpen] = useState(() => {
    return window.matchMedia(MEDIA_QUERY).matches;
  });

  const isDesktop = useMediaQuery(MEDIA_QUERY);

  useEffect(() => setIsOpen(isDesktop), [isDesktop]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="h-10 p-4">
        <button
          onClick={handleOpen}
          className="md:hidden relative after:content-[''] after:-inset-3 after:absolute"
        >
          <Menu color="white"></Menu> <span className="sr-only">Open Menu</span>
        </button>
      </header>
      <SidebarNav
        isOpen={isOpen}
        isDesktop={isDesktop}
        handleClose={handleClose}
      />
      <main className="flex items-center justify-center md:ml-[var(--sidebar-width)] h-[calc(100dvh-40px)]">
        <h1 className="text-white">Main Content</h1>
      </main>
    </>
  );
}

export default App;
