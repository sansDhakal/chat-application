import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const Settings = () => {
  const { settings, setSettings } = useContext(UserContext);

  const handleCurrencyChange = (e) => {
    setSettings({ ...settings, currency: e.target.value });
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Currency:
        <select value={settings.currency} onChange={handleCurrencyChange}>
          <option value="NRS">NRS</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
