import './globals.css';

export const metadata = {
  title: 'Blookahoot - Quiz Games Combined',
  description: 'Kahoot + Blooket style platform with exciting new game modes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header style={{textAlign: 'center', color: 'white', marginBottom: '30px'}}>
            <h1>Blookahoot</h1>
            <p>Quiz fun with Kahoot speed + Blooket games + brand new modes</p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
