import s from "./app.module.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Widgets from "./components/Widgets/Widgets";
function App() {
  return (
    <>
      <div className={s.container}>
        <Header />
        <Content />
        <Widgets/> 
      </div>
    </>
  );
}

export default App;
