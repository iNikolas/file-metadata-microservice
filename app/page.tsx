import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>API Project: File Metadata Microservice</h1>
        <h2>Usage:</h2>
        <p>Please Upload a File ...</p>
        <div className="view">
          <h3 id="output"></h3>
          <form
            encType="multipart/form-data"
            method="POST"
            action="/api/fileanalyse"
          >
            <input id="inputfield" type="file" name="upfile" />
            <input id="button" type="submit" value="Upload" />
          </form>
        </div>
      </div>
      <div className="footer">
        <p>
          by{" "}
          <Link href="https://www.linkedin.com/in/nikolaj-lebed-570438207/">
            Mikola Lebid
          </Link>
        </p>
      </div>
    </>
  );
}
