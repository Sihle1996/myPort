import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {children}
    </div>
  );
};

export default Layout;
