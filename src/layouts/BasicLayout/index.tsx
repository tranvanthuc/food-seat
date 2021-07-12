import Header from '../components/Header';

const Index = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Index;
