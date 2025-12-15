const Loader = () => {
  return (
    <div className="loader">
      <div style={{ "--i": 1, "--inset": "44%" } as React.CSSProperties} className="box">
        <div className="logo">
          <span className="text-2xl font-bold text-primary">SG</span>
        </div>
      </div>
      <div style={{ "--i": 2, "--inset": "40%" } as React.CSSProperties} className="box"></div>
      <div style={{ "--i": 3, "--inset": "36%" } as React.CSSProperties} className="box"></div>
      <div style={{ "--i": 4, "--inset": "32%" } as React.CSSProperties} className="box"></div>
      <div style={{ "--i": 5, "--inset": "28%" } as React.CSSProperties} className="box"></div>
      <div style={{ "--i": 6, "--inset": "24%" } as React.CSSProperties} className="box"></div>
      <div style={{ "--i": 7, "--inset": "20%" } as React.CSSProperties} className="box"></div>
      <div style={{ "--i": 8, "--inset": "16%" } as React.CSSProperties} className="box"></div>
    </div>
  );
};

export default Loader;