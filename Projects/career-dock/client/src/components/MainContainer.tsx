type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default MainContainer;
