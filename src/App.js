import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from "./components/Inputs";

function App() {
    //mx auto komutu ortalıyor
    //mt- komutu yukardan boşluk bıraktırıyor
    //py(padding) komutu genişlik kazandırıypr
    return (
    <div className="mx-auto max-w-screen-md mt-4 py-8 px-50 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"  >

    <TopButtons />
    <Inputs />

    </div>

    
    );
}

export default App;
