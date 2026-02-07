import React, { useMemo, useState } from "react";
import styles from "./Form.module.css";

function normalizeVin(value: string) {
  return value.trim().toUpperCase();
}

function validateVin(vin: string) {
  if (!vin) return "VIN is required";
  if (vin.length > 17) return "VIN must be 17 characters max";
  if (vin.length !== 17) return "VIN must be exactly 17 characters";
  if (!/^[A-Z0-9]+$/.test(vin)) return "Only latin letters and digits allowed";
  if (/[IOQ]/.test(vin)) return "Letters I, O, Q are not allowed in VIN";
  return null;
}

type Props = {
  onDecode: (vin: string) => void;
};

const Form = ({ onDecode }: Props) => {
  const [vinInput, setVinInput] = useState("");
  const [touched, setTouched] = useState(false);

  const vin = useMemo(() => normalizeVin(vinInput), [vinInput]);
  const errorText = useMemo(
    () => (touched ? validateVin(vin) : null),
    [touched, vin],
  );

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);

    const err = validateVin(vin);
    if (err) return;

    onDecode(vin);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles["vin-form"]}>
      <div className={styles["vin-form__field"]}>
        <label className={styles["vin-form__label"]} htmlFor="vin">
          Enter VIN code
        </label>

        <input
          className={styles["vin-form__input"]}
          type="text"
          value={vinInput}
          onChange={(e) => {
            setVinInput(e.target.value);
            if (touched) setTouched(true);
          }}
          onBlur={() => setTouched(true)}
          maxLength={17}
          autoComplete="off"
          spellCheck={false}
          placeholder="Enter your VIN code"
        />

        {errorText && <p className={styles["vin-form__error"]}>{errorText}</p>}
      </div>

      <button className={styles["vin-form__button"]} type="submit">
        Decode my VIN
      </button>
    </form>
  );
};

export default Form;
