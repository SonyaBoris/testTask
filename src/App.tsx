import { Element } from 'react-scroll';
import Header from './components/Header';
import BlockHowItWork from './pages/BlockHowItWork';
import BlockThird from './pages/BlockThird';
import BlockQuestionsAnswers from './pages/BlockQuestionsAnswers';
import BlockForm from './pages/BlockForm';
import BlockStart from './pages/BlockStart';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Element name="BlockStart" className="element">
          <BlockStart />
        </Element>
        <Element name="BlockHowItWork" className="element">
          <BlockHowItWork />
        </Element>
        <Element name="BlockThird" className="element">
          <BlockThird />
        </Element>
        <Element name="BlockQuestionsAnswers" className="element">
          <BlockQuestionsAnswers />
        </Element>
        <Element name="BlockForm" className="element">
          <BlockForm />
        </Element>
      </main>
      <Footer />
    </>
  );

};

export default App
