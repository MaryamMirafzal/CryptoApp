import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>React js | Full page</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Maryam ❤</p>
      </footer>
    </>
  )
}

export default Layout