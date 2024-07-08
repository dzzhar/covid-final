import { useContext, useState } from "react";
import ImageForm from "../../assets/img/form.svg";
import Image from "../Image/Image";
import StyledForm from "./FormCovid.styled.js";
import Alert from "../Alert/Alert";
import Button from "../ui/Button/index.jsx";
import FormContext from "../../context/FormContext.jsx";

const FormCovid = () => {
  // menggunakan context untuk mengambil dan menetapkan data
  const { provincesData, setProvincesData } = useContext(FormContext);

  // ganti variabel biasa ke state variable
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");

  // membuat option status
  const statusOptions = [
    { value: "kasus", label: "Confirmed" },
    { value: "sembuh", label: "Recovered" },
    { value: "meninggal", label: "Death" },
    { value: "dirawat", label: "Treatment" },
  ];

  // cek jika input kosong
  const [isCityError, setIsCityError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isAmountError, setIsAmountError] = useState(false);

  // membuat function handle input
  const handleCity = (e) => {
    // console.log(e.target.value);
    setCity(e.target.value);

    // error hilang jika menginput
    setIsCityError(false);
  };

  const handleStatus = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);

    // error hilang jika menginput
    setIsStatusError(false);
  };

  const handleAmount = (e) => {
    // console.log(e.target.value);
    setAmount(e.target.value);

    // error hilang jika menginput
    setIsAmountError(false);
  };

  // membuat function handle submit
  const handleSubmit = (e) => {
    // cegah form di refresh
    e.preventDefault();

    // pengkondisian error
    if (city === "") {
      setIsCityError(true);
    } else if (status === "") {
      setIsStatusError(true);
    } else if (amount === "") {
      setIsAmountError(true);
    } else {
      // cari data kota yang ingin di-update
      const updatedCity =
        provincesData.find((provinces) => provinces.kota === city) ?? "";
      // console.log(updatedCity);

      // definisikan data yang ingin diganti
      updatedCity[status] = parseInt(updatedCity[status]) + parseInt(amount);
      setProvincesData([...provincesData]);

      // kosongkan input setelah disubmit
      setCity("");
      setStatus("");
      setAmount("");
    }
  };

  return (
    <StyledForm>
      <div>
        <section>
          <div className="form__left">
            <h1>Form Covid</h1>
            <Image url={ImageForm} />
          </div>

          <div className="form__right">
            <h1>Form Covid</h1>
            <form action="#">
              {/* province section */}
              <label htmlFor="provinsi">Province</label>
              <select id="provinsi" value={city} onChange={handleCity}>
                <option hidden>Select Province</option>
                {provincesData.map((province) => {
                  return (
                    <option key={province.kota} value={province.kota}>
                      {province.kota}
                    </option>
                  );
                })}
              </select>
              {/* jika isCityError true maka render alert */}
              {isCityError && <Alert>Province Required</Alert>}

              {/* status section */}
              <label htmlFor="status">Status</label>
              <select id="status" value={status} onChange={handleStatus}>
                <option hidden>Select Status</option>
                {statusOptions.map((status) => {
                  return (
                    <option value={status.value} key={status.label}>
                      {status.label}
                    </option>
                  );
                })}
              </select>
              {/* jika isStatusError true maka render alert */}
              {isStatusError && <Alert>Status Required</Alert>}

              {/* amount section */}
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                placeholder="Enter Amount"
                value={amount}
                onChange={handleAmount}
                min="1"
              />
              {/* jika isAmountError true maka render alert */}
              {isAmountError && <Alert>Amount Required</Alert>}

              <Button full onClick={handleSubmit}>
                Submit
              </Button>
            </form>
          </div>
        </section>
      </div>
    </StyledForm>
  );
};

export default FormCovid;
