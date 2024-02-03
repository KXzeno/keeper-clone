import Image from "next/image";

export default function Home() {
  return (
    <main>
      <html lang="en">
        <head>
          <title>Keeper App</title>
          <link
            href="https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="styles.css" />
        </head>

        <body>
          <div id="root"></div>
          <script src="../src/index.js" type="text/jsx"></script>
        </body>
      </html>
    </main>
  );
}
