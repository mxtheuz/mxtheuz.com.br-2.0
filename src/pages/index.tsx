import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Suport from "./components/Suport";

import axios from "axios"

export async function getServerSideProps() {
    const result = await axios("URL_FROM_GIST")     
    return {
        props: {
            skills: result.data.content
        }
    }
}

export default function Home(props: any) {
  
  return(
    <>
      <Header />
      <Main />
      <Skills skills={props.skills}/>
      <Projects />
      <Suport />
      <Footer />
    </>
  )
}
