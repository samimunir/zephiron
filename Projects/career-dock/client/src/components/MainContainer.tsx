type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <main className="w-full h-[100vh] bg-zinc-900 p-8">{children}</main>;
};

export default MainContainer;
