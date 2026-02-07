import styles from "./HomePage.module.css";
import { DecodeResult, Form, DecodeHistory } from "../../components";
import { useVinDecoder } from "../../hooks/useVinDecoder";

const HomePage = () => {
  const { data, loading, error, decode, history } = useVinDecoder();

  const handleDecode = (vin: string) => {
    decode(vin);
  };

  return (
    <div className={styles.wrapper}>
      <h1>VIN DECODER</h1>
      <Form onDecode={handleDecode} />

      <DecodeHistory items={history} onSelect={decode} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && <DecodeResult message={data.Message} results={data.Results} />}
    </div>
  );
};

export default HomePage;
