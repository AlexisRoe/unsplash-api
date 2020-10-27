import './global.css';
import ImagePreview from './components/ImagePreview';
import Button from "./components/Button";

function App() {
    return (
        <main>
            <Button innerText={"Get Random Image"} className={"buttonRandom"} />
            <ImagePreview
                src={
                    'https://images.unsplash.com/photo-1603712482645-cbd7288bad08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
                }
                alt={'Whatever'}
                author={'no - - One'}
            />
        </main>
    );
}

export default App;
