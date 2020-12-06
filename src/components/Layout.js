import react from "react";
import Header from "./Header";

export default function Layout ({children}) {
  return(
    <div className = "app-layout">
      <Header/>
      <section>{children}</section>
    </div>
  )
}
