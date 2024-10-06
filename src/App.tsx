import { Element } from 'react-scroll';
import Header from './components/Header';
import BlockHowItWork from './components/BlockHowItWork';
import BlockThird from './components/BlockThird';
import BlockQuestionsAnswers from './components/BlockQuestionsAnswers';
import BlockForm from './components/BlockForm';
import BlockStart from './components/BlockStart';
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
