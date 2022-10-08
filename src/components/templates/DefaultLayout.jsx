import { Footer } from '../atoms/layout/Footer';
import { Header } from '../atoms/layout/Header';

export const DefaultLayout = (props) => {
  const { children } = props;
  console.log(props);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
