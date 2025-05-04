import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://api.frankfurter.app/latest?from=${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates); // ✅ Correct key to access exchange rates
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
