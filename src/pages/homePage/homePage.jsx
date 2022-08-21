import { useState } from "react";
import "./homePage.css";
import QRCode from "react-qr-code";
import LinkQRCode from "qrcode";
import Header from './../../components/header/header';

function HomePage() {
  const [linkQRCode, setLinkQRCode] = useState();
  const [link, setLink] = useState("");

  const handleGenerate = (link_url) => {
    LinkQRCode.toDataURL(
      link_url,
      {
        margin: 2,
        width: 500,
      },
      function (err, url) {
        setLinkQRCode(url);
      }
    );
  };

  const handleQrCode = (e) => {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="container-gerador-qrcode">
        <div className="titulo-gerador-qrcode">
          <h1>Gerador de QR Code</h1>
        </div>
        <input
          className="input-gerador-link"
          placeholder="Digite aqui..."
          onChange={(e) => handleQrCode(e)}
        />
        <div className="gerador-qrcode">
          <QRCode value={link} />
        </div>
        <a href={linkQRCode} download={`qrcode.png`}>
          Download
        </a>
      </div>
    </div>
  );
}

export default HomePage;
