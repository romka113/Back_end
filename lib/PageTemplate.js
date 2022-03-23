class PageTemplate {
  constructor() {}
  headHtml() {
    return ` <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Node.js Server</title>
                </head>`;
  }

  headerHTML() {
    return `<header>
                <img src='#' alt="Logo">
                <nav>
                    <a href='/'''>Home</a>
                    <a href='/blog'>Blog</a>
                    <a href='/register'>Register</a>
                    <a href='/login'>Login</a>
                 </nav>
             </header>       `;
  }
  footerHTML() {
    return `<footer>Copyright &copy; 2022</footer>`;
  }
  nainHTML() {
    return `Default Page Content`;
  }

  render() {
    return `<!DOCTYPE html>
            <html lang="en">
           ${this.headHtml()}
            <body>
                ${this.headerHTML()}
                <main>
                ${this.mainHTML()}
                </main>
                ${this.footerHTML()}
            </body>
            </html>
            `;
  }
}
export { PageTemplate };
