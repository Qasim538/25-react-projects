import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>

      <div>
        <input 
        style={{marginBottom: "20px",
        height: "34px",
        width: "300px"
            }}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here!"
        />
        <button 
        style={{padding: "10px",
            cursor: "pointer"
    }}
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}>
          Generator
        </button>
      </div>
      <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
    </div>
  );
};

export default QrCodeGenerator;
